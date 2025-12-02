const SVG_NS = 'http://www.w3.org/2000/svg';

export function buildAssessmentTrendChart(trendData = []) {
  const wrap = document.createElement('div');
  wrap.className = 'talent-card__trend plan-preview__trend-embed';

  const subtitle = document.createElement('div');
  subtitle.className = 'plan-preview__trend-subtitle';
  subtitle.textContent = 'Trends';
  wrap.appendChild(subtitle);

  if (!trendData.length) {
    wrap.classList.add('plan-preview__trend-empty');
    wrap.append('No trend data');
    return wrap;
  }

  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 260 100');

  const axis = document.createElementNS(SVG_NS, 'rect');
  axis.setAttribute('x', '40');
  axis.setAttribute('y', '10');
  axis.setAttribute('width', '180');
  axis.setAttribute('height', '90');
  axis.setAttribute('fill', 'none');
  axis.setAttribute('stroke', 'var(--border)');
  axis.setAttribute('data-trend-axis', 'x');
  svg.appendChild(axis);

  [1, 2].forEach(level => {
    const y = mapAssessmentY(level);
    const line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('x1', '40');
    line.setAttribute('x2', '220');
    line.setAttribute('y1', y);
    line.setAttribute('y2', y);
    line.setAttribute('stroke', 'var(--border)');
    line.setAttribute('stroke-dasharray', '2,4');
    svg.appendChild(line);
  });

  const perfPoints = trendData.map((point, idx) => [
    mapAssessmentX(idx, trendData.length),
    mapAssessmentY(point.performance)
  ]);
  const potPoints = trendData.map((point, idx) => [
    mapAssessmentX(idx, trendData.length),
    mapAssessmentY(point.potential)
  ]);

  svg.appendChild(createTrendPolyline(perfPoints, '#3b82f6'));
  svg.appendChild(createTrendPolyline(potPoints, '#111'));
  perfPoints.forEach(pt => svg.appendChild(createTrendDot(pt, '#3b82f6')));
  potPoints.forEach(pt => svg.appendChild(createTrendDot(pt, '#111')));

  const bottom = document.createElement('div');
  bottom.className = 'talent-card__trend-bottom';
  trendData.forEach(point => {
    const span = document.createElement('span');
    span.textContent = point.label;
    bottom.appendChild(span);
  });

  const legend = document.createElement('div');
  legend.className = 'talent-card__trend-legend';
  legend.innerHTML =
    '<span><i class="talent-card__legend-dot is-performance"></i>Performance</span><span><i class="talent-card__legend-dot is-potential"></i>Potential</span>';

  const yLabels = document.createElement('div');
  yLabels.className = 'plan-preview__trend-ylabels plan-preview__trend-ylabels--ta';
  ['High', 'Medium', 'Low'].forEach(label => {
    const span = document.createElement('span');
    span.textContent = label;
    yLabels.appendChild(span);
  });

  alignXAxisLabels(svg, bottom, 40, 180, 260);
  wrap.append(svg, bottom, legend, yLabels);
  return wrap;
}

export function buildPerformanceTrendChart(trendData = [], scale = 5) {
  const wrap = document.createElement('div');
  wrap.className = 'talent-card__rating-trend plan-preview__trend-embed';

  const subtitle = document.createElement('div');
  subtitle.className = 'plan-preview__trend-subtitle';
  subtitle.textContent = 'Trends';
  wrap.appendChild(subtitle);

  if (!trendData.length) {
    wrap.classList.add('plan-preview__trend-empty');
    wrap.append('No trend data');
    return wrap;
  }

  const svg = document.createElementNS(SVG_NS, 'svg');
  svg.setAttribute('viewBox', '0 0 260 100');

  const axis = document.createElementNS(SVG_NS, 'rect');
  axis.setAttribute('x', '40');
  axis.setAttribute('y', '10');
  axis.setAttribute('width', '180');
  axis.setAttribute('height', '90');
  axis.setAttribute('fill', 'none');
  axis.setAttribute('stroke', 'var(--border)');
  axis.setAttribute('data-trend-axis', 'x');
  svg.appendChild(axis);

  [2, 3, 4].forEach(level => {
    const y = mapValue(level, 1, scale, 100, 10);
    const line = document.createElementNS(SVG_NS, 'line');
    line.setAttribute('x1', '40');
    line.setAttribute('x2', '220');
    line.setAttribute('y1', y);
    line.setAttribute('y2', y);
    line.setAttribute('stroke', 'var(--border)');
    line.setAttribute('stroke-dasharray', '2,4');
    svg.appendChild(line);
  });

  const points = trendData.map((point, idx) => [
    mapLinear(idx, trendData.length, 40, 220),
    mapValue(point.value, 1, scale, 100, 10)
  ]);

  svg.appendChild(createTrendPolyline(points, '#3b82f6'));
  points.forEach(pt => svg.appendChild(createTrendDot(pt, '#3b82f6')));

  const labels = document.createElement('div');
  labels.className = 'talent-card__rating-labels';
  trendData.forEach(point => {
    const span = document.createElement('span');
    span.textContent = point.label;
    labels.appendChild(span);
  });

  const yLabels = document.createElement('div');
  yLabels.className = 'plan-preview__trend-ylabels plan-preview__trend-ylabels--pr';
  [5, 4, 3, 2, 1].forEach(value => {
    const span = document.createElement('span');
    span.textContent = value;
    yLabels.appendChild(span);
  });

  alignXAxisLabels(svg, labels, 40, 180, 260);
  wrap.append(svg, labels, yLabels);
  return wrap;
}

function alignXAxisLabels(svg, labelsEl, axisStart, axisWidth, viewBoxWidth) {
  if (!svg || !labelsEl) return;
  const raf = window.requestAnimationFrame || function (fn) { return setTimeout(fn, 0); };
  raf(() => {
    const svgRect = svg.getBoundingClientRect();
    if (!svgRect.width) return;
    const axisRect = svg.querySelector('[data-trend-axis]')?.getBoundingClientRect();
    if (axisRect) {
      const offset = axisRect.left - svgRect.left;
      labelsEl.style.width = `${axisRect.width}px`;
      labelsEl.style.marginLeft = `${offset}px`;
    } else if (viewBoxWidth) {
      const scale = svgRect.width / viewBoxWidth;
      const width = axisWidth * scale;
      const offset = axisStart * scale;
      labelsEl.style.width = `${width}px`;
      labelsEl.style.marginLeft = `${offset}px`;
    }
    labelsEl.style.display = 'flex';
    labelsEl.style.justifyContent = 'space-between';
  });
}

function createTrendPolyline(points, stroke) {
  const line = document.createElementNS(SVG_NS, 'polyline');
  line.setAttribute('points', points.map(p => p.join(',')).join(' '));
  line.setAttribute('fill', 'none');
  line.setAttribute('stroke', stroke);
  line.setAttribute('stroke-width', '2');
  return line;
}

function createTrendDot([x, y], color) {
  const circle = document.createElementNS(SVG_NS, 'circle');
  circle.setAttribute('cx', x);
  circle.setAttribute('cy', y);
  circle.setAttribute('r', '3');
  circle.setAttribute('fill', color);
  return circle;
}

function mapAssessmentX(index, total) {
  if (total <= 1) return 40;
  const step = 180 / (total - 1);
  return 40 + step * index;
}

function mapAssessmentY(value) {
  const min = 1;
  const max = 3;
  const range = max - min;
  const normalized = (value - min) / range;
  return 100 - normalized * 90;
}

function mapLinear(index, total, minPx, maxPx) {
  if (total <= 1) return minPx;
  const step = (maxPx - minPx) / (total - 1);
  return minPx + step * index;
}

function mapValue(value, min, max, minPx, maxPx) {
  const ratio = (value - min) / (max - min);
  return minPx - (minPx - maxPx) * ratio;
}
