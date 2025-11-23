import { Modal } from '../components/Modal.js?v=20250205';
import { createTalentCard, getTalentProfile } from './orgchart.js?v=20250205';

const talentAssessmentSections = [
  {
    id: 'potential',
    title: 'Potential',
    description:
      'The degree to which an associate has demonstrated initial mastery of skills required to do their current role and a high likelihood of being able to make an impact on business results in the future.',
    options: ['Low', 'Medium', 'High'],
    selected: 'High'
  },
  {
    id: 'performance',
    title: 'Performance',
    description:
      'How consistently the associate meets or exceeds expectations in the current review cycle, reflecting both results and leadership behaviors.',
    options: ['Low', 'Medium', 'High'],
    selected: 'High'
  },
  {
    id: 'readiness',
    title: 'Readiness',
    description:
      'The extent to which the associate has the skills and experiences necessary to be successful in the next role you envision for them or the role they would like to grow into.',
    options: ['Ready now', '6 - 12 months', '12 - 24 months'],
    selected: '12 - 24 months'
  },
  {
    id: 'risk',
    title: 'Risk of loss',
    description:
      'The extent to which you feel an associate is at risk of leaving their current role or the organization. Think about the likelihood that an associate would leave in the next six months based on their engagement levels and the demand for their competencies.',
    options: ['Low', 'Medium', 'High'],
    selected: 'Medium'
  },
  {
    id: 'impact',
    title: 'Impact of loss',
    description:
      'The impact on the organization if an associate leaves or transitions to a different role. Consider the difficulty of replacing their skill sets, soft skills, and domain knowledge.',
    options: ['Low', 'Medium', 'High', 'N/A'],
    selected: 'Low'
  },
  {
    id: 'nextMove',
    title: 'Next Move',
    description:
      'Based on their capabilities, drive, and interests, what role do you envision this associate growing into.',
    options: ['Individual Contributor', 'Manager', 'Director', 'N/A'],
    selected: 'Manager'
  }
];

const talentAssessmentHistoryRecords = [
  {
    label: 'Q3 2025 Assessment',
    dateRange: '09/01/2025 - 09/30/2025',
    responses: {
      potential: 'High',
      performance: 'High',
      readiness: '12 - 24 months',
      risk: 'Medium',
      impact: 'Low',
      nextMove: 'Director'
    },
    comments: 'Piloted a cross-functional analytics project; recommend scheduling monthly CEO readouts to keep visibility high.'
  },
  {
    label: 'Q1 2025 Assessment',
    dateRange: '03/01/2025 - 03/31/2025',
    responses: {
      potential: 'Medium',
      performance: 'Medium',
      readiness: '6 - 12 months',
      risk: 'Low',
      impact: 'Medium',
      nextMove: 'Manager'
    },
    comments: 'Needs more ownership over roadmap planning; pair her with Priya to co-lead the Q2 planning workshop.'
  },
  {
    label: 'Q3 2024 Assessment',
    dateRange: '09/01/2024 - 09/30/2024',
    responses: {
      potential: 'High',
      performance: 'High',
      readiness: 'Ready now',
      risk: 'Medium',
      impact: 'Low',
      nextMove: 'Manager'
    },
    comments: 'Delivered the fleet optimization MVP; assign her as mentor to two new PM hires to practice people leadership.'
  },
  {
    label: 'Q1 2024 Assessment',
    dateRange: '03/01/2024 - 03/31/2024',
    responses: {
      potential: 'Medium',
      performance: 'Low',
      readiness: '6 - 12 months',
      risk: 'Medium',
      impact: 'Medium',
      nextMove: 'Individual Contributor'
    },
    comments: 'Performance dip driven by delayed partner integration; map out escalation paths and revisit vendor commitments.'
  },
  {
    label: 'Q3 2023 Assessment',
    dateRange: '09/01/2023 - 09/30/2023',
    responses: {
      potential: 'Low',
      performance: 'Medium',
      readiness: '12 - 24 months',
      risk: 'High',
      impact: 'High',
      nextMove: 'N/A'
    },
    comments: 'High attrition risk after reorg; schedule bi-weekly check-ins and fast-track executive comms training.'
  }
];

export function createTalentAssessmentHistoryModal() {
  const wrapper = document.createElement('div');
  wrapper.className = 'talent-assessment-history__modal';
  talentAssessmentHistoryRecords.forEach((record) => {
    const section = document.createElement('section');
    section.className = 'talent-assessment-history__modal-section';
    const header = document.createElement('button');
    header.type = 'button';
    header.className = 'talent-assessment-history__modal-header';
    header.innerHTML = `
        <div class="talent-assessment-history__modal-title">
          <h4>${record.label}</h4>
          <span class="talent-assessment-history__modal-dates">${record.dateRange}</span>
        </div>
        <span class="talent-assessment-history__chevron">⌃</span>
      `;
    const body = document.createElement('div');
    body.className = 'talent-assessment-history__modal-body';
    const qaMarkup = talentAssessmentSections
      .map(
        section => `
            <div class="talent-assessment-history__modal-item">
              <span class="talent-assessment-history__modal-question">${section.title}</span>
              <span class="talent-assessment-history__modal-answer">${record.responses?.[section.id] ?? '—'}</span>
            </div>
          `
      )
      .join('');
    body.innerHTML = qaMarkup;
    const comments = document.createElement('div');
    comments.className = 'talent-assessment-history__modal-comment';
    comments.innerHTML = `
        <div class="talent-assessment-history__modal-comment-label">Comments & Action Items</div>
        <p>${record.comments ?? 'No additional notes recorded for this assessment.'}</p>
      `;
    body.appendChild(comments);
    section.classList.add('is-collapsed');
    body.style.display = 'none';
    header.querySelector('.talent-assessment-history__chevron').textContent = '⌄';
    header.addEventListener('click', () => {
      const collapsed = section.classList.toggle('is-collapsed');
      body.style.display = collapsed ? 'none' : 'grid';
      header.querySelector('.talent-assessment-history__chevron').textContent = collapsed ? '⌄' : '⌃';
    });
    section.append(header, body);
    wrapper.appendChild(section);
  });
  return wrapper;
}

export function TalentAssessmentHistory() {
  const page = document.createElement('div');
  page.className = 'talent-assessment-history';
  const historyModal = Modal();
  const talentModal = Modal();

  const intro = document.createElement('div');
  intro.className = 'talent-assessment-history__intro';
  intro.innerHTML = `
    <div class="talent-assessment-history__intro-copy">
      <p class="talent-assessment-history__eyebrow">Talent Assessment</p>
      <h1>Talent reviews completed for your direct reports and any other employees you are eligible to assess</h1>
    </div>
    <label class="talent-assessment-history__cycle-select">
      <span>Cycle</span>
      <select class="input">
        <option>Enterprise Leadership Cycle - Nov 12 (Criteria Based)</option>
        <option selected>Q1 2026 - Talent Assessment</option>
      </select>
    </label>
  `;

  const layout = document.createElement('div');
  layout.className = 'talent-assessment-history__layout';

  const associates = [
    { name: 'Olivia Brooks', role: 'Regional Distribution Manager', status: 'Completed', active: true },
    { name: 'Amir Hassan', role: 'Fleet Optimization Manager', status: 'Completed' },
    { name: 'Lena Ortiz', role: 'Warehouse Automation Lead', status: 'Completed' }
  ];

  const list = document.createElement('aside');
  list.className = 'talent-assessment-history__list';
  list.innerHTML = `
    <div class="talent-assessment-history__list-header">Completed</div>
    <div class="talent-assessment-history__list-items">
      ${[...associates]
        .sort((a, b) => a.name.localeCompare(b.name))
        .map(
          person => `
            <button class="talent-assessment-history__person-chip${person.active ? ' is-active' : ''}">
              <span class="talent-assessment-history__avatar">${person.name.split(' ').map(n => n[0]).join('').slice(0, 2)}</span>
              <div class="talent-assessment-history__person-name">${person.name}</div>
            </button>
          `
        )
        .join('')}
    </div>
  `;

  const detail = document.createElement('section');
  detail.className = 'talent-assessment-history__detail';
  detail.innerHTML = `
    <div class="talent-assessment-history__meta">
      <div class="talent-assessment-history__meta-person">
        <button class="talent-assessment-history__person-name-btn" type="button">Olivia Brooks</button>
        <p>Regional Distribution Manager</p>
      </div>
      <div>
        <span class="talent-assessment-history__meta-label">Cycle Dates</span>
        <span>11/12/2025 - 12/06/2025</span>
      </div>
      <div>
        <span class="talent-assessment-history__meta-label">Submitted On</span>
        <span>11/12/2025</span>
      </div>
      <div>
        <span class="talent-assessment-history__meta-label">Status</span>
        <span class="talent-assessment-history__status-pill">Completed</span>
      </div>
    </div>
    <div class="talent-assessment-history__link-row">
      <button class="talent-assessment-history__link talent-assessment-history__history-btn" type="button">View History</button>
      <button class="talent-assessment-history__link" type="button">Talent Matrix Guide</button>
    </div>
  `;

  const sectionList = document.createElement('div');
  sectionList.className = 'talent-assessment-history__sections';
  sectionList.innerHTML = talentAssessmentSections
    .map(
      section => `
        <section class="talent-assessment-history__section">
          <div class="talent-assessment-history__section-header">
            <h3>${section.title}</h3>
            <p>${section.description}</p>
          </div>
          <div class="talent-assessment-history__pills">
            ${section.options
              .map(
                option => `
                  <span class="talent-assessment-history__pill${option === section.selected ? ' is-active' : ''}">
                    ${option}
                  </span>
                `
              )
              .join('')}
          </div>
        </section>
      `
    )
    .join('');

  const comments = document.createElement('div');
  comments.className = 'talent-assessment-history__comments';
  comments.innerHTML = `
    <label class="talent-assessment-history__comments-label">
      <span>Comments and Action Items</span>
      <textarea class="input" rows="4">Needs broader exposure to enterprise operations. Line up a 3-month rotation with the logistics team and pair Olivia with a senior mentor to refine executive communication skills.</textarea>
    </label>
  `;

  const footer = document.createElement('div');
  footer.className = 'talent-assessment-history__footer';
  footer.innerHTML = `
    <button class="btn ghost" type="button">Cancel</button>
    <button class="talent-assessment-history__link-btn" type="button">Preview Talent Matrix</button>
    <button class="btn primary" type="button">Save Assessment</button>
  `;

  detail.append(sectionList, comments, footer);

  detail
    .querySelector('.talent-assessment-history__history-btn')
    ?.addEventListener('click', () => {
      historyModal.open({
        title: 'Talent Assessment History',
        body: createTalentAssessmentHistoryModal()
      });
    });

  detail
    .querySelector('.talent-assessment-history__person-name-btn')
    ?.addEventListener('click', () => {
      const profile = getTalentProfile('Olivia Brooks');
      talentModal.open({
        title: 'Talent Card',
        body: createTalentCard(profile)
      });
    });
  layout.append(list, detail);
  page.append(intro, layout);
  return page;
}
