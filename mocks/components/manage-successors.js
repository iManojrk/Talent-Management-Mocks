const manageSuccessorsModalData = {
  owner: 'Elias Romero',
  successors: [
    {
      name: 'Olivia Brooks',
      readiness: 'Ready Now',
      readinessVariant: 'ready',
      jobTitle: 'Regional Distribution Manager',
      manager: 'Elias Romero',
      performance: 'Marginal Performer with targeted development plan',
      readinessSet: 'Updated this cycle'
    },
    {
      name: 'Amir Hassan',
      readiness: '1-2 Years',
      readinessVariant: 'years',
      jobTitle: 'Fleet Optimization Manager',
      manager: 'Elias Romero',
      performance: 'Consistent performer with high potential',
      readinessSet: 'Updated this cycle'
    },
    {
      name: 'Lena Ortiz',
      readiness: '3+ Years',
      readinessVariant: 'months',
      jobTitle: 'Warehouse Automation Lead',
      manager: 'Elias Romero',
      performance: 'Emerging leader driving automation pilots',
      readinessSet: 'Updated this cycle'
    }
  ]
};

export function createManageSuccessorsModal(ownerName) {
  const container = document.createElement('div');
  container.className = 'manage-successors';

  const title = document.createElement('h2');
  title.className = 'manage-successors__title';
  title.textContent = ownerName ?? manageSuccessorsModalData.owner;

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
