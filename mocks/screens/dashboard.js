import { getState } from '../state.js';

export function Dashboard() {
  const s = getState();
  const wrap = document.createElement('div');

  const title = document.createElement('h1');
  title.className = 'page-title';
  title.textContent = 'Dashboard';

  const kpis = document.createElement('div');
  kpis.className = 'kpis';

  const openRoles = s.jobs.filter(j=>j.status==='Open').length;
  const inPipeline = s.candidates.length;
  const interviews = s.candidates.filter(c=>c.stage==='Interview').length;
  const offers = s.candidates.filter(c=>c.stage==='Offer').length;

  kpis.appendChild(kpi('Open Roles', openRoles));
  kpis.appendChild(kpi('Candidates in Pipeline', inPipeline));
  kpis.appendChild(kpi('Interviews', interviews));
  kpis.appendChild(kpi('Offers', offers));

  wrap.append(title, kpis);
  return wrap;
}

function kpi(label, value) {
  const el = document.createElement('div');
  el.className = 'kpi';
  el.innerHTML = `<div class="value">${value}</div><div class="label">${label}</div>`;
  return el;
}

