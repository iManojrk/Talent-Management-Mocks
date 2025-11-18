import { Modal } from '../components/Modal.js?v=20250205';

export function TalentAssessmentHistory() {
  const page = document.createElement('div');
  page.className = 'talent-assessment-history';
  const historyModal = Modal();

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
        <option>A Test Talent Cycle - Nov 12 - Criteria Based</option>
        <option>Q1 2025 - Calibration</option>
      </select>
    </label>
  `;

  const layout = document.createElement('div');
  layout.className = 'talent-assessment-history__layout';

  const associates = [
    { name: 'John Doe', role: 'Product Manager I', status: 'Completed', active: true },
    { name: 'Lucy Van Pelt', role: 'Operations Lead', status: 'Completed' }
  ];

  const list = document.createElement('aside');
  list.className = 'talent-assessment-history__list';
  list.innerHTML = `
    <div class="talent-assessment-history__list-header">Completed</div>
    <div class="talent-assessment-history__list-items">
      ${associates
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
        <h2>John Doe</h2>
        <p>Product Manager I</p>
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

  const sections = [
    {
      title: 'Potential',
      description:
        'The degree to which an associate has demonstrated initial mastery of skills required to do their current role and a high likelihood of being able to make an impact on business results in the future.',
      options: ['Low', 'Medium', 'High'],
      selected: 'High'
    },
    {
      title: 'Performance Over Time',
      description: 'This is a performance test',
      options: ['Low', 'Medium', 'High'],
      selected: 'High'
    },
    {
      title: 'Readiness',
      description:
        'The extent to which the associate has the skills and experiences necessary to be successful in the next role you envision for them or the role they would like to grow into.',
      options: ['Ready now', '6 - 12 months', '12 - 24 months'],
      selected: '12 - 24 months'
    },
    {
      title: 'Risk of loss',
      description:
        'The extent to which you feel an associate is at risk of leaving their current role or the organization. Think about the likelihood that an associate would leave in the next six months based on their engagement levels and the demand for their competencies.',
      options: ['Low', 'Medium', 'High'],
      selected: 'Medium'
    },
    {
      title: 'Impact of loss',
      description:
        'The impact on the organization if an associate leaves or transitions to a different role. Consider the difficulty of replacing their skill sets, soft skills, and domain knowledge.',
      options: ['Low', 'Medium', 'High', 'N/A'],
      selected: 'Low'
    },
    {
      title: 'Next Move',
      description:
        'Based on their capabilities, drive, and interests, what role do you envision this associate growing into.',
      options: ['Individual Contributor', 'Manager', 'Director', 'N/A'],
      selected: 'Manager'
    }
  ];

  const sectionList = document.createElement('div');
  sectionList.className = 'talent-assessment-history__sections';
  sectionList.innerHTML = sections
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
      <textarea class="input" rows="4">Mixed</textarea>
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
        body: '<p class="talent-assessment-history__modal-placeholder">History view coming soon.</p>'
      });
    });
  layout.append(list, detail);
  page.append(intro, layout);
  return page;
}
