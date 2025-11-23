import { Modal } from '../components/Modal.js?v=20250205';
import { createTalentCard, getTalentProfile } from './orgchart.js?v=20250205';
import { createTalentAssessmentHistoryModal } from './talent-assessment-history.js?v=20250205';

const associates = ['Olivia Brooks', 'Amir Hassan', 'Lena Ortiz'];

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

  const header = document.createElement('div');
  header.className = 'manager-evaluations__header';
  header.innerHTML = `
    <div>
      <p class="manager-evaluations__eyebrow">All Direct Reports</p>
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
      <button class="manager-evaluations__person${name === 'Olivia Brooks' ? ' is-active' : ''}">
        <span>${name}</span>
      </button>
    `)
    .join('');

  const content = document.createElement('section');
  content.className = 'manager-evaluations__content';
  content.innerHTML = `
    <div class="manager-evaluations__plan">
      <label>
        <span>Select Performance Plan</span>
        <div class="manager-evaluations__plan-input">
          <input type="text" value="A Test Focal Plan - Nov 03 - Criteria Based - TP History Enabled" readonly />
          <button type="button">🔍</button>
        </div>
      </label>
      <label class="manager-evaluations__checkbox">
        <input type="checkbox" />
        <span>Include closed plans</span>
      </label>
    </div>
    <div class="manager-evaluations__plan-meta">
      <div>
        <h2>A Test Focal Plan - Nov 03 - Criteria Based - TP History Enabled</h2>
        <p>Required for submission</p>
        <div class="manager-evaluations__progress">
          <span style="width: 0%"></span>
        </div>
      </div>
      <div class="manager-evaluations__actions">
        <button class="btn ghost">Save as Draft</button>
        <button class="btn primary">Submit Evaluation</button>
      </div>
    </div>
    <div class="manager-evaluations__summary">
      <div class="manager-evaluations__profile">
        <div class="manager-evaluations__avatar">PP</div>
        <div>
          <button class="manager-evaluations__profile-name" type="button">Olivia Brooks</button>
          <span>Quality Engineers</span>
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
      title: 'Talent Assessment History',
      body: createTalentAssessmentHistoryModal()
    });
  });

  const talentCardBtn = content.querySelector('.manager-evaluations__profile-name');
  talentCardBtn?.addEventListener('click', () => {
    const profile = getTalentProfile('Olivia Brooks') ?? { name: 'Olivia Brooks', position: 'Quality Engineers' };
    overlays.talentCard.open({
      title: 'Talent Card',
      body: createTalentCard(profile)
    });
  });

  body.append(aside, content);
  page.append(header, body);
  return page;
}
