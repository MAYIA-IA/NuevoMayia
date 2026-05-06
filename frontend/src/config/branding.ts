export const brandingConfig = {
  empresa: {
    nombre: "MAYIA",
    eslogan: "",
    logo: "/assets/logosNativos/mayiaLogoBlanco.png",
  },
  
  colores: {
    // Paleta MAYiA — Verde · Blanco · Negro
    primario: "#A4D955",           // Verde MAYiA principal
    primarioOscuro: "#7EBB2A",     // Verde oscuro (hover / activo)
    primarioClaro: "#D6F0A0",      // Verde muy claro (fondos sutiles)
    
    secundario: "#F5F7FA",         // Gris claro neutro
    acento: "#5EA500",             // Verde acento más saturado
    acentoOscuro: "#4A8000",       // Verde acento oscuro
    
    peligro: "#EF4444",            
    advertencia: "#F59E0B",        
    exito: "#22C55E",              
    
    // Fondos
    fondoPrincipal: "#FFFFFF",     // Blanco puro
    fondoSecundario: "#F8FAFB",    // Gris muy claro
    fondoTerciario: "#EAEFE8",     // Gris-verde muy sutil
    fondoClaro: "#FFFFFF",         
    
    // Textos
    textoClaro: "#1A202C",         // Negro/gris oscuro (WCAG AAA)
    textoMedio: "#4A5568",         // Gris medio (WCAG AAA)
    textoOscuro: "#718096",        // Gris (textos secundarios)
    textoEnOscuro: "#FFFFFF",      // Blanco (para fondos oscuros)
    
    // Bordes
    borde: "#D1D9CC",              // Gris-verde sutil
    bordeHover: "#A4D955",         // Verde MAYiA (hover)
    
    // Gradientes — todos en verde
    gradientePrimario: "linear-gradient(135deg, #A4D955 0%, #7EBB2A 100%)",
    gradienteSecundario: "linear-gradient(135deg, #5EA500 0%, #7EBB2A 100%)",
    gradienteAcento: "linear-gradient(135deg, #D6F0A0 0%, #FFFFFF 100%)",
    
    // Glass effect — verde muy claro
    fondoGlass: "#EEF7DC",
    
    // Sombras
    sombra: "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
    sombraMedia: "0 4px 6px rgba(0, 0, 0, 0.07), 0 2px 4px rgba(0, 0, 0, 0.05)",
    sombraGrande: "0 10px 15px rgba(0, 0, 0, 0.08), 0 4px 6px rgba(0, 0, 0, 0.05)",
  },
  
  metricas: {
    empleados: 568,
    departamentos: 9,
    tareasCompletadas: 13,
    progreso: 70,
  },
  
  ia: {
    nombre: "MAYIA",
    modelo: "Gemini 2.5 Flash",
    habilitado: true,
  }
};

export type BrandingConfig = typeof brandingConfig;