// ---- Your work. Add a piece: drop images in assets/work/ and add an entry here.
const works = [
 {
  "title": "Cultivate",
  "type": "Print design",
  "note": "Magazine cover",
  "alt": "Editorial magazine cover with a serif masthead and a portrait lit by warm window light",
  "src": "assets/work/cultivate-cover.jpg",
  "thumb": "assets/work/cultivate-cover-t.jpg",
  "w": 800,
  "h": 534
 },
 {
  "title": "Earth & Bloom",
  "type": "Creative direction",
  "note": "Brief to visual",
  "alt": "Creative brief, mood board and final visuals for a premium tea brand in earthy greens and browns",
  "src": "assets/work/earth-and-bloom.jpg",
  "thumb": "assets/work/earth-and-bloom-t.jpg",
  "w": 800,
  "h": 533
 },
 {
  "title": "Éclat Noir",
  "type": "Social media",
  "note": "Content set",
  "alt": "Three-format social media set for a luxury fragrance: feed, story and square posts",
  "src": "assets/work/eclat-noir.jpg",
  "thumb": "assets/work/eclat-noir-t.jpg",
  "w": 800,
  "h": 533
 },
 {
  "title": "If the Devil Wears Prada",
  "type": "Posters",
  "note": "Fashion poster",
  "alt": "Dark red fashion poster with a bold serif title and a group of models",
  "src": "assets/work/devil-wears-prada.jpg",
  "thumb": "assets/work/devil-wears-prada-t.jpg",
  "w": 800,
  "h": 1132
 },
 {
  "title": "Mamba Mentality",
  "type": "Posters",
  "note": "Sports ad concept",
  "alt": "Basketball sneaker ad concept with a player driving in purple and gold light",
  "src": "assets/work/kobe-mamba.jpg",
  "thumb": "assets/work/kobe-mamba-t.jpg",
  "w": 690,
  "h": 1200
 },
 {
  "title": "Luméa Skin",
  "type": "Branding",
  "note": "Campaign series",
  "alt": "Brand board and six-image campaign series for a quiet-luxury skincare brand",
  "src": "assets/work/lumea-campaign.jpg",
  "thumb": "assets/work/lumea-campaign-t.jpg",
  "w": 800,
  "h": 1200
 },
 {
  "title": "Refining to Perfection",
  "type": "AI visuals",
  "note": "Prompt case study",
  "alt": "Before and after case study showing four prompt iterations of a skincare product image",
  "src": "assets/work/lumea-refinement.jpg",
  "thumb": "assets/work/lumea-refinement-t.jpg",
  "w": 800,
  "h": 533
 },
 {
  "title": "Nafisa Ramadan",
  "type": "Social media",
  "note": "Seasonal set",
  "alt": "Ramadan campaign set in deep green and gold with lantern imagery",
  "src": "assets/work/nafisa-ramadan.jpg",
  "thumb": "assets/work/nafisa-ramadan-t.jpg",
  "w": 800,
  "h": 533
 },
 {
  "title": "Northline",
  "type": "Branding",
  "note": "Consistent character",
  "alt": "Four-panel campaign with one consistent character across focus, move, learn and live themes",
  "src": "assets/work/northline.jpg",
  "thumb": "assets/work/northline-t.jpg",
  "w": 800,
  "h": 640
 },
 {
  "title": "Northvale Bank",
  "type": "Print design",
  "note": "Billboard concept",
  "alt": "Outdoor billboard concept for a bank in dark green with a bold two-colour headline",
  "src": "assets/work/northvale-bank.jpg",
  "thumb": "assets/work/northvale-bank-t.jpg",
  "w": 800,
  "h": 400
 },
 {
  "title": "Omix Autos",
  "type": "Print design",
  "note": "Flyer",
  "alt": "Black and red car dealership flyer with a call-or-WhatsApp contact block",
  "src": "assets/work/omix-autos.jpg",
  "thumb": "assets/work/omix-autos-t.jpg",
  "w": 800,
  "h": 1200
 },
 {
  "title": "Tobacco 01",
  "type": "Posters",
  "note": "Product ad",
  "alt": "Fragrance product poster in warm bronze tones with icon callouts",
  "src": "assets/work/swiss-arabian.jpg",
  "thumb": "assets/work/swiss-arabian-t.jpg",
  "w": 733,
  "h": 1200
 },
 {
  "title": "Sonora",
  "type": "Posters",
  "note": "Type-led product ad",
  "alt": "Headphone ad with a large condensed serif headline over a portrait",
  "src": "assets/work/sonora.jpg",
  "thumb": "assets/work/sonora-t.jpg",
  "w": 800,
  "h": 1067
 }
];
const DRIVE = 'https://drive.google.com/drive/folders/1iqQkJ_MroR0r4GowN_V1s0BPG5v33_vJ';
const grid = document.getElementById('grid'), bar = document.getElementById('filters');
const lb = document.getElementById('lb'), lbImg = document.getElementById('lbImg'), lbCap = document.getElementById('lbCap');
const types = ['All', ...new Set(works.map(w => w.type))];
let shown = [], cur = 0;
function render(f) {
  shown = works.filter(w => f === 'All' || w.type === f);
  grid.innerHTML = shown.map((w, i) =>
    `<button class="tile" data-i="${i}" aria-label="Open ${w.title}, ${w.type}">
      <img src="${w.thumb}" width="${w.w}" height="${w.h}" alt="${w.alt}" loading="lazy">
      <span class="cap"><b>${w.title}</b><small>${w.type}, ${w.note}</small></span></button>`).join('');
  bar.querySelectorAll('button').forEach(b => b.setAttribute('aria-pressed', b.dataset.t === f));
}
function open(i) {
  cur = (i + shown.length) % shown.length;
  const w = shown[cur];
  lbImg.src = w.src; lbImg.alt = w.alt;
  lbCap.textContent = `${w.title}: ${w.type}, ${w.note}`;
  if (!lb.open) lb.showModal();
}
bar.innerHTML = types.map(t => `<button data-t="${t}">${t}</button>`).join('');
bar.addEventListener('click', e => e.target.dataset.t && render(e.target.dataset.t));
grid.addEventListener('click', e => { const t = e.target.closest('.tile'); if (t) open(+t.dataset.i); });
document.getElementById('lbClose').onclick = () => lb.close();
document.getElementById('lbPrev').onclick = () => open(cur - 1);
document.getElementById('lbNext').onclick = () => open(cur + 1);
lb.addEventListener('click', e => { if (e.target === lb) lb.close(); });
lb.addEventListener('keydown', e => { if (e.key === 'ArrowLeft') open(cur - 1); if (e.key === 'ArrowRight') open(cur + 1); });
render('All');

// ---- Licence tilts toward the cursor
const stage = document.getElementById('idStage'), card = document.getElementById('idCard');
if (!matchMedia('(prefers-reduced-motion: reduce)').matches) {
  stage.addEventListener('pointermove', e => {
    const r = stage.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - .5, y = (e.clientY - r.top) / r.height - .5;
    card.style.transform = `rotateY(${x * 18}deg) rotateX(${-y * 14}deg) scale(1.03)`;
  });
  stage.addEventListener('pointerleave', () => card.style.transform = '');
}
document.getElementById('yr').textContent = new Date().getFullYear();
