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
      dia: 30,
      mes: "ABR",
      tipo: "Ordinario",
      titulo: "Pleno Ordinario de abril 2026",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Acta de la sesión ordinaria del 26 de marzo de 2026. (Unanimidad)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Inscripción en el Registro Municipal de Asociaciones de LEGABAILA y del Club Deportivo Elemental Walking Fútbol Leganés. (PP, PSOE, ULEG, Más Madrid y Podemos-IU-AV a favor; VOX se abstiene)" },
        { icono: "ℹ️", texto: "<strong>EN DEBATE</strong> — Moción de Más Madrid para que el Ayuntamiento apoye a las trabajadoras de las escuelas infantiles en huelga indefinida, reclamando mejores salarios, reducción de ratios y reconocimiento de su labor. (Resultado no recogido en el acta disponible)" }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/live/uG1YFbpLtSU"
    },
    {
      año: 2026,
      dia: 27,
      mes: "MAR",
      tipo: "Ordinario",
      titulo: "Pleno Ordinario de marzo 2026",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Acta de la sesión del 26 de febrero. (Unanimidad)" },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Convalidación de factura a Jotrinsa por 27.560 €. (PP y ULEG a favor; VOX se abstiene; PSOE, Más Madrid y Podemos en contra)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Modificación del presupuesto para subvenciones deportivas. (PP, ULEG y VOX a favor; PSOE, Más Madrid y Podemos se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Subvención nominativa a Cáritas Diocesana para atención social. (PP y ULEG a favor; PSOE y VOX se abstienen; Más Madrid y Podemos en contra)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Inscripción de asociaciones y entidades en el Registro Municipal. (PP, ULEG, PSOE, Más Madrid y Podemos a favor; VOX se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de VOX: estudio de elementos arquitectónicos singulares de Leganés para protegerlos. (PP, ULEG, PSOE y VOX a favor; Más Madrid y Podemos se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de VOX: instalación de señalización luminosa LED en el suelo en pasos de peatones semaforizados. (PP, ULEG, PSOE y VOX a favor; Más Madrid y Podemos se abstienen)" },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Moción de VOX: comedores escolares con menús halal. (Solo VOX a favor; PP, ULEG, PSOE, Más Madrid y Podemos en contra)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de Más Madrid: impulso a comunidades energéticas para energía renovable compartida. (PSOE, Más Madrid y Podemos a favor; PP, ULEG y VOX se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de Más Madrid: rechazo al ataque de EEUU e Israel contra Irán. (PSOE, ULEG, Más Madrid y Podemos a favor; PP y VOX en contra)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de Podemos: campaña de prevención de violencia sexual hacia menores. (PP, ULEG, PSOE, Más Madrid y Podemos a favor; VOX se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE: reapertura de pistas deportivas de colegios fuera del horario escolar. (Unanimidad)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE: extensión del servicio de bicicletas Bicimad a Leganés. (PP, ULEG, PSOE, Más Madrid y Podemos a favor; VOX se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE: protección del despoblado medieval de Polvoranca. (PP, ULEG, PSOE, Más Madrid y Podemos a favor; VOX se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PP: medidas urgentes para mejorar la red de Cercanías de Madrid. (PP, ULEG y VOX a favor; PSOE, Más Madrid y Podemos en contra)" }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/live/duGzBOfm_BU"
    },
    {
      año: 2026,
      dia: 26,
      mes: "FEB",
      tipo: "Ordinario",
      titulo: "Pleno Ordinario de febrero 2026",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Acta de la sesión del 15 de enero. (Unanimidad)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Compatibilidad laboral: agente de la Policía Local autorizado a ser profesor asociado en la Universidad de Nebrija (tarde, sin solapar horarios). (PP y ULEG a favor; PSOE, Más Madrid, Podemos-IU y VOX se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Compatibilidad laboral: empleado municipal autorizado a ser profesor asociado en la Universidad Autónoma de Madrid. (PP y ULEG a favor; PSOE, Más Madrid, Podemos-IU y VOX se abstienen)" },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Recurso de reposición de la empresa Cataliza. (PP y ULEG a favor; PSOE, Más Madrid y Podemos en contra; VOX se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Plan especial para parcela RU manzana 2. (PP, ULEG y PSOE a favor; Más Madrid, Podemos y VOX se abstienen)" },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Moción de VOX: prohibición de ocultar el rostro en espacios públicos. (Solo VOX a favor; PSOE, Más Madrid y Podemos en contra; PP y ULEG se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de VOX: estudio de riesgos ferroviarios en Leganés. (VOX a favor; PP, ULEG, PSOE, Más Madrid y Podemos se abstienen)" },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Moción de VOX: regularización de migrantes. (Solo VOX a favor; PP, ULEG, PSOE, Más Madrid y Podemos en contra o abstención)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de Podemos: conmemoración del 8M. (PSOE, ULEG, Más Madrid y Podemos a favor; VOX en contra; PP se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de Podemos: regularización de migrantes. (PSOE, Más Madrid y Podemos a favor; PP y VOX en contra; ULEG se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de ULEG: apoyo al Club Voleibol Leganés Femenino y petición a la Federación de que reconsidere su sanción. (Unanimidad)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de Más Madrid: salud mental. (PSOE, ULEG, Más Madrid y Podemos a favor; PP en contra; VOX se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de Más Madrid: vivienda para mujeres víctimas de violencia. (PSOE, ULEG, Más Madrid y Podemos a favor; VOX en contra; PP se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE: revisión de calefacciones en edificios municipales. (PSOE, Más Madrid, Podemos y VOX a favor; PP y ULEG en contra)" },
        { icono: "🔄", texto: "<strong>RETIRADA</strong> — Moción del PSOE sobre el 8M. (Retirada por el proponente)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE: mesas de petanca en parques. (PSOE, Más Madrid, Podemos y VOX a favor; PP y ULEG se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADO (urgencia)</strong> — Moción del PSOE: reprobación del alcalde. (PSOE, Más Madrid y Podemos a favor; PP y ULEG en contra; VOX se abstiene)" }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/live/Rj59AItUrUs"
    },
    {
      año: 2026,
      dia: 15,
      mes: "ENE",
      tipo: "Ordinario",
      titulo: "Pleno Ordinario de enero 2026",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Acta de la sesión ordinaria del 11 de diciembre de 2025. (Unanimidad)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Cambio del día de los plenos ordinarios: a partir de febrero se celebrarán el último jueves de cada mes en vez del segundo, a las 16:00 h, a petición de la concejal de VOX que también es diputada en la Asamblea de Madrid y los plenos coincidían en el calendario. (Unanimidad)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de VOX: servicio de limpieza rápida de grafitis en paredes y mobiliario urbano, y vigilancia policial para sancionar pintadas ilegales. (PSOE y VOX a favor; PP, ULEG, Más Madrid y Podemos-IU se abstienen)" },
        { icono: "ℹ️", texto: "<strong>EN DEBATE</strong> — Moción de Más Madrid para exigir a la Comunidad de Madrid que rectifique el proyecto de ampliación de la línea 11 de Metro, ya que la nueva estación de La Fortuna no conectaría con Metrosur. (Resultado no disponible en el acta)" }
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
        { icono: "✅", texto: "<strong>APROBADO</strong> — Plan de control de plagas y mejora de la limpieza urbana. (PSOE, Más Madrid, Podemos y VOX a favor; PP y ULEG en contra)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Programa de salud sexual para jóvenes. (PSOE, ULEG, Más Madrid y Podemos a favor; VOX en contra; PP se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Apertura de patios de colegios públicos fuera del horario lectivo. (PSOE, Más Madrid y Podemos a favor; PP y ULEG se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Medidas de apoyo a mujeres víctimas de violencia de género. (Amplio respaldo; VOX en contra)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Programa 'Libros a la calle': actividades culturales en espacios públicos. (VOX, PSOE y PP a favor)" },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Convalidación de factura de 311 € pendiente. (PSOE, Más Madrid, Podemos y VOX en contra; PP y ULEG a favor)" }
      ],
      linkActa: "https://www.leganes.org/actas-de-los-plenos",
      linkVideo: "https://www.youtube.com/results?search_query=pleno+leganes+octubre+2025"
    },
    {
      año: 2025,
      dia: 2,
      mes: "JUL",
      tipo: "Ordinario",
      titulo: "Pleno debate Estado de la Ciudad 2025",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADA</strong> — Propuesta de Podemos: plantación de 20.000 árboles en Leganés. (PSOE, Más Madrid y Podemos a favor; ULEG y VOX se abstienen; PP en contra)" },
        { icono: "❌", texto: "<strong>RECHAZADA</strong> — Propuesta de Podemos: adquisición de 20 viviendas anuales para alquiler social. (PSOE, Más Madrid y Podemos a favor; ULEG se abstiene; PP y VOX en contra)" },
        { icono: "❌", texto: "<strong>RECHAZADA</strong> — Propuesta de Podemos: creación de la Casa de la Mujer Leganense. (PSOE, Más Madrid y Podemos a favor; ULEG se abstiene; PP y VOX en contra)" },
        { icono: "❌", texto: "<strong>RECHAZADA</strong> — Propuesta de VOX: reforma del Reglamento Orgánico Municipal. (PSOE y VOX a favor; Más Madrid y Podemos se abstienen; PP y ULEG en contra)" },
        { icono: "❌", texto: "<strong>RECHAZADA</strong> — Propuesta de Más Madrid: solución a la vivienda (zona tensionada y observatorio). (Más Madrid y Podemos a favor; PSOE se abstiene; PP, ULEG y VOX en contra)" },
        { icono: "✅", texto: "<strong>APROBADA</strong> — Propuesta de Más Madrid: transparencia y pluralidad en medios municipales. (PSOE, Más Madrid, Podemos y VOX a favor; PP y ULEG en contra)" },
        { icono: "✅", texto: "<strong>APROBADA</strong> — Propuesta de Más Madrid: transición energética y gestión sostenible de residuos. (PSOE, Más Madrid y Podemos a favor; PP, ULEG y VOX se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADA</strong> — Propuesta de ULEG: Centro Base de Atención para personas con discapacidad. (PP, ULEG y VOX a favor; PSOE, Más Madrid y Podemos se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADA</strong> — Propuesta de ULEG: Oficina de la Tesorería de la Seguridad Social en Leganés. (PP, ULEG y VOX a favor; PSOE, Más Madrid y Podemos se abstienen)" },
        { icono: "❌", texto: "<strong>RECHAZADA</strong> — Propuesta conjunta PP-ULEG: Plan Estratégico Municipal de Urbanismo. (PP y ULEG a favor; PSOE, Más Madrid, Podemos y VOX en contra)" },
        { icono: "❌", texto: "<strong>RECHAZADA</strong> — Propuesta del PSOE: aparcamientos en cooperativas y reforma de zonas peatonales. (PSOE y VOX a favor; Más Madrid y Podemos se abstienen; PP y ULEG en contra)" },
        { icono: "✅", texto: "<strong>APROBADA</strong> — Propuesta del PSOE: mejoras en transporte (línea 11, Metro, soterramiento M-406). (PSOE, Más Madrid, Podemos y VOX a favor; ULEG se abstiene; PP en contra)" },
        { icono: "❌", texto: "<strong>RECHAZADA</strong> — Propuesta del PSOE: zona tensionada de vivienda y nuevo Plan General de Ordenación Urbana. (PSOE, Más Madrid y Podemos a favor; VOX se abstiene; PP y ULEG en contra)" },
        { icono: "✅", texto: "<strong>APROBADA</strong> — Propuesta del PP: Programa de prevención de violencias y digitalización. (PP y ULEG a favor; PSOE, Más Madrid, Podemos y VOX se abstienen)" },
        { icono: "✅", texto: "<strong>APROBADA</strong> — Propuesta del PP: Plan Integral de Apoyo a Familias y natalidad. (PP y ULEG a favor; VOX se abstiene; PSOE, Más Madrid y Podemos en contra)" }
      ],
      linkActa: "https://www.leganes.org/actas-de-los-plenos",
      linkVideo: "https://www.youtube.com/results?search_query=pleno+debate+estado+ciudad+leganes+2025"
    },
    {
      año: 2025,
      dia: 10,
      mes: "ABR",
      tipo: "Ordinario",
      titulo: "Pleno de abril 2025",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Actas de sesiones extraordinarias de marzo (días 6, 7, 11 y 12). (PP, ULEG, Más Madrid y VOX a favor; Podemos se abstiene; PSOE en contra)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Declaración institucional contra el fraude, la corrupción y los conflictos de interés. (Unanimidad)" },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Convalidación de facturas de EMSULE por 56.903 €. (PP y ULEG a favor; PSOE, Más Madrid y Podemos en contra; VOX se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Compatibilidad para actividad docente en la Universidad de Nebrija. (PP y ULEG a favor; resto se abstiene)" },
        { icono: "🔄", texto: "<strong>SOBRE LA MESA</strong> — Compatibilidad de consultoría de ingeniería. (Aplazado a petición de PSOE, Más Madrid y Podemos)" },
        { icono: "🔄", texto: "<strong>SOBRE LA MESA</strong> — Ejecución de sentencia sobre corrección del PGOU. (Aplazado a petición de PSOE, Más Madrid y Podemos)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Plan Municipal de Cooperación 2025-2029. (PP, ULEG, PSOE, Más Madrid y Podemos a favor; VOX en contra)" },
        { icono: "❌", texto: "<strong>RECHAZADA</strong> — Moción de VOX sobre un libro controvertido en un colegio. (PP, ULEG, PSOE, Más Madrid y Podemos en contra; VOX a favor)" },
        { icono: "✅", texto: "<strong>APROBADA</strong> — Moción de VOX: registro autonómico de ensayos clínicos. (VOX a favor; resto se abstiene)" },
        { icono: "🔄", texto: "<strong>RETIRADA</strong> — Moción de VOX sobre igualdad en procesos selectivos. (Retirada por el proponente)" },
        { icono: "❌", texto: "<strong>RECHAZADA</strong> — Proposición de Más Madrid sobre alquileres indefinidos. (Más Madrid y Podemos a favor; PSOE se abstiene; PP, ULEG y VOX en contra)" },
        { icono: "✅", texto: "<strong>APROBADA</strong> — Moción de Más Madrid: creación de empresa municipal de servicios. (PSOE, Más Madrid y Podemos a favor; VOX se abstiene; PP y ULEG en contra)" },
        { icono: "🔄", texto: "<strong>RETIRADA</strong> — Moción del PP sobre financiación autonómica. (Retirada por el proponente)" },
        { icono: "✅", texto: "<strong>APROBADA</strong> — Moción del PSOE: apertura de pistas deportivas de colegios antes de junio. (Unanimidad)" },
        { icono: "✅", texto: "<strong>APROBADA</strong> — Moción del PSOE: conmemoración del 50 aniversario de la democracia en España. (PSOE, Más Madrid y ULEG a favor; Podemos se abstiene; PP y VOX en contra)" },
        { icono: "🔄", texto: "<strong>RETIRADA</strong> — Moción de Podemos sobre cumplimiento de propuestas. (Retirada por el proponente)" }
      ],
      linkActa: "https://www.leganes.org/actas-de-los-plenos",
      linkVideo: "https://www.youtube.com/results?search_query=pleno+leganes+abril+2025"
    },
    {
      año: 2025,
      dia: 13,
      mes: "MAR",
      tipo: "Ordinario",
      titulo: "Pleno de marzo 2025",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Acta de la sesión del 13 de febrero. (Unanimidad)" },
        { icono: "🔄", texto: "<strong>RETIRADA</strong> — Declaración institucional contra el fraude y la corrupción. (Retirada por el PSOE)" },
        { icono: "🔄", texto: "<strong>RETIRADA</strong> — Ordenanza de tarjeta de estacionamiento para personas con discapacidad. (Retirada por la oposición para revisión)" },
        { icono: "❌", texto: "<strong>RECHAZADAS</strong> — 8 propuestas del Gobierno para el pago de facturas pendientes (2015-2024). (PP y ULEG a favor; PSOE, Más Madrid y Podemos en contra; VOX se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADAS</strong> — Inscripción de asociaciones en el Registro Municipal. (PP, ULEG, PSOE, Más Madrid y Podemos a favor; VOX se abstiene)" },
        { icono: "🔄", texto: "<strong>RETIRADAS</strong> — Tres mociones de VOX (ensayos clínicos, igualdad en selectivos, libro escolar). (Retiradas por el proponente)" },
        { icono: "🔄", texto: "<strong>RETIRADAS</strong> — Mociones de la oposición (alquiler indefinido, cumplimiento de plenos, 50 años libertad, pistas abiertas). (Retiradas por los proponentes)" },
        { icono: "ℹ️", texto: "<strong>CONTEXTO</strong> — Pleno exprés de apenas 30 minutos por la retirada masiva de propuestas." }
      ],
      linkActa: "https://www.leganes.org/actas-de-los-plenos",
      linkVideo: "https://www.youtube.com/results?search_query=pleno+leganes+marzo+2025"
    },
    {
      año: 2025,
      dia: 13,
      mes: "FEB",
      tipo: "Ordinario",
      titulo: "Pleno de febrero 2025",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Actas de la sesión extraordinaria del 14 de enero y la ordinaria del 16 de enero. (Unanimidad)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de VOX: protocolo de transparencia en reuniones con terceros que tienen expedientes en el Ayuntamiento. (PSOE, Más Madrid y VOX a favor; Podemos se abstiene; PP y ULEG en contra)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de VOX: reunión con voluntarias cuidadoras de colonias felinas. (Unanimidad)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE: medidas para mejorar la calidad del aire. (PSOE, Más Madrid y Podemos a favor; PP y ULEG se abstienen; VOX en contra)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE: información veraz y plural en la comunicación municipal. (PSOE, Más Madrid, Podemos y VOX a favor; PP y ULEG en contra)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE: modificación de la ordenanza de protección animal. (Unanimidad)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de Podemos: reconocimiento a Pepe Mujica como referente mundial. (PSOE, ULEG, Más Madrid, Podemos y VOX a favor; PP se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de Más Madrid: contratación urgente del servicio de ayuda a domicilio con garantías salariales. (PSOE, Más Madrid y Podemos a favor; PP, ULEG y VOX se abstienen)" }
      ],
      linkActa: "https://www.leganes.org/actas-de-los-plenos",
      linkVideo: "https://www.youtube.com/results?search_query=pleno+leganes+febrero+2025"
    },
    {
      año: 2025,
      dia: 16,
      mes: "ENE",
      tipo: "Ordinario",
      titulo: "Pleno de enero 2025",
      acuerdos: [
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Pago de facturas atrasadas solicitado por el Gobierno (PP-ULEG). (Oposición en contra; VOX se abstiene)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE: atención temprana infantil (convenio con entidad privada para ampliar plazas)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE: transporte público (crítica a modificaciones de líneas de autobús)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción del PSOE: 6 parcelas a disposición de la Comunidad de Madrid para construir una residencia pública de mayores." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de VOX: plan integral para las galerías comerciales. (Unanimidad)" },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Moción de Podemos: mejora de la calidad ambiental en Leganés." }
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

  // ── SUBVENCIONES ──────────────────────────────────────────────
  // Fuente: leganes.org/web/transparencia/convocatoria-anual-local-subvenciones
  subvenciones: [
    {
        "nombre": "Entidades y asociaciones locales sin ánimo de lucro - Área Cultura",
        "detalle": "Financiar proyectos culturales desarrollados por asociaciones locales sin ánimo de lucro",
        "importe": null,
        "beneficiarios": null,
        "estado": "resuelta"
    },
    {
        "nombre": "Entidades y asociaciones locales sin ánimo de lucro - Área Cultura UPL",
        "detalle": "Financiar proyectos culturales en el marco del programa Cultura UPL",
        "importe": null,
        "beneficiarios": null,
        "estado": "resuelta"
    },
    {
        "nombre": "Entidades y asociaciones locales sin ánimo de lucro - Área Deportes",
        "detalle": "Financiar proyectos y actividades deportivas desarrollados por asociaciones locales",
        "importe": null,
        "beneficiarios": null,
        "estado": "resuelta"
    },
    {
        "nombre": "Entidades y asociaciones locales sin ánimo de lucro - Área Discapacidad",
        "detalle": "Financiar proyectos dirigidos a personas con discapacidad promovidos por asociaciones locales",
        "importe": null,
        "beneficiarios": null,
        "estado": "resuelta"
    },
    {
        "nombre": "Entidades y asociaciones locales sin ánimo de lucro - Área Empleo",
        "detalle": "Financiar proyectos de fomento del empleo desarrollados por asociaciones locales",
        "importe": null,
        "beneficiarios": null,
        "estado": "resuelta"
    },
    {
        "nombre": "Entidades y asociaciones locales sin ánimo de lucro - Área Cooperación",
        "detalle": "Financiar proyectos de cooperación y solidaridad promovidos por asociaciones locales",
        "importe": null,
        "beneficiarios": null,
        "estado": "resuelta"
    },
    {
        "nombre": "Entidades y asociaciones locales sin ánimo de lucro - Área Igualdad",
        "detalle": "Financiar proyectos de promoción de la igualdad desarrollados por asociaciones locales",
        "importe": null,
        "beneficiarios": null,
        "estado": "resuelta"
    },
    {
        "nombre": "Entidades y asociaciones locales sin ánimo de lucro - Área Servicios Sociales",
        "detalle": "Financiar proyectos de atención social promovidos por asociaciones locales",
        "importe": null,
        "beneficiarios": null,
        "estado": "resuelta"
    },
    {
        "nombre": "Entidades y asociaciones locales sin ánimo de lucro - Área Medio Ambiente y Sostenibilidad",
        "detalle": "Financiar proyectos medioambientales y de sostenibilidad desarrollados por asociaciones locales",
        "importe": null,
        "beneficiarios": null,
        "estado": "resuelta"
    },
    {
        "nombre": "Entidades y asociaciones locales sin ánimo de lucro - Juntas Municipales de Distrito (La Fortuna y San Nicasio)",
        "detalle": "Financiar proyectos vecinales y comunitarios en los distritos de La Fortuna y San Nicasio",
        "importe": null,
        "beneficiarios": null,
        "estado": "resuelta"
    }
],

  // ── CONTRATOS ─────────────────────────────────────────────────
  // Fuente: leganes.org/web/transparencia/licitacion-e-informacion-de-obras-publicas
  // Cada contrato tiene: año, mes (1-12), nombre, detalle, importe, tipo, estado
  contratos: [
    {
      año: 2026, mes: 5,
      nombre: "Subvenciones a clubs deportivos 2026",
      detalle: "Voleibol Leganés (+470.804 €), Baloncesto (+325.000 €), Fútbol Sala (+136.000 €), Balonmano (+40.797 €) y ADIL (+16.000 €)",
      importe: "988.601 €",
      tipo: "Subvenciones",
      estado: "adjudicado"
    },
    {
      año: 2026, mes: 3,
      nombre: "Rehabilitación de la Ermita de Polvoranca",
      detalle: "Primera fase de restauración del patrimonio histórico del despoblado medieval de Polvoranca",
      importe: "5.000.000 €",
      tipo: "Obras",
      estado: "licitacion"
    },
    {
      año: 2026, mes: 3,
      nombre: "Renovación del alumbrado público a LED",
      detalle: "Sustitución de puntos de luz en toda la ciudad por tecnología LED de bajo consumo",
      importe: "Por determinar",
      tipo: "Obras",
      estado: "licitacion"
    },
    {
      año: 2026, mes: 4,
      nombre: "Proyecto 'Puerta de Madrid'",
      detalle: "Desarrollo urbanístico con 4.000 nuevas viviendas, el 60% con algún tipo de protección pública",
      importe: "Por determinar",
      tipo: "Urbanismo",
      estado: "licitacion"
    },
    {
      año: 2026, mes: 4,
      nombre: "Nuevos camiones de recogida de residuos",
      detalle: "Renovación de la flota de vehículos del servicio municipal de recogida de basura",
      importe: "Por determinar",
      tipo: "Suministros",
      estado: "licitacion"
    },
    {
      año: 2026, mes: 4,
      nombre: "Climatización de escuelas infantiles y centros municipales",
      detalle: "Instalación de sistemas de climatización en colegios públicos y centros municipales",
      importe: "Por determinar",
      tipo: "Obras",
      estado: "licitacion"
    },
    {
      año: 2025, mes: 10,
      nombre: "Contrato de subvenciones a entidades deportivas 2025",
      detalle: "Club Baloncesto, Voleibol, Balonmano, Fútbol Sala y ADIL — subvenciones nominativas",
      importe: "963.500 €",
      tipo: "Subvenciones",
      estado: "adjudicado"
    },
    {
      año: 2025, mes: 7,
      nombre: "Obras de mejora en instalaciones deportivas",
      detalle: "Reforma del campo de fútbol 11 de La Fortuna e instalaciones del CAID",
      importe: "Por determinar",
      tipo: "Obras",
      estado: "finalizado"
    },
    {
      año: 2025, mes: 6,
      nombre: "Servicio de ayuda a domicilio (SAD)",
      detalle: "Atención a domicilio para personas mayores y dependientes, con garantías del convenio colectivo",
      importe: "Por determinar",
      tipo: "Servicios",
      estado: "ejecucion"
    },
    {
      año: 2025, mes: 4,
      nombre: "Plan Municipal de Cooperación 2025-2029",
      detalle: "Financiación de proyectos de cooperación internacional y solidaridad promovidos desde el Ayuntamiento",
      importe: "Por determinar",
      tipo: "Servicios",
      estado: "adjudicado"
    }
  ]
};
