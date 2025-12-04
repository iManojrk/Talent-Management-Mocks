import { Modal } from '../components/Modal.js?v=20250205';
import { createManageSuccessorsModal } from '../components/manage-successors.js?v=20250205';

const POSITION_OPTIONS = [
  { label: 'Keep associate in same position', value: 'keep' },
  { label: 'Reassign associate to a new position', value: 'reassign', checked: true },
  { label: 'Create and Assign a New Position', value: 'create' }
];

export function PromotionModal() {
  const page = document.createElement('section');
  page.className = 'promotion-modal';
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'btn primary promotion-modal__cta';
  button.textContent = 'promote Elias Romero';
  button.style.marginTop = '200px';
  button.style.marginLeft = '200px';

  const detailsModal = Modal();
  const successionImpactModal = Modal();
  const manageSuccessorsModal = Modal();
  button.addEventListener('click', () => {
    detailsModal.open({
      title: 'Position Details',
      body: buildPromotionModalContent(detailsModal, successionImpactModal, manageSuccessorsModal),
      className: 'modal-promotion'
    });
  });

  page.appendChild(button);
  return page;
}

function buildPromotionModalContent(modalInstance, impactModal, manageModal) {
  const container = document.createElement('div');
  container.className = 'promotion-position';

  container.append(
    buildAssignmentOptions(),
    createDivider(),
    buildNewPositionSection(),
    buildActions(modalInstance, impactModal, manageModal)
  );

  return container;
}

function buildAssignmentOptions() {
  const section = document.createElement('section');
  section.className = 'promotion-position__section';

  const label = document.createElement('p');
  label.className = 'promotion-position__section-title';
  label.textContent = 'Position Assignment Options';

  const optionsList = document.createElement('div');
  optionsList.className = 'promotion-position__options';

  POSITION_OPTIONS.forEach(option => {
    const wrapper = document.createElement('label');
    wrapper.className = 'promotion-position__option';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'promotion-position-option';
    input.value = option.value;
    input.checked = Boolean(option.checked);
    input.className = 'promotion-position__radio';
    input.setAttribute('aria-label', option.label);
    input.tabIndex = 0;

    const indicator = document.createElement('span');
    indicator.className = 'promotion-position__radio-indicator';

    const text = document.createElement('span');
    text.className = 'promotion-position__option-label';
    text.textContent = option.label;

    wrapper.append(input, indicator, text);
    optionsList.appendChild(wrapper);
  });

  section.append(label, optionsList);
  return section;
}

function createDivider() {
  const divider = document.createElement('div');
  divider.className = 'promotion-position__divider';
  return divider;
}

function buildNewPositionSection() {
  const section = document.createElement('section');
  section.className = 'promotion-position__section promotion-position__section--new';

  const headingRow = document.createElement('div');
  headingRow.className = 'promotion-position__heading';

  const heading = document.createElement('p');
  heading.className = 'promotion-position__section-title';
  heading.textContent = 'New Position';

  headingRow.append(heading, createAssignmentPill());

  const fieldRow = document.createElement('div');
  fieldRow.className = 'promotion-position__field-row';

  const field = document.createElement('div');
  field.className = 'promotion-position__field';

  const label = document.createElement('p');
  label.className = 'promotion-position__field-label';
  label.textContent = 'Position';

  const value = document.createElement('p');
  value.className = 'promotion-position__field-value';
  value.textContent = 'No Position Selected';

  const searchButton = document.createElement('button');
  searchButton.type = 'button';
  searchButton.className = 'promotion-position__link';
  searchButton.innerHTML = `Search Positions <span class="promotion-position__link-icon" aria-hidden="true">${buildArrowIcon()}</span>`;

  field.append(label, value);
  fieldRow.append(field, searchButton);

  section.append(headingRow, fieldRow);
  return section;
}

function createAssignmentPill() {
  const pill = document.createElement('span');
  pill.className = 'promotion-position__assignment-pill';
  pill.innerHTML = `
    <span class="promotion-position__assignment-icon" aria-hidden="true">${buildSwapIcon()}</span>
    Current Assignment
  `;
  return pill;
}

function buildActions(modalInstance, impactModal, manageModal) {
  const actions = document.createElement('div');
  actions.className = 'promotion-position__actions';

  const warning = createWarningNotice(impactModal, manageModal);

  const buttons = document.createElement('div');
  buttons.className = 'promotion-position__actions-buttons';

  const cancel = document.createElement('button');
  cancel.type = 'button';
  cancel.className = 'btn outline';
  cancel.textContent = 'Cancel';
  cancel.addEventListener('click', () => modalInstance.close());

  const update = document.createElement('button');
  update.type = 'button';
  update.className = 'btn primary promotion-position__update-btn';
  update.textContent = 'Update';
  update.disabled = true;

  buttons.append(cancel, update);
  actions.append(warning, buttons);
  return actions;
}

function buildSwapIcon() {
  return `
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="9" stroke="currentColor" stroke-width="1.5"/>
      <path d="M11.8 6.5 9 9.3 6.2 6.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8.2 13.5 11 10.7 13.8 13.5" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function buildArrowIcon() {
  return `
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M4 2.5 8.5 7 4 11.5" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
}

function createWarningNotice(impactModal, manageModal) {
  const warning = document.createElement('div');
  warning.className = 'promotion-position__field-warning promotion-position__field-warning--actions';
  warning.innerHTML = `
    <span class="promotion-position__warning-icon" aria-hidden="true">${buildWarningIcon()}</span>
    <button type="button" class="promotion-position__link promotion-position__warning-link">Succession Impact</button>
  `;
  const button = warning.querySelector('button');
  button.addEventListener('click', () => {
    impactModal.open({
      title: 'Succession Impact',
      body: createSuccessionImpactBody(impactModal, manageModal),
      className: 'modal-succession-impact'
    });
  });
  return warning;
}

function createSuccessionImpactBody(impactModal, manageModal) {
  const body = document.createElement('div');
  body.className = 'succession-impact-modal';
  const subtitle = document.createElement('p');
  subtitle.className = 'succession-impact-modal__subtitle';
  subtitle.innerHTML = 'Elias Romero is currently the incumbent for the VP of Sales Position. Changing this Position assignment will make the VP of Sales Position vacant. There are 2 successors with readiness level Ready Now. <button type="button" class="succession-impact-modal__link">View Succession Plan</button>';
  body.appendChild(subtitle);

  const link = subtitle.querySelector('button');
  link.addEventListener('click', () => {
    if (manageModal) {
      const manageBody = createManageSuccessorsModal('Elias Romero');
      manageModal.open({
        title: '',
        body: manageBody,
        className: 'modal-wide manage-successors-modal'
      });
    }
  });

  return body;
}

function buildWarningIcon() {
  return `
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 1.5 14 13.5H2L8 1.5Z" stroke="currentColor" stroke-width="1.3" stroke-linejoin="round"/>
      <path d="M8 6v3.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
      <circle cx="8" cy="12" r="0.7" fill="currentColor"/>
    </svg>
  `;
}
