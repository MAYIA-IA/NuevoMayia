import { useEffect, useRef } from "react";
import * as THREE from "three";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader.js";
import { clone } from "three/examples/jsm/utils/SkeletonUtils.js";

const ROBOT_SRC = "/assets/Robot.glb";

const R     = 0.58;
const CYL_H = 1.10;
const HALF  = CYL_H / 2;

// Dimensiones del modelo GLB en unidades locales (antes de scale)
const INNER_SCALE  = 0.36;
const MODEL_H      = 2.2;
const MODEL_R      = 0.65;
const ROBOT_H_HALF = (MODEL_H * INNER_SCALE) / 2;
const ROBOT_R_PAD  = MODEL_R * INNER_SCALE;

// Límites interiores — iguales para todos (misma escala)
const RMIN = -HALF - 0.30 + ROBOT_H_HALF;
const RMAX =  0.0  - ROBOT_H_HALF - 0.02;
const RXZ  = R     - ROBOT_R_PAD  - 0.02;

// ─────────────────────────────────────────────────────────────────────────────
//  TEXTURA DOMO SUPERIOR
// ─────────────────────────────────────────────────────────────────────────────
function buildCapTexture(): THREE.CanvasTexture {
  const S  = 512;
  const cv = document.createElement("canvas");
  cv.width = cv.height = S;
  const ctx = cv.getContext("2d")!;

  const bg = ctx.createRadialGradient(180, 130, 10, 256, 256, 320);
  bg.addColorStop(0.00, "#7fff50");
  bg.addColorStop(0.20, "#3ecf10");
  bg.addColorStop(0.55, "#217a08");
  bg.addColorStop(0.82, "#0f4a02");
  bg.addColorStop(1.00, "#062501");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, S, S);

  const drawRobot = (fillColor: string, sdx: number, sdy: number, sAlpha: number) => {
    ctx.save();
    ctx.translate(256, 256);
    ctx.scale(1.85, 1.85);
    ctx.shadowColor = `rgba(0,0,0,${sAlpha})`;
    ctx.shadowBlur = 12; ctx.shadowOffsetX = sdx; ctx.shadowOffsetY = sdy;
    ctx.fillStyle = fillColor; ctx.strokeStyle = fillColor;
    ctx.lineWidth = 5; ctx.lineCap = "round";
    ctx.beginPath(); ctx.moveTo(-13, -75); ctx.lineTo(-21, -98); ctx.stroke();
    ctx.beginPath(); ctx.moveTo( 13, -75); ctx.lineTo( 21, -98); ctx.stroke();
    ctx.beginPath(); ctx.arc(-21, -100, 6.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc( 21, -100, 6.5, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.roundRect(-32, -74, 64, 50, 10); ctx.fill();
    ctx.shadowBlur = 0;
    ctx.fillStyle = "rgba(150,255,100,0.28)";
    ctx.beginPath(); ctx.arc(-12, -53, 9, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc( 12, -53, 9, 0, Math.PI * 2); ctx.fill();
    ctx.fillStyle = fillColor; ctx.shadowBlur = 12;
    ctx.shadowOffsetX = sdx; ctx.shadowOffsetY = sdy;
    ctx.beginPath(); ctx.roundRect(-8, -24, 16, 10, 3); ctx.fill();
    ctx.beginPath(); ctx.roundRect(-38, -14, 76, 62, 12); ctx.fill();
    ctx.shadowBlur = 0; ctx.fillStyle = "rgba(0,0,0,0.28)";
    ctx.beginPath(); ctx.roundRect(-24, -4, 48, 40, 7); ctx.fill();
    ctx.fillStyle = fillColor; ctx.shadowBlur = 12;
    ctx.shadowOffsetX = sdx; ctx.shadowOffsetY = sdy;
    ctx.beginPath(); ctx.roundRect(-62, -10, 21, 46, 6); ctx.fill();
    ctx.beginPath(); ctx.roundRect( 41, -10, 21, 46, 6); ctx.fill();
    ctx.beginPath(); ctx.arc(-51, 40, 9, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.arc( 51, 40, 9, 0, Math.PI * 2); ctx.fill();
    ctx.beginPath(); ctx.roundRect(-32, 50, 24, 36, 6); ctx.fill();
    ctx.beginPath(); ctx.roundRect(  8, 50, 24, 36, 6); ctx.fill();
    ctx.beginPath(); ctx.roundRect(-36, 82, 30, 12, 4); ctx.fill();
    ctx.beginPath(); ctx.roundRect(  6, 82, 30, 12, 4); ctx.fill();
    ctx.restore();
  };

  drawRobot("rgba(0,20,0,0.70)",       5,  6, 0.00);
  drawRobot("#083800",                 3,  4, 0.55);
  drawRobot("rgba(80,200,30,0.18)",  -2, -2, 0.00);

  const shine = ctx.createRadialGradient(148, 88, 3, 170, 110, 150);
  shine.addColorStop(0,   "rgba(255,255,255,0.38)");
  shine.addColorStop(0.4, "rgba(255,255,255,0.10)");
  shine.addColorStop(1,   "rgba(255,255,255,0.00)");
  ctx.fillStyle = shine; ctx.fillRect(0, 0, S, S);

  return new THREE.CanvasTexture(cv);
}

// ─────────────────────────────────────────────────────────────────────────────
//  TEXTURA BANDA LATERAL
// ─────────────────────────────────────────────────────────────────────────────
function buildBandTexture(): THREE.CanvasTexture {
  const TW = 1024, TH = 256;
  const cv = document.createElement("canvas");
  cv.width = TW; cv.height = TH;
  const ctx = cv.getContext("2d")!;
  const grad = ctx.createLinearGradient(0, 0, 0, TH);
  grad.addColorStop(0,    "#3ecf10");
  grad.addColorStop(0.45, "#217a08");
  grad.addColorStop(1,    "#0f4a02");
  ctx.fillStyle = grad; ctx.fillRect(0, 0, TW, TH);
  const lsh = ctx.createLinearGradient(0, 0, 0, TH * 0.50);
  lsh.addColorStop(0, "rgba(255,255,255,0.18)");
  lsh.addColorStop(1, "rgba(255,255,255,0.00)");
  ctx.fillStyle = lsh; ctx.fillRect(0, 0, TW, TH);
  return new THREE.CanvasTexture(cv);
}

// ═════════════════════════════════════════════════════════════════════════════
export default function PildoraViewer() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    const W = el.clientWidth, H = el.clientHeight;

    // ── Renderer ─────────────────────────────────────────────────────────────
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(W, H);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    el.appendChild(renderer.domElement);

    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(40, W / H, 0.1, 100);
    camera.position.set(0, 0, 5.5);

    // ── Environment map ───────────────────────────────────────────────────────
    const pmrem = new THREE.PMREMGenerator(renderer);
    pmrem.compileEquirectangularShader();
    const envScene = new THREE.Scene();
    const eL1 = new THREE.PointLight(0x44ff44, 6, 10); eL1.position.set( 2,  3,  2); envScene.add(eL1);
    const eL2 = new THREE.PointLight(0x00ff88, 4, 10); eL2.position.set(-2, -1, -2); envScene.add(eL2);
    const eL3 = new THREE.PointLight(0xffffff, 3,  8); eL3.position.set( 0,  5,  0); envScene.add(eL3);
    const envTex = pmrem.fromScene(envScene).texture;
    scene.environment = envTex;
    pmrem.dispose();

    // ── Luces ─────────────────────────────────────────────────────────────────
    scene.add(new THREE.AmbientLight(0xffffff, 0.50));
    const key = new THREE.DirectionalLight(0xbbffbb, 3.2);
    key.position.set(2, 5, 4); key.castShadow = true; scene.add(key);
    const rim = new THREE.DirectionalLight(0x00ff66, 2.2);
    rim.position.set(-4, 0, -3); scene.add(rim);
    const spot = new THREE.SpotLight(0xffffff, 6.0, 14, Math.PI / 8, 0.35, 1);
    spot.position.set(0.8, 7, 3.5); scene.add(spot);
    const fill = new THREE.PointLight(0x66ffaa, 0.7, 16);
    fill.position.set(0, -3, 2); scene.add(fill);

    // ── Grupo principal ───────────────────────────────────────────────────────
    const pillGroup = new THREE.Group();
    scene.add(pillGroup);

    const capTex  = buildCapTexture();
    const bandTex = buildBandTexture();
    bandTex.wrapS = THREE.RepeatWrapping;

    const greenCapMat = new THREE.MeshPhysicalMaterial({
      map: capTex, roughness: 0.08, metalness: 0.04,
      clearcoat: 1.0, clearcoatRoughness: 0.03, envMapIntensity: 1.6,
    });
    const greenCylMat = new THREE.MeshPhysicalMaterial({
      map: bandTex, roughness: 0.08, metalness: 0.04,
      clearcoat: 1.0, clearcoatRoughness: 0.03, envMapIntensity: 1.6,
    });
    const diskMat = new THREE.MeshPhysicalMaterial({
      color: 0x186006, roughness: 0.18, metalness: 0.0,
      clearcoat: 0.5, envMapIntensity: 0.6,
    });
    const glassMat = new THREE.MeshPhysicalMaterial({
      color: 0xddfff0, transparent: true, opacity: 0.22,
      roughness: 0.02, metalness: 0.0,
      transmission: 0.90, thickness: 1.0,
      ior: 1.60, reflectivity: 1.0, envMapIntensity: 3.5,
      clearcoat: 1.0, clearcoatRoughness: 0.01,
      side: THREE.DoubleSide,
      attenuationColor: new THREE.Color(0x88ffcc),
      attenuationDistance: 2.5,
    });

    // ── Geometría ─────────────────────────────────────────────────────────────
    const topDome = new THREE.Mesh(
      new THREE.SphereGeometry(R, 64, 32, 0, Math.PI * 2, 0, Math.PI / 2), greenCapMat
    );
    topDome.position.y = HALF; pillGroup.add(topDome);

    const topCyl = new THREE.Mesh(
      new THREE.CylinderGeometry(R, R, HALF, 64, 1, true), greenCylMat
    );
    topCyl.position.y = HALF / 2; pillGroup.add(topCyl);

    const topDisk = new THREE.Mesh(new THREE.CircleGeometry(R, 64), diskMat);
    topDisk.rotation.x = -Math.PI / 2; topDisk.position.y = 0.001;
    pillGroup.add(topDisk);

    const botCyl = new THREE.Mesh(
      new THREE.CylinderGeometry(R, R, HALF, 64, 1, true), glassMat
    );
    botCyl.position.y = -HALF / 2; pillGroup.add(botCyl);

    const botDome = new THREE.Mesh(
      new THREE.SphereGeometry(R, 64, 32, 0, Math.PI * 2, Math.PI / 2, Math.PI / 2), glassMat
    );
    botDome.position.y = -HALF; pillGroup.add(botDome);

    const seam = new THREE.Mesh(
      new THREE.TorusGeometry(R, 0.013, 16, 128),
      new THREE.MeshStandardMaterial({ color: 0x062501, roughness: 0.20, metalness: 0.12 })
    );
    seam.rotation.x = Math.PI / 2;
    pillGroup.add(seam);

    const hlMat = new THREE.MeshBasicMaterial({
      color: 0xffffff, transparent: true, opacity: 0.46, depthWrite: false,
    });
    const highlight = new THREE.Mesh(new THREE.SphereGeometry(0.092, 32, 32), hlMat);
    highlight.position.set(-0.14, HALF + 0.30, R * 0.50); pillGroup.add(highlight);

    const hl2Mat = new THREE.MeshBasicMaterial({
      color: 0xaaffaa, transparent: true, opacity: 0.22, depthWrite: false,
    });
    const highlight2 = new THREE.Mesh(new THREE.SphereGeometry(0.040, 16, 16), hl2Mat);
    highlight2.position.set(0.22, HALF + 0.10, R * 0.58); pillGroup.add(highlight2);

    // ── Robots internos ───────────────────────────────────────────────────────
    const robotGroup = new THREE.Group();
    pillGroup.add(robotGroup);

    // ─────────────────────────────────────────────────────────────────────────
    //  Personalidad individual de cada robot
    //  Cada uno tiene su propio: gravedad, damping, sensibilidad al mouse,
    //  velocidad de rotación, frecuencia de ruido y "zona preferida" de deriva.
    // ─────────────────────────────────────────────────────────────────────────
    interface RobotPersonality {
      gravity:      number;   // qué tan fuerte lo jala hacia abajo
      damping:      number;   // qué tan rápido frena (0.93=lento, 0.98=muy suave)
      mouseSens:    number;   // cuánto le afecta el mouse
      noiseAmp:     number;   // amplitud del ruido browniano
      noiseFreq:    number;   // frecuencia del ruido
      rotSpeedZ:    number;   // velocidad de oscilación en Z
      rotSpeedX:    number;   // velocidad de oscilación en X
      rotAmpZ:      number;   // amplitud de oscilación en Z
      rotAmpX:      number;   // amplitud de oscilación en X
      driftX:       number;   // atractor suave en X (zona preferida)
      driftZ:       number;   // atractor suave en Z (zona preferida)
      driftStrength:number;   // qué tan fuerte lo jala hacia su zona
    }

    interface RobotData {
      mesh:        THREE.Group;
      vel:         THREE.Vector3;
      phase:       number;
      personality: RobotPersonality;
    }

    const robotData: RobotData[] = [];

    // 8 personalidades distintas — cada una con carácter propio
    const personalities: RobotPersonality[] = [
      // Robot 0 — "el pesado": mucha gravedad, poco amortiguado, no le importa el mouse
      { gravity: 0.0006,  damping: 0.93, mouseSens: 0.02, noiseAmp: 0.0003, noiseFreq: 1.1,
        rotSpeedZ: 0.5, rotSpeedX: 0.4, rotAmpZ: 0.18, rotAmpX: 0.12, driftX:  0.10, driftZ:  0.05, driftStrength: 0.0002 },
      // Robot 1 — "el flotador": casi sin gravedad, muy suave, flota lento
      { gravity: 0.00005, damping: 0.98, mouseSens: 0.04, noiseAmp: 0.0001, noiseFreq: 0.6,
        rotSpeedZ: 0.3, rotSpeedX: 0.25, rotAmpZ: 0.06, rotAmpX: 0.05, driftX: -0.12, driftZ:  0.08, driftStrength: 0.0001 },
      // Robot 2 — "el nervioso": mucho ruido, reacciona mucho al mouse, se agita
      { gravity: 0.0002,  damping: 0.94, mouseSens: 0.14, noiseAmp: 0.0008, noiseFreq: 2.5,
        rotSpeedZ: 1.2, rotSpeedX: 1.0, rotAmpZ: 0.20, rotAmpX: 0.16, driftX:  0.05, driftZ: -0.10, driftStrength: 0.0003 },
      // Robot 3 — "el dormido": casi nada de ruido, muy amortiguado, se queda quieto
      { gravity: 0.0001,  damping: 0.985,mouseSens: 0.01, noiseAmp: 0.00005,noiseFreq: 0.4,
        rotSpeedZ: 0.2, rotSpeedX: 0.18, rotAmpZ: 0.04, rotAmpX: 0.03, driftX: -0.08, driftZ: -0.08, driftStrength: 0.0004 },
      // Robot 4 — "el curioso": drift fuerte hacia el frente (z positivo), activo
      { gravity: 0.0003,  damping: 0.95, mouseSens: 0.08, noiseAmp: 0.0004, noiseFreq: 1.8,
        rotSpeedZ: 0.8, rotSpeedX: 0.7, rotAmpZ: 0.14, rotAmpX: 0.11, driftX:  0.00, driftZ:  0.15, driftStrength: 0.0006 },
      // Robot 5 — "el tímido": drift hacia el fondo (z negativo), muy poco mouse
      { gravity: 0.0002,  damping: 0.97, mouseSens: 0.02, noiseAmp: 0.0002, noiseFreq: 0.9,
        rotSpeedZ: 0.45,rotSpeedX: 0.38, rotAmpZ: 0.09, rotAmpX: 0.07, driftX:  0.00, driftZ: -0.14, driftStrength: 0.0005 },
      // Robot 6 — "el bailarín": oscilación amplia, mucho balanceo
      { gravity: 0.00015, damping: 0.96, mouseSens: 0.07, noiseAmp: 0.0006, noiseFreq: 3.0,
        rotSpeedZ: 1.8, rotSpeedX: 1.5, rotAmpZ: 0.28, rotAmpX: 0.22, driftX: -0.16, driftZ:  0.00, driftStrength: 0.0002 },
      // Robot 7 — "el estable": gravedad media, casi sin balanceo, se mueve lento y firme
      { gravity: 0.0004,  damping: 0.975,mouseSens: 0.05, noiseAmp: 0.0002, noiseFreq: 0.7,
        rotSpeedZ: 0.35,rotSpeedX: 0.30, rotAmpZ: 0.05, rotAmpX: 0.04, driftX:  0.16, driftZ:  0.00, driftStrength: 0.0003 },
    ];

    // Posiciones iniciales bien separadas dentro de la cápsula
    const initPositions: [number, number, number][] = [
      [ 0.00,  RMAX - 0.01,  0.08],   // techo centro
      [-0.22,  RMAX - 0.02,  0.00],   // techo izq
      [ 0.22,  RMAX - 0.02,  0.00],   // techo der
      [-0.20,  0.00,          0.10],   // medio izq
      [ 0.20,  0.00,          0.10],   // medio der
      [ 0.00,  0.00,         -0.12],   // medio centro fondo
      [-0.12,  RMIN + 0.01,  0.08],   // suelo izq
      [ 0.12,  RMIN + 0.01,  0.00],   // suelo der
    ];

    let orbitalRobot: THREE.Group | null = null;
    const ORB_A = 1.20, ORB_B = 0.55, ORB_TILT = 0.55, ORB_SPEED = 0.55, ORB_SCALE = 0.22;

    const gltfLoader = new GLTFLoader();
    gltfLoader.load(
      ROBOT_SRC,
      (gltf) => {
        const model = gltf.scene;
        model.traverse((child: THREE.Object3D) => {
          if (child instanceof THREE.Mesh) {
            const mat = child.material as THREE.Material & {
              emissive?: THREE.Color; emissiveIntensity?: number;
            };
            if (mat.emissive) mat.emissiveIntensity = 1.8;
          }
        });

        // 8 robots internos — cada uno con su personalidad
        personalities.forEach((p, i) => {
          const rg = clone(model) as THREE.Group;
          rg.scale.setScalar(INNER_SCALE);
          rg.position.set(...initPositions[i]);
          rg.rotation.z = (Math.random() - 0.5) * 0.8;
          robotGroup.add(rg);
          robotData.push({
            mesh:        rg,
            vel:         new THREE.Vector3(
              (Math.random() - 0.5) * 0.003,
              (Math.random() - 0.5) * 0.003,
              (Math.random() - 0.5) * 0.003
            ),
            phase:       Math.random() * Math.PI * 2,
            personality: p,
          });
        });

        // Robot orbital
        const orb = clone(model) as THREE.Group;
        orb.scale.setScalar(ORB_SCALE);
        scene.add(orb);
        orbitalRobot = orb;
      },
      undefined,
      (err: unknown) => console.error("Error cargando GLB:", err)
    );

    // ── Partículas ────────────────────────────────────────────────────────────
    const pGeo = new THREE.BufferGeometry();
    const pPos: number[] = [];
    for (let i = 0; i < 140; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.random() * Math.PI;
      const r     = 0.85 + Math.random() * 0.35;
      pPos.push(
        r * Math.sin(phi) * Math.cos(theta),
        r * Math.cos(phi) * 1.5,
        r * Math.sin(phi) * Math.sin(theta)
      );
    }
    pGeo.setAttribute("position", new THREE.Float32BufferAttribute(pPos, 3));
    const particles = new THREE.Points(
      pGeo,
      new THREE.PointsMaterial({ color: 0x44ff88, size: 0.020, transparent: true, opacity: 0.42 })
    );
    pillGroup.add(particles);

    // ── Interacción mouse ─────────────────────────────────────────────────────
    let mx = 0, my = 0, pmx = 0, pmy = 0, autoAngle = 0, lastMoveTime = 0;

    const onMouseMove = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mx = ((e.clientX - rect.left) / rect.width)  *  2 - 1;
      my = -((e.clientY - rect.top)  / rect.height) * 2 + 1;
      const dvx = mx - pmx, dvy = my - pmy;
      if (Math.hypot(dvx, dvy) > 0.004) {
        robotData.forEach((r) => {
          // Cada robot recibe el impulso escalado por su propia sensibilidad
          r.vel.x += dvx * r.personality.mouseSens;
          r.vel.y += dvy * r.personality.mouseSens;
          r.vel.z += (Math.random() - 0.5) * r.personality.mouseSens * 0.12;
        });
      }
      pmx = mx; pmy = my;
      lastMoveTime = Date.now();
    };
    el.addEventListener("mousemove", onMouseMove);

    // ── Loop ──────────────────────────────────────────────────────────────────
    const clock = new THREE.Clock();
    let animId: number;

    const animate = () => {
      animId = requestAnimationFrame(animate);
      const t    = clock.getElapsedTime();
      const idle = Date.now() - lastMoveTime > 180;

      if (idle) {
        autoAngle += 0.009;
        pillGroup.rotation.y  = autoAngle;
        pillGroup.rotation.x += (0 - pillGroup.rotation.x) * 0.04;
      } else {
        pillGroup.rotation.y += ( mx * 0.65 - pillGroup.rotation.y) * 0.09;
        pillGroup.rotation.x += (-my * 0.42 - pillGroup.rotation.x) * 0.09;
        autoAngle = pillGroup.rotation.y;
      }

      pillGroup.position.y = Math.sin(t * 0.75) * 0.07;
      particles.rotation.y = t * 0.15;

      highlight.scale.setScalar(0.88 + Math.sin(t * 2.0) * 0.14);
      hlMat.opacity  = 0.38 + Math.sin(t * 2.0) * 0.12;
      hl2Mat.opacity = 0.18 + Math.sin(t * 2.8 + 1.0) * 0.08;

      // ── Física individual por robot ───────────────────────────────────────
      robotData.forEach((r) => {
        const p = r.personality;

        // 1. Gravedad propia
        r.vel.y -= p.gravity;

        // 2. Damping propio (cada robot frena diferente)
        r.vel.multiplyScalar(p.damping);

        // 3. Ruido browniano propio (frecuencia y amplitud distintas)
        const nf = p.noiseFreq * t;
        r.vel.x += (Math.sin(nf * 1.3 + r.phase)       * 0.5 + Math.random() - 0.5) * p.noiseAmp;
        r.vel.y += (Math.sin(nf * 0.9 + r.phase + 1.0)  * 0.5 + Math.random() - 0.5) * p.noiseAmp;
        r.vel.z += (Math.sin(nf * 1.7 + r.phase + 2.0)  * 0.5 + Math.random() - 0.5) * p.noiseAmp;

        // 4. Atractor suave hacia su "zona preferida" — evita que se amontonen
        r.vel.x += (p.driftX - r.mesh.position.x) * p.driftStrength;
        r.vel.z += (p.driftZ - r.mesh.position.z) * p.driftStrength;

        r.mesh.position.add(r.vel);

        // 5. Colisión lateral (igual para todos)
        const h = Math.hypot(r.mesh.position.x, r.mesh.position.z);
        if (h > RXZ) {
          const n = new THREE.Vector3(r.mesh.position.x, 0, r.mesh.position.z).normalize();
          r.mesh.position.x = n.x * RXZ;
          r.mesh.position.z = n.z * RXZ;
          r.vel.x *= -0.30; r.vel.z *= -0.30;
        }

        // 6. Colisión suelo/techo
        if (r.mesh.position.y < RMIN) { r.mesh.position.y = RMIN; r.vel.y *= -0.30; }
        if (r.mesh.position.y > RMAX) { r.mesh.position.y = RMAX; r.vel.y *= -0.30; }

        // 7. Rotación orgánica con parámetros propios
        r.mesh.rotation.z = Math.sin(t * p.rotSpeedZ + r.phase) * p.rotAmpZ + r.vel.x * 4;
        r.mesh.rotation.x = Math.sin(t * p.rotSpeedX + r.phase) * p.rotAmpX + r.vel.y * 3;
      });

      // ── Robot orbital ─────────────────────────────────────────────────────
      if (orbitalRobot) {
        const angle = t * ORB_SPEED;
        const localX = ORB_A * Math.cos(angle);
        const localY = ORB_B * Math.sin(angle);
        const planeY = t * 0.08;
        const cosT = Math.cos(ORB_TILT), sinT = Math.sin(ORB_TILT);
        const cosP = Math.cos(planeY),    sinP = Math.sin(planeY);
        const x1 = localX, y1 = localY * cosT, z1 = localY * sinT;
        const wx =  x1 * cosP + z1 * sinP;
        const wy =  y1;
        const wz = -x1 * sinP + z1 * cosP;
        orbitalRobot.position.set(wx, wy + pillGroup.position.y, wz);

        const tangX = -ORB_A * Math.sin(angle);
        const tangY =  ORB_B * Math.cos(angle);
        const tx1 = tangX, ty1 = tangY * cosT, tz1 = tangY * sinT;
        const twx =  tx1 * cosP + tz1 * sinP;
        const twy =  ty1;
        const twz = -tx1 * sinP + tz1 * cosP;
        const tangent = new THREE.Vector3(twx, twy, twz).normalize();
        const mat4 = new THREE.Matrix4().lookAt(
          orbitalRobot.position,
          orbitalRobot.position.clone().add(tangent),
          new THREE.Vector3(0, 1, 0)
        );
        orbitalRobot.quaternion.slerp(new THREE.Quaternion().setFromRotationMatrix(mat4), 0.12);
        orbitalRobot.rotation.z += Math.sin(t * 2.5) * 0.012;
      }

      renderer.render(scene, camera);
    };
    animate();

    const onResize = () => {
      const w = el.clientWidth, h = el.clientHeight;
      camera.aspect = w / h; camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      el.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      envTex.dispose(); capTex.dispose(); bandTex.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} style={{ width: "100%", height: "100%", minHeight: 420 }} />;
}