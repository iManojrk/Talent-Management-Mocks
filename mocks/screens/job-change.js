import { Modal } from '../components/Modal.js?v=20250205';
import { openPromotionDetailsModal } from './promotion-modal.js?v=20250218';

export function JobChange() {
  const page = document.createElement('section');
  page.className = 'job-change job-change--blank';
  const promotionDetailsModal = Modal();
  const successionImpactModal = Modal();
  const manageSuccessorsModal = Modal();

  const intro = document.createElement('div');
  intro.className = 'job-change__intro';

  const title = document.createElement('h1');
  title.textContent = 'Job Change For:';

  const header = document.createElement('div');
  header.className = 'job-change__header';

  const headingGroup = document.createElement('div');
  headingGroup.className = 'job-change__heading';
  headingGroup.append(title, buildProfileSummary());

  const actions = document.createElement('div');
  actions.className = 'job-change__actions';

  const cancel = document.createElement('button');
  cancel.type = 'button';
  cancel.className = 'btn outline';
  cancel.textContent = 'Cancel';

  const submit = document.createElement('button');
  submit.type = 'button';
  submit.className = 'btn primary';
  submit.textContent = 'Submit Job Change';

  actions.append(cancel, submit);
  header.append(headingGroup, actions);

  const subtitleWrap = document.createElement('div');
  subtitleWrap.className = 'job-change__subtitle-row';

  const subtitle = document.createElement('p');
  subtitle.textContent = 'Job changes let you adjust key worker data elements. Get started by choosing a new position assignment. (Edit Position Details below) or updating the current assignment (edit any section below).';

  const override = document.createElement('button');
  override.type = 'button';
  override.className = 'job-change__link';
  override.textContent = 'Override restricted fields';

  subtitleWrap.append(subtitle, override);

  const changeDetailsCard = buildChangeDetails();
  const positionDetailsCard = buildPositionDetails({
    promotionDetailsModal,
    successionImpactModal,
    manageSuccessorsModal,
  });

  intro.append(header, subtitleWrap, changeDetailsCard, positionDetailsCard);
  page.appendChild(intro);
  return page;
}

function buildProfileSummary() {
  const profile = document.createElement('div');
  profile.className = 'job-change__profile';

  const avatar = document.createElement('div');
  avatar.className = 'avatar large';
  avatar.textContent = 'J';
  avatar.style.backgroundColor = '#c2410c';

  const meta = document.createElement('div');
  meta.className = 'talent-card__bio job-change__profile-meta';

  const id = document.createElement('div');
  id.className = 'job-change__profile-id';
  id.textContent = 'ID: 10050';

  const name = document.createElement('div');
  name.className = 'talent-card__name';
  name.textContent = 'John Herron';

  meta.append(id, name);
  profile.append(avatar, meta);
  return profile;
}

function buildChangeDetails() {
  const card = document.createElement('div');
  card.className = 'panel job-change__details job-change__card';

  const heading = document.createElement('h3');
  heading.textContent = 'Change Details';

  const list = document.createElement('dl');
  list.className = 'job-change__details-list';

  const fields = [
    { label: 'Start Date', value: '11/24/2025' },
    { label: 'Job Change Type', value: 'Promote' },
    { label: 'Job Change Reason', value: 'Promote - Promotion' },
    { label: 'Comments', value: '' }
  ];

  fields.forEach(({ label, value }) => {
    const term = document.createElement('dt');
    term.className = 'job-change__detail-label';
    term.textContent = label;

    const desc = document.createElement('dd');
    desc.className = 'job-change__detail-value';
    desc.textContent = value ?? '';

    list.append(term, desc);
  });

  card.append(heading, list);
  return card;
}

function buildPositionDetails(modalRefs = {}) {
  const card = document.createElement('div');
  card.className = 'panel job-change__card job-change__position-card';

  const headingRow = document.createElement('div');
  headingRow.className = 'job-change__card-heading';

  const heading = document.createElement('h3');
  heading.textContent = 'Position Details';

  const editButton = document.createElement('button');
  editButton.type = 'button';
  editButton.className = 'job-change__card-action';
  editButton.innerHTML = `
    <span>Edit</span>
    <span class="job-change__card-action-icon" aria-hidden="true">
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.5 2.3 11.7 5.5 5.4 11.8 2.2 12.3 2.7 9.1 8.5 2.3Z" stroke="currentColor" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
        <path d="m7.8 3 2.9 2.9" stroke="currentColor" stroke-width="1.2" stroke-linecap="round"/>
      </svg>
    </span>
  `;
  editButton.addEventListener('click', () => {
    const { promotionDetailsModal, successionImpactModal, manageSuccessorsModal } = modalRefs;
    openPromotionDetailsModal(
      promotionDetailsModal ?? Modal(),
      successionImpactModal ?? Modal(),
      manageSuccessorsModal ?? Modal()
    );
  });

  headingRow.append(heading, editButton);

  const list = document.createElement('dl');
  list.className = 'job-change__position-list';

  const fields = [
    { label: 'Position', value: 'Forklift Operator (FRKOP-50)' },
    { label: 'Job Template', value: 'FRKOP-Forklift Operator' },
    { label: 'Position Title', value: 'Forklift Operator' },
    { label: 'Manager', valueElement: buildManagerField() },
    { label: 'Legal Entity', value: 'ADP Demo USA - LE-1' }
  ];

  fields.forEach(({ label, value, valueElement }) => {
    const term = document.createElement('dt');
    term.className = 'job-change__position-label';
    term.textContent = label;

    const desc = document.createElement('dd');
    desc.className = 'job-change__position-value';
    if (valueElement) {
      desc.appendChild(valueElement);
    } else {
      desc.textContent = value ?? '';
    }

    list.append(term, desc);
  });

  card.append(headingRow, list);
  return card;
}

function buildManagerField() {
  const wrapper = document.createElement('div');
  wrapper.className = 'job-change__manager';

  const badge = document.createElement('span');
  badge.className = 'job-change__manager-pill';
  badge.textContent = 'V';

  const text = document.createElement('span');
  text.textContent = 'Vacant (Mfg Operations Manager - OPSMAN-48)';

  wrapper.append(badge, text);
  return wrapper;
}
