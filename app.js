// ============================================================
// LÓGICA DE LA APLICACIÓN — Leganés Claro
// ============================================================

document.addEventListener('DOMContentLoaded', () => {
  renderNovedades();
  renderPlenos(2026);
  renderPresupuesto();
  renderSubvenciones();
  renderContratos();
  initFilterBtns();
});

// ── NOVEDADES ────────────────────────────────────────────────

function renderNovedades() {
  const grid = document.getElementById('novedades-grid');
  grid.innerHTML = DATA.novedades.map(n => `
    <div class="card">
      <span class="card-tag tag-${n.tag}">${labelTag(n.tag)}</span>
      <div class="card-title">${n.titulo}</div>
      <div class="card-desc">${n.desc}</div>
      <div class="card-meta">
        <span>${n.fecha}</span>
        ${n.votos ? `<div class="card-votes">
          <span class="vote vote-si">✅ ${n.votos.si}</span>
          <span class="vote vote-no">❌ ${n.votos.no}</span>
          ${n.votos.abs > 0 ? `<span class="vote vote-abs">— ${n.votos.abs}</span>` : ''}
        </div>` : ''}
      </div>
    </div>
  `).join('');
}

function labelTag(tag) {
  const map = {
    aprobado: '✅ Aprobado',
    rechazado: '❌ Rechazado',
    informacion: 'ℹ️ Información',
    presupuesto: '💰 Presupuesto',
    obras: '🔨 Obras',
    servicios: '🛎️ Servicios'
  };
  return map[tag] || tag;
}

// ── PLENOS ───────────────────────────────────────────────────

function renderPlenos(año) {
  const list = document.getElementById('plenos-list');
  const plenos = DATA.plenos.filter(p => p.año === año);

  list.innerHTML = plenos.map((p, i) => {
    const id = `${i}-${año}`;
    return `
    <div class="pleno-item">
      <div class="pleno-header" onclick="togglePleno('${id}')">
        <div class="pleno-date-box">
          <div class="pleno-date-day">${p.dia}</div>
          <div class="pleno-date-month">${p.mes}</div>
        </div>
        <div class="pleno-info">
          <div class="pleno-type">${p.tipo}</div>
          <div class="pleno-title">${p.titulo}</div>
          <div class="pleno-summary-count">${p.acuerdos.length} puntos tratados</div>
        </div>
        <div class="pleno-toggle" id="toggle-${id}">▼</div>
      </div>
      <div class="pleno-body" id="body-${id}">
        <ul class="pleno-acuerdos">
          ${p.acuerdos.map(a => `
            <li class="acuerdo">
              <span class="acuerdo-icon">${a.icono}</span>
              <span class="acuerdo-text">${a.texto}</span>
            </li>
          `).join('')}
        </ul>
        <div class="pleno-links">
          <a class="pleno-link" href="${p.linkActa}" target="_blank" rel="noopener">
            📄 Ver acta oficial
          </a>
          <a class="pleno-link" href="${p.linkVideo}" target="_blank" rel="noopener">
            ▶️ Ver vídeo del pleno
          </a>
        </div>
      </div>
    </div>
  `}).join('');
}

function togglePleno(id) {
  const body = document.getElementById(`body-${id}`);
  const toggle = document.getElementById(`toggle-${id}`);
  if (!body) return;
  const open = body.classList.toggle('open');
  toggle.classList.toggle('open', open);
}

function initFilterBtns() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderPlenos(parseInt(btn.dataset.year));
    });
  });
}

// ── PRESUPUESTO ──────────────────────────────────────────────

function renderPresupuesto() {
  renderGastoChart();
  renderBudgetItems();
  renderIngresos();
}

function renderGastoChart() {
  const ctx = document.getElementById('gastoChart').getContext('2d');
  new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: DATA.gastos.map(g => g.label),
      datasets: [{
        data: DATA.gastos.map(g => g.millon),
        backgroundColor: DATA.gastos.map(g => g.color),
        borderWidth: 2,
        borderColor: '#fff',
        hoverOffset: 8
      }]
    },
    options: {
      responsive: true,
      cutout: '62%',
      plugins: {
        legend: { display: false },
        tooltip: {
          callbacks: {
            label: ctx => ` ${ctx.label}: ${ctx.parsed} M€ (${pct(ctx.parsed)}%)`
          }
        }
      }
    }
  });
}

function renderBudgetItems() {
  const container = document.getElementById('budget-items');
  const total = DATA.presupuestoTotal;
  container.innerHTML = DATA.gastos.map(g => `
    <div class="budget-item">
      <span class="budget-dot" style="background:${g.color}"></span>
      <span class="budget-label">${g.label}</span>
      <div class="budget-bar-wrap">
        <div class="budget-bar" style="background:${g.color};width:${(g.millon/total*100).toFixed(0)}%"></div>
      </div>
      <span class="budget-pct">${pct(g.millon)}%</span>
      <span class="budget-amount">${g.millon} M€</span>
    </div>
  `).join('');
}

function renderIngresos() {
  const grid = document.getElementById('income-grid');
  grid.innerHTML = DATA.ingresos.map(i => `
    <div class="income-card">
      <div class="income-icon">${i.icono}</div>
      <div class="income-amount">${i.millon} M€</div>
      <div class="income-label"><strong>${i.label}</strong><br>${i.desc}</div>
    </div>
  `).join('');
}

function pct(millon) {
  return ((millon / DATA.presupuestoTotal) * 100).toFixed(1);
}

// ── SUBVENCIONES ──────────────────────────────────────────────

function renderSubvenciones() {
  const tbody = document.getElementById('subvenciones-body');
  if (!tbody) return;
  const items = DATA.subvenciones || [];
  if (!items.length) {
    tbody.innerHTML = '<tr><td colspan="3" style="text-align:center;color:#9ca3af;padding:2rem;">Datos en proceso de carga automática</td></tr>';
    return;
  }
  const estadoLabel = {
    convocada:  ['status-licitacion', '📢 Convocada'],
    resuelta:   ['status-adjudicado', '✅ Resuelta'],
    cerrada:    ['status-finalizado', '✔ Cerrada'],
  };
  const BDNS_URL = "https://www.pap.hacienda.gob.es/bdnstrans/GE/es/convocatorias?entidad=Ayuntamiento%20de%20Legan%C3%A9s";
  tbody.innerHTML = items.map(s => {
    const [cls, label] = estadoLabel[s.estado] || ['status-licitacion', s.estado];
    let importeHtml;
    if (!s.importe || s.importe === 'null') {
      importeHtml = `<a href="${BDNS_URL}" target="_blank" rel="noopener" style="font-size:.8rem;color:var(--primary)">Ver en BDNS →</a>`;
    } else if (s.importe === 'Ver detalle en BDNS') {
      importeHtml = `<a href="${BDNS_URL}" target="_blank" rel="noopener" style="font-size:.8rem;color:var(--primary)">Ver en BDNS →</a>`;
    } else {
      importeHtml = `<span class="amount-cell">${s.importe}</span>`;
    }
    return `
      <tr>
        <td>
          <div class="contract-name">${s.nombre}</div>
          <div class="contract-sub">${s.detalle}</div>
          ${s.beneficiarios ? `<div class="contract-sub">👥 ${s.beneficiarios}</div>` : ''}
        </td>
        <td>${importeHtml}</td>
        <td><span class="status-badge ${cls}">${label}</span></td>
      </tr>
    `;
  }).join('');
}

// ── CONTRATOS ─────────────────────────────────────────────────

const MESES = ['', 'Enero','Febrero','Marzo','Abril','Mayo','Junio',
               'Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];

const ESTADO_LABEL = {
  licitacion: ['status-licitacion', '📢 En licitación'],
  adjudicado: ['status-adjudicado', '✅ Adjudicado'],
  ejecucion:  ['status-ejecucion',  '🔨 En ejecución'],
  finalizado: ['status-finalizado', '✔ Finalizado']
};

function renderContratos() {
  // Rellena el selector de años dinámicamente
  const años = [...new Set(DATA.contratos.map(c => c.año))].sort((a,b) => b-a);
  const selectAño = document.getElementById('filtro-año');
  años.forEach(a => {
    const opt = document.createElement('option');
    opt.value = a; opt.textContent = a;
    selectAño.appendChild(opt);
  });

  // Escucha cambios en los filtros
  ['filtro-año','filtro-mes','filtro-tipo','filtro-estado'].forEach(id => {
    document.getElementById(id).addEventListener('change', aplicarFiltrosContratos);
  });
  document.getElementById('filtro-reset').addEventListener('click', () => {
    ['filtro-año','filtro-mes','filtro-tipo','filtro-estado'].forEach(id => {
      document.getElementById(id).value = '';
    });
    aplicarFiltrosContratos();
  });

  aplicarFiltrosContratos();
}

function aplicarFiltrosContratos() {
  const año    = document.getElementById('filtro-año').value;
  const mes    = document.getElementById('filtro-mes').value;
  const tipo   = document.getElementById('filtro-tipo').value;
  const estado = document.getElementById('filtro-estado').value;

  let lista = DATA.contratos;
  if (año)    lista = lista.filter(c => String(c.año) === año);
  if (mes)    lista = lista.filter(c => String(c.mes) === mes);
  if (tipo)   lista = lista.filter(c => c.tipo === tipo);
  if (estado) lista = lista.filter(c => c.estado === estado);

  const count = document.getElementById('contratos-count');
  count.textContent = lista.length === DATA.contratos.length
    ? `${lista.length} contratos`
    : `${lista.length} de ${DATA.contratos.length} contratos`;

  const tbody = document.getElementById('contracts-body');
  if (!lista.length) {
    tbody.innerHTML = '<tr><td colspan="5" style="text-align:center;color:#9ca3af;padding:2rem;">No hay contratos con estos filtros</td></tr>';
    return;
  }

  tbody.innerHTML = lista.map(c => {
    const [cls, label] = ESTADO_LABEL[c.estado] || ['', c.estado];
    const fecha = c.mes ? `${MESES[c.mes]} ${c.año}` : c.año;
    return `
      <tr>
        <td>
          <div class="contract-name">${c.nombre}</div>
          <div class="contract-sub">${c.detalle}</div>
        </td>
        <td style="white-space:nowrap;font-size:.85rem;color:#6b7280">${fecha}</td>
        <td class="amount-cell">${c.importe}</td>
        <td>${c.tipo}</td>
        <td><span class="status-badge ${cls}">${label}</span></td>
      </tr>
    `;
  }).join('');
}
