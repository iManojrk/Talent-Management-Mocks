import { Modal } from '../components/Modal.js?v=20250205';
import { createTalentCard, getTalentProfile } from './orgchart.js?v=20250205';

const successionPlans = [
  {
    position: 'Director, Recruiting Services',
    incumbent: 'Jacqueline Desjardins',
    performance: 'High',
    potential: 'Medium',
    retention: { label: 'Low', level: 'low' },
    impact: { label: 'High', level: 'high' },
    topCandidate: 'Norman Chan',
    candidateCount: 3,
    lastUpdated: '06/30/2025'
  },
  {
    position: 'Director, Workforce Planning',
    incumbent: 'Pedro Santiago',
    performance: 'Medium',
    potential: 'High',
    retention: { label: 'High', level: 'high' },
    impact: { label: 'Medium', level: 'medium' },
    topCandidate: 'Sonia Patel',
    candidateCount: 2,
    lastUpdated: '06/18/2025'
  },
  {
    position: 'Director, Payroll Operations',
    incumbent: 'Betty Liu',
    performance: 'High',
    potential: 'High',
    retention: { label: 'Low', level: 'low' },
    impact: { label: 'Low', level: 'low' },
    topCandidate: 'Wendy Liang',
    candidateCount: 4,
    lastUpdated: '05/25/2025'
  },
  {
    position: 'Director, Employee Benefits',
    incumbent: 'Maria Cardoza',
    performance: 'Medium',
    potential: 'Medium',
    retention: { label: 'Medium', level: 'medium' },
    impact: { label: 'Medium', level: 'medium' },
    topCandidate: 'Ajay Pillai',
    candidateCount: 2,
    lastUpdated: '05/12/2025'
  },
  {
    position: 'Director, HR Operations',
    incumbent: 'Robert Hsing',
    performance: 'Low',
    potential: 'Medium',
    retention: { label: 'Medium', level: 'medium' },
    impact: { label: 'High', level: 'high' },
    topCandidate: null,
    candidateCount: null,
    lastUpdated: null
  },
  {
    position: 'Director, Payroll Operations',
    incumbent: 'Henry Lynch',
    performance: 'Medium',
    potential: 'Low',
    retention: { label: 'Low', level: 'low' },
    impact: { label: 'Low', level: 'low' },
    topCandidate: 'Tran Nguyen',
    candidateCount: 1,
    lastUpdated: '05/02/2025'
  }
];

function renderRiskChip(retention) {
  return `
    <span class="succession-plans__risk succession-plans__risk--${retention.level}">
      ${retention.label}
    </span>
  `;
}

function renderTopCandidate(plan) {
  if (!plan.topCandidate) {
    return '<span class="succession-plans__muted">—</span>';
  }

  const dataAttrs = `data-person-name="${plan.topCandidate}" data-person-position="Succession candidate for ${plan.position}"`;
  return `<button type="button" class="succession-plans__link" ${dataAttrs}>${plan.topCandidate}</button>`;
}

export function TeamSuccessionPlans() {
  const page = document.createElement('div');
  page.className = 'succession-plans';
  const overlays = {
    talentCard: Modal()
  };
  const baseTalentProfile = getTalentProfile('Olivia Brooks') ?? {};
  let activeMenu = null;

  const getInitials = (value) => {
    return String(value ?? '')
      .trim()
      .split(/\s+/)
      .slice(0, 2)
      .map(part => part[0] ? part[0].toUpperCase() : '')
      .join('') || '*';
  };

  const buildStaticTalentCard = (name, position) => {
    const card = createTalentCard(baseTalentProfile);
    const nameEl = card.querySelector('.talent-card__name');
    const positionEl = card.querySelector('.talent-card__position');
    const avatarEl = card.querySelector('.avatar.large');
    if (nameEl) nameEl.textContent = name;
    if (positionEl) positionEl.textContent = position ?? baseTalentProfile.position ?? '';
    if (avatarEl) avatarEl.textContent = getInitials(name);
    return card;
  };

  const openTalentCard = (name, fallbackPosition) => {
    const body = buildStaticTalentCard(name, fallbackPosition);
    overlays.talentCard.open({
      title: 'Talent Card',
      body
    });
  };

  const header = document.createElement('div');
  header.className = 'succession-plans__header';
  header.innerHTML = `
    <div>
      <p class="succession-plans__eyebrow">Succession Planning</p>
      <h1>My Team's Succession Plans</h1>
    </div>
    <div class="succession-plans__header-actions">
      <button type="button" class="succession-plans__icon-btn" title="Download grid">⬇︎</button>
      <button type="button" class="succession-plans__icon-btn" title="Print grid">🖨</button>
    </div>
  `;

  const card = document.createElement('div');
  card.className = 'table-card succession-plans__table-card';
  card.innerHTML = `
    <div class="succession-plans__toolbar">
      <div>
        <span class="succession-plans__count">${successionPlans.length} items</span>
        <p class="succession-plans__description">Human Resources leadership roles</p>
      </div>
    </div>
    <div class="succession-plans__table-wrapper">
      <table class="succession-plans__table">
        <thead>
          <tr>
            <th>Incumbent</th>
            <th>Position</th>
            <th>Potential</th>
            <th>Performance</th>
            <th>Risk of Loss</th>
            <th>Impact of Loss</th>
            <th>Top Candidates</th>
            <th>Candidates</th>
            <th>Last Updated</th>
            <th aria-label="Row actions"></th>
          </tr>
        </thead>
        <tbody>
          ${successionPlans
            .map(
              plan => `
                <tr>
                  <td>
                    <button
                      type="button"
                      class="succession-plans__person-btn"
                      data-person-name="${plan.incumbent}"
                      data-person-position="${plan.position}"
                    >
                      ${plan.incumbent}
                    </button>
                  </td>
                  <td>${plan.position}</td>
                  <td>${renderRiskChip({ label: plan.potential, level: plan.potential.toLowerCase() })}</td>
                  <td>${renderRiskChip({ label: plan.performance, level: plan.performance.toLowerCase() })}</td>
                  <td>${renderRiskChip(plan.retention)}</td>
                  <td>${renderRiskChip(plan.impact)}</td>
                  <td>${renderTopCandidate(plan)}</td>
                  <td>${plan.candidateCount ?? '—'}</td>
                  <td>${plan.lastUpdated ?? '—'}</td>
                  <td class="succession-plans__menu-cell">
                    <button type="button" class="succession-plans__menu-btn" title="Open actions">⋯</button>
                  </td>
                </tr>
              `
            )
            .join('')}
        </tbody>
      </table>
    </div>
  `;

  page.append(header, card);
  page.querySelectorAll('[data-person-name]').forEach(btn => {
    btn.addEventListener('click', () => {
      openTalentCard(btn.dataset.personName, btn.dataset.personPosition);
    });
  });

  const closeMenu = () => {
    activeMenu?.remove();
    activeMenu = null;
  };

  const openMenu = (button) => {
    closeMenu();
    const menu = document.createElement('div');
    menu.className = 'succession-plans__menu';
    menu.innerHTML = `
      <button type="button" class="succession-plans__menu-item">Manage Successors</button>
    `;
    menu.addEventListener('click', (event) => event.stopPropagation());
    menu.querySelector('.succession-plans__menu-item')?.addEventListener('click', closeMenu);
    button.parentElement.appendChild(menu);
    activeMenu = menu;
  };

  page.querySelectorAll('.succession-plans__menu-btn').forEach(btn => {
    btn.addEventListener('click', (event) => {
      event.stopPropagation();
      if (activeMenu && activeMenu.parentElement?.contains(btn)) {
        closeMenu();
      } else {
        openMenu(btn);
      }
    });
  });

  page.addEventListener('click', closeMenu);
  return page;
}
