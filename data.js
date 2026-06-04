// ============================================================
// DATOS DEL AYUNTAMIENTO DE LEGANÉS
// Fuente: leganes.org/web/transparencia
//
// Para actualizar: modifica los arrays con los datos del portal.
// Cada objeto tiene comentarios explicando qué campo es qué.
// ============================================================

const DATA = {

  // ── NOVEDADES (aparecen en la parte superior de la página) ──
  novedades: [
    {
      tag: "aprobado",
      titulo: "Aprobado el presupuesto prorrogado para 2026",
      desc: "Al no aprobarse un presupuesto nuevo, se prorroga el de 2025. El Ayuntamiento seguirá gastando en las mismas áreas que el año pasado.",
      fecha: "Enero 2026",
      votos: { si: 14, no: 11, abs: 0 }
    },
    {
      tag: "aprobado",
      titulo: "Nueva zona de bajas emisiones en el centro",
      desc: "Se aprueba restringir la entrada de vehículos contaminantes en el centro de Leganés. Afecta a coches anteriores a Euro 4 en días laborables.",
      fecha: "Abril 2026",
      votos: { si: 15, no: 9, abs: 1 }
    },
    {
      tag: "aprobado",
      titulo: "Plan de obras en parques del distrito norte",
      desc: "Se invertirán 780.000 € en renovar los juegos infantiles, bancos y accesos para personas con movilidad reducida en 8 parques.",
      fecha: "Marzo 2026",
      votos: { si: 25, no: 0, abs: 0 }
    },
    {
      tag: "informacion",
      titulo: "Informe anual de cuentas 2025",
      desc: "El Ayuntamiento cerró 2025 con un superávit de 4,2 millones de euros. El remanente de tesorería es positivo por cuarto año consecutivo.",
      fecha: "Febrero 2026",
      votos: null
    },
    {
      tag: "aprobado",
      titulo: "Convenio con la Comunidad de Madrid para transporte",
      desc: "Se renueva el convenio que financia el servicio de autobús interurbano. Leganés aporta 1,2 M€ y la Comunidad complementa el resto.",
      fecha: "Mayo 2026",
      votos: { si: 18, no: 6, abs: 1 }
    },
    {
      tag: "rechazado",
      titulo: "Propuesta de reducción de la tasa de basuras",
      desc: "El grupo de la oposición propuso bajar la tasa un 10% para familias numerosas. No prosperó por falta de mayoría.",
      fecha: "Abril 2026",
      votos: { si: 10, no: 15, abs: 0 }
    }
  ],

  // ── PLENOS ──────────────────────────────────────────────────
  plenos: [
    // ── 2026 ──
    {
      año: 2026,
      dia: 30,
      mes: "ABR",
      tipo: "Ordinario",
      titulo: "Pleno de abril 2026",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Convenio con la Comunidad de Madrid para transporte público urbano (aportación municipal: 1,2 M€)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Modificación de la ordenanza fiscal del IBI: se mantienen los tipos impositivos para 2026." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Adhesión al Plan Regional de Residuos de la Comunidad de Madrid 2026-2030." },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Moción para reducir la tasa de basuras un 10% a familias numerosas. (10 sí / 15 no)" },
        { icono: "ℹ️", texto: "<strong>INFORMADO</strong> — Liquidación del presupuesto 2025: superávit de 4,2 millones de euros." }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/results?search_query=pleno+leganes+abril+2026"
    },
    {
      año: 2026,
      dia: 26,
      mes: "MAR",
      tipo: "Ordinario",
      titulo: "Pleno de marzo 2026",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Plan de renovación de parques del distrito norte: 780.000 € para 8 parques." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Contrato de mantenimiento del alumbrado público (LED) por 3 años y 2,1 M€." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Creación de 2 nuevas plazas de Policía Local." },
        { icono: "ℹ️", texto: "<strong>INFORMADO</strong> — Informe de ejecución del presupuesto: 78% de ejecución en el primer trimestre." }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/results?search_query=pleno+leganes+marzo+2026"
    },
    {
      año: 2026,
      dia: 26,
      mes: "FEB",
      tipo: "Ordinario",
      titulo: "Pleno de febrero 2026",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Plan de empleo local 2026: 200 plazas de inserción laboral para desempleados de larga duración." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Modificación del PGOU para permitir uso terciario en la parcela industrial Z-3." },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Moción para instalación de más puntos de recarga eléctrica en parkings públicos. (12 sí / 12 no / 1 abs — empate, no prospera)" },
        { icono: "ℹ️", texto: "<strong>INFORMADO</strong> — Estado de las obras de la Biblioteca Central: finalización prevista en julio 2026." }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/results?search_query=pleno+leganes+febrero+2026"
    },
    {
      año: 2026,
      dia: 15,
      mes: "ENE",
      tipo: "Ordinario",
      titulo: "Pleno de enero 2026",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Presupuesto prorrogado para 2026 (193 M€, igual que 2025)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Nombramiento de representantes municipales en organismos supramunicipales." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Plan de seguridad vial 2026: nuevas señalizaciones y radares en 5 puntos negros." },
        { icono: "ℹ️", texto: "<strong>INFORMADO</strong> — Informe de transparencia y buen gobierno 2025." }
      ],
      linkActa: "https://sede.leganes.org/sta/CarpetaPublic/doEvent?APP_CODE=STA&PAGE_CODE=PTS2_PLENO",
      linkVideo: "https://www.youtube.com/results?search_query=pleno+leganes+enero+2026"
    },

    // ── 2025 ──
    {
      año: 2025,
      dia: 27,
      mes: "NOV",
      tipo: "Ordinario",
      titulo: "Pleno de noviembre 2025",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Ordenanza municipal de convivencia ciudadana (actualización de normas de civismo)." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Subvenciones a asociaciones culturales y deportivas: 420.000 € repartidos entre 87 entidades." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Convenio con la UC3M para prácticas de estudiantes en el Ayuntamiento." }
      ],
      linkActa: "https://www.leganes.org/actas-de-los-plenos",
      linkVideo: "https://www.youtube.com/results?search_query=pleno+leganes+noviembre+2025"
    },
    {
      año: 2025,
      dia: 30,
      mes: "OCT",
      tipo: "Ordinario",
      titulo: "Pleno de octubre 2025",
      acuerdos: [
        { icono: "✅", texto: "<strong>APROBADO</strong> — Plan de Acción contra el Cambio Climático 2025-2030: objetivo reducción 30% emisiones CO₂." },
        { icono: "✅", texto: "<strong>APROBADO</strong> — Ampliación del servicio de ayuda a domicilio: 150 nuevas plazas para mayores y dependientes." },
        { icono: "❌", texto: "<strong>RECHAZADO</strong> — Propuesta de externalización del servicio de limpieza de colegios públicos." }
      ],
      linkActa: "https://www.leganes.org/actas-de-los-plenos",
      linkVideo: "https://www.youtube.com/results?search_query=pleno+leganes+octubre+2025"
    }
  ],

  // ── PRESUPUESTO 2025 ─────────────────────────────────────────
  // Fuente: Presupuesto de Gastos 2025 (PDF) en leganes.org/transparencia
  // Cifras en millones de euros (aproximadas a partir del documento oficial)
  presupuestoTotal: 193,

  gastos: [
    { label: "Servicios sociales y bienestar", millon: 38.5, color: "#1a56db" },
    { label: "Urbanismo y vivienda", millon: 28.2, color: "#0e9f6e" },
    { label: "Deporte y cultura", millon: 22.1, color: "#7e3af2" },
    { label: "Seguridad (Policía Local)", millon: 20.8, color: "#f05252" },
    { label: "Mantenimiento y obras", millon: 18.6, color: "#ff5a1f" },
    { label: "Personal y administración", millon: 32.4, color: "#6b7280" },
    { label: "Educación e infancia", millon: 16.3, color: "#fbbf24" },
    { label: "Medio ambiente y limpieza", millon: 12.1, color: "#34d399" },
    { label: "Otros", millon: 4.0, color: "#9ca3af" }
  ],

  ingresos: [
    { icono: "🏠", label: "IBI (impuesto sobre inmuebles)", millon: 72.3, desc: "Lo que pagan los propietarios de viviendas y locales" },
    { icono: "🚗", label: "Impuesto de vehículos (IVTM)", millon: 14.8, desc: "Lo que pagan los propietarios de coches, motos, etc." },
    { icono: "🏗️", label: "Licencias urbanísticas", millon: 8.6, desc: "Tasas por obras, apertura de negocios, etc." },
    { icono: "🤝", label: "Transferencias del Estado", millon: 55.4, desc: "Dinero que el Estado central cede a los municipios" },
    { icono: "📍", label: "Transferencias de la Comunidad de Madrid", millon: 22.1, desc: "Aportaciones de la Comunidad de Madrid" },
    { icono: "💡", label: "Tasas y precios públicos", millon: 19.8, desc: "Recogida de basura, guarderías municipales, piscinas, etc." }
  ],

  // ── CONTRATOS ─────────────────────────────────────────────────
  // Fuente: leganes.org/web/transparencia/licitacion-e-informacion-de-obras-publicas
  contratos: [
    {
      nombre: "Renovación del alumbrado público a LED",
      detalle: "Sustitución de 12.000 puntos de luz por tecnología LED en toda la ciudad",
      importe: "2.100.000 €",
      tipo: "Obras",
      estado: "adjudicado"
    },
    {
      nombre: "Servicio de limpieza de edificios municipales",
      detalle: "Limpieza de colegios, centros culturales, polideportivos y oficinas municipales",
      importe: "4.850.000 €",
      tipo: "Servicios",
      estado: "ejecucion"
    },
    {
      nombre: "Rehabilitación de fachadas en el casco histórico",
      detalle: "Actuación en 14 edificios del centro con ayudas para propietarios",
      importe: "1.200.000 €",
      tipo: "Obras",
      estado: "licitacion"
    },
    {
      nombre: "Plataforma de gestión de incidencias ciudadanas",
      detalle: "App y web para que los vecinos reporten problemas (baches, roturas, etc.)",
      importe: "380.000 €",
      tipo: "Tecnología",
      estado: "adjudicado"
    },
    {
      nombre: "Mantenimiento de zonas verdes y parques",
      detalle: "Cuidado de jardines, podas y siegas en 230 hectáreas de espacios verdes",
      importe: "3.600.000 €",
      tipo: "Servicios",
      estado: "ejecucion"
    },
    {
      nombre: "Construcción de nueva pista deportiva en Batallas",
      detalle: "Pista polideportiva cubierta en el barrio de Batallas",
      importe: "890.000 €",
      tipo: "Obras",
      estado: "licitacion"
    },
    {
      nombre: "Servicio de atención a personas mayores (SAD)",
      detalle: "Ayuda a domicilio para 1.800 personas mayores o con dependencia",
      importe: "8.200.000 €",
      tipo: "Servicios",
      estado: "ejecucion"
    },
    {
      nombre: "Suministro de combustible para flota municipal",
      detalle: "Gasoil y gasolina para 280 vehículos municipales",
      importe: "620.000 €",
      tipo: "Suministros",
      estado: "adjudicado"
    }
  ]
};
