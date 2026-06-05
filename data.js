// ============================================================
// DATOS DEL AYUNTAMIENTO DE LEGANÉS
// Fuente: leganes.org/web/transparencia · leganesactivo.com
//
// Última actualización: junio 2026
// Para actualizar: modifica los arrays con los datos del portal.
// ============================================================

const DATA = {

  // ── NOVEDADES (aparecen en la parte superior de la página) ──
  novedades: [
    {
      tag: "aprobado",
      titulo: "Casi 1 millón de euros más para los clubes deportivos",
      desc: "El Ayuntamiento aumenta las subvenciones a 5 clubes: Voleibol (+470.804 €), Baloncesto (+325.000 €), Fútbol Sala (+136.000 €), Balonmano (+40.797 €) y ADIL (+16.000 €). Votos a favor: PP, ULEG y VOX.",
      fecha: "30 mayo 2026",
      votos: { si: 15, no: 10, abs: 0 }
    },
    {
      tag: "rechazado",
      titulo: "Los presupuestos de 2026 (228 M€) fueron rechazados por la oposición",
      desc: "PSOE, Más Madrid, Podemos y VOX votaron en contra de los presupuestos de 228 millones. El alcalde presentó una cuestión de confianza (también rechazada). Si en un mes no hay moción de censura, los presupuestos se aprueban automáticamente.",
      fecha: "11-15 mayo 2026",
      votos: { si: 8, no: 17, abs: 0 }
    },
    {
      tag: "aprobado",
      titulo: "Pasos de peatones inteligentes con señalización luminosa en el suelo",
      desc: "Se instalarán luces LED en el suelo de los cruces semaforizados para avisar a los peatones que miran el móvil. Aprobado con PP, ULEG, PSOE y VOX a favor.",
      fecha: "27 marzo 2026",
      votos: null
    },
    {
      tag: "aprobado",
      titulo: "Protección del despoblado de Polvoranca",
      desc: "El Ayuntamiento impulsa la protección patrimonial del despoblado medieval de Polvoranca, con una inversión inicial de 5 millones para la Ermita. Aprobado por amplio consenso.",
      fecha: "27 marzo 2026",
      votos: null
    },
    {
      tag: "aprobado",
      titulo: "Bicimad llegará a Leganés",
      desc: "El pleno aprobó instar a la Comunidad de Madrid a extender el servicio de bicicletas eléctricas compartidas Bicimad hasta Leganés. Aprobado por amplio consenso.",
      fecha: "27 marzo 2026",
      votos: null
    },
    {
      tag: "rechazado",
      titulo: "Rechazada la propuesta de menús halal en comedores escolares",
      desc: "Solo VOX votó a favor de esta moción. El resto de grupos (PP, ULEG, PSOE, Más Madrid, Podemos) votaron en contra.",
      fecha: "27 marzo 2026",
      votos: { si: 2, no: 23, abs: 0 }
    }
  ],

  // ── PLENOS ──────────────────────────────────────────────────
  plenos: [
    // ── 2026 ──
    {
      año: 2026,
      dia: 30,
      mes: "MAY",
      tipo: "Ordinario",
      titulo: "Pleno de mayo 2026",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Actas de sesiones anteriores (30 abr por unanimidad; 11 may con PP y ULEG a favor, oposición se abstiene)." },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Suplemento de crédito para amortización de operaciones de deuda. (PP y ULEG a favor; PSOE, Más Madrid, Podemos y VOX en contra)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Aumento de subvenciones a 5 clubs deportivos: +988.601 € para Voleibol, Baloncesto, Fútbol Sala, Balonmano y ADIL. (PP, ULEG y VOX a favor)" },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Crédito extraordinario para construcción de cubiertas en pistas deportivas. (PP y ULEG a favor; PSOE, Más Madrid, Podemos y VOX en contra)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Corrección del Inventario Municipal a 31 de diciembre de 2025. (PP y ULEG a favor; oposición se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Condecoraciones y distinciones a agentes de la Policía Local por méritos en 2025. (PP, ULEG y VOX a favor; PSOE, Más Madrid y Podemos se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Contestación a recurso de reposición municipal. (PP, ULEG y PSOE a favor; Más Madrid, Podemos y VOX se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Inscripción de entidades y asociaciones ciudadanas en el Registro Municipal. (PP, ULEG, PSOE, Más Madrid y Podemos a favor; VOX se abstiene)" },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Moción de ULEG para dar el nombre de 'Sonia Bermúdez' al campo de fútbol de El Carrascal. (PP y ULEG a favor; PSOE, Más Madrid, Podemos y VOX en contra)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de Más Madrid por comedores escolares universales y gratuitos. (PSOE, Más Madrid y Podemos a favor; PP y VOX en contra; ULEG se abstiene)" },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Moción de Más Madrid por vivienda pública en alquiler asequible. Empate: PP y ULEG en contra, PSOE, Más Madrid y Podemos a favor, VOX se abstiene. El alcalde desempata en contra." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de Más Madrid para que la Comunidad de Madrid construya una residencia de mayores de gestión pública en Leganés. (PSOE, Más Madrid y Podemos a favor; PP en contra; ULEG y VOX se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE sobre políticas de bienestar animal. (PSOE, Más Madrid y Podemos a favor; PP, ULEG y VOX se abstienen)" },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Moción del PSOE de apoyo al equipo ciclista Vinagres BTT Team Candil. (Solo PSOE a favor; PP y ULEG en contra; Más Madrid, Podemos y VOX se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE para la instalación de aseos públicos gratuitos y autolimpiables en Leganés. (PSOE, Más Madrid y Podemos a favor; PP, ULEG y VOX se abstienen)" },
        { icono: "ℹ️", texto: "<strong>RETIRADAS</strong> — Dos mociones de VOX (regularización masiva y comisión de investigación de seguridad) fueron retiradas por el propio grupo antes de votarse." }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/live/WN1lUcb6DKM"
    },
    {
      año: 2026,
      dia: 15,
      mes: "MAY",
      tipo: "Extraordinario",
      titulo: "Pleno extraordinario — 2ª Cuestión de confianza",
      acuerdos: [
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — 2ª Cuestión de confianza presentada por el alcalde (PP) para intentar aprobar los presupuestos 2026. La oposición en bloque (PSOE, Más Madrid, Podemos y VOX) votó en contra." },
        { icono: "ℹ️", texto: "<strong>CONSECUENCIA</strong> — Se abre un mes de plazo para que la oposición presente una moción de censura con al menos 14 firmas. Si no se formaliza, los presupuestos se aprueban automáticamente." }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/live/TkWrUSQfjks"
    },
    {
      año: 2026,
      dia: 11,
      mes: "MAY",
      tipo: "Extraordinario",
      titulo: "Pleno extraordinario — Presupuestos 2026",
      acuerdos: [
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Presupuesto municipal 2026 de 228 millones de euros. PSOE, Más Madrid, Podemos y VOX votaron en contra; PP y ULEG a favor. La oposición criticó que la documentación era confusa y los ingresos no estaban bien justificados." },
        { icono: "ℹ️", texto: "<strong>CONTEXTO</strong> — El presupuesto incluía 30 nuevos agentes de Policía Local, 27 M€ en infraestructuras (alumbrado, mobiliario urbano), 5 M€ para la Ermita de Polvoranca y el proyecto 'Puerta de Madrid' con 4.000 viviendas (60% protegidas)." }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/watch?v=sfaTPP4XJX0"
    },
    {
      año: 2026,
      dia: 30,
      mes: "ABR",
      tipo: "Ordinario",
      titulo: "Pleno de abril 2026",
      acuerdos: [
        { icono: "ℹ️", texto: "<strong>INFORMADO</strong> — Los presupuestos 2026 (228 M€) fueron aprobados en Junta de Gobierno y se enviaron al Pleno para su debate. Incluyen seguridad, rehabilitación urbana y vivienda como prioridades." },
        { icono: "ℹ️", texto: "<strong>INFORMADO</strong> — Sesión disponible en vídeo en el canal YouTube del Ayuntamiento (2 partes)." }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/live/uG1YFbpLtSU"
    },
    {
      año: 2026,
      dia: 27,
      mes: "MAR",
      tipo: "Ordinario",
      titulo: "Pleno de marzo 2026",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Subvenciones a entidades deportivas (PP, ULEG y VOX a favor; PSOE, Más Madrid y Podemos en contra)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Subvención a Cáritas Diocesana para atención a personas en dificultad (PP y ULEG a favor; PSOE y VOX se abstuvieron)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Protección de elementos arquitectónicos singulares de Leganés (PP, ULEG, PSOE y VOX a favor)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Pasos de peatones inteligentes con luces LED en el suelo (PP, ULEG, PSOE y VOX a favor)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Comunidades energéticas: impulso a la energía renovable compartida entre vecinos (PSOE, Más Madrid y Podemos a favor)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Exigir al Ministerio de Transportes mejoras urgentes en la red de Cercanías de Madrid (PP, ULEG y VOX a favor)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Extensión de Bicimad (bicicletas eléctricas compartidas) a Leganés (amplio consenso)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Protección del despoblado medieval de Polvoranca (amplio consenso)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Apertura de pistas deportivas de colegios fuera del horario escolar (unanimidad)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Campaña municipal contra la violencia sexual hacia menores (amplio consenso)." },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Menús halal en comedores escolares (solo VOX a favor; resto en contra)." },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Convalidación de acto de Intervención municipal (PP y ULEG a favor; VOX se abstuvo; resto en contra)." }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/live/duGzBOfm_BU"
    },
    {
      año: 2026,
      dia: 26,
      mes: "FEB",
      tipo: "Ordinario",
      titulo: "Pleno de febrero 2026",
      acuerdos: [
        { icono: "ℹ️", texto: "<strong>INFORMADO</strong> — Sesión ordinaria celebrada el 26 de febrero. El acta fue aprobada por unanimidad en el pleno de marzo." },
        { icono: "ℹ️", texto: "<strong>INFORMADO</strong> — Sesión disponible en vídeo en el canal YouTube del Ayuntamiento (2 partes)." }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/live/Rj59AItUrUs"
    },
    {
      año: 2026,
      dia: 15,
      mes: "ENE",
      tipo: "Ordinario",
      titulo: "Pleno de enero 2026",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Tres mociones presentadas por el PSOE salieron adelante en este pleno." },
        { icono: "ℹ️", texto: "<strong>CONTEXTO POLÍTICO</strong> — El PSOE criticó la «falta de proyecto y planificación» del Gobierno local (PP-ULEG). El Ayuntamiento funciona con el presupuesto prorrogado de 2025." },
        { icono: "ℹ️", texto: "<strong>INFORMADO</strong> — Sesión disponible en vídeo en el canal YouTube del Ayuntamiento." }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/live/yQ3eSpeqZPQ"
    },

    // ── 2025 ──
    {
      año: 2025,
      dia: 10,
      mes: "OCT",
      tipo: "Ordinario",
      titulo: "Pleno de octubre 2025",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Plan de control de plagas y mejora de la limpieza urbana (PSOE, Más Madrid, Podemos y VOX a favor; PP y ULEG en contra)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Programa de salud sexual para jóvenes (PSOE, ULEG, Más Madrid y Podemos a favor; VOX en contra; PP se abstuvo)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Apertura de patios de colegios públicos fuera del horario lectivo para uso ciudadano (PSOE, Más Madrid y Podemos a favor; PP y ULEG se abstuvieron)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Medidas de apoyo a mujeres víctimas de violencia de género (amplio respaldo; VOX en contra)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Programa 'Libros a la calle': actividades culturales en espacios públicos (VOX, PSOE y PP a favor)." },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Convalidación de factura de 311 € pendiente de pago (PSOE, Más Madrid, Podemos y VOX en contra; PP y ULEG a favor)." }
      ],
      linkActa: "https://www.leganes.org/actas-de-los-plenos",
      linkVideo: "https://www.youtube.com/results?search_query=pleno+leganes+octubre+2025"
    },
    {
      año: 2025,
      dia: 16,
      mes: "ENE",
      tipo: "Ordinario",
      titulo: "Pleno de enero 2025",
      acuerdos: [
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Pago de facturas atrasadas solicitado por el Gobierno (PP-ULEG). La oposición votó en contra por dudas sobre el crédito disponible; VOX se abstuvo." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE sobre atención temprana infantil: se propuso crear un convenio con entidad privada para ampliar plazas." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE sobre transporte público: crítica a modificaciones de líneas de autobús (oposición a favor; Gobierno en contra)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE para que la Comunidad de Madrid construya una residencia pública de mayores en Leganés." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de VOX sobre plan integral para las galerías comerciales. Aprobada por unanimidad." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de Podemos sobre mejora de la calidad ambiental en Leganés." }
      ],
      linkActa: "https://www.leganes.org/actas-de-los-plenos",
      linkVideo: "https://www.youtube.com/results?search_query=pleno+leganes+enero+2025"
    }
  ],

  // ── PRESUPUESTO ──────────────────────────────────────────────
  // Fuente: Prórroga Presupuestaria 2026 (= Presupuesto 2025 prorrogado)
  // leganes.org/web/transparencia/presupuestos-anuales
  // Nota: el presupuesto 2026 de 228 M€ fue rechazado en el pleno de mayo 2026.
  // Actualmente el Ayuntamiento opera con el presupuesto 2025 prorrogado.
  presupuestoTotal: 193,

  gastos: [
    { label: "Servicios sociales y bienestar", millon: 38.5, color: "#1a56db" },
    { label: "Personal y administración", millon: 32.4, color: "#6b7280" },
    { label: "Urbanismo y vivienda", millon: 28.2, color: "#0e9f6e" },
    { label: "Deporte y cultura", millon: 22.1, color: "#7e3af2" },
    { label: "Seguridad (Policía Local)", millon: 20.8, color: "#f05252" },
    { label: "Mantenimiento y obras", millon: 18.6, color: "#ff5a1f" },
    { label: "Educación e infancia", millon: 16.3, color: "#fbbf24" },
    { label: "Medio ambiente y limpieza", millon: 12.1, color: "#34d399" },
    { label: "Otros", millon: 4.0,  color: "#9ca3af" }
  ],

  ingresos: [
    { icono: "🏠", label: "IBI (impuesto sobre inmuebles)",            millon: 72.3, desc: "Lo que pagan los propietarios de viviendas y locales" },
    { icono: "🤝", label: "Transferencias del Estado",                 millon: 55.4, desc: "Dinero que el Estado central cede a los municipios" },
    { icono: "📍", label: "Transferencias de la Comunidad de Madrid",  millon: 22.1, desc: "Aportaciones de la Comunidad de Madrid" },
    { icono: "💡", label: "Tasas y precios públicos",                  millon: 19.8, desc: "Recogida de basura, guarderías municipales, piscinas…" },
    { icono: "🚗", label: "Impuesto de vehículos (IVTM)",              millon: 14.8, desc: "Lo que pagan los propietarios de coches, motos, etc." },
    { icono: "🏗️", label: "Licencias urbanísticas y otras tasas",      millon: 8.6,  desc: "Tasas por obras, apertura de negocios, etc." }
  ],

  // ── CONTRATOS ─────────────────────────────────────────────────
  // Fuente: leganes.org/web/transparencia/licitacion-e-informacion-de-obras-publicas
  // Nota: los datos de contratos detallados están en Excel en el portal.
  // Los importes incluidos son los aprobados en pleno o anunciados oficialmente.
  contratos: [
    {
      nombre: "Subvenciones a clubs deportivos 2026",
      detalle: "Voleibol Leganés, Baloncesto Leganés, Fútbol Sala Masdeporte, Balonmano Leganés y ADIL",
      importe: "1.952.000 €",
      tipo: "Subvenciones",
      estado: "adjudicado"
    },
    {
      nombre: "Rehabilitación de la Ermita de Polvoranca",
      detalle: "Primera fase de restauración del patrimonio histórico del despoblado medieval de Polvoranca",
      importe: "5.000.000 €",
      tipo: "Obras",
      estado: "licitacion"
    },
    {
      nombre: "Renovación del alumbrado público a LED",
      detalle: "Sustitución de puntos de luz por tecnología LED — incluida en los presupuestos 2026",
      importe: "Incluido en 27 M€ de infraestructuras",
      tipo: "Obras",
      estado: "licitacion"
    },
    {
      nombre: "Proyecto 'Puerta de Madrid'",
      detalle: "Desarrollo urbanístico con 4.000 nuevas viviendas, el 60% con algún tipo de protección pública",
      importe: "Por determinar",
      tipo: "Urbanismo",
      estado: "licitacion"
    },
    {
      nombre: "Nuevos camiones de recogida de residuos",
      detalle: "Renovación de la flota de vehículos del servicio municipal de recogida de basura",
      importe: "Por determinar",
      tipo: "Suministros",
      estado: "licitacion"
    },
    {
      nombre: "Climatización de escuelas infantiles y centros municipales",
      detalle: "Instalación de sistemas de aire acondicionado y calefacción en centros municipales",
      importe: "Incluido en presupuesto 2026",
      tipo: "Obras",
      estado: "licitacion"
    }
  ]
};
