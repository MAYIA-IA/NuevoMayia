import { useState } from "react";
import { ArrowRight, Calendar, User, Tag, Search, Sparkles } from "lucide-react";
import ArticleModal, { type BlogPost } from "./ArticleModal";
import mayiaLakeBanner from "../assets/MAYIA_LAKE_BANNER.jpg.jpeg";
import fabricaMxBanner from "../assets/FABRICA_MX_BANNER.jpg.jpeg";
import origenBanner from "../assets/ORIGEN_BANNER.jpg.jpeg";
import squadsBanner from "../assets/SQUADS_BANNER.jpg.jpeg";

const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: "Que son los agentes de inteligencia artificial",
    excerpt: "Los agentes IA son sistemas capaces de percibir informacion, analizar contextos, tomar decisiones y ejecutar acciones de manera autonoma. Descubre como operan y benefician a las empresas.",
    category: "Innovacion",
    date: "22 Mayo 2026",
    author: "Dulce Meza",
    readTime: "8 min lectura",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1170&auto=format&fit=crop",
    featured: false,
    content: [
      { type: "paragraph", text: "Los Agentes de Inteligencia Artificial son sistemas inteligentes disenados para entender objetivos de negocio, consultar datos privados, analizar contexto, recomendar acciones, ejecutar tareas, coordinar workflows y operar procesos empresariales con distintos niveles de autonomia, seguridad, trazabilidad y supervision humana." },
      { type: "quote", text: "A diferencia de un chatbot tradicional, un agente de IA no solo conversa. Un agente entiende, decide, ejecuta y coordina." },
      { type: "heading", text: "Que hace realmente un Agente de IA" },
      { type: "paragraph", text: "Un chatbot responde preguntas. Un asistente ayuda a una persona. Un agente de inteligencia artificial opera una mision. Un sistema multi-agente puede orquestar una empresa." },
      { type: "subheading", text: "Agentes que entienden" },
      { type: "paragraph", text: "Consultan documentos, bases de conocimiento, politicas internas, manuales, reportes, contratos, expedientes, inventarios, CRM, ERP, POS, correos, tickets, bases de datos, imagenes, audio, video y sistemas internos. Convierten informacion dispersa en contexto util para tomar decisiones." },
      { type: "subheading", text: "Agentes que recomiendan" },
      { type: "paragraph", text: "Analizan escenarios y sugieren la mejor accion posible. Pueden recomendar que vender, que comprar, que mover, que corregir, que priorizar, que campana activar, que inventario redistribuir, que cliente atender o que riesgo escalar." },
      { type: "subheading", text: "Agentes que ejecutan" },
      { type: "paragraph", text: "No se quedan en la recomendacion. Pueden abrir tickets, generar reportes, enviar alertas, actualizar sistemas, crear ordenes, agendar citas, enviar correos, clasificar documentos, registrar evidencias y activar workflows de negocio." },
      { type: "subheading", text: "Agentes que aprenden" },
      { type: "paragraph", text: "Mejoran con retroalimentacion humana, metricas de desempeno, resultados historicos, comportamiento de usuarios, validacion operativa y datos del negocio. No solo ejecutan. Evolucionan." },
      { type: "heading", text: "La diferencia entre un chatbot y un agente de IA" },
      { type: "bullets", items: ["Un chatbot responde. Un agente actua.", "Un chatbot depende de una conversacion. Un agente puede iniciar, ejecutar y cerrar tareas.", "Un chatbot entrega informacion. Un agente genera resultados.", "Un chatbot vive en una interfaz. Un agente vive dentro de la operacion.", "Un chatbot es una herramienta. Un agente es una capacidad empresarial."] },
      { type: "heading", text: "Arquitectura de los Agentes de IA MAYIA" },
      { type: "paragraph", text: "Un agente empresarial serio no puede depender unicamente de un modelo generativo. Para operar en una empresa necesita arquitectura, datos, control, seguridad y gobierno." },
      { type: "bullets", items: ["IA Generativa: lenguaje natural y sintesis de conocimiento.", "RAG Empresarial: datos privados de la organizacion.", "MAYIA Lakehouse: fuente unificada de datos confiables.", "Ciberseguridad: proteccion, trazabilidad y limites de autonomia.", "Human-in-the-Loop: supervision humana en decisiones criticas.", "Monitoreo continuo: ROI, precision, calidad y adopcion."] },
      { type: "heading", text: "Agentes de IA por industria" },
      { type: "subheading", text: "Retail" },
      { type: "paragraph", text: "Recomendadores inteligentes, asistentes de tienda, analisis de shopper, optimizacion de promociones, computer vision en gondola, monitoreo de anaquel y agentes de trade marketing." },
      { type: "subheading", text: "Manufactura" },
      { type: "paragraph", text: "Agentes para mantenimiento predictivo, control de calidad visual, planeacion de produccion, monitoreo de planta, reduccion de desperdicio y optimizacion de supply chain." },
      { type: "subheading", text: "Finanzas" },
      { type: "paragraph", text: "Agentes de riesgo, cobranza, cumplimiento, analisis documental, atencion inteligente y deteccion de anomalias." },
      { type: "highlight", text: "MAYIA no crea bots. MAYIA construye agentes empresariales que entienden, deciden, ejecutan y orquestan el futuro inteligente de las empresas mexicanas." }
    ]
  },
  {
    id: 2,
    title: "Que es la Inteligencia Artificial Empresarial",
    excerpt: "La IA Empresarial no es un chatbot. Es una nueva forma de operar: integrando datos, sistemas, areas de trabajo, clientes, colaboradores y decisiones estrategicas para generar valor medible.",
    category: "IA Empresarial",
    date: "10 Junio 2026",
    author: "Veronica Viniegra",
    readTime: "10 min lectura",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=1170&auto=format&fit=crop",
    featured: false,
    content: [
      { type: "paragraph", text: "La Inteligencia Artificial Empresarial es la aplicacion estrategica de tecnologias como IA Generativa, Agentes de Inteligencia Artificial, Computer Vision, Analitica Predictiva, Automatizacion Inteligente, Machine Learning, Robotics y modelos de lenguaje empresarial para optimizar procesos, tomar mejores decisiones, reducir costos, aumentar ventas y crear nuevas ventajas competitivas." },
      { type: "quote", text: "La IA Empresarial se integra directamente en la operacion del negocio. Su objetivo no es usar IA, sino convertir la inteligencia artificial en crecimiento, eficiencia, productividad, rentabilidad y valor medible." },
      { type: "heading", text: "Por que la IA Empresarial es clave para Mexico" },
      { type: "paragraph", text: "Mexico se encuentra frente a una oportunidad historica. La inteligencia artificial ya no es una promesa futura; es una tecnologia que esta cambiando la competitividad de empresas, industrias y paises. El estudio Mexico Inteligente confirma que las empresas que adoptan IA ya estan asociadas con mayores niveles de produccion, mejores salarios y mas empleo." },
      { type: "heading", text: "Que hace realmente la Inteligencia Artificial Empresarial" },
      { type: "bullets", items: ["Automatizacion de procesos con IA.", "Agentes de inteligencia artificial para empresas.", "IA conversacional para atencion, ventas y soporte.", "Computer Vision para inspeccion, monitoreo y control visual.", "Analitica predictiva para demanda, inventarios, ventas y riesgos.", "IA para retail, manufactura, salud, logistica, finanzas y gobierno.", "Business Workflows inteligentes para coordinar equipos y operaciones.", "IA Generativa para acelerar conocimiento, documentacion y toma de decisiones.", "Ciberseguridad con IA para proteger datos, sistemas y operaciones criticas."] },
      { type: "heading", text: "El error mas comun: confundir IA con herramientas" },
      { type: "paragraph", text: "Muchas empresas empiezan comprando una herramienta, instalando un chatbot o probando un modelo generativo. La verdadera IA Empresarial requiere cinco elementos:" },
      { type: "bullets", items: ["Estrategia de IA alineada al negocio.", "Datos organizados, gobernados y disponibles.", "Infraestructura segura y escalable.", "Casos de uso con ROI claro.", "Equipos capaces de implementar, operar y adoptar la solucion."] },
      { type: "heading", text: "MAYIA: IA Empresarial con integracion vertical" },
      { type: "paragraph", text: "MAYIA integra estrategia, infraestructura, nube, datos, ciberseguridad, desarrollo, laboratorios, squads de IA, monitoreo, capacitacion y medicion de valor en un solo ecosistema." },
      { type: "bullets", items: ["Infraestructura propia para IA.", "Nube soberana mexicana.", "MAYIA Lakehouse para integrar, organizar y explotar datos empresariales.", "Laboratorios de IA para pruebas y validacion.", "Squads especializados para desarrollo e implementacion.", "Ciberseguridad para proteger datos, modelos y operacion.", "Academia de IA para adopcion y capacitacion.", "Estrategia orientada a ROI, RL y RS."] },
      { type: "heading", text: "Casos de uso de IA Empresarial" },
      { type: "subheading", text: "IA para ventas" },
      { type: "paragraph", text: "Agentes inteligentes, recomendadores, lead scoring, prediccion de demanda, asistentes comerciales y automatizacion de seguimiento." },
      { type: "subheading", text: "IA para retail" },
      { type: "paragraph", text: "Recomendadores en tienda, asistentes para shopper, analitica de punto de venta, computer vision, pricing inteligente y trade marketing basado en datos." },
      { type: "subheading", text: "IA para manufactura" },
      { type: "paragraph", text: "Mantenimiento predictivo, inspeccion visual, planeacion de produccion, control de calidad, reduccion de desperdicio y optimizacion de supply chain." },
      { type: "highlight", text: "MAYIA: Inteligencia Artificial Empresarial hecha en Mexico para transformar empresas, industrias y gobiernos con valor medible." }
    ]
  },
  {
    id: 3,
    title: "Agentes de IA MAYIA: la nueva generacion de IA empresarial",
    excerpt: "Los Agentes de Inteligencia Artificial MAYIA son sistemas inteligentes que entienden objetivos, consultan datos privados, recomiendan acciones, ejecutan tareas y coordinan workflows empresariales.",
    category: "Innovacion",
    date: "5 Junio 2026",
    author: "Veronica Viniegra",
    readTime: "12 min lectura",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1170&auto=format&fit=crop",
    featured: false,
    content: [
      { type: "paragraph", text: "Los Agentes de Inteligencia Artificial MAYIA son sistemas inteligentes disenados para entender objetivos de negocio, consultar datos privados, analizar contexto, recomendar acciones, ejecutar tareas, coordinar workflows y operar procesos empresariales con distintos niveles de autonomia, seguridad, trazabilidad y supervision humana." },
      { type: "quote", text: "Los agentes empresariales mas poderosos no se definen por organigrama. Se definen por mision." },
      { type: "heading", text: "Los agentes de IA no deben disenarse por organigrama" },
      { type: "paragraph", text: "Un agente de IA empresarial debe disenarse segun el problema de negocio que resuelve, la decision que debe apoyar o ejecutar, y los sistemas con los que debe conectarse." },
      { type: "heading", text: "Tipos de Agentes MAYIA" },
      { type: "subheading", text: "Agentes Orquestadores" },
      { type: "paragraph", text: "Coordinan otros agentes, tareas, datos y sistemas. Ejemplo: un agente maestro que detecta una caida de ventas, consulta inventario, revisa precios, activa una campana, notifica al equipo comercial y sugiere redistribucion logistica." },
      { type: "subheading", text: "Agentes de Decision" },
      { type: "paragraph", text: "Analizan variables, escenarios, restricciones y consecuencias para recomendar la mejor accion. Ejemplo: decidir que producto priorizar, que sucursal abastecer, que promocion activar o que inversion acelerar." },
      { type: "subheading", text: "Agentes de Monitoreo" },
      { type: "paragraph", text: "Observan procesos en tiempo real y detectan anomalias. Ejemplo: detectar desabasto, fraude, errores de caja, fallas operativas, incumplimientos, retrasos, desperdicio o riesgos de productividad." },
      { type: "subheading", text: "Agentes Multimodales" },
      { type: "paragraph", text: "Interpretan texto, voz, imagen, video, sensores, camaras o audio. Ejemplo: un agente que observa una gondola, escucha una llamada, analiza un mostrador o interpreta documentos." },
      { type: "heading", text: "ROI, RL y RS: la nueva medicion de valor de los agentes" },
      { type: "bullets", items: ["ROI - Retorno de Inversion: valor financiero vs costo de implementacion.", "RL - Retorno Laboral: tiempo liberado, tareas eliminadas, productividad habilitada.", "RS - Retorno Social: impacto en empleo, capacitacion e inclusion digital."] },
      { type: "heading", text: "Agentes de IA por industria" },
      { type: "bullets", items: ["Retail: recomendadores, computer vision, monitoreo de anaquel, trade marketing.", "Salud: expedientes, citas, validacion, seguimiento de pacientes.", "Manufactura: mantenimiento predictivo, control de calidad visual.", "Finanzas: riesgo, cobranza, cumplimiento, deteccion de anomalias.", "Gobierno: atencion ciudadana, automatizacion documental, inteligencia territorial."] },
      { type: "highlight", text: "Los Agentes de IA MAYIA no se limitan a responder preguntas: entienden objetivos, consultan datos, ejecutan tareas, coordinan equipos, gobiernan riesgos y convierten workflows empresariales en valor medible." }
    ]
  },
  {
    id: 4,
    title: "Fabrica de Inteligencia Artificial en Mexico: MAYIA",
    excerpt: "La inteligencia artificial empresarial necesita mucho mas que un modelo. Necesita infraestructura, datos protegidos, computacion, almacenamiento, seguridad y especialistas capaces de llevar la IA del concepto a la realidad.",
    category: "Infraestructura",
    date: "1 Junio 2026",
    author: "Veronica Viniegra",
    readTime: "7 min lectura",
    image: fabricaMxBanner,
    featured: false,
    content: [
      { type: "paragraph", text: "La inteligencia artificial empresarial necesita mucho mas que un modelo. Necesita infraestructura. Necesita datos protegidos. Necesita computo. Necesita almacenamiento. Necesita red. Necesita seguridad. Necesita energia. Necesita operacion. Necesita especialistas capaces de llevar la inteligencia artificial del concepto a la realidad diaria de una empresa." },
      { type: "quote", text: "Por eso nace MAYIA: la fabrica mexicana de inteligencia artificial." },
      { type: "heading", text: "IA privada, segura y soberana para empresas mexicanas" },
      { type: "paragraph", text: "Las empresas que implementan IA necesitan saber donde viven sus datos, bajo que reglas se procesan, quien los opera, como se protegen y sobre que infraestructura se ejecutan sus modelos, aplicaciones y agentes inteligentes. MAYIA responde con una vision clara: inteligencia artificial privada, segura y soberana." },
      { type: "heading", text: "Infraestructura para ejecutar IA en Mexico" },
      { type: "paragraph", text: "MAYIA opera sobre el ecosistema EdgeNet IA Ready y la nube soberana FLAI, habilitando una arquitectura nacional para empresas que requieren enterprise AI infrastructure, private AI cloud, GPU cloud, GPU as a Service y AI-ready data center." },
      { type: "bullets", items: ["En nuestros centros de datos: entorno seguro, operado y alojado en territorio nacional.", "En modelo hibrido: combina infraestructura actual con capacidades del ecosistema MAYIA y FLAI.", "En modalidad on premise: la solucion vive dentro de las instalaciones del cliente."] },
      { type: "heading", text: "Data Centers AI Ready para IA empresarial" },
      { type: "paragraph", text: "La inteligencia artificial necesita infraestructura preparada para operar con exigencias reales de procesamiento, seguridad, disponibilidad y gobierno de datos. MAYIA se apoya en Data Centers AI Ready: centros preparados para alojar, procesar y operar soluciones de IA empresarial en Mexico." },
      { type: "heading", text: "La fabrica donde la IA se convierte en valor" },
      { type: "paragraph", text: "Una AI Factory es el lugar donde la inteligencia artificial se disena, se entrena, se integra, se despliega, se gobierna y se mejora de forma continua. MAYIA lleva este concepto al mercado mexicano: infraestructura soberana, nube, datos, ciberseguridad, automatizacion, agentes inteligentes y talento especializado en un solo ecosistema." },
      { type: "heading", text: "IA para personas, empresas y gobiernos" },
      { type: "bullets", items: ["Para las personas: nuevas habilidades, mejores herramientas y mayor capacidad de decision.", "Para las empresas: eficiencia, automatizacion, analisis, productividad, crecimiento y ventaja competitiva.", "Para los gobiernos: mejores datos, mayor capacidad operativa y decisiones con mayor evidencia."] },
      { type: "highlight", text: "MAYIA es la fabrica mexicana de inteligencia artificial que lleva la IA empresarial del concepto a la operacion, con infraestructura privada, soberana y segura para empresas, gobiernos y PyMEs." }
    ]
  },
  {
    id: 5,
    title: "MAYIA Lakehouse: prepara los datos de tu empresa para IA",
    excerpt: "La inteligencia artificial empieza con datos confiables, integrados, seguros y listos para operar. MAYIA Lakehouse es la plataforma que unifica tu informacion para IA, analitica avanzada y toma de decisiones en tiempo real.",
    category: "Datos & IA",
    date: "28 Mayo 2026",
    author: "Veronica Viniegra",
    readTime: "9 min lectura",
    image: mayiaLakeBanner,
    featured: false,
    content: [
      { type: "paragraph", text: "MAYIA Lakehouse es la plataforma de datos empresariales de MAYIA disenada para ayudar a las organizaciones a ordenar, conectar, gobernar y activar sus datos para inteligencia artificial, analitica avanzada, automatizacion, agentes inteligentes y toma de decisiones en tiempo real." },
      { type: "quote", text: "Integramos lo mejor de un Data Lake, un Data Warehouse y una arquitectura moderna Lakehouse para que tu empresa pueda dejar atras los silos de informacion, los reportes desconectados y las bases de datos aisladas." },
      { type: "heading", text: "El problema: muchas empresas quieren IA, pero sus datos no estan listos" },
      { type: "paragraph", text: "La mayoria de las organizaciones ya tiene datos. El problema es que esos datos suelen estar fragmentados, duplicados, incompletos, desactualizados o atrapados en sistemas que no se comunican entre si." },
      { type: "bullets", items: ["Reportes inconsistentes.", "Decisiones lentas.", "Datos duplicados.", "Falta de trazabilidad.", "Baja calidad de informacion.", "Sistemas desconectados.", "IA implementada en silos.", "Pilotos de IA que no escalan."] },
      { type: "heading", text: "Arquitectura Lakehouse para empresas que quieren implementar IA" },
      { type: "subheading", text: "1. Ingesta de datos" },
      { type: "paragraph", text: "Conectamos fuentes internas y externas para traer informacion desde sistemas, aplicaciones, documentos, bases de datos y APIs." },
      { type: "subheading", text: "2. Capa de datos limpios" },
      { type: "paragraph", text: "Procesamos, validamos, depuramos y estandarizamos la informacion para mejorar calidad y consistencia." },
      { type: "subheading", text: "3. Gobierno y seguridad" },
      { type: "paragraph", text: "Integramos permisos, trazabilidad, catalogo, control de acceso, auditoria, proteccion de datos sensibles y reglas de uso." },
      { type: "heading", text: "Que datos puede integrar MAYIA Lakehouse" },
      { type: "bullets", items: ["ERP, CRM, POS, e-commerce.", "Inventarios, finanzas, ventas, marketing.", "Recursos humanos, operaciones, logistica.", "Archivos PDF, Excel, correos, bases SQL y NoSQL.", "APIs, IoT, sensores, datos historicos.", "Imagenes y videos."] },
      { type: "heading", text: "Beneficios de MAYIA Lakehouse" },
      { type: "bullets", items: ["Preparar datos para inteligencia artificial.", "Reducir silos de informacion.", "Mejorar calidad de datos.", "Acelerar reportes y dashboards.", "Crear una vision unica del negocio.", "Reducir dependencia de Excel.", "Mejorar gobierno y trazabilidad.", "Proteger datos sensibles.", "Habilitar IA generativa privada.", "Construir agentes de IA mas confiables."] },
      { type: "highlight", text: "Con MAYIA Lakehouse, tus datos se convierten en una base inteligente para operar, analizar, predecir, automatizar y construir soluciones de inteligencia artificial empresarial." }
    ]
  },
  {
    id: 6,
    title: "Forward-Deployed AI Squads: la nueva forma de implementar IA en las empresas",
    excerpt: "MAYIA despliega Forward-Deployed AI Squads dentro de las empresas para implementar agentes inteligentes, automatizacion con IA, integracion de datos, seguridad, gobierno y ROI medible.",
    category: "IA Empresarial",
    date: "12 Junio 2026",
    author: "Veronica Viniegra",
    readTime: "6 min lectura",
    image: squadsBanner,
    featured: false,
    content: [
      { type: "paragraph", text: "La inteligencia artificial ya no se gana con presentaciones, pilotos aislados o herramientas desconectadas. Hoy, las empresas que quieren competir necesitan llevar la IA a sus procesos reales, conectarla con sus datos, integrarla con sus sistemas y convertirla en una capacidad operativa medible." },
      { type: "paragraph", text: "Ahi nace el modelo de Forward-Deployed AI Squads: equipos especializados de inteligencia artificial que se integran temporalmente dentro de la empresa para construir, implementar y escalar soluciones reales de IA." },
      { type: "paragraph", text: "En MAYIA, este modelo representa una nueva forma de llevar inteligencia artificial empresarial a Mexico: no desde la distancia, no como consultoria generica, sino desde el corazon operativo del cliente." },
      { type: "quote", text: "Un Forward-Deployed AI Squad es un equipo de IA integrado al cliente para implementar inteligencia artificial real, segura y medible." },
      { type: "heading", text: "Que son los Forward-Deployed AI Squads" },
      { type: "paragraph", text: "Los Forward-Deployed AI Squads son equipos de especialistas que trabajan directamente con las areas de negocio, tecnologia, datos, seguridad y operacion de una empresa para llevar casos de uso de IA desde la idea hasta produccion." },
      { type: "paragraph", text: "Este modelo ya esta tomando fuerza en las companias lideres de IA. Anthropic, por ejemplo, describe a sus Forward-Deployed Engineers como perfiles que trabajan dentro de los sistemas del cliente para construir aplicaciones productivas con modelos de IA, desarrollar artefactos tecnicos como servidores MCP, subagentes y habilidades de agentes, ademas de acompanar despliegues enterprise." },
      { type: "paragraph", text: "OpenAI tambien lanzo una compania de despliegue empresarial para ayudar a organizaciones a llevar sistemas de IA a produccion, incorporando Forward Deployed Engineers desde el inicio. EY, por su parte, anuncio roles de Forward Deployed Engineer para ayudar a las empresas a pasar de experimentacion a despliegues de IA listos para produccion." },
      { type: "heading", text: "No vendemos IA. Implementamos capacidad real de IA" },
      { type: "paragraph", text: "Muchas empresas ya probaron herramientas de inteligencia artificial. Algunas hicieron demos. Otras compraron licencias. Pero pocas han logrado integrar IA en sus procesos criticos con seguridad, gobierno, adopcion y retorno de inversion." },
      { type: "bullets", items: [
        "Forward-Deployed AI Engineers",
        "AI Implementation Squads",
        "Enterprise AI Squads",
        "AI Engineering Squads",
        "AI Delivery Squads",
        "AI Transformation Squads",
        "AI Adoption Squads",
        "AI Production Squads"
      ] },
      { type: "heading", text: "Como trabaja un Squad de IA MAYIA" },
      { type: "paragraph", text: "Cada AI Implementation Squad se integra temporalmente con el cliente para entender sus procesos reales, identificar oportunidades de alto impacto y construir soluciones de IA listas para operar. Nuestra metodologia conecta:" },
      { type: "highlight", text: "Diagnostico -> Datos -> Proceso -> Arquitectura -> Agente -> Integracion -> Seguridad -> Produccion -> Adopcion -> ROI" },
      { type: "paragraph", text: "Esto significa que no empezamos preguntando 'que modelo quieres usar'. Empezamos preguntando: que proceso quieres transformar, que decision quieres acelerar, que tarea quieres automatizar, que datos tienes disponibles, que sistemas deben integrarse, que riesgo debemos controlar y que resultado financiero quieres medir." },
      { type: "heading", text: "Beneficios de un Forward-Deployed AI Squad" },
      { type: "bullets", items: [
        "Reduccion del tiempo para pasar de idea a produccion.",
        "Implementacion de agentes de IA conectados a procesos reales.",
        "Integracion con datos, sistemas y flujos de trabajo existentes.",
        "Mayor adopcion por parte de usuarios internos.",
        "Seguridad, trazabilidad y gobierno desde el diseno.",
        "Transferencia de conocimiento al equipo del cliente.",
        "Medicion de ROI, productividad y eficiencia operativa."
      ] },
      { type: "highlight", text: "MAYIA Forward-Deployed AI Squads: la unidad que lleva inteligencia artificial empresarial del diagnostico a produccion, con agentes inteligentes, seguridad, gobierno, adopcion and ROI medible." }
    ]
  },
  {
    id: 7,
    title: "Conoce El Origen De Nuestra Marca: ¿Por que MAYIA?",
    excerpt: "MAYIA nace de una raiz profunda: Maya + IA. Un nombre que une la inteligencia ancestral de Mexico con la inteligencia artificial que hoy esta escribiendo una nueva etapa para el mundo.",
    category: "Innovacion",
    date: "12 Junio 2026",
    author: "Veronica Viniegra",
    readTime: "4 min lectura",
    image: origenBanner,
    featured: false,
    content: [
      { type: "paragraph", text: "MAYIA nace de una raiz profunda: Maya + IA. Un nombre que une la inteligencia ancestral de Mexico con la inteligencia artificial que hoy esta escribiendo una nueva etapa para el mundo." },
      { type: "paragraph", text: "La civilizacion maya fue una civilizacion del conocimiento. Observo el cielo con precision, desarrollo sistemas matematicos, midio el tiempo, construyo ciudades, creo arquitectura monumental, entendio ciclos naturales, dejo escritura, simbolos y una vision extraordinaria sobre la relacion entre el ser humano, la naturaleza y el universo." },
      { type: "heading", text: "Inspiracion ancestral para la era digital" },
      { type: "bullets", items: [
        "Los mayas miraban el cielo para leer senales.",
        "Estudiaban los ciclos para tomar decisiones.",
        "Transformaban la observacion en conocimiento.",
        "Convertian el calculo en arquitectura.",
        "Hacian del tiempo un sistema.",
        "Hacian de la inteligencia una forma de vida."
      ] },
      { type: "heading", text: "Inteligencia Artificial con raiz mexicana" },
      { type: "paragraph", text: "El nombre MAYIA lleva dentro una declaracion poderosa: la inteligencia artificial mexicana tambien puede tener identidad, raiz, territorio y proposito. Puede mirar hacia adelante honrando lo que somos. Puede hablar de tecnologia desde una historia propia. Puede nacer desde Mexico con una voz que reconoce su origen y proyecta su futuro." },
      { type: "paragraph", text: "MAYIA representa inteligencia artificial desde Mexico: desde servidores ubicados en territorio nacional, con soberania de datos y una vision entrenada en el conocimiento, la cultura, las necesidades y la realidad actual de la nacion, para impulsar la competitividad digital de las personas, las empresas y los gobiernos a nivel nacional e internacional." },
      { type: "highlight", text: "MAYIA es inteligencia artificial con raiz mexicana. Es la evolucion simbolica de una herencia que observo las estrellas y hoy mira hacia el futuro, uniendo la inteligencia ancestral de Mexico con la inteligencia artificial que construye la nueva era digital." }
    ]
  }
];

const CATEGORIES = ["Todas", "Innovacion", "IA Empresarial", "Infraestructura", "Datos & IA"];

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState("Todas");
  const [hoveredPost, setHoveredPost] = useState<number | null>(null);
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const filteredPosts = activeCategory === "Todas"
    ? BLOG_POSTS
    : BLOG_POSTS.filter(post => post.category === activeCategory);

  const featuredPost = filteredPosts.find(p => p.featured);
  const gridPosts = featuredPost
    ? filteredPosts.filter(p => p.id !== featuredPost.id)
    : filteredPosts;

  return (
    <>
      {selectedPost && (
        <ArticleModal post={selectedPost} onClose={() => setSelectedPost(null)} />
      )}

      <section className="relative w-full py-8 overflow-hidden" style={{ background: "linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%)" }}>
        <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[100px] pointer-events-none" style={{ background: "rgba(164,217,85,0.1)" }} />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: "rgba(34,211,238,0.05)" }} />
        <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: "radial-gradient(circle, rgba(164,217,85,0.15) 1px, transparent 1px)", backgroundSize: "32px 32px", opacity: 0.5 }} />

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full mb-4" style={{ background: "rgba(164,217,85,0.15)", border: "1px solid rgba(164,217,85,0.3)" }}>
                <Sparkles size={14} className="text-lime-600 animate-pulse" />
                <span className="text-xs font-bold text-lime-700 tracking-wide uppercase">Insights & Conocimiento</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight mb-4">
                Blog de <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-600 to-lime-400">MAYiA</span>
              </h2>
              <p className="text-base text-gray-500 leading-relaxed">
                Explora las ultimas tendencias en Inteligencia Artificial, descubrimientos tecnologicos y casos de exito de como las empresas mexicanas estan transformando su futuro.
              </p>
            </div>
            <div className="flex-shrink-0 w-full md:w-auto">
              <div className="relative group">
                <input type="text" placeholder="Buscar articulos..." className="w-full md:w-64 pl-12 pr-4 py-3 rounded-2xl outline-none transition-all duration-300" style={{ background: "#ffffff", border: "1px solid #e5e7eb", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }} />
                <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-lime-600 transition-colors" />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2 mb-8">
            {CATEGORIES.map(category => (
              <button key={category} onClick={() => setActiveCategory(category)} className="px-4 py-2 rounded-xl text-xs font-bold transition-all duration-300" style={{
                background: activeCategory === category ? "#a4d955" : "#ffffff",
                color: activeCategory === category ? "#111827" : "#6b7280",
                border: `1px solid ${activeCategory === category ? "#84cc16" : "#e5e7eb"}`,
                boxShadow: activeCategory === category ? "0 8px 20px rgba(164,217,85,0.3)" : "none",
                transform: activeCategory === category ? "translateY(-2px)" : "translateY(0)"
              }}>
                {category}
              </button>
            ))}
          </div>

          {featuredPost && (
            <div className="block mb-8 group cursor-pointer" onMouseEnter={() => setHoveredPost(featuredPost.id)} onMouseLeave={() => setHoveredPost(null)} onClick={() => setSelectedPost(featuredPost)}>
              <div className="grid grid-cols-1 2xl:grid-cols-2 gap-0 bg-white rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2" style={{ border: "1px solid #f3f4f6", boxShadow: hoveredPost === featuredPost.id ? "0 24px 50px rgba(164,217,85,0.15)" : "0 12px 30px rgba(0,0,0,0.04)" }}>
                <div className="relative h-72 lg:h-auto overflow-hidden">
                  <img src={featuredPost.image} alt={featuredPost.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6 md:p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="px-3 py-1 rounded-full text-xs font-bold bg-lime-100 text-lime-700 border border-lime-200 flex items-center gap-1.5">
                      <Tag size={12} /> {featuredPost.category}
                    </span>
                    <span className="text-sm font-semibold text-gray-400 flex items-center gap-1.5">
                      <Calendar size={14} /> {featuredPost.date}
                    </span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-lime-600 transition-colors">
                    {featuredPost.title}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-6">{featuredPost.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between pt-6 border-t border-gray-100">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-gradient-to-br from-lime-400 to-lime-600 flex items-center justify-center text-white font-bold shadow-lg">
                        <User size={18} />
                      </div>
                      <div>
                        <div className="text-sm font-bold text-gray-900">{featuredPost.author}</div>
                        <div className="text-xs text-gray-500">{featuredPost.readTime}</div>
                      </div>
                    </div>
                    <span className="flex items-center gap-2 text-lime-600 font-bold group-hover:translate-x-2 transition-transform">
                      Leer articulo <ArrowRight size={18} />
                    </span>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {gridPosts.map(post => (
              <div key={post.id} onClick={() => setSelectedPost(post)} className="bg-white rounded-3xl overflow-hidden flex flex-col cursor-pointer transition-all duration-500 hover:-translate-y-2 group"
                style={{ border: "1px solid #f3f4f6", boxShadow: hoveredPost === post.id ? "0 20px 40px rgba(164,217,85,0.1)" : "0 8px 20px rgba(0,0,0,0.03)" }}
                onMouseEnter={() => setHoveredPost(post.id)} onMouseLeave={() => setHoveredPost(null)}>
                <div className="relative h-48 overflow-hidden">
                  <img src={post.image} alt={post.title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" />
                  <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-white/90 backdrop-blur text-gray-900 shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-5 flex flex-col flex-grow">
                  <span className="text-xs font-semibold text-gray-400 flex items-center gap-1.5 mb-2">
                    <Calendar size={11} /> {post.date}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug group-hover:text-lime-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-4 line-clamp-3">{post.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between pt-3 border-t border-gray-100">
                    <span className="text-xs font-bold text-gray-900 flex items-center gap-1.5">
                      <User size={12} className="text-lime-600" /> {post.author}
                    </span>
                    <div className="w-7 h-7 rounded-full bg-lime-50 flex items-center justify-center text-lime-600 group-hover:bg-lime-600 group-hover:text-white transition-colors">
                      <ArrowRight size={14} />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-20">
              <div className="w-20 h-20 mx-auto rounded-full bg-gray-50 flex items-center justify-center mb-6">
                <Search size={32} className="text-gray-300" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">No hay articulos</h3>
              <p className="text-gray-500">No encontramos articulos para la categoria "{activeCategory}".</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
