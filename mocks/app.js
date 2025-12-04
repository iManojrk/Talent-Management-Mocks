import { createRouter } from './router.js?v=20250205';
import { CombinedPages } from './screens/combined-pages.js?v=20250215';
import { TalentConfiguration } from './screens/talent-configuration.js?v=20250215';
import { OrgChart } from './screens/orgchart.js?v=20250205';
import { PerformanceEvaluation } from './screens/performance.js?v=20250205';
import { CreatePerformancePlan } from './screens/performance-plan.js?v=20250205';
import { CreateTalentPlanningCycle } from './screens/cycle.js?v=20250205';
import { CreateTalentPlanningCycleProposed } from './screens/cycle-proposed.js?v=20250212';
import { TalentAssessmentHistory } from './screens/talent-assessment-history.js?v=20250205';
import { TalentAssessmentStandardQuestions } from './screens/talent-assessment-standard-questions.js?v=20250213';
import { TeamSuccessionPlans } from './screens/team-succession-plans.js?v=20250205';
import { SuccessionSummary } from './screens/succession-summary.js?v=20250205';
import { Touchpoints } from './screens/touchpoints.js?v=20250215';
import { JobChange } from './screens/job-change.js?v=20250218';
import { PromotionModal } from './screens/promotion-modal.js?v=20250218';

const routes = {
  '/talent-management': CombinedPages,
  '/talent-configuration': TalentConfiguration,
  '/org': OrgChart,
  '/performance': PerformanceEvaluation,
  '/performance-plan': CreatePerformancePlan,
  '/touchpoints': Touchpoints,
  '/talent-assessment-history': TalentAssessmentHistory,
  '/cycle': CreateTalentPlanningCycle,
  '/cycle-proposed': CreateTalentPlanningCycleProposed,
  '/talent-assessment-standard-questions': TalentAssessmentStandardQuestions,
  '/team-succession-plans': TeamSuccessionPlans,
  '/succession-summary': SuccessionSummary,
  '/job-change': JobChange,
  '/promotion-modal': PromotionModal,
};

const app = document.getElementById('app');

const navItems = [
  { path: '/talent-management', label: 'Talent Management' },
  { path: '/talent-configuration', label: 'Talent Configuration' },
  { path: '/org', label: 'Succession Org Chart' },
  { path: '/talent-assessment-history', label: 'Talent Assessment' },
  { path: '/cycle', label: 'Create Talent Planning Cycle (Current)' },
  { path: '/talent-assessment-standard-questions', label: 'Talent Assessment Standard Questions' },
  { path: '/cycle-proposed', label: 'Create Talent Planning Cycle (Proposed)' },
  { path: '/team-succession-plans', label: 'Team Succession Summary' },
  { path: '/performance', label: 'Performance Evaluation' },
  { path: '/performance-plan', label: 'Create Performance Plan' },
  { path: '/job-change', label: 'Job Change' },
  { path: '/promotion-modal', label: 'Promotion Modal' },
  { path: '/touchpoints', label: 'Touchpoints' },
];

function shell() {
  document.documentElement.removeAttribute('data-theme');

  const layout = document.createElement('div');
  layout.className = 'layout';

  const header = document.createElement('div');
  header.className = 'header';
  const brand = document.createElement('div');
  brand.className = 'brand';
  brand.innerHTML = '<span class="dot"></span>Talent';

  const allNavLinks = [];
  const createLink = ({ path, label }) => {
    const a = document.createElement('a');
    a.href = `#${path}`;
    a.textContent = label;
    a.dataset.path = path;
    allNavLinks.push(a);
    return a;
  };

  const headerActions = document.createElement('div');
  headerActions.className = 'header-actions';

  const burger = document.createElement('button');
  burger.type = 'button';
  burger.className = 'header-burger';
  burger.setAttribute('aria-label', 'Open navigation');
  burger.innerHTML = '<span></span><span></span><span></span>';

  const burgerMenu = document.createElement('div');
  burgerMenu.className = 'header-burger-menu';
  const burgerList = document.createElement('div');
  burgerList.className = 'header-burger-menu__list';

  const othersPaths = new Set([
    '/org',
    '/talent-assessment-standard-questions',
    '/talent-assessment-history',
    '/team-succession-plans',
    '/performance',
    '/performance-plan',
    '/promotion-modal',
    '/touchpoints',
  ]);
  const othersLinks = [];

  navItems.forEach(item => {
    const link = createLink(item);
    if (othersPaths.has(item.path)) {
      othersLinks.push(link);
    } else {
      burgerList.appendChild(link);
    }
  });

  let othersGroupRef = null;
  if (othersLinks.length) {
    const othersGroup = document.createElement('div');
    othersGroup.className = 'header-burger-menu__others';

    const othersToggle = document.createElement('button');
    othersToggle.type = 'button';
    othersToggle.className = 'header-burger-menu__others-toggle';
    othersToggle.innerHTML = '<span>Others</span><span class="header-burger-menu__chevron" aria-hidden="true">▾</span>';

    const othersList = document.createElement('div');
    othersList.className = 'header-burger-menu__others-list';
    othersLinks.forEach(link => othersList.appendChild(link));

    const closeOthers = () => othersGroup.classList.remove('is-open');

    othersToggle.addEventListener('click', event => {
      event.stopPropagation();
      othersGroup.classList.toggle('is-open');
    });
    othersGroup.addEventListener('mouseenter', () => othersGroup.classList.add('is-open'));
    othersGroup.addEventListener('mouseleave', closeOthers);

    othersGroup.append(othersToggle, othersList);
    burgerList.appendChild(othersGroup);
    othersGroupRef = { close: closeOthers };
  }

  burgerMenu.appendChild(burgerList);
  headerActions.append(burger, burgerMenu);

  const headerSearch = document.createElement('div');
  headerSearch.className = 'header-search';
  const headerSearchText = document.createElement('span');
  headerSearchText.textContent = 'Search, ask, or start a task...';
  headerSearch.appendChild(headerSearchText);

  header.append(brand, headerSearch, headerActions);

  const content = document.createElement('div');
  content.className = 'content';

  layout.append(header, content);
  app.innerHTML = '';
  app.appendChild(layout);

  const toggleBurgerMenu = (force) => {
    if (force === false) {
      burgerMenu.classList.remove('is-open');
      othersGroupRef?.close();
      return;
    }
    burgerMenu.classList.toggle('is-open');
  };

  burger.addEventListener('click', (event) => {
    event.stopPropagation();
    toggleBurgerMenu();
  });

  document.addEventListener('click', (event) => {
    if (!burgerMenu.contains(event.target) && event.target !== burger) {
      burgerMenu.classList.remove('is-open');
    }
  });

  createRouter({
    routes,
    onChange: (path, fn) => {
      content.innerHTML = '';
      const view = fn?.();
      if (view) content.appendChild(view);
      allNavLinks.forEach(a => a.classList.toggle('active', a.dataset.path === path));
      toggleBurgerMenu(false);
    }
  });
}

shell();
