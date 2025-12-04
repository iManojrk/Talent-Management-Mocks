const CURRENT_ROLE_FIELDS = [
  { label: 'Title', value: 'Regional Distribution Manager' },
  { label: 'Job Code', value: 'LOG-204' },
  { label: 'Career Level', value: 'M3 – People Manager' },
  { label: 'Location', value: 'Atlanta, GA (Hybrid)' },
  { label: 'Base Pay', value: '$128,000' },
];

const PROPOSED_ROLE_FIELDS = [
  { label: 'Title', value: 'Director, Fleet Enablement' },
  { label: 'Job Code', value: 'OPS-311' },
  { label: 'Career Level', value: 'M4 – Sr. Manager' },
  { label: 'Location', value: 'Atlanta, GA (Hybrid)' },
  { label: 'Base Pay Target', value: '$142,000' },
];

const REQUEST_FIELDS = [
  { label: 'Change Reason', value: 'Expanded scope covering national routing + automation pods' },
  { label: 'Effective Date', value: 'May 12, 2025' },
  { label: 'Requested By', value: 'Maya Chen' },
  { label: 'Collaborators', value: 'HRBP + People Analytics' },
];

const PAY_ADJUSTMENTS = [
  { label: 'Current Base Pay', value: '$128,000', meta: 'Grade midpoint $130,500' },
  { label: 'Proposed Base Pay', value: '$142,000', meta: '+11% / within Grade M4 band' },
  { label: 'Bonus Target', value: '15% → 20%', meta: 'Aligns to M4 variable plan' },
  { label: 'Equity Refresh', value: '$35,000 recommended', meta: 'Distribute over 4 years' },
];

const ATTACHMENTS = [
  'Readiness snapshot.pdf',
  'Org impact outline.png',
  'Proposed compensation memo.docx'
];

const TIMELINE_STEPS = [
  { title: 'Request Submitted', meta: 'Apr 3 • Maya Chen', status: 'complete' },
  { title: 'HRBP Review', meta: 'Apr 5 • Alex Garcia', status: 'complete' },
  { title: 'Compensation Review', meta: 'Awaiting pay band confirmation', status: 'current' },
  { title: 'Executive Approval', meta: 'Pending Priya Nair sign-off', status: 'upcoming' },
  { title: 'Employee Conversation', meta: 'Target week of Apr 21', status: 'upcoming' },
];

const CHECKLIST_ITEMS = [
  { label: 'Confirm successor coverage for Fleet Ops', owner: 'Elias Romero', status: 'complete' },
  { label: 'Validate team span + ratio after change', owner: 'People Analytics', status: 'pending' },
  { label: 'Draft employee conversation plan', owner: 'Maya Chen', status: 'pending' },
  { label: 'Upload final compensation memo', owner: 'Compensation', status: 'upcoming' },
];

const STAKEHOLDER_APPROVALS = [
  { name: 'Maya Chen', role: 'VP, Fleet Operations', status: 'Approved', date: 'Apr 3' },
  { name: 'Alex Garcia', role: 'HR Business Partner', status: 'Approved', date: 'Apr 5' },
  { name: 'Priya Nair', role: 'Chief People Officer', status: 'Pending', date: '—' },
];

const SUMMARY_HIGHLIGHTS = [
  { label: 'Effective Date', value: 'May 12, 2025' },
  { label: 'Change Type', value: 'Promotion' },
  { label: 'Pay Delta', value: '+11% base' },
  { label: 'Risk of Loss', value: 'Medium' },
];

export function JobChange() {
  const page = document.createElement('section');
  page.className = 'job-change';

  page.append(
    createHero(),
    createAlert(),
    createSummaryRow(),
    createLayout()
  );

  return page;
}

function createHero() {
  const hero = document.createElement('div');
  hero.className = 'job-change__hero';
  hero.innerHTML = `
    <div>
      <p class="job-change__eyebrow">Template</p>
      <h1>Job Change</h1>
      <p class="job-change__description">Plan the proposed move, map compensation changes, and capture every approval before sharing with the associate.</p>
    </div>
    <div class="job-change__hero-actions">
      <button type="button" class="btn job-change__hero-btn">Discard</button>
      <button type="button" class="btn outline job-change__hero-btn">Save Draft</button>
      <button type="button" class="btn primary job-change__hero-btn">Submit for Approval</button>
    </div>
  `;
  return hero;
}

function createAlert() {
  const alert = document.createElement('div');
  alert.className = 'job-change__alert';
  alert.innerHTML = `
    <div>
      <strong>Next action:</strong>
      Compensation review is in progress — upload the updated pay band confirmation once finalized.
    </div>
    <button type="button" class="job-change__alert-link">View guidance</button>
  `;
  return alert;
}

function createSummaryRow() {
  const row = document.createElement('div');
  row.className = 'job-change__summary-row';

  const associateCard = document.createElement('article');
  associateCard.className = 'job-change__panel job-change__panel--summary';
  associateCard.innerHTML = `
    <div class="job-change__panel-header">
      <h3>Associate Snapshot</h3>
      <span class="job-change__pill job-change__pill--ready">Ready Now</span>
    </div>
    <div class="job-change__associate">
      <div class="job-change__avatar">OB</div>
      <div>
        <p class="job-change__associate-name">Olivia Brooks</p>
        <p class="job-change__associate-role">Regional Distribution Manager · Reports to Elias Romero</p>
        <p class="job-change__associate-meta">Tenure: 4 yrs 3 mos · Location: Atlanta HQ · Associate ID: 402913</p>
      </div>
    </div>
    <div class="job-change__tag-row">
      <span class="job-change__pill job-change__pill--primary">Critical Role</span>
      <span class="job-change__pill job-change__pill--outline">Backfill identified</span>
      <span class="job-change__pill job-change__pill--outline">Diversity priority</span>
    </div>
  `;

  const overviewCard = document.createElement('article');
  overviewCard.className = 'job-change__panel job-change__panel--summary';
  const highlightsList = createKeyValueList(SUMMARY_HIGHLIGHTS, 'job-change__kv--grid');
  overviewCard.appendChild(createPanelHeader('Request Overview'));
  overviewCard.appendChild(highlightsList);
  overviewCard.appendChild(buildStatusCallout());

  row.append(associateCard, overviewCard);
  return row;
}

function createPanelHeader(label) {
  const header = document.createElement('div');
  header.className = 'job-change__panel-header';
  header.innerHTML = `<h3>${label}</h3>`;
  return header;
}

function buildStatusCallout() {
  const callout = document.createElement('div');
  callout.className = 'job-change__status-callout';
  callout.innerHTML = `
    <div>
      <p class="job-change__status-label">Current Stage</p>
      <p class="job-change__status-value">Compensation Review · Target completion Apr 17</p>
    </div>
    <span class="job-change__status-dot job-change__status-dot--pending"></span>
  `;
  return callout;
}

function createLayout() {
  const layout = document.createElement('div');
  layout.className = 'job-change__layout';

  const leftColumn = document.createElement('div');
  leftColumn.className = 'job-change__column';
  leftColumn.append(
    createRoleComparisonPanel(),
    createRequestDetailsPanel(),
    createCompPanel(),
    createNotesPanel()
  );

  const rightColumn = document.createElement('div');
  rightColumn.className = 'job-change__column job-change__column--narrow';
  rightColumn.append(
    createTimelinePanel(),
    createChecklistPanel(),
    createStakeholderPanel()
  );

  layout.append(leftColumn, rightColumn);
  return layout;
}

function createRoleComparisonPanel() {
  const body = document.createElement('div');
  body.className = 'job-change__comparison';

  const current = document.createElement('div');
  current.className = 'job-change__comparison-column';
  current.innerHTML = '<p class="job-change__comparison-title">Current Role</p>';
  current.appendChild(createKeyValueList(CURRENT_ROLE_FIELDS));

  const proposed = document.createElement('div');
  proposed.className = 'job-change__comparison-column';
  proposed.innerHTML = '<p class="job-change__comparison-title">Proposed Role</p>';
  proposed.appendChild(createKeyValueList(PROPOSED_ROLE_FIELDS));

  body.append(current, proposed);

  return createPanel('Role Comparison', body);
}

function createRequestDetailsPanel() {
  const body = document.createElement('div');
  body.className = 'job-change__panel-body';
  body.appendChild(createKeyValueList(REQUEST_FIELDS));

  const attachments = document.createElement('div');
  attachments.className = 'job-change__attachments';
  attachments.innerHTML = '<p>Attachments</p>';
  const list = document.createElement('ul');
  list.className = 'job-change__attachments-list';
  ATTACHMENTS.forEach((file) => {
    const item = document.createElement('li');
    item.innerHTML = `<span>${file}</span><button type="button">View</button>`;
    list.appendChild(item);
  });
  attachments.appendChild(list);
  body.appendChild(attachments);

  return createPanel('Request Details', body);
}

function createCompPanel() {
  const body = document.createElement('div');
  body.className = 'job-change__panel-body';
  body.appendChild(createKeyValueList(PAY_ADJUSTMENTS));
  const guidance = document.createElement('p');
  guidance.className = 'job-change__guidance';
  guidance.textContent = 'Compensation notes: Proposed base falls within 50th percentile for grade M4 and remains budget neutral for FY25.';
  body.appendChild(guidance);
  return createPanel('Compensation Impact', body);
}

function createNotesPanel() {
  const body = document.createElement('div');
  body.className = 'job-change__panel-body';
  body.innerHTML = `
    <p class="job-change__note">Olivia has led the logistics automation workstream for the last 18 months and has been functioning at the next level. Fleet Ops needs dedicated coverage for the upcoming network consolidation, and elevating Olivia keeps continuity for the automation rollout.</p>
    <p class="job-change__note-meta">Last updated Apr 8 by Maya Chen</p>
  `;
  return createPanel('Context Notes', body);
}

function createTimelinePanel() {
  const body = document.createElement('div');
  body.className = 'job-change__panel-body job-change__panel-body--flush';
  const list = document.createElement('div');
  list.className = 'job-change__timeline';
  TIMELINE_STEPS.forEach((step) => {
    const entry = document.createElement('div');
    entry.className = `job-change__timeline-step job-change__timeline-step--${step.status}`;
    entry.innerHTML = `
      <span class="job-change__timeline-marker"></span>
      <div>
        <p class="job-change__timeline-title">${step.title}</p>
        <p class="job-change__timeline-meta">${step.meta}</p>
      </div>
    `;
    list.appendChild(entry);
  });
  body.appendChild(list);
  return createPanel('Timeline', body);
}

function createChecklistPanel() {
  const body = document.createElement('div');
  body.className = 'job-change__panel-body job-change__panel-body--flush';
  const list = document.createElement('ul');
  list.className = 'job-change__checklist';
  CHECKLIST_ITEMS.forEach((item) => {
    const li = document.createElement('li');
    li.className = 'job-change__checklist-item';
    li.innerHTML = `
      <div>
        <p class="job-change__checklist-label">${item.label}</p>
        <p class="job-change__checklist-meta">Owned by ${item.owner}</p>
      </div>
      <span class="job-change__status-chip job-change__status-chip--${item.status}">${formatStatus(item.status)}</span>
    `;
    list.appendChild(li);
  });
  body.appendChild(list);
  return createPanel('Decision Checklist', body);
}

function createStakeholderPanel() {
  const body = document.createElement('div');
  body.className = 'job-change__panel-body job-change__panel-body--flush';
  const table = document.createElement('div');
  table.className = 'job-change__stakeholders';
  STAKEHOLDER_APPROVALS.forEach((entry) => {
    const row = document.createElement('div');
    row.className = 'job-change__stakeholder-row';
    row.innerHTML = `
      <div>
        <p class="job-change__stakeholder-name">${entry.name}</p>
        <p class="job-change__stakeholder-role">${entry.role}</p>
      </div>
      <span class="job-change__status-chip ${entry.status === 'Approved' ? 'job-change__status-chip--complete' : 'job-change__status-chip--pending'}">${entry.status}</span>
      <p class="job-change__stakeholder-date">${entry.date}</p>
    `;
    table.appendChild(row);
  });
  body.appendChild(table);
  return createPanel('Stakeholder Approvals', body);
}

function createPanel(title, body) {
  const panel = document.createElement('article');
  panel.className = 'job-change__panel';
  panel.appendChild(createPanelHeader(title));
  panel.appendChild(body);
  return panel;
}

function createKeyValueList(items, modifierClass = '') {
  const list = document.createElement('dl');
  list.className = ['job-change__kv', modifierClass].filter(Boolean).join(' ');
  items.forEach((item) => {
    const dt = document.createElement('dt');
    dt.textContent = item.label;
    const dd = document.createElement('dd');
    const value = document.createElement('p');
    value.className = 'job-change__kv-value';
    value.textContent = item.value;
    dd.appendChild(value);
    if (item.meta) {
      const meta = document.createElement('span');
      meta.className = 'job-change__kv-meta';
      meta.textContent = item.meta;
      dd.appendChild(meta);
    }
    list.append(dt, dd);
  });
  return list;
}

function formatStatus(status) {
  if (status === 'complete') return 'Complete';
  if (status === 'pending') return 'In Progress';
  return 'Pending';
}
