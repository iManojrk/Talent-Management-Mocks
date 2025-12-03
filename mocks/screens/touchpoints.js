import { Modal } from '../components/Modal.js?v=20250205';

const TRASH_ICON = '<svg class="icon icon-trash" aria-hidden="true"><use href="#icon-trash"></use></svg>';

const additionalQuestions = [ ];
let additionalQuestionId = additionalQuestions.length + 1;

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
  page.append(heading, actions);
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
