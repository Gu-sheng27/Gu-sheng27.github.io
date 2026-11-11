/**
 * Generates obviously-temporary placeholder images so the layout can be judged
 * with real figures in place before any photography exists.
 *
 *   node scripts/make-placeholders.mjs
 *
 * Images land in src/assets/images/ so Astro optimises them at build time
 * (responsive widths, modern formats). Delete this script and the images it
 * makes once you have real ones.
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const OUT = 'src/assets/images';

const paper = '#efe9dd';
const ink = '#8a8175';

const svg = ({ width, height, label, sub, tag }) => {
  const unit = Math.min(width, height);
  const pad = Math.round(unit * 0.055);
  const labelSize = Math.round(unit * 0.052);
  const subSize = Math.round(unit * 0.024);
  const corner = Math.round(unit * 0.09);

  return `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <rect width="100%" height="100%" fill="${paper}"/>
  <g stroke="${ink}" stroke-opacity="0.16" stroke-width="1">
    ${Array.from({ length: Math.ceil(width / 28) }, (_, i) => `<line x1="${i * 28 + 0.5}" y1="0" x2="${i * 28 + 0.5}" y2="${height}"/>`).join('')}
  </g>
  <rect x="${pad}" y="${pad}" width="${width - pad * 2}" height="${height - pad * 2}" fill="none" stroke="${ink}" stroke-opacity="0.45" stroke-width="2"/>
  <g stroke="${ink}" stroke-opacity="0.6" stroke-width="3" fill="none">
    <path d="M${pad} ${pad + corner} L${pad} ${pad} L${pad + corner} ${pad}"/>
    <path d="M${width - pad - corner} ${pad} L${width - pad} ${pad} L${width - pad} ${pad + corner}"/>
    <path d="M${pad} ${height - pad - corner} L${pad} ${height - pad} L${pad + corner} ${height - pad}"/>
    <path d="M${width - pad - corner} ${height - pad} L${width - pad} ${height - pad} L${width - pad} ${height - pad - corner}"/>
  </g>
  <g fill="${ink}" font-family="monospace">
    <text x="${pad + Math.round(unit * 0.04)}" y="${pad + Math.round(unit * 0.065)}" font-size="${Math.round(unit * 0.02)}" opacity="0.75" letter-spacing="1">${tag}</text>
  </g>
  <g fill="${ink}" font-family="monospace" text-anchor="middle">
    <text x="${width / 2}" y="${height / 2}" font-size="${labelSize}" letter-spacing="${Math.round(labelSize * 0.14)}">${label}</text>
    <text x="${width / 2}" y="${height / 2 + Math.round(unit * 0.075)}" font-size="${subSize}" opacity="0.85">${sub}</text>
    <text x="${width / 2}" y="${height - pad - Math.round(unit * 0.03)}" font-size="${subSize}" opacity="0.6">${width} × ${height} PLACEHOLDER</text>
  </g>
</svg>`;
};

const files = [
  { name: 'cover-hello-world.jpg', width: 1600, height: 900, label: 'COVER', sub: 'temporary — replace me' },
  { name: 'cover-why-this-site.jpg', width: 1600, height: 900, label: 'COVER', sub: 'temporary — replace me' },
  { name: 'figure-process.jpg', width: 1400, height: 900, label: 'FIGURE 01', sub: 'inline image — replace me' },
  { name: 'figure-detail.jpg', width: 1200, height: 1200, label: 'FIGURE 02', sub: 'inline image — replace me' },
  { name: 'portrait.jpg', width: 1000, height: 1250, label: 'PORTRAIT', sub: 'temporary — replace me' },
];

await mkdir(OUT, { recursive: true });

for (const file of files) {
  const target = `${OUT}/${file.name}`;
  await sharp(Buffer.from(svg({ ...file, tag: file.name })))
    .jpeg({ quality: 84, mozjpeg: true })
    .toFile(target);
  console.log(`wrote ${target} (${file.width}×${file.height})`);
}