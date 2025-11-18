import { createRouter } from './router.js?v=20250205';
import { OrgChart } from './screens/orgchart.js?v=20250205';
import { PerformanceEvaluation } from './screens/performance.js?v=20250205';
import { CreatePerformancePlan } from './screens/performance-plan.js?v=20250205';
import { CreateTalentPlanningCycle } from './screens/cycle.js?v=20250205';
import { CreateTalentPlanningCycleProposed } from './screens/cycle-proposed.js?v=20250205';
import { TalentAssessmentHistory } from './screens/talent-assessment-history.js?v=20250205';

const routes = {
  '/org': OrgChart,
  '/performance': PerformanceEvaluation,
  '/performance-plan': CreatePerformancePlan,
  '/talent-assessment-history': TalentAssessmentHistory,
  '/cycle': CreateTalentPlanningCycle,
  '/cycle-proposed': CreateTalentPlanningCycleProposed,
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

  header.append(brand);

  const sidebar = document.createElement('div');
  sidebar.className = 'sidebar';
  const nav = document.createElement('div');
  nav.className = 'nav';

  const link = (path, label) => {
    const a = document.createElement('a');
    a.href = `#${path}`;
    a.textContent = label;
    a.dataset.path = path;
    return a;
  };

  nav.append(
    link('/org','Succession Org Chart'),
    link('/performance','Performance Evaluation'),
    link('/performance-plan','Create Performance Plan'),
    link('/talent-assessment-history','Talent Assessmeent History'),
    link('/cycle','Create Talent Planning Cycle (Current)'),
    link('/cycle-proposed','Create Talent Planning Cycle (Proposed)'),
  );
  sidebar.appendChild(nav);

  const content = document.createElement('div');
  content.className = 'content';

  layout.append(header, sidebar, content);
  app.innerHTML = '';
  app.appendChild(layout);

  createRouter({
    routes,
    onChange: (path, fn) => {
      content.innerHTML = '';
      const view = fn?.();
      if (view) content.appendChild(view);
      [...nav.querySelectorAll('a')].forEach(a => a.classList.toggle('active', a.dataset.path === path));
    }
  });
}

shell();
