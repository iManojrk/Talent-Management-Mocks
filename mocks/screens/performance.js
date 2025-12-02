import { Modal } from '../components/Modal.js?v=20250205';
import { createTalentCard, getTalentProfile } from './orgchart.js?v=20250205';
import { createTalentAssessmentHistoryModal } from './talent-assessment-history.js?v=20250205';

const defaultAssociateName = 'Olivia Brooks';
const defaultAssociateRole = 'Quality Engineers';
const associates = [defaultAssociateName, 'Amir Hassan', 'Lena Ortiz'];

const overallEvaluation = {
  selfStatus: 'Pending',
  selfNote: 'Overall comment not provided.',
  managerOverrideLabel: 'Override system generated manager rating'
};

const evaluationMetrics = [
  { label: 'Overall Rating', value: '4.1', note: 'Excellent' },
  { label: 'Completed', value: '4', note: 'Out of 6' },
  { label: 'Team Rank', value: '1', note: 'Out of 3' },
  { label: 'Gap Analysis', trends: { up: 1, down: 2 } },
  { label: 'Attachments', value: '3', note: 'files' }
];

export function PerformanceEvaluation() {
  const page = document.createElement('div');
  page.className = 'manager-evaluations';
  const overlays = {
    talentCard: Modal(),
    history: Modal()
  };
  const activeReportName = defaultAssociateName;
  const activeReportRole = defaultAssociateRole;
  const activeReportHistoryTitle = formatHistoryTitle(activeReportName);

  const header = document.createElement('div');
  header.className = 'manager-evaluations__header';
  header.innerHTML = `
    <div>
      <a class="manager-evaluations__eyebrow manager-evaluations__link" href="#">All Direct Reports</a>
      <h1>Manager Evaluations</h1>
    </div>
    <a class="manager-evaluations__link" href="#">View Archived Evaluations</a>
  `;

  const body = document.createElement('div');
  body.className = 'manager-evaluations__body';

  const aside = document.createElement('aside');
  aside.className = 'manager-evaluations__list';
  aside.innerHTML = [...associates]
    .sort((a, b) => a.localeCompare(b))
    .map(name => `
      <button class="manager-evaluations__person${name === activeReportName ? ' is-active' : ''}">
        <span>${name}</span>
      </button>
    `)
    .join('');

  const content = document.createElement('section');
  content.className = 'manager-evaluations__content';
  content.innerHTML = `
    <div class="manager-evaluations__plan">
      <div class="manager-evaluations__plan-left">
        <label class="manager-evaluations__filter filter-field filter-wide">
          <span>Select Performance Plan</span>
          <input class="input" type="text" value="FY 2026 Performance Plan" readonly />
          <span class="filter-field__icon">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path fill="currentColor" d="M11.502485,4 C15.0937084,4 18.0049701,6.90952883 18.0049701,10.4986145 C18.0049701,12.1375978 17.3978667,13.6348689 16.3961459,14.7780684 L19.4859068,18.2675042 C19.8675111,18.698423 19.8273258,19.3569189 19.3961504,19.7382961 C18.9957732,20.092432 18.3990519,20.0830985 18.010315,19.7349406 L17.9244825,19.6485931 L14.7877549,16.1080203 C13.8236763,16.6732 12.7009437,16.997229 11.502485,16.997229 C7.91126172,16.997229 5,14.0877002 5,10.4986145 C5,6.90952883 7.91126172,4 11.502485,4 Z M11.502485,6.08387877 C9.06284165,6.08387877 7.08511991,8.06042329 7.08511991,10.4986145 C7.08511991,12.9368058 9.06284165,14.9133503 11.502485,14.9133503 C13.9421284,14.9133503 15.9198502,12.9368058 15.9198502,10.4986145 C15.9198502,8.06042329 13.9421284,6.08387877 11.502485,6.08387877 Z"></path>
            </svg>
          </span>
        </label>
        <label class="manager-evaluations__checkbox">
          <input type="checkbox" />
          <span>Include closed plans</span>
        </label>
      </div>
    </div>
    <div class="manager-evaluations__plan-meta">
      <div>
        <h2>FY 2026 Performance Plan</h2>
      </div>
      <div class="manager-evaluations__actions">
        <button class="btn outline">Save as Draft</button>
        <button class="btn primary">Submit Evaluation</button>
      </div>
    </div>
    <div class="manager-evaluations__summary">
      <div class="manager-evaluations__profile">
        <div class="manager-evaluations__avatar">PP</div>
        <div>
          <button class="manager-evaluations__profile-name" type="button">${activeReportName}</button>
          <span>${activeReportRole}</span>
        </div>
      </div>
      <div class="manager-evaluations__status">
        <div>
          <p>My Evaluation</p>
          <span class="due">Due in 11 days</span>
        </div>
        <div>
          <p>Manager Evaluation</p>
          <span class="due">Due in 11 days</span>
        </div>
      </div>
      <div class="manager-evaluations__summary-actions">
        <a class="manager-evaluations__link" href="#">Download Draft Evaluation</a>
      </div>
    </div>
    <div class="manager-evaluations__tabs">
      <button class="is-active">Evaluation</button>
      <button>Touchpoint History</button>
      <button>Peer Feedback</button>
    </div>
    <section class="manager-evaluations__panel">
      <div class="manager-evaluations__panel-header">
        <div class="manager-evaluations__panel-title">
          <h3>Manager Evaluation</h3>
          <p>For the evaluation process, use examples to describe how this associate achieved their goals and any accomplishments you would like to highlight.</p>
        </div>
        <button class="manager-evaluations__history-link" type="button">View Talent Assessment History</button>
      </div>
      <div class="manager-evaluations__metrics">
        ${evaluationMetrics
          .map(metric => {
            const metricValue = metric.trends
              ? `
                <div class="manager-evaluations__metric-value manager-evaluations__metric-value--trends">
                  <span class="manager-evaluations__metric-trend manager-evaluations__metric-trend--up">
                    <span class="manager-evaluations__metric-trend-icon">&uarr;</span>
                    <span class="manager-evaluations__metric-trend-value">${metric.trends.up}</span>
                  </span>
                  <span class="manager-evaluations__metric-trend manager-evaluations__metric-trend--down">
                    <span class="manager-evaluations__metric-trend-icon">&darr;</span>
                    <span class="manager-evaluations__metric-trend-value">${metric.trends.down}</span>
                  </span>
                </div>
              `
              : `<div class="manager-evaluations__metric-value">${metric.value}</div>`;

            const metricNote = metric.note
              ? `<span class="manager-evaluations__metric-note">${metric.note}</span>`
              : '';

            return `
              <div class="manager-evaluations__metric">
                <p class="manager-evaluations__metric-label">${metric.label}</p>
                ${metricValue}
                ${metricNote}
              </div>
            `;
          })
          .join('')}
      </div>
      <div class="manager-evaluations__card">
        <div class="manager-evaluations__card-header">
          <div>
            <h4>Overall Evaluation</h4>
            <p>Use examples to describe how this associate achieved their goals and highlight key accomplishments. If applicable you can opt to change the system calculated rating.</p>
          </div>
        </div>
        <div class="manager-evaluations__card-body">
          <div class="manager-evaluations__row">
            <div>
              <p class="manager-evaluations__label">Overall Self Feedback</p>
              <p class="manager-evaluations__subtle"><strong>${overallEvaluation.selfStatus}</strong></p>
              <p class="manager-evaluations__muted">${overallEvaluation.selfNote}</p>
              <div class="manager-evaluations__manager-feedback">
                <p class="manager-evaluations__label">Overall Manager Feedback</p>
                <label class="manager-evaluations__checkbox manager-evaluations__checkbox--inline">
                  <input type="checkbox" />
                  <span>${overallEvaluation.managerOverrideLabel}</span>
                </label>
              </div>
            </div>
          </div>
          <textarea class="manager-evaluations__textarea" rows="4" placeholder="Add manager feedback..."></textarea>
        </div>
      </div>
    </section>
  `;

  const historyBtn = content.querySelector('.manager-evaluations__history-link');
  historyBtn?.addEventListener('click', () => {
    overlays.history.open({
      title: activeReportHistoryTitle,
      body: createTalentAssessmentHistoryModal(),
      className: 'modal-talent-history'
    });
  });

  const talentCardBtn = content.querySelector('.manager-evaluations__profile-name');
  talentCardBtn?.addEventListener('click', () => {
    const profile = getTalentProfile(activeReportName) ?? { name: activeReportName, position: activeReportRole };
    overlays.talentCard.open({
      title: 'Talent Card',
      body: createTalentCard(profile)
    });
  });

  body.append(aside, content);
  page.append(header, body);
  return page;
}

function formatHistoryTitle(name = 'Employee') {
  const trimmed = String(name ?? '').trim() || 'Employee';
  return `${trimmed} - Talent Assessment History`;
}
