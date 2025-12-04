import { Modal } from '../components/Modal.js?v=20250205';

const TRASH_ICON = '<svg class="icon icon-trash" aria-hidden="true"><use href="#icon-trash"></use></svg>';

const additionalQuestions = [ ];
let additionalQuestionId = additionalQuestions.length + 1;

const TOUCHPOINT_REQUESTS = [
  {
    title: 'A Scheduled TP - Both - Nov 12 - Entire Org',
    subtitle: 'A Scheduled TP - Both - Nov 12 - Entire Org',
    progress: '0 out of 62 completed',
    dueDate: '05/12/2025',
    status: 'Active'
  },
  {
    title: 'A Test Scheduled TP - Oct 20 - Criteria Based',
    subtitle: 'A Test Scheduled TP - Oct 20 - Criteria Based',
    progress: '0 out of 1 completed',
    dueDate: '01/11/2025',
    status: 'Closed'
  },
  {
    title: 'A Scheduled Test TP - Both - Oct 07 - Entire Org',
    subtitle: 'A Scheduled Test TP - Both - Oct 07 - Entire Org',
    progress: '0 out of 55 completed',
    dueDate: '31/10/2025',
    status: 'Closed'
  },
  {
    title: 'lakshmi',
    subtitle: 'jkhgf',
    progress: '0 out of 59 completed',
    dueDate: '23/10/2025',
    status: 'Closed'
  },
  {
    title: 'On-Demand: 10/09/2025',
    subtitle: 'Automation On-Demand TouchPoint 10-07-25 07:14',
    requestedBy: 'You',
    dueDate: '14/10/2025',
    progress: '1 out of 3 completed',
    status: 'Closed'
  },
  {
    title: 'A Scheduled TP - Both - Sep 03 -Huge Criteria Based Edited',
    subtitle: 'A Scheduled TP - Both - Sep 03 -Huge Criteria Based Edited',
    progress: '0 out of 12 completed',
    dueDate: '04/10/2025',
    status: 'Closed'
  }
];

export function Touchpoints() {
  const page = document.createElement('section');
  page.className = 'touchpoints';
  const requestModal = Modal();
  const manageQuestionsModal = Modal();
  const heading = document.createElement('h2');
  heading.textContent = 'Touchpoints';
  const subtitle = document.createElement('p');
  subtitle.className = 'touchpoints__subtitle';
  subtitle.textContent = 'A log of touchpoints completed by your manager, both in progress and completed.';
  const actions = document.createElement('div');
  actions.className = 'touchpoints__subrow';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn primary touchpoints__start';
  button.textContent = 'Start Touchpoint';
  button.addEventListener('click', () => {
    requestModal.open({
      title: 'Touchpoint Request',
      body: buildTouchpointModal(requestModal, manageQuestionsModal)
    });
  });
  actions.append(subtitle, button);
  const filters = buildTouchpointsFilters();
  const cards = buildTouchpointRequests();
  page.append(heading, actions, filters, cards);
  return page;
}

function buildTouchpointModal(modalInstance, manageQuestionsModal) {
  const container = document.createElement('div');
  container.className = 'touchpoint-modal';
  container.innerHTML = `
    <section class="touchpoint-modal__section">
      <h3>Details</h3>
      <div class="touchpoint-modal__details">
        <div>
          <p class="touchpoint-modal__label">Name</p>
          <p class="touchpoint-modal__value">On-Demand: 12/02/2025</p>
        </div>
        <div>
          <p class="touchpoint-modal__label">Touchpoint Duration</p>
          <p class="touchpoint-modal__value">5 days</p>
        </div>
      </div>
    </section>
    <section class="touchpoint-modal__section">
      <h3>Goals</h3>
      <div class="touchpoint-modal__goal-callout">
        <span class="touchpoint-modal__goal-icon">i</span>
        <p>Goals will be captured as of <strong>12/02/2025</strong> (start date of this Touchpoint)</p>
      </div>
    </section>
    <section class="touchpoint-modal__section">
      <div class="touchpoint-modal__section-header">
        <div class="touchpoint-modal__section-content">
          <h3>Custom Section</h3>
          <p class="touchpoint-modal__label">Question Set</p>
          <div class="touchpoint-modal__question-row">
            <p class="touchpoint-modal__value">On Demand Touchpoint Questions</p>
            <span class="touchpoint-modal__question-spacer"></span>
            <button class="touchpoint-modal__link touchpoint-modal__link--right" type="button">View Questions</button>
          </div>
          <p class="touchpoint-modal__label">Additional Questions</p>
          <div class="touchpoint-modal__question-row">
            <p class="touchpoint-modal__value" data-additional-questions-summary></p>
            <span class="touchpoint-modal__question-spacer"></span>
            <button class="touchpoint-modal__link touchpoint-modal__link--right" type="button" data-touchpoint-action="manage-questions">Manage Questions</button>
          </div>
        </div>
      </div>
    </section>
    <section class="touchpoint-modal__section">
      <h3>Touchpoint Request made to</h3>
      <div class="touchpoint-modal__person-card card">
        <div class="touchpoint-modal__person-avatar">K</div>
        <div>
          <p class="touchpoint-modal__person-name">Jordan Reyes</p>
          <p class="touchpoint-modal__person-role">Chief Executive Officer</p>
        </div>
      </div>
    </section>
    <section class="touchpoint-modal__section">
      <label class="touchpoint-modal__textarea-label">
        <span>Email Notification to Manager</span>
        <textarea class="touchpoint-modal__textarea" rows="4"></textarea>
      </label>
      <p class="touchpoint-modal__helper">Share with your manager any specific goal or area you would like feedback on</p>
    </section>
    <div class="touchpoint-modal__actions">
      <button type="button" class="btn outline touchpoint-modal__action" data-touchpoint-action="cancel">Cancel</button>
      <button type="button" class="btn primary touchpoint-modal__action" data-touchpoint-action="send">Send Request</button>
    </div>
  `;

  const close = () => modalInstance.close();
  container.querySelector('[data-touchpoint-action="cancel"]')?.addEventListener('click', close);
  container.querySelector('[data-touchpoint-action="send"]')?.addEventListener('click', close);
  updateAdditionalQuestionsSummary(container);
  container.querySelector('[data-touchpoint-action="manage-questions"]')?.addEventListener('click', () => {
    manageQuestionsModal.open({
      title: 'Manage Additional Questions',
      body: buildManageQuestionsModal(manageQuestionsModal, () => updateAdditionalQuestionsSummary(container))
    });
  });

  return container;
}

function buildManageQuestionsModal(modalInstance, onChange = () => {}) {
  const container = document.createElement('div');
  container.className = 'touchpoint-modal manage-questions';

  const intro = document.createElement('p');
  intro.className = 'manage-questions__intro';
  intro.textContent = 'Add additional questions your manager will answer during this touchpoint.';
  container.appendChild(intro);

  const list = document.createElement('div');
  list.className = 'manage-questions__list';
  container.appendChild(list);

  const form = document.createElement('form');
  form.className = 'manage-questions__form';
  const fieldId = `manage-question-input-${Date.now()}`;
  const formLabel = document.createElement('label');
  formLabel.className = 'touchpoint-modal__label';
  formLabel.setAttribute('for', fieldId);
  formLabel.textContent = 'Add a question';
  const newQuestionField = document.createElement('textarea');
  newQuestionField.id = fieldId;
  newQuestionField.rows = 2;
  newQuestionField.className = 'touchpoint-modal__textarea manage-questions__textarea';
  newQuestionField.placeholder = 'For example: What should we pause, continue, or start before the next checkpoint?';
  const formActions = document.createElement('div');
  formActions.className = 'manage-questions__form-actions';
  const addButton = document.createElement('button');
  addButton.type = 'submit';
  addButton.className = 'btn outline';
  addButton.textContent = 'Add Question';
  const updateAddButtonState = () => {
    addButton.disabled = newQuestionField.value.trim().length === 0;
  };
  newQuestionField.addEventListener('input', updateAddButtonState);
  updateAddButtonState();
  formActions.appendChild(addButton);
  form.append(formLabel, newQuestionField, formActions);
  container.appendChild(form);

  const footer = document.createElement('div');
  footer.className = 'touchpoint-modal__actions manage-questions__actions';
  const doneButton = document.createElement('button');
  doneButton.type = 'button';
  doneButton.className = 'btn primary';
  doneButton.textContent = 'Save';
  doneButton.addEventListener('click', () => modalInstance.close());
  footer.appendChild(doneButton);
  container.appendChild(footer);

  const renderQuestions = () => {
    if (!additionalQuestions.length) {
      additionalQuestions.push({ id: additionalQuestionId++, text: '' });
    }
    list.innerHTML = '';
    additionalQuestions.forEach((question, index) => {
      const item = document.createElement('div');
      item.className = 'manage-questions__item';
      const label = document.createElement('p');
      label.className = 'touchpoint-modal__label';
      label.textContent = `Question ${index + 1}`;
      const fieldRow = document.createElement('div');
      fieldRow.className = 'manage-questions__input-row';
      const field = document.createElement('textarea');
      field.className = 'touchpoint-modal__textarea manage-questions__textarea';
      field.rows = 2;
      field.value = question.text;
      field.addEventListener('input', event => {
        question.text = event.target.value;
        onChange();
      });
      const deleteBtn = document.createElement('button');
      deleteBtn.type = 'button';
      deleteBtn.className = 'cycle-proposed__icon-btn manage-questions__delete-button';
      deleteBtn.innerHTML = TRASH_ICON;
      deleteBtn.setAttribute('aria-label', 'Remove question');
      deleteBtn.addEventListener('click', () => {
        const idx = additionalQuestions.findIndex(q => q.id === question.id);
        if (idx > -1) {
          additionalQuestions.splice(idx, 1);
          renderQuestions();
          onChange();
        }
      });
      fieldRow.append(field, deleteBtn);
      item.append(label, fieldRow);
      list.appendChild(item);
    });
  };

  form.addEventListener('submit', event => {
    event.preventDefault();
    const value = newQuestionField.value.trim();
    if (!value) return;
    additionalQuestions.push({ id: additionalQuestionId++, text: value });
    newQuestionField.value = '';
    updateAddButtonState();
    renderQuestions();
    onChange();
  });

  renderQuestions();
  return container;
}

function buildTouchpointsFilters() {
  const wrap = document.createElement('div');
  wrap.className = 'touchpoints__filters-wrap';
  const filtersRow = document.createElement('div');
  filtersRow.className = 'touchpoints__filters';
  filtersRow.append(
    createTouchpointFilter({
      label: 'Status',
      value: 'All',
      type: 'dropdown'
    }),
    createTouchpointFilter({
      label: 'Select Year',
      placeholder: 'Select one...',
      type: 'search'
    }),
    createTouchpointFilter({
      label: 'Touchpoint Type',
      value: 'All',
      type: 'dropdown'
    })
  );
  const divider = document.createElement('div');
  divider.className = 'touchpoints__filters-divider';
  wrap.append(filtersRow, divider);
  return wrap;
}

function createTouchpointFilter({ label, value = '', placeholder = '', type = 'dropdown' }) {
  const field = document.createElement('label');
  field.className = 'touchpoints__filter filter-field';
  const labelSpan = document.createElement('span');
  labelSpan.textContent = label;
  const input = document.createElement('input');
  input.className = 'input';
  input.type = 'text';
  if (value) {
    input.value = value;
    input.readOnly = true;
  }
  if (placeholder) {
    input.placeholder = placeholder;
  }
  const icon = document.createElement('span');
  icon.className = 'filter-field__icon';
  if (type === 'search') {
    icon.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M11.502485,4 C15.0937084,4 18.0049701,6.90952883 18.0049701,10.4986145 C18.0049701,12.1375978 17.3978667,13.6348689 16.3961459,14.7780684 L19.4859068,18.2675042 C19.8675111,18.698423 19.8273258,19.3569189 19.3961504,19.7382961 C18.9957732,20.092432 18.3990519,20.0830985 18.010315,19.7349406 L17.9244825,19.6485931 L14.7877549,16.1080203 C13.8236763,16.6732 12.7009437,16.997229 11.502485,16.997229 C7.91126172,16.997229 5,14.0877002 5,10.4986145 C5,6.90952883 7.91126172,4 11.502485,4 Z M11.502485,6.08387877 C9.06284165,6.08387877 7.08511991,8.06042329 7.08511991,10.4986145 C7.08511991,12.9368058 9.06284165,14.9133503 11.502485,14.9133503 C13.9421284,14.9133503 15.9198502,12.9368058 15.9198502,10.4986145 C15.9198502,8.06042329 13.9421284,6.08387877 11.502485,6.08387877 Z"></path>
      </svg>
    `;
  } else {
    icon.innerHTML = `
      <svg viewBox="0 0 24 24" aria-hidden="true">
        <path fill="currentColor" d="M6.5 9.5l5.5 5 5.5-5c.4-.36.99-.33 1.34.07.33.37.3.93-.06 1.27l-6.17 5.6a.9.9 0 01-1.22 0l-6.17-5.6c-.36-.34-.4-.9-.07-1.27.35-.4.94-.43 1.35-.07z"></path>
      </svg>
    `;
  }
  field.append(labelSpan, input, icon);
  return field;
}

function buildTouchpointRequests() {
  const section = document.createElement('section');
  section.className = 'touchpoints__list';
  const heading = document.createElement('h3');
  heading.textContent = 'Touchpoint Requests';
  section.appendChild(heading);
  const grid = document.createElement('div');
  grid.className = 'touchpoints__cards';
  TOUCHPOINT_REQUESTS.forEach(request => {
    const card = document.createElement('article');
    card.className = 'touchpoints-card';
    const title = document.createElement('h4');
    title.className = 'touchpoints-card__title';
    title.textContent = request.title;
    const subtitle = document.createElement('p');
    subtitle.className = 'touchpoints-card__subtitle';
    subtitle.textContent = request.subtitle;
    const meta = document.createElement('div');
    meta.className = 'touchpoints-card__meta';

    if (request.requestedBy) {
      const requested = document.createElement('p');
      requested.innerHTML = `<strong>Requested By</strong><br/>${request.requestedBy}`;
      meta.appendChild(requested);
    }

    const progress = document.createElement('p');
    progress.innerHTML = `<strong>Completion Progress</strong><br/>${request.progress}`;
    meta.appendChild(progress);

    const due = document.createElement('p');
    due.innerHTML = `<strong>Due Date</strong><br/>${request.dueDate}`;
    meta.appendChild(due);

    const status = document.createElement('span');
    status.className = `touchpoints-card__status touchpoints-card__status--${request.status === 'Active' ? 'active' : 'closed'}`;
    status.textContent = request.status;

    card.append(title, subtitle, meta, status);
    grid.appendChild(card);
  });
  section.appendChild(grid);
  return section;
}

function updateAdditionalQuestionsSummary(container) {
  const summary = container.querySelector('[data-additional-questions-summary]');
  if (summary) {
    summary.textContent = formatAdditionalQuestionsSummary();
  }
}

function formatAdditionalQuestionsSummary() {
  const count = getFilledQuestionsCount();
  if (!count) return 'No additional questions yet';
  if (count === 1) return '1 saved question';
  return `${count} saved questions`;
}

function getFilledQuestionsCount() {
  return additionalQuestions.filter(q => q.text && q.text.trim().length > 0).length;
}
