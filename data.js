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
    "dia": 30,
    "mes": "ABR",
    "año": 2026,
    "tipo": "Ordinario",
    "titulo": "Pleno Ordinario de abril 2026",
    "acuerdos": [
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Se aprueba el acta de la sesión ordinaria del 26 de marzo de 2026, validando oficialmente lo tratado en el pleno anterior. (Aprobado por unanimidad de todos los grupos: PP, PSOE, ULEG, Más Madrid, Podemos-IU-AV y VOX)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Inscripción en el Registro Municipal de Asociaciones de dos nuevas entidades: la Asociación LEGABAILA (dedicada al baile) y el Club Deportivo Elemental Walking Futbol Leganés. Esto permite a estas asociaciones participar en los órganos de participación ciudadana del municipio y acceder a subvenciones y recursos municipales. (PP, PSOE, ULEG, Más Madrid y Podemos-IU-AV a favor; VOX se abstiene)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de Más Madrid para apoyar la huelga indefinida de trabajadoras de Escuelas Infantiles de la Comunidad de Madrid. El Ayuntamiento se compromete a garantizar el derecho a huelga en escuelas de gestión directa, reforzar la supervisión en escuelas de gestión indirecta, mejorar los pliegos de contratación incluyendo subidas salariales y eliminando la baja económica como criterio, e instar a la Comunidad de Madrid a negociar con las trabajadoras, incrementar financiación, reducir ratios e incorporar la pareja educativa. Afecta directamente a las condiciones laborales de educadoras y a la calidad de atención de los niños de 0-3 años en Leganés. (PSOE, ULEG, Más Madrid y Podemos-IU-AV a favor; PP y VOX se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de Más Madrid sobre vertidos ilegales. Se reconoce el fracaso de las políticas actuales contra los vertidos ilegales y se insta a elaborar en 3 meses un Plan de Emergencia que incluya: inventario georreferenciado de puntos negros, plan de vigilancia coordinada, control de acceso físico con barreras, videovigilancia, protocolo ágil de sanciones e integración de drones. También se lanzará una campaña de sensibilización y se presentarán informes semestrales al Pleno. Afecta a zonas como el Parque de Polvoranca, Centro Comercial ArroyoSur y la futura Avda. de la Innovación. (PSOE, Más Madrid y Podemos-IU-AV a favor; PP, ULEG y VOX se abstienen)"
        },
        {
            "icono": "❌",
            "texto": "<strong>RECHAZADO</strong> — Moción de VOX sobre \"prioridad nacional\" que pedía repatriar inmigrantes ilegales, establecer prioridad para españoles en ayudas sociales, vivienda y sanidad, derogar el Real Decreto de regularización de inmigrantes y reservar pensiones no contributivas solo a españoles. La moción fue rechazada por considerar que vulnera principios de igualdad y derechos humanos. (VOX a favor; PP, PSOE, ULEG, Más Madrid y Podemos-IU-AV en contra)"
        },
        {
            "icono": "❌",
            "texto": "<strong>RECHAZADO</strong> — Moción de Podemos-IU-AV para trasladar la Feria de San Nicasio al Recinto Ferial de Leganés, debido a las molestias por ruido que sufren los vecinos de las calles Violeta Parra y Palmeras, situados a 50 metros de la ubicación actual. Los vecinos denuncian problemas de descanso y exceso de decibelios. La moción no prosperó al no alcanzar mayoría suficiente. (VOX y Podemos-IU-AV (parcial) a favor; ULEG y Podemos-IU-AV (parcial) en contra; PP, PSOE y Más Madrid se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de Podemos-IU-AV por una Sanidad Pública de calidad para el Hospital Severo Ochoa. Se insta al Alcalde a exigir a la Comunidad de Madrid la dotación de recursos y medios necesarios para el Hospital Severo Ochoa y los Centros de Salud de Leganés. La moción denuncia la falta de médicos, sanitarios y recursos derivada de las políticas de la Comunidad de Madrid. (PSOE, Más Madrid y Podemos-IU-AV a favor; PP en contra; ULEG y VOX se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción del PSOE para impulsar una estrategia de renaturalización urbana y fomento de la biodiversidad. Incluye: recuperación ecológica de alcorques con especies autóctonas, creación de corredores verdes, conservación de solares como espacios de biodiversidad, huertos urbanos comunitarios, renaturalización de fuentes urbanas, plan de reposición de arbolado, creación de oasis para polinizadores con hoteles de insectos, instalación de cajas nido para aves y refugios para murciélagos como control biológico de plagas, y red de compostaje comunitario por barrios. Se fomentará la participación de asociaciones como \"Hope Leganes por la Regeneración\". (PSOE, Más Madrid y Podemos-IU-AV a favor; PP, ULEG y VOX se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción del PSOE para garantizar la mejora de la Educación Infantil (0-3 años). Se insta a la Comunidad de Madrid a: desarrollar normativamente el ciclo 0-3 con financiación íntegra autonómica, modificar el Decreto 18/2008 actualizando ratios según criterios europeos, incrementar financiación, integrar atención temprana, reforzar atención a la diversidad, mejorar condiciones laborales de las profesionales, extender el modelo de pareja educativa, y revisar contratos de gestión de escuelas infantiles priorizando calidad educativa sobre prórrogas automáticas. (PSOE, Más Madrid y Podemos-IU-AV a favor; PP, ULEG y VOX se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción del PSOE para recuperar las Urgencias de Atención Primaria con dotación médica completa. Se exige a la Comunidad de Madrid reabrir los dispositivos de urgencias en los Centros de Salud Marie Curie (La Fortuna) y María Ángeles López (Zarzaquemada) con equipos sanitarios completos incluyendo médicos, evaluar públicamente el impacto del actual modelo de Puntos de Atención Continuada (PAC) en la calidad asistencial, y defender activamente los intereses sanitarios de los vecinos. Esto afecta directamente a la atención urgente nocturna y de fines de semana en estos barrios. (PSOE, Más Madrid, VOX y Podemos-IU-AV a favor; PP y ULEG se abstienen)"
        },
        {
            "icono": "❌",
            "texto": "<strong>RECHAZADO</strong> — Moción del PP contra la regularización masiva de inmigrantes aprobada por el Gobierno de España (Real Decreto 316/2026). Solicitaba rechazar la política migratoria del Gobierno, retirar el Real Decreto, exigir memoria económica detallada y financiación para municipios, y denunciaba el colapso de servicios sociales en Leganés. La moción no prosperó. (PP a favor; PSOE, Más Madrid, VOX y Podemos-IU-AV en contra; ULEG se abstiene)"
        },
        {
            "icono": "❌",
            "texto": "<strong>RECHAZADO</strong> — Moción de urgencia de VOX sobre seguridad en eventos públicos, presentada tras los altercados del 24 de abril en el parque de La Fortuna durante la Feria de Sevilla. Pedía que el Alcalde no garantizase públicamente la seguridad sin medidas estructurales previas, que no se celebren eventos sin dispositivos de seguridad específicos y control de accesos, y que se refuerce la presencia policial sin mermar cobertura en otros barrios. La urgencia fue declarada pero la moción fue rechazada. (PSOE y VOX a favor; PP y ULEG en contra; Más Madrid y Podemos-IU-AV se abstienen)"
        },
        {
            "icono": "ℹ️",
            "texto": "<strong>INFORMADO</strong> — Dación de cuenta de Decretos y Resoluciones del 16 de marzo al 17 de abril de 2026. Se informa al Pleno de todas las decisiones adoptadas por Alcaldía y Junta de Gobierno Local durante este período, cumpliendo con la obligación de transparencia y control. (La Corporación quedó enterada)"
        },
        {
            "icono": "🔄",
            "texto": "<strong>RETIRADO</strong> — Comparecencia solicitada por VOX de la Concejala de Hacienda para explicar el importe exacto del remanente de tesorería tras el cierre de 2025, el desglose por concejalías del dinero no gastado y los motivos por los que el gobierno no ejecutó todo el presupuesto de 212 millones de euros. Según VOX, el remanente supera los 100 millones de euros. La comparecencia fue retirada por el grupo proponente."
        },
        {
            "icono": "ℹ️",
            "texto": "<strong>INFORMADO</strong> — Interpelación de VOX al Concejal de Economía sobre el contrato menor de 13.281,31€ adjudicado a SIGMADOS SL para un \"Estudio de opinión sobre la calidad de vida y los servicios públicos en Leganés\". VOX preguntó por las preguntas del estudio, número de encuestas por barrio, fechas, publicación de datos en bruto, posibles preguntas sobre intención de voto y la intención del estudio a un año de las elecciones municipales de 2027. (Se sustanció la interpelación con intervención del interpelante e interpelado)"
        }
    ],
    "linkActa": "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
    "linkVideo": "https://www.youtube.com/results?search_query=pleno+leganes+abr+2026"
},
    {
    "dia": 26,
    "mes": "MAR",
    "año": 2026,
    "tipo": "Ordinario",
    "titulo": "Pleno Ordinario de marzo 2026",
    "acuerdos": [
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Aprobación del acta de la sesión ordinaria celebrada el 26 de febrero de 2026. Se valida oficialmente el contenido de lo tratado en el pleno anterior. (Unanimidad de todos los grupos)"
        },
        {
            "icono": "❌",
            "texto": "<strong>RECHAZADO</strong> — Reconocimiento de deuda de 27.560,39€ a la empresa Jotrinsa Talleres por suministro de materiales eléctricos y mecánicos para vehículos de la Policía Local. Se trataba de facturas de 2017-2018 que no siguieron el procedimiento correcto de fiscalización. El dictamen de la Comisión era desfavorable y la propuesta fue rechazada, por lo que la deuda no se reconoce y el proveedor no cobrará por ahora. (PP y ULEG a favor de rechazar; PSOE, Más Madrid y Podemos-IU-AV en contra; VOX se abstiene)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Modificación de las Bases de Ejecución del Presupuesto para incluir subvenciones nominativas a entidades deportivas por un total de 981.399€. Los clubes beneficiados son: ADIL (31.500€), Baloncesto Leganés (325.500€), Leganés FS Masdeporte (264.000€), Balonmano Leganés (143.203€), Voleibol Leganés (199.196€) y UFEDEMA (18.000€). Esto permitirá que estos clubes reciban financiación municipal para sus actividades deportivas en 2026. (PP, ULEG y VOX a favor; PSOE, Más Madrid y Podemos-IU-AV se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Modificación de las Bases de Ejecución del Presupuesto para incluir una subvención nominativa de 200.000€ a Cáritas Diocesana de Getafe. Este dinero se destinará a programas de ayuda social para personas en situación de vulnerabilidad en Leganés durante 2026. (PP y ULEG a favor; Más Madrid y Podemos-IU-AV en contra; PSOE y VOX se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Inscripción en el Registro Municipal de Entidades Ciudadanas de la Fundación Familia Sociedad y Educación, con sede en Avda. de la Universidad, 1. Esta inscripción permite a la fundación participar en los órganos de participación ciudadana del municipio. (PP, PSOE, ULEG, Más Madrid y Podemos-IU-AV a favor; VOX se abstiene)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Inscripción en el Registro Municipal de Entidades Ciudadanas de 7 nuevas asociaciones: Espacio Artesano Es-Arte, C.D.E Zero Nets, Asociación Virgen de la Asunción de Chacas-Ancón-Madrid, Club Deportivo Elemental Inguz, Club Deportivo Elemental Los Botones Nuevos, Club Deportivo Elemental Gorditos F.C. y Asociación Masqueapaso. Estas entidades podrán participar en los órganos de participación ciudadana. (PP, PSOE, ULEG, Más Madrid y Podemos-IU-AV a favor; VOX se abstiene)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de VOX para estudiar y proteger elementos arquitectónicos singulares de Leganés ante posibles desapariciones, como la Torre de Tapón Corona, el antiguo Depósito de Agua de la CAM, la guardería Lope de Vega, la nave industrial de la calle Ramón y Cajal y la Central de Telefónica. Se revisará el catálogo de edificios protegidos para mejorar las protecciones existentes e incluir nuevos elementos. (PP, PSOE, ULEG y VOX a favor; Más Madrid y Podemos-IU-AV se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de VOX para instalar señalización luminosa en el suelo en pasos de peatones semaforizados (pasos de peatones inteligentes). Se realizará un estudio técnico para identificar cruces prioritarios, se dotará partida presupuestaria y se lanzará una campaña de concienciación. Medida pensada para mejorar la seguridad de peatones distraídos por el uso del móvil. (PP, PSOE, ULEG y VOX a favor; Más Madrid y Podemos-IU-AV se abstienen)"
        },
        {
            "icono": "❌",
            "texto": "<strong>RECHAZADO</strong> — Moción de VOX contra la imposición de menús halal en comedores escolares y hospitales públicos. La moción rechazaba el proyecto de Real Decreto del Gobierno central que contempla esta opción y pedía defender la gastronomía tradicional española frente a prácticas consideradas ajenas a nuestras costumbres. (VOX a favor; PP, PSOE, ULEG, Más Madrid y Podemos-IU-AV en contra)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de Más Madrid para impulsar las comunidades energéticas y el autoconsumo en Leganés. Se facilitará la creación de comunidades energéticas locales, se instalarán placas solares en edificios municipales, se estudiarán bonificaciones en el IBI para viviendas con autoconsumo y se creará un servicio de asesoramiento energético para vecinos. (PSOE, Más Madrid y Podemos-IU-AV a favor; PP, ULEG y VOX se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de Más Madrid contra el ataque de EEUU e Israel a Irán. El Pleno condena los ataques militares por vulnerar el derecho internacional, expresa solidaridad con las víctimas civiles, insta a la comunidad internacional a buscar una solución diplomática, respalda la posición del Gobierno de España de no participar en el conflicto y pide medidas de escudo social para proteger a los ciudadanos de las consecuencias económicas. (PSOE, Más Madrid y Podemos-IU-AV a favor; PP, ULEG y VOX en contra)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de Podemos-IU-AV para crear una campaña de prevención, ayuda y detección temprana contra la violencia sexual en menores de edad, que se desarrollará en todos los centros educativos de Leganés. Incluirá materiales formativos, talleres y ayuda psicológica de urgencia y seguimiento tras detectar posibles casos. (PP, PSOE, ULEG, Más Madrid y Podemos-IU-AV a favor; VOX en contra)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción del PSOE para reiterar la apertura de pistas deportivas de centros educativos fuera del horario lectivo (Programa Pistas Abiertas). Se insta al equipo de gobierno a poner en marcha este programa, estableciendo un modelo de uso con las comunidades educativas, priorizando tardes, fines de semana y periodos vacacionales. (Unanimidad de todos los grupos)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción del PSOE de apoyo a la extensión del servicio de bicicleta pública BiciMAD y estudio de su posible implantación en Leganés. Se insta a elaborar un informe técnico de viabilidad que analice demanda, costes, infraestructura necesaria y fuentes de financiación. También se pide reforzar la red de carriles bici y la intermodalidad con el transporte público. (PP, PSOE, ULEG, Más Madrid y Podemos-IU-AV a favor; VOX se abstiene)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción del PSOE para impulsar la protección integral, conservación, investigación y puesta en valor del despoblado de Polvoranca y la Iglesia de San Pedro. Se insta a la Comunidad de Madrid a elaborar un plan integral de protección, adoptar medidas urgentes de consolidación del edificio en ruinas y promover su integración en itinerarios culturales y turísticos. Es un enclave histórico con restos romanos y visigodos en grave estado de deterioro. (PP, PSOE, ULEG, Más Madrid y Podemos-IU-AV a favor; VOX se abstiene)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción del PP para exigir al Ministerio de Transportes medidas urgentes en la red de Cercanías. Se reprueba y pide la dimisión del Ministro Óscar Puente, se exige ejecutar el Plan de Mejoras de Cercanías de la Comunidad de Madrid, realizar una auditoría de la infraestructura, investigar el descarrilamiento de San Fernando de Henares y mejorar las estaciones de Zarzaquemada, Leganés Central y Parque Polvoranca. La línea C5 sufrió 217 incidencias en 2025 y 54 solo en el primer trimestre de 2026. (PP, ULEG y VOX a favor; PSOE, Más Madrid y Podemos-IU-AV en contra)"
        },
        {
            "icono": "ℹ️",
            "texto": "<strong>INFORMADO</strong> — Dar cuenta de la liquidación del Presupuesto 2025. Se informa al Pleno sobre el cierre de las cuentas del ejercicio presupuestario anterior, cumpliendo con la obligación legal de transparencia. (Punto informativo, sin votación)"
        },
        {
            "icono": "ℹ️",
            "texto": "<strong>INFORMADO</strong> — Dar cuenta de los Decretos y Resoluciones del 16 de febrero al 13 de marzo de 2026. Se informa de las decisiones adoptadas por la Alcaldía y la Junta de Gobierno Local durante este periodo. (Punto informativo, sin votación)"
        },
        {
            "icono": "ℹ️",
            "texto": "<strong>INFORMADO</strong> — Dar cuenta del Informe Anual sobre reparos efectuados, omisión de la función interventora y principales anomalías en materia de ingresos del ejercicio 2025. La Intervención informa de las irregularidades detectadas en la gestión económica municipal durante el año anterior. (Punto informativo, sin votación)"
        },
        {
            "icono": "ℹ️",
            "texto": "<strong>INFORMADO</strong> — Interpelación de Podemos-IU-AV a la Concejala de Salud (ULEG) Virginia Benito Serrano. Se le pregunta cómo puede aprobar la instalación de un centro médico privado de Quirón Salud en el Centro Comercial Parque Sur mientras la sanidad pública de Leganés está colapsada por falta de médicos y recursos. La concejala respondió a las preguntas formuladas. (Punto de control, sin votación)"
        }
    ],
    "linkActa": "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
    "linkVideo": "https://www.youtube.com/results?search_query=pleno+leganes+mar+2026"
},
    {
    "dia": 26,
    "mes": "FEB",
    "año": 2026,
    "tipo": "Ordinario",
    "titulo": "Pleno Ordinario de febrero 2026",
    "acuerdos": [
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Se aprueba el acta de la sesión ordinaria celebrada el 15 de enero de 2026, validando oficialmente lo tratado en el pleno anterior. (Unanimidad de todos los grupos)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Compatibilidad laboral para un Policía Local: se autoriza a un agente de la Policía Local a trabajar también como profesor asociado en la Universidad de Nebrija, impartiendo 10 horas semanales en horario de tarde hasta julio de 2026. Percibirá 6.937,32€ adicionales anuales, sin superar los límites legales. (PP y ULEG a favor; PSOE, Más Madrid, VOX y Podemos-IU-AV se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Compatibilidad laboral para un técnico cultural: se autoriza a un Técnico de Gestión Finalista Cultural del Ayuntamiento a ejercer como profesor asociado en la Universidad Autónoma de Madrid para el curso 2025/2026, en horario de tarde compatible con su jornada municipal. (PP y ULEG a favor; PSOE, Más Madrid, VOX y Podemos-IU-AV se abstienen)"
        },
        {
            "icono": "❌",
            "texto": "<strong>RECHAZADO</strong> — Recurso de reposición de una funcionaria denegado: una empleada municipal recurrió la denegación de compatibilidad para dar clases en la Universidad Complutense porque superaba los límites económicos legales. El Pleno rechaza darle la razón, por lo que sigue sin poder compatibilizar ambos trabajos. La oposición votó a favor de estimar su recurso. (PP y ULEG a favor de rechazar el recurso; PSOE, Más Madrid y Podemos-IU-AV en contra; VOX se abstiene)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Plan Especial urbanístico en San Nicasio: se aprueba definitivamente un plan que permite construir viviendas unifamiliares en una parcela del Ensanche de San Nicasio, modificando el retranqueo frontal (de 5 a 6 metros) y el fondo edificable (de 10 a 12 metros) para facilitar la entrada de garajes. Hubo alegaciones de vecinos colindantes preocupados por la pérdida de luz y vistas, pero se desestimaron. (PP, PSOE y ULEG a favor; Más Madrid, VOX y Podemos-IU-AV se abstienen)"
        },
        {
            "icono": "❌",
            "texto": "<strong>RECHAZADO</strong> — Moción de VOX sobre prohibir el burka y niqab en dependencias municipales: proponía impedir el acceso a edificios del Ayuntamiento a personas con el rostro cubierto por prendas como el burka o niqab, alegando razones de seguridad e identificación. La oposición de izquierdas votó en contra y el equipo de gobierno (PP y ULEG) se abstuvo. (VOX a favor; PSOE, Más Madrid y Podemos-IU-AV en contra; PP y ULEG se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de VOX sobre prevención de riesgos ferroviarios: tras el accidente de tren en Adamuz (Córdoba), se insta a crear un Plan Municipal de Prevención ante incidentes ferroviarios, solicitar información a ADIF sobre el estado de las vías en Leganés, integrar estos riesgos en los planes de emergencia y crear una comisión de seguimiento. Todos los grupos se abstuvieron salvo VOX. (VOX a favor; PP, PSOE, ULEG, Más Madrid y Podemos-IU-AV se abstienen)"
        },
        {
            "icono": "❌",
            "texto": "<strong>RECHAZADO</strong> — Moción de VOX contra la regularización de inmigrantes: proponía rechazar la regularización de más de 500.000 inmigrantes anunciada por el Gobierno, deportar a quienes cometan delitos, establecer prioridad nacional en ayudas sociales y eliminar subvenciones a ONGs que faciliten la inmigración. Todos los demás grupos votaron en contra. (VOX a favor; PP, PSOE, ULEG, Más Madrid y Podemos-IU-AV en contra)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción del 8M de Podemos-IU-AV por el Día Internacional de las Mujeres: compromete al Ayuntamiento a apoyar actividades feministas en marzo, evaluar el cumplimiento del Pacto de Estado contra la Violencia de Género, reforzar la protección de mujeres y menores víctimas de violencia machista, impulsar la educación afectivo-sexual y defender los derechos reproductivos y LGTBIQA+. (PSOE, ULEG, Más Madrid y Podemos-IU-AV a favor; VOX en contra; PP se abstiene)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de Podemos-IU-AV a favor de la regularización de migrantes: el Ayuntamiento manifiesta su apoyo a regularizar a personas migrantes en situación irregular, se compromete a facilitar certificados de arraigo, condena el racismo y los discursos de odio, e insta al Gobierno a cerrar los CIE y derogar la actual Ley de Extranjería. (PSOE, Más Madrid y Podemos-IU-AV a favor; PP y VOX en contra; ULEG se abstiene)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de ULEG en apoyo al Club UC3M Voleibol Leganés: el equipo femenino fue sancionado por no viajar a Ourense durante la borrasca Ingrid (alerta roja por nieve y viento). El Pleno apoya al club, insta a la Federación a reconsiderar la sanción por tratarse de fuerza mayor y pide revisar los protocolos federativos para que no se penalice actuar con responsabilidad ante riesgos meteorológicos. (Unanimidad de todos los grupos)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de Más Madrid sobre atención a personas con enfermedad mental: denuncia la precariedad en los centros de atención social del 'Carmen García de Gúdal' gestionados por Manantial Gestión, con retrasos en nóminas e incumplimiento de convenios que han provocado la salida de profesionales y la interrupción de tratamientos. Insta a la Comunidad de Madrid a revisar el modelo, garantizar condiciones laborales dignas y actualizar los precios de los conciertos. (PSOE, ULEG, Más Madrid y Podemos-IU-AV a favor; PP en contra; VOX se abstiene)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de Más Madrid sobre riesgo de desahucio en mujeres: ante el dato de que el 37% de hogares afectados por desahucios son familias monomarentales, se pide incorporar indicadores específicos en Servicios Sociales para detectar situaciones de vulnerabilidad, elaborar un informe anual con datos desagregados por sexo y lanzar una campaña informativa sobre recursos de vivienda. (PSOE, Más Madrid y Podemos-IU-AV a favor; VOX en contra; PP y ULEG se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción del PSOE sobre calefacciones en centros culturales: vecinos y asociaciones se quejan de que las calefacciones de varios centros culturales no funcionan o están averiadas, afectando a las actividades. Se exige una revisión urgente de todas las instalaciones, reparar las averías y establecer un plan de mantenimiento preventivo. (PSOE, Más Madrid, VOX y Podemos-IU-AV a favor; PP y ULEG en contra)"
        },
        {
            "icono": "🔄",
            "texto": "<strong>RETIRADO</strong> — Moción del PSOE con motivo del 8 de marzo: el Grupo Municipal Socialista retiró esta moción del orden del día. (Retirada por el grupo proponente)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción del PSOE para crear una zona de petanca en el Nuevo Carrascal: el Club Petanca Leganés, con más de 35 años de historia, carece de instalaciones propias. Se insta al gobierno a estudiar la viabilidad de habilitar un campo de juego y una pequeña sede en la Ciudad Deportiva Europa (Nuevo Carrascal), incluir partida presupuestaria y reunirse con la directiva del club. (PSOE, Más Madrid, VOX y Podemos-IU-AV a favor; PP y ULEG se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de urgencia del PSOE para reprobar al alcalde: se reprueba públicamente a Miguel Ángel Recuenco por acudir al Pleno de Móstoles en apoyo a un compañero del PP señalado por presunto acoso laboral y sexual a una exconcejala. Se le insta a rectificar y reafirmar el compromiso municipal contra el acoso. (PSOE, Más Madrid y Podemos-IU-AV a favor; PP y ULEG en contra; VOX se abstiene)"
        },
        {
            "icono": "ℹ️",
            "texto": "<strong>INFORMADO</strong> — Dación de cuenta de Decretos y Resoluciones: se da cuenta de los decretos y resoluciones dictados por el Alcalde y la Junta de Gobierno Local entre el 7 de enero y el 13 de febrero de 2026. La Corporación quedó enterada. (Solo informativo)"
        },
        {
            "icono": "ℹ️",
            "texto": "<strong>INFORMADO</strong> — Informe anual sobre cuentas a justificar y anticipos de caja fija 2025: la Intervención General presenta el informe de control sobre las cuentas a justificar y anticipos de caja fija del ejercicio 2025, según exige la normativa de control interno del sector público local. La Corporación quedó enterada. (Solo informativo)"
        },
        {
            "icono": "ℹ️",
            "texto": "<strong>INFORMADO</strong> — Informe anual sobre morosidad 2025: la Intervención General presenta el informe de evaluación del cumplimiento de la normativa de morosidad durante 2025, que mide los plazos de pago a proveedores del Ayuntamiento. La Corporación quedó enterada. (Solo informativo)"
        }
    ],
    "linkActa": "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
    "linkVideo": "https://www.youtube.com/results?search_query=pleno+leganes+feb+2026"
},
    {
    "dia": 15,
    "mes": "ENE",
    "año": 2026,
    "tipo": "Ordinario",
    "titulo": "Pleno Ordinario de enero 2026",
    "acuerdos": [
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Se aprueba el acta de la sesión ordinaria celebrada el 11 de diciembre de 2025, que recoge los acuerdos adoptados en el pleno anterior. Este trámite permite validar oficialmente las decisiones tomadas. (Unanimidad de todos los grupos: PP, ULEG, PSOE, Más Madrid, Podemos-IU-AV y VOX)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Cambio del día de celebración de los plenos ordinarios: a partir de febrero de 2026, los plenos se celebrarán los últimos jueves de cada mes (en lugar de los segundos jueves), a las 16:00 horas, excepto en agosto. Este cambio se realiza para permitir que la portavoz de VOX, que será Diputada en la Asamblea de Madrid, pueda compatibilizar ambos cargos representativos. (Unanimidad de todos los grupos: PP, ULEG, PSOE, Más Madrid, Podemos-IU-AV y VOX)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de VOX para combatir las pintadas y grafitis en Leganés. Se pide al Ayuntamiento que active un servicio de limpieza rápida de grafitis en mobiliario urbano y paredes municipales, y que colabore con Seguridad Ciudadana para vigilar, sancionar y realizar campañas de sensibilización sobre el civismo. Los vecinos llevan meses denunciando el deterioro visual de calles y plazas por pintadas sin limpiar. (PSOE y VOX a favor; PP, ULEG, Más Madrid y Podemos-IU-AV se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción de Más Madrid para exigir a la Comunidad de Madrid que rectifique el trazado de la ampliación de la línea 11 de Metro. Se denuncia que el proyecto actual lleva la línea 11 hacia la Operación Campamento en lugar de conectarla con Metrosur en Leganés. Esto deja a Leganés como la única ciudad de la primera corona metropolitana sin conexión directa de Metro con Madrid capital, perjudicando a los cerca de 60.000 vecinos que se desplazan diariamente fuera del municipio. Se exige priorizar la conexión con Leganés y se denuncia el agravio territorial. (PSOE, Más Madrid y Podemos-IU-AV a favor; PP en contra; ULEG y VOX se abstienen)"
        },
        {
            "icono": "❌",
            "texto": "<strong>RECHAZADO</strong> — Moción de Podemos-IU-AV para crear una comisión plenaria que intervenga políticamente en los desahucios. La propuesta buscaba que los concejales se implicaran directamente en este problema social, considerándolo una cuestión política y no solo técnica, ante la crisis de vivienda y los altos precios del alquiler que afectan especialmente a familias vulnerables. La moción fue rechazada por los votos en contra del gobierno y sus socios. (PSOE, Más Madrid y Podemos-IU-AV a favor; PP, ULEG y VOX en contra)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción del PSOE para que el Ayuntamiento incluya una partida específica en los presupuestos de 2026 destinada a presupuestos participativos. Esta herramienta permite a los vecinos decidir directamente en qué se invierte parte del dinero público municipal. Se exige también diseñar el proceso antes de junio de 2026, garantizar que sea accesible e inclusivo (digital y presencial), y que los proyectos elegidos por la ciudadanía se ejecuten realmente. (PSOE, Más Madrid y Podemos-IU-AV a favor; PP, ULEG y VOX se abstienen)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción del PSOE para denunciar el estado de suciedad de las calles y el caótico servicio de recogida de basuras, vidrio y cartón. Los vecinos llevan semanas quejándose de contenedores desbordados, acumulación de residuos, malos olores y falta de limpieza. Se insta al gobierno a actuar de inmediato, revisar el contrato con la empresa concesionaria, exigir responsabilidades si hay incumplimientos, aumentar la frecuencia de recogida en zonas problemáticas y mejorar la red de contenedores. (PSOE, Más Madrid, VOX y Podemos-IU-AV a favor; PP y ULEG en contra)"
        },
        {
            "icono": "✅",
            "texto": "<strong>APROBADO</strong> — Moción del PSOE sobre el cierre de bibliotecas municipales y su impacto en la juventud durante época de exámenes. Se denuncia que varias bibliotecas han reducido horarios o cerrado en momentos clave del calendario académico, perjudicando a estudiantes que no tienen condiciones adecuadas para estudiar en casa. Se exige garantizar personal suficiente, elaborar un plan de refuerzo en épocas de exámenes, informar claramente de horarios y evitar cierres prolongados. (Unanimidad de todos los grupos: PP, ULEG, PSOE, Más Madrid, Podemos-IU-AV y VOX)"
        },
        {
            "icono": "ℹ️",
            "texto": "<strong>INFORMADO</strong> — No se presentaron puntos de urgencia en este pleno. (Sin votación)"
        },
        {
            "icono": "ℹ️",
            "texto": "<strong>INFORMADO</strong> — Dación de cuenta de la modificación de los miembros de los Consejos Sectoriales del Grupo Municipal VOX Leganés. Se comunica el nuevo organigrama con los representantes de VOX en los distintos consejos sectoriales (Cooperación, Cultura, Deportes, Educación, Igualdad, Medio Ambiente, Movimiento Vecinal, Personas Mayores, Salud, Juventud, Bienestar Social, Ciudadanía e Inmigración, Diversidad Funcional y Económico-Social). Es un trámite informativo sin votación. (La Corporación quedó enterada)"
        },
        {
            "icono": "ℹ️",
            "texto": "<strong>INFORMADO</strong> — Dación de cuenta de los Decretos y Resoluciones dictados entre el 1 y el 30 de diciembre de 2025. Se informa al Pleno de las decisiones administrativas adoptadas por Alcaldía y las distintas concejalías durante ese periodo, cumpliendo con la obligación de dar cuenta de la actividad del gobierno municipal. (La Corporación quedó enterada)"
        },
        {
            "icono": "ℹ️",
            "texto": "<strong>INFORMADO</strong> — Interpelación de VOX a la Concejala de Seguridad Ciudadana y Movilidad sobre las medidas previstas para mejorar las condiciones de la Policía Local de Leganés. VOX preguntó sobre el servicio de drones, la colaboración con Policía Nacional, la cobertura de servicios extraordinarios, el número de efectivos y los datos de delincuencia. La concejala respondió y se produjo debate. Es un punto de control sin votación. (Sin votación - Turno de control al gobierno)"
        }
    ],
    "linkActa": "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
    "linkVideo": "https://www.youtube.com/results?search_query=pleno+leganes+ene+2026"
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
      nombre: "Clubs deportivos — subvenciones nominativas 2026",
      detalle: "Voleibol Leganés (670.000 €), Baloncesto Leganés (650.500 €), Fútbol Sala Masdeporte (400.000 €), Balonmano Leganés (184.000 €) y ADIL (47.500 €). Aprobado en pleno el 30 de mayo de 2026.",
      importe: "1.952.000 €",
      beneficiarios: "5 clubs deportivos",
      estado: "resuelta"
    },
    {
      nombre: "Asociaciones sin ánimo de lucro — Área Cultura",
      detalle: "Ayudas a asociaciones locales para financiar proyectos y actividades culturales en Leganés.",
      importe: "Ver detalle en BDNS",
      beneficiarios: null,
      estado: "resuelta"
    },
    {
      nombre: "Asociaciones sin ánimo de lucro — Área Deportes",
      detalle: "Ayudas a asociaciones y clubs deportivos locales para financiar actividades y proyectos deportivos.",
      importe: "Ver detalle en BDNS",
      beneficiarios: null,
      estado: "resuelta"
    },
    {
      nombre: "Asociaciones sin ánimo de lucro — Área Servicios Sociales",
      detalle: "Ayudas a entidades que trabajan en atención social, exclusión, mayores, infancia y familias en dificultad.",
      importe: "Ver detalle en BDNS",
      beneficiarios: null,
      estado: "resuelta"
    },
    {
      nombre: "Asociaciones sin ánimo de lucro — Área Igualdad",
      detalle: "Ayudas a entidades que promueven la igualdad entre mujeres y hombres y previenen la violencia de género.",
      importe: "Ver detalle en BDNS",
      beneficiarios: null,
      estado: "resuelta"
    },
    {
      nombre: "Asociaciones sin ánimo de lucro — Área Discapacidad",
      detalle: "Ayudas a asociaciones que trabajan con personas con discapacidad física, intelectual o sensorial.",
      importe: "Ver detalle en BDNS",
      beneficiarios: null,
      estado: "resuelta"
    },
    {
      nombre: "Asociaciones sin ánimo de lucro — Área Medio Ambiente",
      detalle: "Ayudas a entidades que desarrollan proyectos de sostenibilidad, reciclaje y concienciación ambiental.",
      importe: "Ver detalle en BDNS",
      beneficiarios: null,
      estado: "resuelta"
    },
    {
      nombre: "Asociaciones sin ánimo de lucro — Área Empleo",
      detalle: "Ayudas para proyectos de inserción laboral y fomento del empleo entre colectivos vulnerables.",
      importe: "Ver detalle en BDNS",
      beneficiarios: null,
      estado: "resuelta"
    },
    {
      nombre: "Asociaciones sin ánimo de lucro — Área Cooperación",
      detalle: "Ayudas para proyectos de cooperación internacional y solidaridad con países en desarrollo.",
      importe: "Ver detalle en BDNS",
      beneficiarios: null,
      estado: "resuelta"
    },
    {
      nombre: "Juntas Municipales de Distrito — La Fortuna y San Nicasio",
      detalle: "Ayudas para proyectos vecinales y comunitarios en los distritos de La Fortuna y San Nicasio.",
      importe: "Ver detalle en BDNS",
      beneficiarios: null,
      estado: "resuelta"
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
