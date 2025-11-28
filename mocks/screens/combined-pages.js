import { OrgChart } from './orgchart.js?v=20250205';
import { TalentAssessmentHistory } from './talent-assessment-history.js?v=20250205';

export function CombinedPages() {
  const tabsData = [
    { label: 'Career', key: 'career' },
    { label: 'Goals', key: 'goals' },
    { label: 'Performance', key: 'performance' },
    { label: 'Talent Planning', key: 'talent-planning', active: true },
    { label: 'Learning', key: 'learning' },
    { label: 'Recognition', key: 'recognition' },
    { label: 'Learning', key: 'learning-2' },
  ];

  const wrapper = document.createElement('div');
  wrapper.className = 'combined-pages';

  const header = document.createElement('div');
  header.className = 'combined-pages__header';
  const title = document.createElement('div');
  title.className = 'combined-pages__title';
  title.textContent = 'Talent Management';

  const tabs = document.createElement('nav');
  tabs.className = 'combined-pages__tabs';
  tabs.innerHTML = tabsData
    .map(
      tab =>
        `<button class="${tab.active ? 'is-active' : ''}" type="button" data-tab="${tab.key}">${tab.label}</button>`
    )
    .join('');

  header.append(title, tabs);

  const panels = document.createElement('div');
  panels.className = 'combined-pages__panels';
  tabsData.forEach(tab => {
    const panel = document.createElement('section');
    panel.className = 'combined-pages__panel';
    panel.dataset.tab = tab.key;
    const body = document.createElement('div');
    body.className = 'combined-pages__panel-body';
    body.dataset.slot = tab.key;
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

  const initialTab = tabsData.find(tab => tab.active)?.key || tabsData[0].key;
  setActiveTab(initialTab);

  const talentPlanningBody = panels.querySelector('[data-slot="talent-planning"]');
  if (talentPlanningBody) {
    const intro = document.createElement('div');
    intro.className = 'talent-planning';
    intro.innerHTML = `
      <h1 class="talent-planning__title">Talent Planning</h1>
      <p class="talent-planning__subtitle">Create new plans, contribute to existing ones and complete your talent assessments</p>
    `;
    const secondaryTabs = document.createElement('div');
    secondaryTabs.className = 'talent-planning__tabs';
    const secondaryTabsData = [
      { label: 'Company Succession', key: 'company', active: true },
      { label: 'Team Succession', key: 'team' },
      { label: 'Plans', key: 'plans' },
      { label: 'Assessments', key: 'assessments' },
    ];
    const secondaryNav = document.createElement('nav');
    secondaryNav.className = 'talent-planning__tab-list';
    secondaryNav.innerHTML = secondaryTabsData
      .map(tab => `<button type="button" class="${tab.active ? 'is-active' : ''}" data-secondary-tab="${tab.key}">${tab.label}</button>`)
      .join('');
    const secondaryPanels = document.createElement('div');
    secondaryPanels.className = 'talent-planning__tab-panels';
    secondaryTabsData.forEach(tab => {
      const panel = document.createElement('section');
      panel.className = 'talent-planning__tab-panel';
      panel.dataset.secondaryTab = tab.key;
      const placeholder = document.createElement('div');
      placeholder.className = 'talent-planning__tab-panel-body';
      placeholder.dataset.secondarySlot = tab.key;
      panel.appendChild(placeholder);
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
    const companyPanelBody = secondaryPanels.querySelector('[data-secondary-slot="company"]');
    if (companyPanelBody && typeof OrgChart === 'function') {
      const orgView = OrgChart();
      if (orgView) companyPanelBody.appendChild(orgView);
    }
    const assessmentsPanelBody = secondaryPanels.querySelector('[data-secondary-slot="assessments"]');
    if (assessmentsPanelBody && typeof TalentAssessmentHistory === 'function') {
      const assessmentView = TalentAssessmentHistory();
      if (assessmentView) assessmentsPanelBody.appendChild(assessmentView);
    }

    secondaryTabs.append(secondaryNav, secondaryPanels);

    talentPlanningBody.append(intro, secondaryTabs);
  }

  wrapper.append(header, panels);
  return wrapper;
}
