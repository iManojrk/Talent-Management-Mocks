import { createRouter } from './router.js?v=20250205';
import { OrgChart } from './screens/orgchart.js?v=20250205';
import { PerformanceEvaluation } from './screens/performance.js?v=20250205';
import { CreatePerformancePlan } from './screens/performance-plan.js?v=20250205';
import { CreateTalentPlanningCycle } from './screens/cycle.js?v=20250205';
import { CreateTalentPlanningCycleProposed } from './screens/cycle-proposed.js?v=20250212';
import { TalentAssessmentHistory } from './screens/talent-assessment-history.js?v=20250205';
import { TalentAssessmentStandardQuestions } from './screens/talent-assessment-standard-questions.js?v=20250213';
import { TeamSuccessionPlans } from './screens/team-succession-plans.js?v=20250205';
import { SuccessionSummary } from './screens/succession-summary.js?v=20250205';

const routes = {
  '/org': OrgChart,
  '/performance': PerformanceEvaluation,
  '/performance-plan': CreatePerformancePlan,
  '/talent-assessment-history': TalentAssessmentHistory,
  '/cycle': CreateTalentPlanningCycle,
  '/cycle-proposed': CreateTalentPlanningCycleProposed,
  '/talent-assessment-standard-questions': TalentAssessmentStandardQuestions,
  '/team-succession-plans': TeamSuccessionPlans,
  '/succession-summary': SuccessionSummary,
};

const app = document.getElementById('app');

function shell() {
  document.documentElement.removeAttribute('data-theme');

  const layout = document.createElement('div');
  layout.className = 'layout';

  const header = document.createElement('div');
  header.className = 'header';
  const brand = document.createElement('div');
  brand.className = 'brand';
  brand.innerHTML = '<span class="dot"></span>Talent';

  const sidebar = document.createElement('div');
  sidebar.className = 'sidebar';
  const nav = document.createElement('div');
  nav.className = 'nav';

  const allNavLinks = [];

  const link = (path, label) => {
    const a = document.createElement('a');
    a.href = `#${path}`;
    a.textContent = label;
    a.dataset.path = path;
    allNavLinks.push(a);
    return a;
  };

  const groupedNav = document.createElement('div');
  groupedNav.className = 'nav-group';
  groupedNav.append(
    link('/org','Succession Org Chart'),
    link('/talent-assessment-history','Talent Assessment'),
    link('/cycle','Create Talent Planning Cycle (Current)'),
    link('/talent-assessment-standard-questions','Talent Assessment Standard Questions'),
    link('/cycle-proposed','Create Talent Planning Cycle (Proposed)'),
  );

  nav.append(
    groupedNav,
    link('/team-succession-plans','Team Succession Summary'),
    link('/performance','Performance Evaluation'),
    link('/performance-plan','Create Performance Plan'),
  );
  sidebar.appendChild(nav);

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

  burgerList.append(
    link('/org','Succession Org Chart'),
    link('/talent-assessment-history','Talent Assessment'),
    link('/cycle','Create Talent Planning Cycle (Current)'),
    link('/talent-assessment-standard-questions','Talent Assessment Standard Questions'),
    link('/cycle-proposed','Create Talent Planning Cycle (Proposed)'),
    link('/team-succession-plans','Team Succession Summary'),
    link('/performance','Performance Evaluation'),
    link('/performance-plan','Create Performance Plan'),
  );

  burgerMenu.appendChild(burgerList);
  headerActions.append(burger, burgerMenu);

  header.append(brand, headerActions);

  const content = document.createElement('div');
  content.className = 'content';

  layout.append(header, sidebar, content);
  app.innerHTML = '';
  app.appendChild(layout);

  burger.addEventListener('click', () => {
    burgerMenu.classList.toggle('is-open');
  });

  createRouter({
    routes,
    onChange: (path, fn) => {
      content.innerHTML = '';
      const view = fn?.();
      if (view) content.appendChild(view);
      allNavLinks.forEach(a => a.classList.toggle('active', a.dataset.path === path));
      burgerMenu.classList.remove('is-open');
    }
  });
}

shell();
