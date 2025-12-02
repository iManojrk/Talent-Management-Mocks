import { TalentAssessmentStandardQuestions } from './talent-assessment-standard-questions.js?v=20250213';

const tabMeta = [
  { label: 'Talent Planning', key: 'talent-planning', active: true, description: 'Control the cycles, templates, and readiness signals that power the planning workspace.' },
  { label: 'Competencies', key: 'competencies', description: 'Maintain the global competency library and map behaviors to roles.' },
  { label: 'Career Profile', key: 'career-profile', description: 'Configure profile sections, visibility, and editable attributes for employees.' },
  { label: 'Recognition', key: 'recognition', description: 'Set up award types, eligibility rules, and notification preferences.' },
  { label: 'Learning', key: 'learning', description: 'Connect learning catalogs, featured playlists, and assignment guardrails.' },
  { label: 'Career Development', key: 'career-development', description: 'Define plan templates, milestones, and success tracking for development journeys.' },
  { label: 'Performance', key: 'performance', description: 'Align rating scales, workflows, and timeline defaults for evaluations.' },
  { label: 'Goals', key: 'goals', description: 'Control goal cycle timing, scoring models, and visibility rules.' },
  { label: 'Goal Library', key: 'goal-library', description: 'Curate shared goal templates and tagging frameworks for reuse.' },
];

function createPlaceholderCard({ label, description }, modifierClass = '') {
  const card = document.createElement('article');
  card.className = ['talent-configuration__placeholder', modifierClass].filter(Boolean).join(' ');
  card.innerHTML = `
    <div class="talent-configuration__placeholder-eyebrow">Configuration workspace</div>
    <h2>${label}</h2>
    <p>${description}</p>
    <div class="talent-configuration__placeholder-actions">
      <button type="button" class="btn outline" disabled>To be Implemented</button>
    </div>
  `;
  return card;
}

function createTalentPlanningContent() {
  const container = document.createElement('div');
  container.className = 'talent-planning';

  const heading = document.createElement('h1');
  heading.textContent = 'Talent Planning';
  container.appendChild(heading);

  const secondaryTabsData = [
    {
      label: 'Talent Cycles',
      key: 'cycles',
      description: 'Configure cycle timing, stakeholder assignments, and readiness checkpoints.',
    },
    {
      label: 'Talent Assessment Questions',
      key: 'questions',
      active: true,
      description: 'Maintain the rating prompts and calibration scales used across assessments.',
    },
    {
      label: 'Talent Matrix Settings',
      key: 'matrix',
      description: 'Define nine-box axes, scoring inputs, and visualization defaults for reviews.',
    },
    {
      label: 'Succession Plan Settings',
      key: 'succession',
      description: 'Control plan templates, nomination rules, and reporting views for successors.',
    },
  ];

  const secondaryTabs = document.createElement('div');
  secondaryTabs.className = 'talent-planning__tabs secondary-tabs';

  const secondaryNav = document.createElement('nav');
  secondaryNav.className = 'talent-planning__tab-list secondary-tabs__list';
  secondaryNav.innerHTML = secondaryTabsData
    .map(tab => `<button type="button" class="${tab.active ? 'is-active' : ''}" data-secondary-tab="${tab.key}">${tab.label}</button>`)
    .join('');

  const secondaryPanels = document.createElement('div');
  secondaryPanels.className = 'talent-planning__tab-panels secondary-tabs__panels';

  secondaryTabsData.forEach(tab => {
    const panel = document.createElement('section');
    panel.className = 'talent-planning__tab-panel secondary-tabs__panel';
    panel.dataset.secondaryTab = tab.key;

    const panelBody = document.createElement('div');
    panelBody.className = 'talent-planning__tab-panel-body secondary-tabs__panel-body';
    panelBody.dataset.secondarySlot = tab.key;
    if (tab.key === 'cycles') {
      const intro = document.createElement('div');
      intro.className = 'talent-planning__cycles-intro';
      intro.innerHTML = `
        <h2>Talent Planning Cycles</h2>
        <p>Manage talent planning cycles to be begin collecting talent assessments as input to succession plans</p>
      `;
      panelBody.appendChild(intro);
    } else if (tab.key === 'questions') {
      const tasqTemplate =
        typeof TalentAssessmentStandardQuestions === 'function'
          ? TalentAssessmentStandardQuestions()
          : null;
      if (tasqTemplate) {
        panelBody.appendChild(tasqTemplate);
      } else {
        panelBody.appendChild(createPlaceholderCard(tab, 'talent-planning__placeholder'));
      }
    } else {
      panelBody.appendChild(createPlaceholderCard(tab, 'talent-planning__placeholder'));
    }

    panel.appendChild(panelBody);
    secondaryPanels.appendChild(panel);
  });

  const setSecondaryTab = key => {
    [...secondaryNav.querySelectorAll('button[data-secondary-tab]')].forEach(btn => {
      btn.classList.toggle('is-active', btn.dataset.secondaryTab === key);
    });
    [...secondaryPanels.children].forEach(panel => {
      panel.classList.toggle('is-active', panel.dataset.secondaryTab === key);
    });
  };

  secondaryNav.addEventListener('click', event => {
    const btn = event.target.closest('button[data-secondary-tab]');
    if (!btn) return;
    setSecondaryTab(btn.dataset.secondaryTab);
  });

  setSecondaryTab(secondaryTabsData.find(tab => tab.active)?.key || secondaryTabsData[0].key);

  secondaryTabs.append(secondaryNav, secondaryPanels);
  container.appendChild(secondaryTabs);
  return container;
}

export function TalentConfiguration() {
  const wrapper = document.createElement('div');
  wrapper.className = 'talent-configuration combined-pages';

  const header = document.createElement('div');
  header.className = 'combined-pages__header';

  const title = document.createElement('div');
  title.className = 'combined-pages__title';
  title.textContent = 'Talent Configuration';

  const tabs = document.createElement('nav');
  tabs.className = 'combined-pages__tabs';
  tabs.innerHTML = tabMeta
    .map(tab => `<button class="${tab.active ? 'is-active' : ''}" type="button" data-tab="${tab.key}">${tab.label}</button>`)
    .join('');

  header.append(title, tabs);

  const panels = document.createElement('div');
  panels.className = 'combined-pages__panels talent-configuration__panels';

  tabMeta.forEach(tab => {
    const panel = document.createElement('section');
    panel.className = 'combined-pages__panel talent-configuration__panel';
    panel.dataset.tab = tab.key;

    const body = document.createElement('div');
    body.className = 'combined-pages__panel-body talent-configuration__panel-body';
    body.dataset.slot = tab.key;
    if (tab.key === 'talent-planning') {
      body.appendChild(createTalentPlanningContent());
    } else {
      body.appendChild(createPlaceholderCard(tab));
    }

    panel.appendChild(body);
    panels.appendChild(panel);
  });

  const setActiveTab = key => {
    [...tabs.querySelectorAll('button[data-tab]')].forEach(btn => {
      const isTarget = btn.dataset.tab === key;
      btn.classList.toggle('is-active', isTarget);
    });
    [...panels.children].forEach(panel => {
      const isTarget = panel.dataset.tab === key;
      panel.classList.toggle('is-active', isTarget);
    });
  };

  tabs.addEventListener('click', event => {
    const button = event.target.closest('button[data-tab]');
    if (!button) return;
    setActiveTab(button.dataset.tab);
  });

  const initialTab = tabMeta.find(tab => tab.active)?.key || tabMeta[0].key;
  setActiveTab(initialTab);

  wrapper.append(header, panels);
  return wrapper;
}
