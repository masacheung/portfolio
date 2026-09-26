import { Resvg } from '@resvg/resvg-js';
import { writeFileSync } from 'node:fs';

const svg = `
<svg width="1200" height="630" viewBox="0 0 1200 630" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="glow" cx="50%" cy="20%" r="80%">
      <stop offset="0%" stop-color="#22d3ee" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#07090e" stop-opacity="0"/>
    </radialGradient>
    <pattern id="grid" width="48" height="48" patternUnits="userSpaceOnUse">
      <path d="M 48 0 L 0 0 0 48" fill="none" stroke="rgba(255,255,255,0.05)" stroke-width="1"/>
    </pattern>
  </defs>
  <rect width="1200" height="630" fill="#07090e"/>
  <rect width="1200" height="630" fill="url(#grid)"/>
  <rect width="1200" height="630" fill="url(#glow)"/>
  <text x="80" y="240" font-family="Arial, Helvetica, sans-serif" font-size="26" font-weight="500" fill="#22d3ee">~/masa-cheung</text>
  <text x="80" y="350" font-family="Arial, Helvetica, sans-serif" font-size="96" font-weight="bold" fill="#ffffff">Masa Cheung</text>
  <text x="80" y="420" font-family="Arial, Helvetica, sans-serif" font-size="32" fill="#a1a1aa">Software Engineer · BGC Partners</text>
  <text x="80" y="460" font-family="Arial, Helvetica, sans-serif" font-size="24" fill="#71717a">React · Node.js · WebSockets · Trading Systems</text>
  <rect x="80" y="520" width="6" height="6" rx="3" fill="#22d3ee"/>
  <text x="100" y="528" font-family="Courier, monospace" font-size="20" fill="#52525b">github.com/masacheung</text>
</svg>`;

const resvg = new Resvg(svg, { fitTo: { mode: 'width', value: 1200 } });
writeFileSync('public/og-image.png', resvg.render().asPng());
console.log('og-image.png written');
