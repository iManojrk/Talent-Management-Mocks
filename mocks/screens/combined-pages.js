import { OrgChart } from './orgchart.js?v=20250205';
import { TalentAssessmentHistory } from './talent-assessment-history.js?v=20250205';
import { PerformanceEvaluation } from './performance.js?v=20250205';
import { Touchpoints } from './touchpoints.js?v=20250215';

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

  const performanceBody = panels.querySelector('[data-slot="performance"]');
  if (performanceBody) {
    const performanceSection = document.createElement('div');
    performanceSection.className = 'performance-tabs';
    performanceSection.innerHTML = `
      <h1>Performance Evaluation</h1>
    `;
    const performanceTabs = document.createElement('div');
    performanceTabs.className = 'performance-tabs__tabs secondary-tabs';
    const performanceTabsData = [
      { label: 'My Evaluations', key: 'my-evaluations' },
      { label: 'My Direct Reports', key: 'my-direct-reports' },
      { label: 'Touchpoints', key: 'touchpoints', active: true },
      { label: 'Peer Feedback', key: 'peer-feedback' },
    ];
    const perfNav = document.createElement('nav');
    perfNav.className = 'performance-tabs__tab-list secondary-tabs__list';
    perfNav.innerHTML = performanceTabsData
      .map(tab => `<button type="button" class="${tab.active ? 'is-active' : ''}" data-performance-tab="${tab.key}">${tab.label}</button>`)
      .join('');
    const perfPanels = document.createElement('div');
    perfPanels.className = 'performance-tabs__tab-panels secondary-tabs__panels';
    performanceTabsData.forEach(tab => {
      const panel = document.createElement('section');
      panel.className = 'performance-tabs__tab-panel secondary-tabs__panel';
      panel.dataset.performanceTab = tab.key;
      const panelBody = document.createElement('div');
      panelBody.className = 'performance-tabs__tab-panel-body secondary-tabs__panel-body';
      panelBody.dataset.performanceSlot = tab.key;
      panel.appendChild(panelBody);
      perfPanels.appendChild(panel);
    });
    const setPerformanceTab = key => {
      [...perfNav.querySelectorAll('button[data-performance-tab]')].forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.performanceTab === key);
      });
      [...perfPanels.children].forEach(panel => {
        panel.classList.toggle('is-active', panel.dataset.performanceTab === key);
      });
    };
    perfNav.addEventListener('click', event => {
      const btn = event.target.closest('button[data-performance-tab]');
      if (!btn) return;
      setPerformanceTab(btn.dataset.performanceTab);
    });
    setPerformanceTab(performanceTabsData.find(tab => tab.active)?.key || performanceTabsData[0].key);

    const directReportsSlot = perfPanels.querySelector('[data-performance-slot="my-direct-reports"]');
    if (directReportsSlot && typeof PerformanceEvaluation === 'function') {
      const evalView = PerformanceEvaluation();
      if (evalView) directReportsSlot.appendChild(evalView);
    }
    const touchpointsSlot = perfPanels.querySelector('[data-performance-slot="touchpoints"]');
    if (touchpointsSlot && typeof Touchpoints === 'function') {
      const touchpointsView = Touchpoints();
      if (touchpointsView) touchpointsSlot.appendChild(touchpointsView);
    }

    performanceTabs.append(perfNav, perfPanels);
    performanceSection.appendChild(performanceTabs);
    performanceBody.appendChild(performanceSection);
  }

  const talentPlanningBody = panels.querySelector('[data-slot="talent-planning"]');
  if (talentPlanningBody) {
    const intro = document.createElement('div');
    intro.className = 'talent-planning';
    intro.innerHTML = `
      <h1>Talent Planning</h1>
      <p class="talent-planning__subtitle">Create new plans, contribute to existing ones and complete your talent assessments</p>
    `;
    const secondaryTabs = document.createElement('div');
    secondaryTabs.className = 'talent-planning__tabs secondary-tabs';
    const secondaryTabsData = [
      { label: 'Company Succession', key: 'company' },
      { label: 'Team Succession', key: 'team', active: true },
      { label: 'Plans', key: 'plans' },
      { label: 'Assessments', key: 'assessments' },
    ];
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
      const placeholder = document.createElement('div');
      placeholder.className = 'talent-planning__tab-panel-body secondary-tabs__panel-body';
      placeholder.dataset.secondarySlot = tab.key;
      panel.appendChild(placeholder);
      secondaryPanels.appendChild(panel);
    });
    const triggerOrgRelayout = () => {
      requestAnimationFrame(() => {
        window.dispatchEvent(new Event('resize'));
      });
    };
    const setSecondaryTab = key => {
      [...secondaryNav.querySelectorAll('button[data-secondary-tab]')].forEach(btn => {
        btn.classList.toggle('is-active', btn.dataset.secondaryTab === key);
      });
      [...secondaryPanels.children].forEach(panel => {
        panel.classList.toggle('is-active', panel.dataset.secondaryTab === key);
      });
      triggerOrgRelayout();
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
    const teamPanelBody = secondaryPanels.querySelector('[data-secondary-slot="team"]');
    if (teamPanelBody && typeof OrgChart === 'function') {
      const teamOrgView = OrgChart();
      if (teamOrgView) teamPanelBody.appendChild(teamOrgView);
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
