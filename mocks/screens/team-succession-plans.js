import { Modal } from '../components/Modal.js?v=20250205';
import { createTalentCard, getTalentProfile } from './orgchart.js?v=20250205';

const successionPlans = [
  {
    position: 'Director, Recruiting Services',
    incumbent: 'Jacqueline Desjardins',
    performance: 'High',
    performanceRatingScore: '4.2',
    performanceRatingLabel: 'Exceeds Expectations',
    potential: 'Medium',
    retention: { label: 'Low', level: 'low' },
    impact: { label: 'High', level: 'high' },
    topCandidate: 'Norman Chan',
    candidateCount: 3,
    readyNowCount: 1,
    lastUpdated: '06/30/2025'
  },
  {
    position: 'Director, Workforce Planning',
    incumbent: 'Pedro Santiago',
    performance: 'Medium',
    performanceRatingScore: '3.8',
    performanceRatingLabel: 'Exceeds Expectations',
    potential: 'High',
    retention: { label: 'High', level: 'high' },
    impact: { label: 'Medium', level: 'medium' },
    topCandidate: 'Sonia Patel',
    candidateCount: 2,
    readyNowCount: 0,
    lastUpdated: '06/18/2025'
  },
  {
    position: 'Director, Payroll Operations',
    incumbent: 'Betty Liu',
    performance: 'High',
    performanceRatingScore: '4.1',
    performanceRatingLabel: 'Exceeds Expectations',
    potential: 'High',
    retention: { label: 'Low', level: 'low' },
    impact: { label: 'Low', level: 'low' },
    topCandidate: 'Wendy Liang',
    candidateCount: 4,
    readyNowCount: 2,
    lastUpdated: '05/25/2025'
  },
  {
    position: 'Director, Employee Benefits',
    incumbent: 'Maria Cardoza',
    performance: 'Medium',
    performanceRatingScore: '3.2',
    performanceRatingLabel: 'Meets Expectations',
    potential: 'Medium',
    retention: { label: 'Medium', level: 'medium' },
    impact: { label: 'Medium', level: 'medium' },
    topCandidate: 'Ajay Pillai',
    candidateCount: 2,
    readyNowCount: 0,
    lastUpdated: '05/12/2025'
  },
  {
    position: 'Director, HR Operations',
    incumbent: 'Robert Hsing',
    performance: 'Low',
    performanceRatingScore: '2.4',
    performanceRatingLabel: 'Below Expectations',
    potential: 'Medium',
    retention: { label: 'Medium', level: 'medium' },
    impact: { label: 'High', level: 'high' },
    topCandidate: null,
    candidateCount: null,
    readyNowCount: null,
    lastUpdated: null
  },
  {
    position: 'Director, Payroll Operations',
    incumbent: 'Henry Lynch',
    performance: 'Medium',
    performanceRatingScore: '3.5',
    performanceRatingLabel: 'Meets Expectations',
    potential: 'Low',
    retention: { label: 'Low', level: 'low' },
    impact: { label: 'Low', level: 'low' },
    topCandidate: 'Tran Nguyen',
    candidateCount: 1,
    readyNowCount: 1,
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

function mapPotentialPerformanceLevel(value) {
  const normalized = String(value ?? '').toLowerCase();
  if (normalized === 'high') return 'low'; // reuse green styling
  if (normalized === 'low') return 'high'; // reuse red styling
  return 'medium';
}

function formatPerformanceRating(score, label) {
  if (!score && !label) return '—';
  const labelText = label ?? 'Performance';
  const scoreText = score ? String(score) : '';
  return `
    <div class="succession-plans__rating">
      ${scoreText ? `<div class="succession-plans__rating-score">${scoreText}</div>` : ''}
      <div class="succession-plans__rating-label">${labelText}</div>
    </div>
  `;
}

const manageSuccessorsModalData = {
  owner: 'Ian FutureJobChange',
  successors: [
    {
      name: 'Amiya GrantCypressBulkHire',
      readiness: 'Ready Now',
      readinessVariant: 'ready',
      jobTitle: 'SoftwareEngineer',
      manager: 'Manager Cypress',
      performance: 'Not Available',
      readinessSet: 'last month'
    },
    {
      name: 'Ariana Grande',
      readiness: '12 Months',
      readinessVariant: 'months',
      jobTitle: 'ADPRM-1',
      manager: 'Jack AutotestSix',
      performance: 'Not Available',
      readinessSet: 'last month'
    }
  ]
};

function createManageSuccessorsModal(owner) {
  const container = document.createElement('div');
  container.className = 'manage-successors';
  const title = document.createElement('h2');
  title.className = 'manage-successors__title';
  title.textContent = owner ?? manageSuccessorsModalData.owner;

  const tabs = document.createElement('div');
  tabs.className = 'manage-successors__tabs';
  const manageTab = document.createElement('button');
  manageTab.type = 'button';
  manageTab.className = 'manage-successors__tab manage-successors__tab--active';
  manageTab.textContent = 'Manage Successors';
  const findTab = document.createElement('button');
  findTab.type = 'button';
  findTab.className = 'manage-successors__tab';
  findTab.textContent = 'Find Successors';
  tabs.append(manageTab, findTab);

  const cards = document.createElement('div');
  cards.className = 'manage-successors__cards';
  manageSuccessorsModalData.successors.forEach(successor => {
    const card = document.createElement('div');
    card.className = 'manage-successors__card';

    const topRow = document.createElement('div');
    topRow.className = 'manage-successors__top';

    const heading = document.createElement('div');
    heading.className = 'manage-successors__card-heading';

    const name = document.createElement('div');
    name.className = 'manage-successors__name';
    name.textContent = successor.name;
    heading.appendChild(name);

    const badge = document.createElement('span');
    badge.className = `manage-successors__badge manage-successors__badge--${successor.readinessVariant}`;
    badge.textContent = successor.readiness;
    heading.appendChild(badge);

    const actions = document.createElement('button');
    actions.type = 'button';
    actions.className = 'manage-successors__actions';
    actions.innerHTML = `Actions <span class="manage-successors__actions-caret">▾</span>`;

    topRow.append(heading, actions);

    const details = document.createElement('div');
    details.className = 'manage-successors__details';
    details.innerHTML = `
      <div>
        <span>Job Title</span>
        <strong>${successor.jobTitle}</strong>
      </div>
      <div>
        <span>Manager</span>
        <strong>${successor.manager}</strong>
      </div>
      <div>
        <span>Last Performance Rating</span>
        <strong>${successor.performance}</strong>
      </div>
      <div>
        <span>Readiness Set</span>
        <strong>${successor.readinessSet}</strong>
      </div>
    `;

    card.append(topRow, details);
    cards.appendChild(card);
  });

  container.append(title, tabs, cards);
  return container;
}

export function TeamSuccessionPlans() {
  const page = document.createElement('div');
  page.className = 'succession-plans';
  const overlays = {
    talentCard: Modal(),
    manageSuccessors: Modal()
  };
  const baseTalentProfile = getTalentProfile('Olivia Brooks') ?? {};
  let activeMenu = null;
  let showIndirectReports = false;

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
    <h1>Team Succession Summary</h1>
  `;

  const filters = document.createElement('div');
  filters.className = 'succession-plans__filters';
  filters.innerHTML = `
    <label class="succession-plans__filter succession-plans__filter--associate">
      <span>Associate</span>
      <input type="text" placeholder="Search associate" disabled>
    </label>
    <label class="succession-plans__filter succession-plans__filter--checkbox">
      <input type="checkbox">
      <span>Show Indirect Reports</span>
    </label>
    <label class="succession-plans__filter succession-plans__filter--manager">
      <span>Manager Lookup</span>
      <input type="text" placeholder="Lookup manager" disabled>
    </label>
  `;
  filters.classList.add('succession-plans__filters-inline');
  const showIndirectInput = filters.querySelector('.succession-plans__filter--checkbox input');
  const managerFilter = filters.querySelector('.succession-plans__filter--manager');

  const card = document.createElement('div');
  card.className = 'succession-plans__table-container';
  card.innerHTML = `
    <div class="succession-plans__table-wrapper">
      <table class="succession-plans__table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Potential</th>
            <th>Performance</th>
            <th>Risk of Loss</th>
            <th>Impact of Loss</th>
            <th>Performance Rating</th>
            <th>Successors</th>
            <th>Ready Now<br>Successors</th>
            <th>Last Updated</th>
            <th aria-label="Row actions"></th>
          </tr>
        </thead>
        <tbody class="succession-plans__tbody"></tbody>
      </table>
    </div>
  `;
  const tableBody = card.querySelector('.succession-plans__tbody');

  const closeMenu = () => {
    activeMenu?.remove();
    activeMenu = null;
  };

  const openManageSuccessors = (ownerName) => {
    const body = createManageSuccessorsModal(ownerName);
    overlays.manageSuccessors.open({
      title: '',
      body,
      className: 'modal-wide manage-successors-modal'
    });
  };

  const openMenu = (button) => {
    closeMenu();
    const menu = document.createElement('div');
    menu.className = 'succession-plans__menu';
    menu.innerHTML = `
      <button type="button" class="succession-plans__menu-item">Manage Successors</button>
    `;
    menu.addEventListener('click', (event) => event.stopPropagation());
    menu.querySelector('.succession-plans__menu-item')?.addEventListener('click', () => {
      closeMenu();
      const row = button.closest('tr');
      const nameBtn = row?.querySelector('.succession-plans__person-btn');
      openManageSuccessors(nameBtn?.textContent?.trim());
    });
    button.parentElement.appendChild(menu);
    activeMenu = menu;
  };

  showIndirectInput?.addEventListener('change', () => {
    showIndirectReports = showIndirectInput.checked;
    managerFilter?.classList.toggle('is-visible', showIndirectReports);
    renderRows();
  });

  function getVisiblePlans() {
    if (showIndirectReports) return successionPlans;
    return successionPlans.slice(0, 3);
  }

  function renderRows() {
    const rows = getVisiblePlans()
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
            <td>${renderRiskChip({ label: plan.potential, level: mapPotentialPerformanceLevel(plan.potential) })}</td>
            <td>${renderRiskChip({ label: plan.performance, level: mapPotentialPerformanceLevel(plan.performance) })}</td>
            <td>${renderRiskChip(plan.retention)}</td>
            <td>${renderRiskChip(plan.impact)}</td>
            <td>${formatPerformanceRating(plan.performanceRatingScore, plan.performanceRatingLabel)}</td>
            <td>${plan.candidateCount ?? '—'}</td>
            <td>${plan.readyNowCount ?? '—'}</td>
            <td>${plan.lastUpdated ?? '—'}</td>
            <td class="succession-plans__menu-cell">
              <button type="button" class="succession-plans__menu-btn" title="Open actions">⋯</button>
            </td>
          </tr>
        `
      )
      .join('');
    tableBody.innerHTML = rows;
    bindRowInteractions();
  }

  function bindRowInteractions() {
    tableBody.querySelectorAll('[data-person-name]').forEach(btn => {
      btn.addEventListener('click', () => {
        openTalentCard(btn.dataset.personName, btn.dataset.personPosition);
      });
    });

    tableBody.querySelectorAll('.succession-plans__menu-btn').forEach(btn => {
      btn.addEventListener('click', (event) => {
        event.stopPropagation();
        if (activeMenu && activeMenu.parentElement?.contains(btn)) {
          closeMenu();
        } else {
          openMenu(btn);
        }
      });
    });
  }

  renderRows();

  const hrTop = document.createElement('hr');
  hrTop.className = 'succession-plans__divider';
  page.append(header, filters, hrTop, card);
  page.addEventListener('click', closeMenu);
  return page;
}
