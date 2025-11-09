const seed = {
  pipelineStages: ['Sourced','Screening','Interview','Offer','Hired'],
  candidates: [
    { id: 'c-101', name: 'Avery Chen', role: 'Frontend Engineer', location: 'NYC', source: 'LinkedIn', stage: 'Screening', score: 84 },
    { id: 'c-102', name: 'Diego Rivera', role: 'Product Manager', location: 'Remote', source: 'Referral', stage: 'Interview', score: 78 },
    { id: 'c-103', name: 'Samira Ali', role: 'Data Scientist', location: 'SF', source: 'Website', stage: 'Sourced', score: 90 },
    { id: 'c-104', name: 'Priya Nair', role: 'Backend Engineer', location: 'Remote', source: 'Agency', stage: 'Offer', score: 88 },
  ],
  jobs: [
    { id: 'j-201', title: 'Frontend Engineer', department: 'Engineering', openings: 2, status: 'Open' },
    { id: 'j-202', title: 'Product Manager', department: 'Product', openings: 1, status: 'Open' },
    { id: 'j-203', title: 'Data Scientist', department: 'Data', openings: 1, status: 'Paused' },
  ],
  reviews: [
    { id: 'r-301', cycle: 'H1 2025', dueDate: '2025-06-30', status: 'In Progress' },
    { id: 'r-302', cycle: 'H2 2024', dueDate: '2024-12-31', status: 'Complete' },
  ]
};

const KEY = 'tm-mocks-state-v1';

function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return { ...seed };
    const parsed = JSON.parse(raw);
    return { ...seed, ...parsed };
  } catch {
    return { ...seed };
  }
}

let state = load();
const listeners = new Set();

function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch {}
}

export const getState = () => state;
export function setState(patch) {
  state = { ...state, ...patch };
  save();
  listeners.forEach((l) => l(state));
}
export function onState(fn) { listeners.add(fn); return () => listeners.delete(fn); }

export function addCandidate(c) {
  const next = { ...c, id: `c-${Math.floor(Math.random()*900+100)}` };
  state = { ...state, candidates: [next, ...state.candidates] };
  save();
  listeners.forEach((l) => l(state));
}

export function moveCandidate(id, stage) {
  state = { ...state, candidates: state.candidates.map(c => c.id===id ? { ...c, stage } : c) };
  save();
  listeners.forEach((l) => l(state));
}
