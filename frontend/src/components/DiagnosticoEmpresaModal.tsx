import React, { useState, useEffect } from 'react';
import { 
  Activity, 
  Cloud, 
  Monitor, 
  ShieldCheck, 
  HardDriveDownload, 
  Sparkles, 
  Target, 
  TrendingUp, 
  Bot, 
  User, 
  ArrowLeft, 
  ArrowRight, 
  Send, 
  Check, 
  X, 
  ListChecks, 
  BarChart3, 
  ChevronRight,
  CircleUser
} from 'lucide-react';
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';

// --- CONFIGURACIÓN DE COLORES ---
const colores = {
  primario: "#1c4260",
  primarioOscuro: "#1c4260",
  secundario: "#F5F7FA",
  acento: "#F27405",
  peligro: "#EF4444",
  advertencia: "#F59E0B",
  exito: "#10B981",
  fondoPrincipal: "#FFFFFF",
  fondoSecundario: "#F8FAFB",
  fondoTerciario: "#E8EDF2",
  textoClaro: "#1A202C",
  textoMedio: "#4A5568",
  textoOscuro: "#718096",
  borde: "#CBD5E0",
  gradientePrimario: "linear-gradient(135deg, #008CAE 0%, #3BA5C9 100%)",
  sombra: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
  sombraMedia: "0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)",
  sombraGrande: "0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.05)"
};

// --- DATA ---
const cy = [
  { id: "CEO", label: "Dirección General", mensaje: "crecimiento, resiliencia, control, velocidad de decisión, ventaja estratégica." },
  { id: "CTO", label: "CTO / CIO", mensaje: "arquitectura, control, disponibilidad, interoperabilidad, seguridad, escalamiento." },
  { id: "CFO", label: "CFO", mensaje: "ROI, eficiencia operativa, mitigación de pérdidas, priorización de inversión, business case." },
  { id: "CISO", label: "CISO", mensaje: "visibilidad, priorización, protección, evidencia, gobierno de riesgo." },
  { id: "Operaciones", label: "Operaciones", mensaje: "disponibilidad, soporte, prevención, continuidad, capacidad de respuesta." },
  { id: "Innovacion", label: "Innovación / Transformación", mensaje: "IA aplicada, monetización de datos, automatización y nuevos modelos de negocio." },
  { id: "Gobierno", label: "Gobierno / Institución pública", mensaje: "soberanía del dato, cumplimiento, continuidad de servicios ciudadanos." }
];

const Ps = [
  { id: "proteger", label: "Proteger datos" },
  { id: "nube", label: "Migrar a nube" },
  { id: "continuidad", label: "Mejorar continuidad" },
  { id: "ciberseguridad", label: "Fortalecer ciberseguridad" },
  { id: "monitoreo", label: "Monitorear infraestructura" },
  { id: "ia", label: "Activar IA" },
  { id: "costos", label: "Reducir costos" },
  { id: "roi", label: "Generar ROI con datos" },
  { id: "crecimiento", label: "Preparar para crecimiento" }
];

const Xn = [
  {
    key: "industria",
    label: "¿En qué industria opera su empresa?",
    opciones: [
      { v: "finanzas", label: "Finanzas / Banca" },
      { v: "retail", label: "Retail / Consumo" },
      { v: "manufactura", label: "Manufactura" },
      { v: "salud", label: "Salud" },
      { v: "gobierno", label: "Gobierno" },
      { v: "otro", label: "Otro" }
    ]
  },
  {
    key: "sedes",
    label: "¿Cuántas sedes / ubicaciones opera?",
    opciones: [
      { v: "1", label: "Una sede" },
      { v: "2-5", label: "2 a 5 sedes" },
      { v: "6-20", label: "6 a 20 sedes" },
      { v: "20+", label: "Más de 20" }
    ]
  },
  {
    key: "residenciaDatos",
    label: "¿Dónde residen sus datos hoy?",
    opciones: [
      { v: "on-prem", label: "On-premise" },
      { v: "nube-publica", label: "Nube pública" },
      { v: "mixto", label: "Mixto" },
      { v: "no-se", label: "No estoy seguro" }
    ]
  },
  {
    key: "sistemasCriticos",
    label: "¿Cuenta con sistemas críticos en alta disponibilidad?",
    opciones: [
      { v: "si", label: "Sí, totalmente" },
      { v: "parcial", label: "Parcialmente" },
      { v: "no", label: "No" }
    ]
  },
  {
    key: "respaldosDRP",
    label: "¿Tiene respaldos y plan de recuperación (DRP)?",
    opciones: [
      { v: "si", label: "Sí, probado" },
      { v: "parcial", label: "Parcialmente" },
      { v: "no", label: "No" }
    ]
  },
  {
    key: "operacion247",
    label: "¿Requiere operación 24/7?",
    opciones: [
      { v: "si", label: "Sí" },
      { v: "no", label: "No" }
    ]
  },
  {
    key: "tipoNube",
    label: "¿Qué tipo de nube utiliza?",
    opciones: [
      { v: "publica", label: "Pública" },
      { v: "privada", label: "Privada" },
      { v: "hibrida", label: "Híbrida" },
      { v: "on-prem", label: "On-premise" },
      { v: "no-se", label: "No estoy seguro" }
    ]
  },
  {
    key: "mideRiesgosCiber",
    label: "¿Mide y monitorea sus riesgos de ciberseguridad?",
    opciones: [
      { v: "si", label: "Sí, con SOC" },
      { v: "parcial", label: "Parcialmente" },
      { v: "no", label: "No" }
    ]
  },
  {
    key: "proyectosIA",
    label: "¿Tiene proyectos de IA o analítica avanzada?",
    opciones: [
      { v: "si", label: "Sí, en producción" },
      { v: "evaluando", label: "Evaluando" },
      { v: "no", label: "No" }
    ]
  },
  {
    key: "datosOrganizados",
    label: "¿Sus datos están organizados para decisiones?",
    opciones: [
      { v: "si", label: "Sí" },
      { v: "parcial", label: "Parcialmente" },
      { v: "no", label: "No" }
    ]
  }
];

// --- HELPERS ---
const Pr = (respuestas: Record<string, string>, key: string, map: Record<string, number>) => {
  const val = respuestas[key];
  return val ? (map[val] !== undefined ? map[val] : 50) : 50;
};

const calculateKPIs = (respuestas: Record<string, string>, prioridad: string | null) => {
  const r = Pr(respuestas, "datosOrganizados", { si: 90, parcial: 60, no: 30 });
  const n = Pr(respuestas, "sistemasCriticos", { si: 85, parcial: 55, no: 25 });
  const l = Pr(respuestas, "respaldosDRP", { si: 90, parcial: 55, no: 20 });
  const u = Pr(respuestas, "operacion247", { si: 85, no: 40 });
  const s = Pr(respuestas, "mideRiesgosCiber", { si: 85, parcial: 55, no: 25 });
  const f = Pr(respuestas, "proyectosIA", { si: 90, evaluando: 60, no: 30 });
  const d = Pr(respuestas, "tipoNube", { publica: 70, privada: 75, hibrida: 85, "on-prem": 55, "no-se": 35 });

  const madurez = Math.round((r + d + s + f) / 4);
  const continuidad = Math.round((l + u + n) / 3);
  const valorDato = Math.round((r + f) / 2);
  const riesgo_ciber = Math.round((100 - s + 100 - l) / 2);
  const riesgo = riesgo_ciber < 35 ? "Bajo" : riesgo_ciber < 65 ? "Medio" : "Alto";
  const roi = Math.round(((madurez + valorDato + continuidad) / 3 - 50) / 2.8 + 10);

  let serviciosCount = 3;
  if (s < 60) serviciosCount++;
  if (l < 60) serviciosCount++;
  if (f < 60) serviciosCount++;
  if (d < 60) serviciosCount++;
  if (prioridad === "ia" || prioridad === "roi") serviciosCount++;
  serviciosCount = Math.min(serviciosCount, 8);

  return {
    madurez,
    riesgo,
    continuidad,
    valorDato,
    roi: Math.max(roi, 6),
    serviciosRecomendados: serviciosCount
  };
};

const calculateRecommendations = (respuestas: Record<string, string>) => {
  const list: string[] = [];
  if (Pr(respuestas, "respaldosDRP", { si: 90, parcial: 55, no: 20 }) < 70) {
    list.push("DRP y Backup gestionado");
  }
  if (Pr(respuestas, "mideRiesgosCiber", { si: 85, parcial: 55, no: 25 }) < 70) {
    list.push("SOC IA y Ciberseguridad");
  }
  if (Pr(respuestas, "tipoNube", { publica: 70, privada: 75, hibrida: 85, "on-prem": 55, "no-se": 35 }) < 75) {
    list.push("Nube FLAI / Arquitectura híbrida");
  }
  if (Pr(respuestas, "operacion247", { si: 85, no: 40 }) < 70) {
    list.push("NOC 24/7 y SLA");
  }
  if (Pr(respuestas, "datosOrganizados", { si: 90, parcial: 60, no: 30 }) < 70) {
    list.push("Gobierno de datos");
  }
  if (Pr(respuestas, "proyectosIA", { si: 90, evaluando: 60, no: 30 }) < 80) {
    list.push("AI Factory y agentes de IA");
  }
  if (list.length < 3) {
    list.push("Business Case ejecutivo");
  }
  return list;
};

// --- SUB-COMPONENTS ---

interface QrProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  color?: string;
  icon?: React.ReactNode;
  fullWidth?: boolean;
}

const Qr: React.FC<QrProps> = ({ label, onClick, color = colores.primario, icon, fullWidth }) => {
  const [hover, setHover] = useState(false);
  return (
    <button 
      onClick={onClick} 
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        padding: "12px 22px",
        borderRadius: "14px",
        border: "none",
        background: color === colores.primario ? colores.gradientePrimario : color,
        color: "#fff",
        fontSize: "13px",
        fontWeight: 700,
        cursor: "pointer",
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "8px",
        boxShadow: hover ? colores.sombraGrande : colores.sombraMedia,
        width: fullWidth ? "100%" : "auto",
        transform: hover ? "translateY(-2px)" : "translateY(0)",
        transition: "transform 0.2s ease, box-shadow 0.2s ease"
      }}
    >
      {icon}
      {label}
    </button>
  );
};

interface LaProps {
  numero: number;
  titulo: string;
  microcopy: string;
  icono: React.ReactNode;
  color?: string;
}

const La: React.FC<LaProps> = ({ numero, titulo, microcopy, icono, color = colores.primario }) => (
  <div style={{
    backgroundColor: colores.fondoSecundario,
    borderRadius: "20px",
    border: `1px solid ${colores.borde}`,
    padding: "24px",
    display: "flex",
    alignItems: "flex-start",
    gap: "16px",
    marginBottom: "20px"
  }}>
    <div style={{
      width: "56px",
      height: "56px",
      borderRadius: "16px",
      background: color === colores.primario ? colores.gradientePrimario : color,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0,
      position: "relative"
    }}>
      {icono}
      <span style={{
        position: "absolute",
        top: "-6px",
        right: "-6px",
        width: "24px",
        height: "24px",
        borderRadius: "50%",
        background: colores.fondoPrincipal,
        color: color,
        border: `2px solid ${color}`,
        fontSize: "11px",
        fontWeight: 800,
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}>{numero}</span>
    </div>
    <div style={{ flex: 1 }}>
      <h2 style={{ fontSize: "20px", fontWeight: 800, color: colores.textoClaro, margin: "0 0 6px 0", letterSpacing: "-0.3px", fontFamily: 'Outfit, sans-serif' }}>
        {titulo}
      </h2>
      <p style={{ fontSize: "13px", color: colores.textoMedio, margin: 0, lineHeight: 1.4, fontFamily: 'Outfit, sans-serif' }}>
        {microcopy}
      </p>
    </div>
  </div>
);

interface ZrProps {
  valor: number;
  max?: number;
  label: string;
  sublabel?: string;
  color?: string;
  unidad?: string;
  size?: number;
}

const Zr: React.FC<ZrProps> = ({ valor, max = 100, label, sublabel, color = colores.primario, unidad = "", size = 110 }) => {
  const f = Math.max(0, Math.min(100, (valor / max) * 100));
  const d = [{ name: "v", value: f }, { name: "r", value: 100 - f }];
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "14px 12px",
      backgroundColor: colores.fondoSecundario,
      border: `1px solid ${colores.borde}`,
      borderRadius: "16px",
      minWidth: "140px",
      flex: 1
    }}>
      <div style={{ width: size, height: size, position: "relative" }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={d}
              dataKey="value"
              innerRadius="72%"
              outerRadius="100%"
              startAngle={90}
              endAngle={-270}
              stroke="none"
              isAnimationActive={false}
            >
              <Cell fill={color} />
              <Cell fill={`${color}22`} />
            </Pie>
          </PieChart>
        </ResponsiveContainer>
        <div style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <span style={{ fontSize: "20px", fontWeight: 800, color: color, lineHeight: 1, fontFamily: 'Outfit, sans-serif' }}>
            {valor}
            <span style={{ fontSize: "11px" }}>{unidad}</span>
          </span>
          {sublabel && (
            <span style={{ fontSize: "9px", color: colores.textoMedio, marginTop: "2px", fontFamily: 'Outfit, sans-serif' }}>
              {sublabel}
            </span>
          )}
        </div>
      </div>
      <div style={{
        fontSize: "11px",
        fontWeight: 700,
        color: colores.textoClaro,
        marginTop: "8px",
        textAlign: "center",
        textTransform: "uppercase",
        letterSpacing: "0.4px",
        fontFamily: 'Outfit, sans-serif'
      }}>
        {label}
      </div>
    </div>
  );
};

interface JeProps {
  valor: string | number;
  label: string;
  color?: string;
}

const Je: React.FC<JeProps> = ({ valor, label, color = colores.primario }) => (
  <div style={{
    padding: "14px 16px",
    borderRadius: "16px",
    backgroundColor: `${color}10`,
    border: `1px solid ${color}30`,
    minWidth: "140px",
    flex: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  }}>
    <div style={{ fontSize: "22px", fontWeight: 800, color: color, fontFamily: 'Outfit, sans-serif' }}>
      {valor}
    </div>
    <div style={{
      fontSize: "11px",
      fontWeight: 700,
      color: colores.textoClaro,
      marginTop: "6px",
      textAlign: "center",
      textTransform: "uppercase",
      letterSpacing: "0.4px",
      fontFamily: 'Outfit, sans-serif'
    }}>
      {label}
    </div>
  </div>
);

interface AaProps {
  agentes: Array<{ nombre: string; rol: string; color?: string }>;
  titulo?: string;
}

const Aa: React.FC<AaProps> = ({ agentes, titulo = "Agentes IA involucrados" }) => (
  <div style={{
    backgroundColor: colores.fondoSecundario,
    borderRadius: "20px",
    border: `1px solid ${colores.borde}`,
    padding: "20px",
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between'
  }}>
    <h3 style={{
      fontSize: "14px",
      fontWeight: 700,
      color: colores.textoClaro,
      margin: "0 0 12px 0",
      display: "flex",
      alignItems: "center",
      gap: "8px",
      fontFamily: 'Outfit, sans-serif'
    }}>
      <Bot size={16} color={colores.primario} />
      {titulo}
    </h3>
    <div style={{ display: "flex", flexDirection: "column", gap: "8px", flex: 1, justifyContent: 'center' }}>
      {agentes.map(r => (
        <div key={r.nombre} style={{
          display: "flex",
          alignItems: "center",
          gap: "12px",
          padding: "12px",
          backgroundColor: colores.fondoTerciario,
          borderRadius: "12px"
        }}>
          <div style={{
            width: "36px",
            height: "36px",
            borderRadius: "10px",
            backgroundColor: r.color || colores.primario,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            flexShrink: 0
          }}>
            <Bot size={18} />
          </div>
          <div style={{ flex: 1 }}>
            <div style={{ fontSize: "12px", fontWeight: 700, color: colores.textoClaro, fontFamily: 'Outfit, sans-serif' }}>
              {r.nombre}
            </div>
            <div style={{ fontSize: "10px", color: colores.textoMedio, fontFamily: 'Outfit, sans-serif' }}>
              {r.rol}
            </div>
          </div>
          {/* Pulsating green active dot */}
          <div style={{ display: "flex", alignItems: "center" }}>
            <span style={{
              width: "8px",
              height: "8px",
              borderRadius: "50%",
              backgroundColor: colores.exito,
              boxShadow: `0 0 8px ${colores.exito}`,
              display: "inline-block"
            }}></span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

// --- LEAD SUCCESS POPUP ---
interface DXProps {
  open: boolean;
  titulo: string;
  mensaje: string;
  onClose: () => void;
  resumen?: React.ReactNode;
}

const DX: React.FC<DXProps> = ({ open, titulo, mensaje, onClose, resumen }) => {
  if (!open) return null;
  return (
    <div 
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,0.55)",
        zIndex: 9999,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "20px",
        backdropFilter: "blur(4px)"
      }}
    >
      <div 
        onClick={u => u.stopPropagation()}
        style={{
          background: colores.fondoPrincipal,
          borderRadius: "24px",
          padding: "32px",
          maxWidth: "480px",
          width: "100%",
          boxShadow: colores.sombraGrande,
          border: `1px solid ${colores.borde}`,
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "16px",
          animation: "scaleIn 0.3s ease-out"
        }}
      >
        <div style={{
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          background: `rgba(16, 185, 129, 0.1)`,
          color: colores.exito,
          display: "flex",
          alignItems: "center",
          justifyContent: "center"
        }}>
          <Check size={32} />
        </div>
        <h3 style={{ fontSize: "20px", fontWeight: 800, color: colores.textoClaro, margin: 0, fontFamily: 'Outfit, sans-serif' }}>
          {titulo}
        </h3>
        <p style={{ fontSize: "14px", color: colores.textoMedio, margin: 0, lineHeight: 1.5, fontFamily: 'Outfit, sans-serif' }}>
          {mensaje}
        </p>
        
        {resumen}

        <button 
          onClick={onClose}
          style={{
            padding: "10px 24px",
            background: colores.gradientePrimario,
            color: "#fff",
            border: "none",
            borderRadius: "12px",
            fontSize: "13px",
            fontWeight: 700,
            cursor: "pointer",
            marginTop: "8px",
            width: "100%",
            boxShadow: colores.sombraMedia
          }}
        >
          Aceptar
        </button>
        <style>{`
          @keyframes scaleIn {
            0% { transform: scale(0.9); opacity: 0; }
            100% { transform: scale(1); opacity: 1; }
          }
        `}</style>
      </div>
    </div>
  );
};

// --- MAIN COMPONENT ---
interface DiagnosticoEmpresaModalProps {
  onClose?: () => void;
}

export default function DiagnosticoEmpresaModal({ onClose }: DiagnosticoEmpresaModalProps) {
  // Wizard states
  const [activeView, setActiveView] = useState<"dashboard" | "wizard">("dashboard");
  const [wizardStep, setWizardStep] = useState<"perfil" | "prioridad" | "preguntas" | "resultado" | "lead">("perfil");
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Diagnostic states
  const [selectedPerfil, setSelectedPerfil] = useState<string | null>(null);
  const [selectedPrioridad, setSelectedPrioridad] = useState<string | null>(null);
  const [respuestas, setRespuestas] = useState<Record<string, string>>({});
  const [leadForm, setLeadForm] = useState({
    nombre: "",
    empresa: "",
    cargo: "",
    correo: "",
    telefono: "",
    industria: "",
    tamanoEmpresa: "",
    prioridad: "",
    comentarios: ""
  });
  const [leadSummary, setLeadSummary] = useState<any>(null);

  // Monitor screen resize
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 1024);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Update lead form dynamically when answers update
  useEffect(() => {
    const activePriorityObj = Ps.find(p => p.id === selectedPrioridad);
    setLeadForm(prev => ({
      ...prev,
      industria: respuestas.industria ? (Xn[0].opciones.find(o => o.v === respuestas.industria)?.label || respuestas.industria) : prev.industria,
      prioridad: activePriorityObj ? activePriorityObj.label : prev.prioridad
    }));
  }, [respuestas.industria, selectedPrioridad]);

  // Calculations
  const kpis = calculateKPIs(respuestas, selectedPrioridad);
  const recomendaciones = calculateRecommendations(respuestas);

  const handleSetRespuesta = (key: string, value: string) => {
    setRespuestas(prev => ({ ...prev, [key]: value }));
  };

  const handleNextStep = () => {
    if (currentQuestionIndex < Xn.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setWizardStep("resultado");
    }
  };

  const handlePrevStep = () => {
    if (wizardStep === "prioridad") {
      setWizardStep("perfil");
    } else if (wizardStep === "preguntas") {
      if (currentQuestionIndex === 0) {
        setWizardStep("prioridad");
      } else {
        setCurrentQuestionIndex(prev => prev - 1);
      }
    } else if (wizardStep === "resultado") {
      setWizardStep("preguntas");
      setCurrentQuestionIndex(Xn.length - 1);
    } else if (wizardStep === "lead") {
      setWizardStep("resultado");
    }
  };

  const handleLeadSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLeadSummary({ ...leadForm });
    setShowSuccessPopup(true);
  };

  const hasAnswers = Object.keys(respuestas).length > 0;

  // KPIs / dimension scores for progress bars
  const dimensionScores = [
    { label: "Infraestructura", valor: kpis.continuidad },
    { label: "Nube / IaaS", valor: kpis.madurez },
    { label: "Continuidad", valor: kpis.continuidad },
    { label: "Ciberseguridad", valor: 100 - (kpis.riesgo === "Alto" ? 80 : kpis.riesgo === "Medio" ? 55 : 30) },
    { label: "Datos / inteligencia", valor: kpis.valorDato },
    { label: "IA", valor: kpis.valorDato },
    { label: "Gobierno de datos", valor: kpis.madurez },
    { label: "ROI potencial", valor: Math.min(100, Math.max(0, 50 + kpis.roi * 2)) }
  ];

  // Steps indicators
  const steps = [
    { id: "perfil", label: "Perfil", icon: <User size={14} /> },
    { id: "prioridad", label: "Prioridad", icon: <Target size={14} /> },
    { id: "preguntas", label: "Diagnóstico", icon: <ListChecks size={14} /> },
    { id: "resultado", label: "Resultado", icon: <BarChart3 size={14} /> },
    { id: "lead", label: "Contacto", icon: <Send size={14} /> }
  ];
  const currentStepIndex = steps.findIndex(s => s.id === wizardStep);

  return (
    <div style={{ 
      background: colores.fondoPrincipal, 
      fontFamily: 'Outfit, sans-serif',
      borderRadius: '24px',
      overflow: 'hidden',
      position: 'relative',
      maxWidth: '1200px',
      margin: '0 auto',
      width: '100%',
      maxHeight: '85vh',
      display: 'flex',
      flexDirection: 'column'
    }}>
      {/* Top Floating Close Button */}
      {onClose && (
        <button 
          onClick={onClose}
          style={{
            position: 'absolute',
            top: 20,
            right: 20,
            background: 'rgba(0,0,0,0.05)',
            border: 'none',
            borderRadius: '50%',
            width: 32,
            height: 32,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            zIndex: 10,
            color: colores.textoMedio,
            transition: 'background 0.2s'
          }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(0,0,0,0.1)'}
          onMouseLeave={e => e.currentTarget.style.background = 'rgba(0,0,0,0.05)'}
        >
          <X size={18} />
        </button>
      )}

      {/* Scrollable Modal Body */}
      <div style={{ overflowY: 'auto', padding: isMobile ? '24px 16px' : '40px', flex: 1 }}>
        
        {/* 1. DASHBOARD VIEW (RX) */}
        {activeView === "dashboard" && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Header section (la) */}
            <La 
              numero={1} 
              titulo="Diagnóstico Inteligente de Empresa" 
              microcopy="Conozca su punto de partida digital. Una evaluación preliminar por dimensiones para identificar oportunidades."
              icono={<Activity size={26} color="#fff" />}
            />

            {/* Content row (Left: Questions list, Right: Dimension scores) */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: "20px" }}>
              
              {/* Left Box: Preguntas brief checklist */}
              <div style={{
                backgroundColor: colores.fondoSecundario,
                borderRadius: "20px",
                border: `1px solid ${colores.borde}`,
                padding: "24px",
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}>
                <div>
                  <h3 style={{ fontSize: "15px", fontWeight: 800, color: colores.textoClaro, margin: "0 0 16px 0", fontFamily: 'Outfit, sans-serif' }}>
                    Preguntas del diagnóstico breve
                  </h3>
                  <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {[
                      "Industria y tamaño de su empresa",
                      "Sedes y operación geográfica",
                      "¿Dónde residen sus datos hoy?",
                      "Sistemas críticos / alta disponibilidad",
                      "Respaldos y DRP en operación",
                      "Operación 24/7 requerida",
                      "Tipo de nube actual (pública, privada, híbrida)",
                      "¿Mide riesgos de ciberseguridad?",
                      "Proyectos de IA / analítica avanzada",
                      "¿Datos organizados para decisiones?"
                    ].map((f, d) => {
                      const questionKey = Xn[d]?.key;
                      const isQuestionAnswered = respuestas[questionKey] !== undefined;
                      return (
                        <li key={f} style={{
                          padding: "10px 14px",
                          backgroundColor: colores.fondoTerciario,
                          borderRadius: "12px",
                          fontSize: "13px",
                          color: colores.textoClaro,
                          borderLeft: `4px solid ${isQuestionAnswered ? colores.exito : colores.primario}`,
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'space-between',
                          fontFamily: 'Outfit, sans-serif'
                        }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                            <strong style={{ color: isQuestionAnswered ? colores.exito : colores.primario }}>
                              0{d + 1}
                            </strong>
                            <span>{f}</span>
                          </div>
                          {isQuestionAnswered && <Check size={16} color={colores.exito} />}
                        </li>
                      );
                    })}
                  </ul>
                </div>
                
                {/* Generar diagnótico button */}
                <div style={{ marginTop: "24px", display: "flex", flexWrap: "wrap", gap: "12px", alignItems: "center" }}>
                  <Qr 
                    label={hasAnswers ? "Editar respuestas de diagnóstico" : "Realiza tu diagnóstico preliminar"} 
                    onClick={() => {
                      setActiveView("wizard");
                      setWizardStep("perfil");
                      setCurrentQuestionIndex(0);
                    }}
                    icon={<ListChecks size={16} />}
                  />
                  {hasAnswers && (
                    <span style={{ fontSize: "12px", color: colores.textoMedio, fontWeight: 500, fontFamily: 'Outfit, sans-serif' }}>
                      · Respuestas previas guardadas
                    </span>
                  )}
                </div>
              </div>

              {/* Right Box: Nivel preliminar por dimensión progress bars */}
              <div style={{
                backgroundColor: colores.fondoSecundario,
                borderRadius: "20px",
                border: `1px solid ${colores.borde}`,
                padding: "24px"
              }}>
                <h3 style={{ fontSize: "15px", fontWeight: 800, color: colores.textoClaro, margin: "0 0 16px 0", fontFamily: 'Outfit, sans-serif' }}>
                  Nivel preliminar por dimensión
                </h3>
                <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
                  {dimensionScores.map(f => (
                    <div key={f.label} style={{ display: "flex", flexDirection: "column" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: "12px", color: colores.textoMedio, marginBottom: "4px", fontWeight: 600, fontFamily: 'Outfit, sans-serif' }}>
                        <span>{f.label}</span>
                        <strong style={{ color: colores.textoClaro }}>
                          {Math.min(100, Math.max(0, Math.round(f.valor)))}/100
                        </strong>
                      </div>
                      <div style={{ height: "8px", borderRadius: "4px", backgroundColor: colores.fondoTerciario, overflow: "hidden" }}>
                        <div style={{ 
                          height: "100%", 
                          width: `${Math.min(100, Math.max(0, f.valor))}%`, 
                          background: colores.gradientePrimario, 
                          borderRadius: "4px",
                          transition: 'width 0.4s ease-out'
                        }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Row (Left: 3 Circular Gauges, Right: Agent cards) */}
            <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1.4fr 1fr", gap: "20px" }}>
              <div style={{
                display: "flex",
                gap: "12px",
                flexWrap: isMobile ? "wrap" : "nowrap",
                justifyContent: "space-around",
                backgroundColor: colores.fondoSecundario,
                borderRadius: "20px",
                border: `1px solid ${colores.borde}`,
                padding: "24px"
              }}>
                <Zr valor={kpis.madurez} label="Madurez digital" color={colores.primario} />
                <Zr valor={kpis.continuidad} label="Continuidad" color={colores.exito} />
                <Zr valor={kpis.valorDato} label="Valor del dato" color="#8B5CF6" />
              </div>

              <Aa agentes={[
                { nombre: "Diagnóstico Estratégico", rol: "Coordinador del proceso", color: colores.primario },
                { nombre: "Comercial Consultivo", rol: "Interpreta resultados", color: colores.acento }
              ]} />
            </div>

          </div>
        )}

        {/* 2. WIZARD STEP-BY-STEP (kX) */}
        {activeView === "wizard" && (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Header Back Button */}
            <button 
              onClick={() => setActiveView("dashboard")}
              style={{
                background: "transparent",
                border: `1px solid ${colores.borde}`,
                borderRadius: "10px",
                padding: "8px 14px",
                cursor: "pointer",
                fontSize: "12px",
                color: colores.textoMedio,
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                alignSelf: "flex-start",
                fontFamily: 'Outfit, sans-serif',
                fontWeight: 600
              }}
            >
              <ArrowLeft size={14} /> Volver al Resumen
            </button>

            {/* Progress indicators bar */}
            <div style={{
              backgroundColor: colores.fondoSecundario,
              borderRadius: "20px",
              border: `1px solid ${colores.borde}`,
              padding: "18px",
              display: "flex",
              gap: "8px",
              alignItems: "center",
              overflowX: "auto"
            }}>
              {steps.map((st, idx) => {
                const isActive = idx === currentStepIndex;
                const isCompleted = idx < currentStepIndex;
                return (
                  <React.Fragment key={st.id}>
                    <div style={{
                      display: "flex",
                      alignItems: "center",
                      gap: "8px",
                      padding: "8px 14px",
                      borderRadius: "999px",
                      backgroundColor: isActive ? colores.primario : isCompleted ? `${colores.exito}18` : colores.fondoTerciario,
                      color: isActive ? "#fff" : isCompleted ? colores.exito : colores.textoMedio,
                      fontSize: "12px",
                      fontWeight: 700,
                      whiteSpace: "nowrap",
                      fontFamily: 'Outfit, sans-serif'
                    }}>
                      {isCompleted ? <Check size={14} /> : st.icon}
                      {st.label}
                    </div>
                    {idx < steps.length - 1 && (
                      <div style={{ width: "14px", height: "1px", backgroundColor: colores.borde, flexShrink: 0 }} />
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Dynamic Step Panels */}
            <div style={{
              backgroundColor: colores.fondoSecundario,
              borderRadius: "20px",
              border: `1px solid ${colores.borde}`,
              padding: isMobile ? "20px" : "32px",
              minHeight: "420px",
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              
              {/* STEP 1: PERFIL */}
              {wizardStep === "perfil" && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                  <div>
                    <h2 style={{ fontSize: "22px", fontWeight: 800, color: colores.textoClaro, margin: "0 0 6px 0", letterSpacing: "-0.3px", fontFamily: 'Outfit, sans-serif' }}>
                      ¿Qué rol mejor describe su posición?
                    </h2>
                    <p style={{ fontSize: "13px", color: colores.textoMedio, margin: 0, fontFamily: 'Outfit, sans-serif' }}>
                      Adaptamos el lenguaje y la recomendación a su perfil ejecutivo.
                    </p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "10px", flex: 1, alignContent: 'start' }}>
                    {cy.map(role => (
                      <button 
                        key={role.id}
                        onClick={() => {
                          setSelectedPerfil(role.id);
                          setWizardStep("prioridad");
                        }}
                        style={{
                          textAlign: "left",
                          padding: "14px 16px",
                          borderRadius: "14px",
                          border: `1px solid ${selectedPerfil === role.id ? colores.primario : colores.borde}`,
                          background: selectedPerfil === role.id ? `${colores.primario}10` : colores.fondoPrincipal,
                          cursor: "pointer",
                          transition: "all 0.2s"
                        }}
                      >
                        <p style={{ fontSize: "14px", fontWeight: 700, color: colores.textoClaro, margin: 0, fontFamily: 'Outfit, sans-serif' }}>
                          {role.label}
                        </p>
                        <p style={{ fontSize: "11px", color: colores.textoMedio, margin: "4px 0 0 0", fontFamily: 'Outfit, sans-serif', lineHeight: 1.4 }}>
                          {role.mensaje}
                        </p>
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* STEP 2: PRIORIDAD */}
              {wizardStep === "prioridad" && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                  <div>
                    <h2 style={{ fontSize: "22px", fontWeight: 800, color: colores.textoClaro, margin: "0 0 6px 0", letterSpacing: "-0.3px", fontFamily: 'Outfit, sans-serif' }}>
                      ¿Cuál es su prioridad estratégica?
                    </h2>
                    <p style={{ fontSize: "13px", color: colores.textoMedio, margin: 0, fontFamily: 'Outfit, sans-serif' }}>
                      Elija el objetivo que más impacto tendría para su empresa hoy.
                    </p>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(3, 1fr)", gap: "10px", flex: 1, alignContent: 'start' }}>
                    {Ps.map(prio => (
                      <button 
                        key={prio.id}
                        onClick={() => {
                          setSelectedPrioridad(prio.id);
                          setWizardStep("preguntas");
                          setCurrentQuestionIndex(0);
                        }}
                        style={{
                          padding: "14px",
                          borderRadius: "14px",
                          border: `1px solid ${selectedPrioridad === prio.id ? colores.primario : colores.borde}`,
                          background: selectedPrioridad === prio.id ? `${colores.primario}10` : colores.fondoPrincipal,
                          cursor: "pointer",
                          fontSize: "13px",
                          fontWeight: 600,
                          color: colores.textoClaro,
                          textAlign: "center",
                          fontFamily: 'Outfit, sans-serif',
                          transition: 'all 0.2s'
                        }}
                      >
                        {prio.label}
                      </button>
                    ))}
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", gap: "10px" }}>
                    <button 
                      onClick={handlePrevStep}
                      style={{
                        padding: "11px 18px",
                        borderRadius: "12px",
                        border: `1px solid ${colores.borde}`,
                        background: "transparent",
                        color: colores.textoMedio,
                        fontSize: "13px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: 'Outfit, sans-serif'
                      }}
                    >
                      <ArrowLeft size={14} /> Anterior
                    </button>
                  </div>
                </div>
              )}

              {/* STEP 3: PREGUNTAS WIZARD */}
              {wizardStep === "preguntas" && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                  
                  {/* Step status and percentage indicator */}
                  <div>
                    <div style={{ display: "flex", justifySelf: "stretch", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
                      <span style={{ fontSize: "12px", color: colores.textoMedio, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.4px", fontFamily: 'Outfit, sans-serif' }}>
                        Pregunta {currentQuestionIndex + 1} de {Xn.length}
                      </span>
                      <span style={{ fontSize: "12px", color: colores.primario, fontWeight: 700, fontFamily: 'Outfit, sans-serif' }}>
                        {Math.round(((currentQuestionIndex + 1) / Xn.length) * 100)}%
                      </span>
                    </div>
                    {/* Progress bar line */}
                    <div style={{ height: "6px", borderRadius: "3px", backgroundColor: colores.fondoTerciario, overflow: "hidden" }}>
                      <div style={{ 
                        height: "100%", 
                        width: `${((currentQuestionIndex + 1) / Xn.length) * 100}%`, 
                        background: colores.gradientePrimario, 
                        transition: "width 0.3s ease" 
                      }} />
                    </div>
                  </div>

                  {/* Question Title */}
                  <h2 style={{ fontSize: "20px", fontWeight: 800, color: colores.textoClaro, margin: 0, letterSpacing: "-0.3px", fontFamily: 'Outfit, sans-serif' }}>
                    {Xn[currentQuestionIndex].label}
                  </h2>

                  {/* Options List */}
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "repeat(2, 1fr)", gap: "10px", flex: 1, alignContent: 'start' }}>
                    {Xn[currentQuestionIndex].opciones.map(opt => {
                      const isSelected = respuestas[Xn[currentQuestionIndex].key] === opt.v;
                      return (
                        <button 
                          key={opt.v}
                          onClick={() => {
                            handleSetRespuesta(Xn[currentQuestionIndex].key, opt.v);
                          }}
                          style={{
                            padding: "12px 16px",
                            borderRadius: "12px",
                            border: `1px solid ${isSelected ? colores.primario : colores.borde}`,
                            background: isSelected ? `${colores.primario}10` : colores.fondoPrincipal,
                            color: colores.textoClaro,
                            fontSize: "13px",
                            fontWeight: 600,
                            cursor: "pointer",
                            textAlign: "left",
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            fontFamily: 'Outfit, sans-serif',
                            transition: 'all 0.2s'
                          }}
                        >
                          {opt.label}
                          {isSelected && <Check size={16} color={colores.primario} />}
                        </button>
                      );
                    })}
                  </div>

                  {/* Back/Next buttons */}
                  <div style={{ display: "flex", justifyContent: "space-between", gap: "10px", marginTop: 'auto' }}>
                    <button 
                      onClick={handlePrevStep}
                      style={{
                        padding: "11px 18px",
                        borderRadius: "12px",
                        border: `1px solid ${colores.borde}`,
                        background: "transparent",
                        color: colores.textoMedio,
                        fontSize: "13px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: 'Outfit, sans-serif'
                      }}
                    >
                      <ArrowLeft size={14} /> Anterior
                    </button>
                    
                    {respuestas[Xn[currentQuestionIndex].key] && (
                      <Qr 
                        label={currentQuestionIndex === Xn.length - 1 ? "Ver resultado" : "Siguiente"} 
                        onClick={handleNextStep}
                        icon={<ArrowRight size={14} />}
                      />
                    )}
                  </div>
                </div>
              )}

              {/* STEP 4: RESULTADO PRELIMINAR */}
              {wizardStep === "resultado" && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                  <div>
                    <h2 style={{ fontSize: "22px", fontWeight: 800, color: colores.textoClaro, margin: "0 0 6px 0", letterSpacing: "-0.3px", fontFamily: 'Outfit, sans-serif' }}>
                      Su Ruta EdgeNet Recomendada
                    </h2>
                    <p style={{ fontSize: "13px", color: colores.textoMedio, margin: 0, fontFamily: 'Outfit, sans-serif' }}>
                      {selectedPerfil 
                        ? `Como ${cy.find(c => c.id === selectedPerfil)?.label}, lo importante es: ${cy.find(c => c.id === selectedPerfil)?.mensaje}` 
                        : "Resultado preliminar basado en sus respuestas."
                      }
                    </p>
                  </div>

                  {/* Mini KPIs scores */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "12px", width: '100%' }}>
                    <Zr valor={kpis.madurez} label="Madurez digital" color={colores.primario} size={80} />
                    <Je valor={kpis.riesgo} label="Riesgo operativo" color={kpis.riesgo === "Bajo" ? colores.exito : kpis.riesgo === "Medio" ? colores.advertencia : colores.peligro} />
                    <Zr valor={kpis.continuidad} label="Continuidad" color={colores.exito} size={80} />
                    <Zr valor={kpis.valorDato} label="Valor del dato" color="#8B5CF6" size={80} />
                    <Je valor={`+${kpis.roi}%`} label="ROI preliminar" color={colores.acento} />
                  </div>

                  {/* Recommended list grid */}
                  <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "14px" }}>
                    {/* Left box: list of services */}
                    <div style={{ backgroundColor: colores.fondoPrincipal, border: `1px solid ${colores.borde}`, borderRadius: "14px", padding: "16px" }}>
                      <h4 style={{ fontSize: "13px", fontWeight: 700, color: colores.textoClaro, margin: "0 0 10px 0", fontFamily: 'Outfit, sans-serif' }}>
                        Servicios recomendados
                      </h4>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                        {recomendaciones.map(j => (
                          <li key={j} style={{
                            padding: "8px 10px",
                            backgroundColor: colores.fondoTerciario,
                            borderRadius: "8px",
                            fontSize: "12px",
                            color: colores.textoClaro,
                            borderLeft: `3px solid ${colores.primario}`,
                            fontFamily: 'Outfit, sans-serif'
                          }}>
                            {j}
                          </li>
                        ))}
                      </ul>
                    </div>
                    {/* Right box: list of executive benefits */}
                    <div style={{ backgroundColor: colores.fondoPrincipal, border: `1px solid ${colores.borde}`, borderRadius: "14px", padding: "16px" }}>
                      <h4 style={{ fontSize: "13px", fontWeight: 700, color: colores.textoClaro, margin: "0 0 10px 0", fontFamily: 'Outfit, sans-serif' }}>
                        Beneficios ejecutivos
                      </h4>
                      <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "6px" }}>
                        {[
                          "Visibilidad ejecutiva de su infraestructura",
                          "Reducción de riesgos críticos",
                          "Continuidad operativa garantizada",
                          "Decisiones con datos confiables",
                          `Foco en: ${Ps.find(p => p.id === selectedPrioridad)?.label || "su prioridad estratégica"}`
                        ].map(j => (
                          <li key={j} style={{
                            padding: "8px 10px",
                            backgroundColor: colores.fondoTerciario,
                            borderRadius: "8px",
                            fontSize: "12px",
                            color: colores.textoClaro,
                            borderLeft: `3px solid ${colores.exito}`,
                            fontFamily: 'Outfit, sans-serif'
                          }}>
                            {j}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Actions buttons */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-between", marginTop: "12px" }}>
                    <button 
                      onClick={handlePrevStep}
                      style={{
                        padding: "11px 18px",
                        borderRadius: "12px",
                        border: `1px solid ${colores.borde}`,
                        background: "transparent",
                        color: colores.textoMedio,
                        fontSize: "13px",
                        fontWeight: 700,
                        cursor: "pointer",
                        display: "inline-flex",
                        alignItems: "center",
                        gap: "6px",
                        fontFamily: 'Outfit, sans-serif'
                      }}
                    >
                      <ArrowLeft size={14} /> Editar respuestas
                    </button>
                    <Qr 
                      label="Solicitar diagnóstico ejecutivo EdgeNet" 
                      onClick={() => setWizardStep("lead")}
                      icon={<Send size={14} />}
                    />
                  </div>
                </div>
              )}

              {/* STEP 5: CONTACT LEAD FORM */}
              {wizardStep === "lead" && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', flex: 1 }}>
                  <div>
                    <h2 style={{ fontSize: "22px", fontWeight: 800, color: colores.textoClaro, margin: "0 0 6px 0", letterSpacing: "-0.3px", fontFamily: 'Outfit, sans-serif' }}>
                      Reciba su diagnóstico ejecutivo
                    </h2>
                    <p style={{ fontSize: "13px", color: colores.textoMedio, margin: 0, fontFamily: 'Outfit, sans-serif' }}>
                      Un especialista de EdgeNet preparará su business case personalizado.
                    </p>
                  </div>

                  {/* Lead input fields form */}
                  <form onSubmit={handleLeadSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: "grid", gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr", gap: "12px" }}>
                      {[
                        { k: "nombre", label: "Nombre completo", type: "text", req: true },
                        { k: "empresa", label: "Empresa", type: "text", req: true },
                        { k: "cargo", label: "Cargo", type: "text", req: true },
                        { k: "correo", label: "Correo corporativo", type: "email", req: true },
                        { k: "telefono", label: "Teléfono", type: "tel", req: false },
                        { k: "industria", label: "Industria", type: "text", req: false },
                        { k: "tamanoEmpresa", label: "Tamaño de empresa", type: "text", req: false },
                        { k: "prioridad", label: "Prioridad estratégica", type: "text", req: false }
                      ].map(field => (
                        <label key={field.k} style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
                          <span style={{ fontSize: "11px", fontWeight: 700, color: colores.textoMedio, textTransform: "uppercase", letterSpacing: "0.4px", fontFamily: 'Outfit, sans-serif' }}>
                            {field.label}
                            {field.req && <span style={{ color: colores.peligro }}> *</span>}
                          </span>
                          <input 
                            type={field.type} 
                            required={field.req}
                            value={(leadForm as any)[field.k]}
                            onChange={e => setLeadForm(prev => ({ ...prev, [field.k]: e.target.value }))}
                            style={{
                              padding: "11px 14px",
                              borderRadius: "12px",
                              border: `1px solid ${colores.borde}`,
                              background: colores.fondoPrincipal,
                              color: colores.textoClaro,
                              fontSize: "13px",
                              outline: "none",
                              fontFamily: 'Outfit, sans-serif'
                            }}
                          />
                        </label>
                      ))}
                      
                      {/* Comments text area (Full width) */}
                      <label style={{ gridColumn: isMobile ? "1" : "1 / -1", display: "flex", flexDirection: "column", gap: "6px" }}>
                        <span style={{ fontSize: "11px", fontWeight: 700, color: colores.textoMedio, textTransform: "uppercase", letterSpacing: "0.4px", fontFamily: 'Outfit, sans-serif' }}>
                          Comentarios
                        </span>
                        <textarea 
                          rows={3} 
                          value={leadForm.comentarios}
                          onChange={e => setLeadForm(prev => ({ ...prev, comentarios: e.target.value }))}
                          style={{
                            padding: "11px 14px",
                            borderRadius: "12px",
                            border: `1px solid ${colores.borde}`,
                            background: colores.fondoPrincipal,
                            color: colores.textoClaro,
                            fontSize: "13px",
                            outline: "none",
                            resize: "vertical",
                            fontFamily: 'Outfit, sans-serif'
                          }}
                        />
                      </label>
                    </div>

                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px", justifyContent: "space-between", marginTop: "12px" }}>
                      <button 
                        type="button"
                        onClick={handlePrevStep}
                        style={{
                          padding: "11px 18px",
                          borderRadius: "12px",
                          border: `1px solid ${colores.borde}`,
                          background: "transparent",
                          color: colores.textoMedio,
                          fontSize: "13px",
                          fontWeight: 700,
                          cursor: "pointer",
                          display: "inline-flex",
                          alignItems: "center",
                          gap: "6px",
                          fontFamily: 'Outfit, sans-serif'
                        }}
                      >
                        <ArrowLeft size={14} /> Volver al resultado
                      </button>
                      <Qr 
                        label="Enviar solicitud de diagnóstico" 
                        onClick={() => {}} // Form submit will trigger action
                        icon={<Send size={14} />}
                      />
                    </div>
                  </form>
                </div>
              )}

            </div>
          </div>
        )}

      </div>

      {/* LEAD SUCCESS MODAL OVERLAY */}
      <DX 
        open={showSuccessPopup}
        titulo="Solicitud recibida"
        mensaje="Hemos registrado su información. Un especialista de EdgeNet preparará su diagnóstico ejecutivo y se pondrá en contacto en las próximas 24 horas."
        onClose={() => {
          setShowSuccessPopup(false);
          setActiveView("dashboard"); // Return to updated dashboard RX view
        }}
        resumen={leadSummary && (
          <div style={{
            marginTop: "12px",
            padding: "14px",
            background: colores.fondoTerciario,
            borderRadius: "12px",
            fontSize: "12px",
            color: colores.textoClaro,
            lineHeight: 1.7,
            textAlign: 'left',
            width: '100%',
            boxSizing: 'border-box'
          }}>
            <strong>{leadSummary.nombre}</strong> · {leadSummary.cargo} en {leadSummary.empresa}
            <br />
            {leadSummary.correo} {leadSummary.telefono && `· ${leadSummary.telefono}`}
            <br />
            Prioridad: {leadSummary.prioridad || "No especificada"}
          </div>
        )}
      />

    </div>
  );
}
