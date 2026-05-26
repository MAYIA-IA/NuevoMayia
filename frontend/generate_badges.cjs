const fs = require('fs');
const path = require('path');

const badges = [
  { file: 'ISO_27034.svg', name: 'ISO', sub: '27034', color: '#0ea5e9' },
  { file: 'ISO_27017.svg', name: 'ISO', sub: '27017', color: '#84cc16' },
  { file: 'ISO_9001.svg', name: 'ISO', sub: '9001', color: '#f59e0b' },
  { file: 'ISO_37001.svg', name: 'ISO', sub: '37001', color: '#10b981' },
  { file: 'ISO_42001.svg', name: 'ISO', sub: '42001', color: '#8b5cf6' },
  { file: 'ISO_27018.svg', name: 'ISO', sub: '27018', color: '#ec4899' },
  { file: 'SOC_2.svg', name: 'SOC', sub: '2', color: '#3b82f6' }
];

const dir = 'C:\\\\Users\\\\josus\\\\Desktop\\\\NuevoMayia\\\\frontend\\\\src\\\\assets\\\\ISOS';

badges.forEach(b => {
  const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="200" height="200" viewBox="0 0 200 200">
    <defs>
      <linearGradient id="grad${b.sub}" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="${b.color}" stop-opacity="0.1" />
        <stop offset="100%" stop-color="${b.color}" stop-opacity="0.3" />
      </linearGradient>
    </defs>
    <circle cx="100" cy="100" r="90" fill="url(#grad${b.sub})" stroke="${b.color}" stroke-width="6" />
    <circle cx="100" cy="100" r="80" fill="none" stroke="${b.color}" stroke-width="2" stroke-dasharray="4 4" />
    <text x="100" y="90" font-family="system-ui, sans-serif" font-size="42" font-weight="900" fill="#1f2937" text-anchor="middle">${b.name}</text>
    <text x="100" y="135" font-family="system-ui, sans-serif" font-size="36" font-weight="800" fill="${b.color}" text-anchor="middle">${b.sub}</text>
    <path d="M80 160 L100 175 L120 160" fill="none" stroke="${b.color}" stroke-width="4" stroke-linecap="round" stroke-linejoin="round" />
  </svg>`;
  
  fs.writeFileSync(path.join(dir, b.file), svg);
});
console.log('Badges created successfully.');
