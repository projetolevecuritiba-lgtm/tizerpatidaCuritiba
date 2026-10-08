/* ===== TirzepatidaCuritiba - static JS ===== */
const WHATSAPP = "";
const waLink = (msg) => `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;

/* ---------- Data ---------- */
const categories = [
  { key: "all",        label: "Todos" },
  { key: "metabolico", label: "Emagrecimento" },
  { key: "composicao", label: "Composição corporal" },
  { key: "pele",       label: "Pele & regeneração" },
];

/*
 * Cada produto:
 * - price/priceLabel: opção principal (frasco). Use price: null para "Sob consulta".
 * - kits: opções fracionadas (opcional).
 * - imgFit: "tall" para fotos verticais com fundo transparente, "square" para fotos quadradas.
 */
const products = [
  {
    id: "tirzepatida-synedica",
    category: "metabolico",
    name: "Tirzepatida 60mg",
    brand: "Synedica Labs",
    origin: "",
    badge: "Mais vendido",
    tagline: "Duplo agonista GLP-1 + GIP",
    img: "assets/products/tirzepatida-synedica-hd-sem-fundo.webp",
    imgFit: "square",
    desc: "Mesma molécula do Mounjaro®. Atua em dois receptores hormonais (GLP-1 e GIP), aumenta a saciedade, retarda o esvaziamento gástrico e melhora a sensibilidade à insulina. Nos estudos clínicos SURMOUNT, a perda média de peso ficou entre 15% e 20%.",
    highlights: ["Pureza ≥ 99%", "Pó liofilizado", "Importado"],
    presentation: "Frasco 60mg ou kit mensal (4 doses)",
    profile: "Controle de apetite e emagrecimento progressivo",
    price: "R$ 1.490,00",
    priceLabel: "Frasco 60mg",
    kits: [
      { dose: "2,5mg", value: "R$ 300" },
      { dose: "5mg",   value: "R$ 600" },
      { dose: "7,5mg", value: "R$ 900" },
    ],
  },
  {
    id: "retatrutida-ipeptide",
    category: "metabolico",
    name: "Retatrutida 50mg",
    brand: "iPeptide",
    origin: "",
    tagline: "Triplo agonista GLP-1 + GIP + Glucagon",
    img: "assets/products/retatrutida-ipeptide-hd-sem-fundo.webp",
    imgFit: "square",
    desc: "Molécula de nova geração desenvolvida pela Eli Lilly, em fase 3 de estudos. Age em três receptores ao mesmo tempo: controla o apetite, otimiza a resposta metabólica e aumenta o gasto energético. Estudos clínicos mostraram perda média de 24% a 28% do peso corporal.",
    highlights: ["Pureza ≥ 99%", "Agonista triplo", "Pó liofilizado"],
    presentation: "Frasco 50mg ou kit mensal (4 doses)",
    profile: "Quem busca o resultado mais avançado",
    price: "R$ 1.690,00",
    priceLabel: "Frasco 50mg",
    kits: [
      { dose: "2,5mg", value: "R$ 350" },
      { dose: "5mg",   value: "R$ 700" },
      { dose: "7,5mg", value: "R$ 1.000" },
    ],
  },
  {
    id: "aod9604",
    category: "composicao",
    name: "AOD-9604 20mg",
    brand: "iPeptide · Premium Series",
    origin: "",
    badge: "Novo",
    tagline: "Fragmento 177-191 do hormônio do crescimento",
    img: "assets/products/aod9604-sem-fundo.webp",
    imgFit: "square",
    desc: "Peptídeo derivado da porção C-terminal do hormônio do crescimento humano (hGH). Estudado pelo seu papel no metabolismo de gorduras (lipólise), sem os efeitos do GH sobre o crescimento ou a glicemia.",
    highlights: ["20mg por frasco", "Premium Series", "Foco em gordura localizada"],
    presentation: "Frasco 20mg liofilizado",
    profile: "Apoio à redução de gordura e definição",
    price: null,
    priceLabel: "Frasco 20mg",
    kits: [],
  },
  {
    id: "tesamorelin",
    category: "composicao",
    name: "Tesamorelin 20mg",
    brand: "iPeptide · Premium Series",
    origin: "",
    badge: "Novo",
    tagline: "Análogo do GHRH — gordura visceral",
    img: "assets/products/tesamorelin-sem-fundo.webp",
    imgFit: "square",
    desc: "Análogo do hormônio liberador do GH (GHRH) que estimula a produção natural de hormônio do crescimento. A molécula é aprovada pela FDA (Egrifta®) para redução de gordura visceral abdominal em casos específicos.",
    highlights: ["20mg por frasco", "Premium Series", "Estímulo natural de GH"],
    presentation: "Frasco 20mg liofilizado",
    profile: "Redução de gordura abdominal e composição corporal",
    price: null,
    priceLabel: "Frasco 20mg",
    kits: [],
  },
  {
    id: "ghkcu-neopeptides",
    category: "pele",
    name: "GHK-Cu 100mg",
    brand: "NeoPeptides",
    origin: "Peptide Biotech",
    tagline: "Peptídeo de cobre — regeneração e colágeno",
    img: "assets/products/ghkcu-ipeptide-hd-sem-fundo.webp",
    imgFit: "square",
    desc: "Tripeptídeo de cobre naturalmente presente no organismo, amplamente estudado por seu papel em regeneração celular, cicatrização, síntese de colágeno e saúde da pele e do couro cabeludo.",
    highlights: ["100mg por frasco", "Cobre de alta pureza", "Pele e cabelo"],
    presentation: "Frasco 100mg ou kit mensal (20 doses)",
    profile: "Rejuvenescimento, estética e vitalidade",
    price: "R$ 900,00",
    priceLabel: "Frasco 100mg",
    kitDoses: 20,
    kits: [
      { dose: "1mg", value: "R$ 250" },
      { dose: "2mg", value: "R$ 400" },
    ],
  },
  {
    id: "glow",
    category: "pele",
    name: "GLOW 70mg",
    brand: "iPeptide · Premium Series",
    origin: "",
    badge: "Novo",
    tagline: "Blend GHK-Cu + BPC-157 + TB-500",
    img: "assets/products/glow-sem-fundo.webp",
    imgFit: "square",
    desc: "Combinação de três peptídeos em um único frasco: GHK-Cu (pele e colágeno), BPC-157 e TB-500 (reparo de tecidos). Pensado para protocolos de regeneração, recuperação e aparência da pele.",
    highlights: ["3 peptídeos em 1", "70mg por frasco", "Premium Series"],
    presentation: "Frasco 70mg liofilizado (blend)",
    profile: "Regeneração completa: pele, tecidos e recuperação",
    price: null,
    priceLabel: "Frasco 70mg",
    kits: [],
  },
];

const testimonials = [
  {
    name:"Ana",
    city:"Curitiba, PR",
    stars:5,
    time:"6 meses de uso",
    text:"Comecei o tratamento com 97 kg e, em seis meses, cheguei aos 72 kg, ficando muito próxima da minha meta. Além da perda de peso, recuperei minha disposição, autoestima e qualidade de vida. O acompanhamento durante todo o processo fez toda a diferença.",
    before:"assets/testimonials/image-lite.jpg",
    after:"assets/testimonials/image-2-lite.jpg"
  },
  {
    name:"Luiza",
    city:"Araucária, PR",
    stars:5,
    time:"5 meses de uso",
    before:"assets/testimonials/ricardo-before-blur-lite.jpg",
    after:"assets/testimonials/ricardo-after-blur-lite.jpg",
    text:"A entrega chegou no prazo, muito bem embalada e com tudo certinho. Em cinco meses saí dos 89 kg para 61,5 kg e fiquei muito satisfeita com o atendimento e com os resultados.",
  },
  {
    name:"Eduardo",
    city:"Curitiba, PR",
    stars:5,
    time:"1 mês de uso",
    text:"Completei meu primeiro mês de tratamento com tirzepatida 2,5 mg e perdi 8 kg. Esse resultado aumentou ainda mais minha motivação para continuar até atingir minha meta.",
    before:"assets/testimonials/image-3-hq-lite.jpg",
    after:"assets/testimonials/image-4-hq-lite.jpg",
    imgPos: "center 30%"
  },
  {
    name:"João",
    city:"Araucária, PR",
    stars:5,
    time:"2 meses de uso",
    text:"Em dois meses perdi 10 kg de gordura e ganhei 2 kg de massa magra seguindo um protocolo com treino, alimentação e retatrutida. Passei a treinar melhor, dormir bem e senti uma grande melhora na qualidade de vida.",
    before:"assets/testimonials/image-5-lite.jpg",
    after:"assets/testimonials/image-6-lite.jpg"
  },
  {
    name:"Jaqueline",
    city:"Campo Largo, PR",
    stars:5,
    time:"3 meses de uso",
    text:"Em três meses saí de 82 kg para 64 kg. Além da mudança na balança, recuperei minha autoestima, reduzi a ansiedade e hoje me sinto muito mais confiante.",
    before:"assets/testimonials/image-7-lite.jpg",
    after:"assets/testimonials/image-8-lite.jpg"
  },
];

const faqs = [
  { q:"Como faço meu pedido?", a:"Escolha o produto e a apresentação no catálogo e clique em \"Pedir no WhatsApp\". Nossa equipe confirma a disponibilidade, tira suas dúvidas e agenda a entrega. O pagamento é feito na entrega, via Pix ou cartão." },
  { q:"Qual a diferença entre solução pronta e frasco liofilizado?", a:"A solução pronta já vem diluída e depende integralmente da cadeia de frio. O frasco liofilizado (pó) é mais estável até a reconstituição, oferecendo mais flexibilidade no armazenamento e no ajuste de concentração." },
  { q:"Frasco ou kit fracionado: qual escolher?", a:"O frasco inteiro rende mais e tem melhor custo no longo prazo, ideal para quem já tem experiência com reconstituição. O kit fracionado vem com as doses do mês prontas, mais prático e com menor investimento inicial." },
  { q:"Quais os efeitos colaterais mais comuns?", a:"Com tirzepatida e retatrutida, os mais relatados são náusea leve, redução do apetite e desconforto digestivo nas primeiras semanas, que costumam diminuir com a adaptação. Sempre converse com um profissional de saúde." },
  { q:"Em quanto tempo vejo resultados?", a:"Com tirzepatida e retatrutida, muitas pessoas notam redução do apetite já na primeira semana. A perda de peso costuma aparecer entre 4 e 8 semanas, com resultados mais consistentes entre o 3º e o 6º mês." },
  { q:"Quem não deve usar?", a:"Gestantes, lactantes, pessoas com diabetes tipo 1, histórico de pancreatite ou câncer medular de tireoide e menores de 18 anos. Recomendamos avaliação médica antes de iniciar qualquer protocolo." },
  { q:"Vocês entregam fora de Curitiba?", a:"Atendemos Curitiba e região metropolitana, com entrega em até 48h. Para outras localidades, fale com a nossa equipe pelo WhatsApp." },
];

/* ---------- Helpers ---------- */
const $ = (s, r=document) => r.querySelector(s);
const $$ = (s, r=document) => Array.from(r.querySelectorAll(s));
const el = (tag, cls, html) => { const e=document.createElement(tag); if(cls) e.className=cls; if(html!=null) e.innerHTML=html; return e; };
const esc = (s) => String(s).replace(/[&<>"']/g, c=>({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"}[c]));
const initials = (n) => n.split(" ").map(w=>w[0]).join("").toUpperCase();
const CONSULT = "Sob consulta";

const productOptions = (p) => [
  { key:"frasco", label:p.priceLabel, short:p.priceLabel.replace(/^Frasco\s*/, "Frasco "), value:p.price || CONSULT },
  ...p.kits.map(k => ({
    key:k.dose,
    label:`Kit mensal ${k.dose} (${p.kitDoses || 4} doses)`,
    short:`Kit ${k.dose}`,
    value:k.value,
  })),
];
const orderMsg = (p, o) => o.value === CONSULT
  ? `Olá! Quero consultar o valor do ${p.name} (${p.brand}) - ${o.label}.`
  : `Olá! Quero comprar o ${p.name} (${p.brand}) - ${o.label} (${o.value}).`;

/* ---------- WhatsApp links ---------- */
const bindWa = (root=document) => $$('[data-wa]', root).forEach(a => a.href = waLink(a.dataset.wa));
bindWa();

/* ---------- Header ---------- */
const header = $('.header');
const menuBtn = $('#menuBtn'), navMobile = $('#navMobile');
menuBtn.addEventListener('click', () => {
  navMobile.hidden = !navMobile.hidden;
  menuBtn.setAttribute('aria-expanded', String(!navMobile.hidden));
});
$$('#navMobile a').forEach(a => a.addEventListener('click', () => {
  navMobile.hidden = true;
  menuBtn.setAttribute('aria-expanded', 'false');
}));
const onScroll = () => header.classList.toggle('scrolled', window.scrollY > 8);
window.addEventListener('scroll', onScroll, { passive:true });
onScroll();

/* ---------- Filters ---------- */
const filtersEl = $('#filters');
const grid = $('#productsGrid');
let activeCat = 'all';
categories.forEach(c => {
  const count = c.key === 'all' ? products.length : products.filter(p => p.category === c.key).length;
  const b = el('button', 'filter' + (c.key === activeCat ? ' active' : ''), `${esc(c.label)} <span>${count}</span>`);
  b.type = 'button';
  b.setAttribute('role', 'tab');
  b.setAttribute('aria-selected', String(c.key === activeCat));
  b.addEventListener('click', () => {
    activeCat = c.key;
    $$('.filter', filtersEl).forEach(f => { f.classList.remove('active'); f.setAttribute('aria-selected', 'false'); });
    b.classList.add('active');
    b.setAttribute('aria-selected', 'true');
    $$('.product', grid).forEach(card => {
      card.hidden = !(activeCat === 'all' || card.dataset.cat === activeCat);
    });
    grid.scrollLeft = 0;
    updateProductsBar();
  });
  filtersEl.appendChild(b);
});

/* ---------- Products ---------- */
const catLabel = (key) => (categories.find(c => c.key === key) || {}).label || '';

products.forEach((p) => {
  const options = productOptions(p);
  const card = el('article', 'product');
  card.dataset.cat = p.category;
  card.innerHTML = `
    <div class="product-media media-${p.imgFit}">
      ${p.badge ? `<span class="product-badge${p.badge === 'Novo' ? ' is-new' : ''}">${esc(p.badge)}</span>` : ''}
      <img src="${p.img}" alt="${esc(p.name)} — ${esc(p.brand)}" loading="lazy" decoding="async"${p.imgZoom ? ` style="--zoom:${p.imgZoom}"` : ''}/>
    </div>
    <div class="product-body">
      <div class="product-meta">
        <span class="product-cat">${esc(catLabel(p.category))}</span>
        ${p.origin ? `<span class="product-origin">${esc(p.origin)}</span>` : ''}
      </div>
      <h3>${esc(p.name)}</h3>
      <p class="product-brand">${esc(p.brand)}</p>
      <p class="product-tagline">${esc(p.tagline)}</p>
      <p class="product-desc">${esc(p.desc)}</p>
      <ul class="product-highlights">${p.highlights.map(h=>`<li>${esc(h)}</li>`).join('')}</ul>
      ${options.length > 1 ? `
      <div class="opts" role="radiogroup" aria-label="Apresentação">
        ${options.map((o,i)=>`
          <button type="button" class="opt${i===0?' active':''}" role="radio" aria-checked="${i===0}" data-i="${i}">
            <span class="opt-lb">${esc(o.short)}</span>
            <span class="opt-val">${esc(o.value)}</span>
          </button>`).join('')}
      </div>` : `
      <dl class="product-summary">
        <div><dt>Apresentação</dt><dd>${esc(p.presentation)}</dd></div>
        <div><dt>Indicado para</dt><dd>${esc(p.profile)}</dd></div>
        <div><dt>Pagamento</dt><dd>Na entrega · Pix ou cartão</dd></div>
      </dl>`}
      <div class="product-foot">
        <div class="price">
          <span class="price-lb" data-plabel>${esc(options[0].label)}</span>
          <span class="price-val${options[0].value === CONSULT ? ' is-consult' : ''}" data-total>${esc(options[0].value)}</span>
        </div>
        <button type="button" class="btn-link" data-details>Detalhes</button>
      </div>
      <a class="btn btn-primary btn-block" target="_blank" rel="noreferrer" data-cta></a>
    </div>`;
  grid.appendChild(card);

  const cta = $('[data-cta]', card);
  const totalEl = $('[data-total]', card);
  const labelEl = $('[data-plabel]', card);
  const select = (i) => {
    const o = options[i];
    cta.href = waLink(orderMsg(p, o));
    cta.textContent = o.value === CONSULT ? 'Consultar valor no WhatsApp' : 'Pedir no WhatsApp';
    totalEl.textContent = o.value;
    totalEl.classList.toggle('is-consult', o.value === CONSULT);
    labelEl.textContent = o.label;
    $$('.opt', card).forEach((b, bi) => {
      b.classList.toggle('active', bi === i);
      b.setAttribute('aria-checked', String(bi === i));
    });
  };
  select(0);
  $$('.opt', card).forEach(btn => btn.addEventListener('click', () => select(Number(btn.dataset.i))));
  $('[data-details]', card).addEventListener('click', (e) => openModal(p, e.currentTarget));
  $('.product-media', card).addEventListener('click', (e) => openModal(p, e.currentTarget));
});

/* Barra de progresso do carrossel de produtos (celular) */
const productsBar = $('#productsBar');
function updateProductsBar() {
  if (!productsBar) return;
  const max = grid.scrollWidth - grid.clientWidth;
  const visible = grid.clientWidth / Math.max(grid.scrollWidth, 1);
  const progress = max > 0 ? grid.scrollLeft / max : 0;
  productsBar.style.width = `${Math.max(visible, .12) * 100}%`;
  productsBar.style.transform = `translateX(${progress * (1 / Math.max(visible, .12) - 1) * 100}%)`;
}
grid.addEventListener('scroll', updateProductsBar, { passive:true });
window.addEventListener('resize', updateProductsBar);
updateProductsBar();

/* ---------- Product modal ---------- */
const modal = $('#productModal');
const modalBody = $('#modalBody');
let lastFocus = null;

function openModal(p, trigger) {
  lastFocus = trigger || null;
  const options = productOptions(p);
  modalBody.innerHTML = `
    <div class="modal-media media-${p.imgFit}">
      <img src="${p.img}" alt="${esc(p.name)}"${p.imgZoom ? ` style="--zoom:${p.imgZoom}"` : ''}/>
    </div>
    <div class="modal-info">
      <span class="product-cat">${esc(catLabel(p.category))}</span>
      <h3 id="modalTitle">${esc(p.name)}</h3>
      <p class="product-brand">${esc(p.brand)}${p.origin ? ` · ${esc(p.origin)}` : ''}</p>
      <p class="modal-desc">${esc(p.desc)}</p>
      <dl class="spec">
        <div><dt>Apresentação</dt><dd>${esc(p.presentation)}</dd></div>
        <div><dt>Mecanismo</dt><dd>${esc(p.tagline)}</dd></div>
        <div><dt>Indicado para</dt><dd>${esc(p.profile)}</dd></div>
      </dl>
      <div class="modal-prices">
        ${options.map(o => `<div><span>${esc(o.label)}</span><strong class="${o.value === CONSULT ? 'is-consult' : ''}">${esc(o.value)}</strong></div>`).join('')}
      </div>
      <a class="btn btn-primary btn-block" target="_blank" rel="noreferrer" href="${waLink(orderMsg(p, options[0]))}">
        ${options[0].value === CONSULT ? 'Consultar valor no WhatsApp' : 'Pedir no WhatsApp'}
      </a>
    </div>`;
  modal.hidden = false;
  document.body.classList.add('modal-open');
  requestAnimationFrame(() => modal.classList.add('open'));
  $('.modal-close', modal).focus();
}
function closeModal() {
  modal.classList.remove('open');
  document.body.classList.remove('modal-open');
  setTimeout(() => { modal.hidden = true; }, 200);
  if (lastFocus) lastFocus.focus();
}
$$('[data-close]', modal).forEach(b => b.addEventListener('click', closeModal));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && !modal.hidden) closeModal();
});

/* ---------- FAQ ---------- */
const faqList = $('#faqList');
faqs.forEach((f, i) => {
  const it = el('div', 'faq-item' + (i===0?' open':''));
  it.innerHTML = `
    <button class="faq-q" aria-expanded="${i===0}">
      <span>${esc(f.q)}</span>
      <span class="faq-caret" aria-hidden="true">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
      </span>
    </button>
    <div class="faq-a"><div class="faq-a-inner"><p>${esc(f.a)}</p></div></div>`;
  it.querySelector('.faq-q').addEventListener('click', () => {
    const willOpen = !it.classList.contains('open');
    $$('.faq-item', faqList).forEach(other => {
      other.classList.remove('open');
      $('.faq-q', other).setAttribute('aria-expanded', 'false');
    });
    if (willOpen) {
      it.classList.add('open');
      it.querySelector('.faq-q').setAttribute('aria-expanded', 'true');
    }
  });
  faqList.appendChild(it);
});

/* ---------- Testimonials marquee ---------- */
const qfViewport = $('.quick-feedbacks-viewport');
const qfSource = $('.quick-feedbacks');
if (qfViewport && qfSource) {
  const shorts = $$('.quick-feedback', qfSource).map(c => ({
    stars: ($('.quick-feedback-stars', c).textContent.match(/★/g) || []).length,
    name: $('.quick-feedback-name', c).textContent.trim(),
    text: $('p', c).textContent.trim(),
  }));
  const stars = (n) => `<span class="tm-stars" aria-label="${n} de 5 estrelas">${'★'.repeat(n)}<span class="tm-stars-off">${'★'.repeat(5 - n)}</span></span>`;
  const avatar = (name) => `<span class="tm-avatar">${esc(initials(name).replace('.', ''))}</span>`;
  const photoCard = (t) => {
    const pos = t.imgPos ? ` style="object-position:${t.imgPos}"` : '';
    return `
    <article class="tm-card tm-photo">
      <div class="tm-ba">
        <figure><img src="${t.before}" alt="Antes — ${esc(t.name)}" loading="lazy" decoding="async" draggable="false"${pos}/><figcaption>Antes</figcaption></figure>
        <figure><img src="${t.after}" alt="Depois — ${esc(t.name)}" loading="lazy" decoding="async" draggable="false"${pos}/><figcaption class="is-after">Depois</figcaption></figure>
        <span class="tm-ba-time">${esc(t.time)}</span>
      </div>
      <div class="tm-body">
        ${stars(t.stars)}
        <p class="tm-text">“${esc(t.text)}”</p>
        <div class="tm-foot">${avatar(t.name)}<div><div class="tm-name">${esc(t.name)}</div><div class="tm-meta">${esc(t.city)}</div></div></div>
      </div>
    </article>`;
  };
  let quoteN = 0;
  const textCard = (f) => `
    <article class="tm-card tm-quote${quoteN++ % 3 === 1 ? ' is-dark' : ''}">
      <svg class="tm-mark" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M9.6 6C6.5 7.3 4.5 10 4.5 13.4V18h6v-6H7.6c.2-1.9 1.4-3.4 3.2-4.2L9.6 6zm9 0c-3.1 1.3-5.1 4-5.1 7.4V18h6v-6h-2.9c.2-1.9 1.4-3.4 3.2-4.2L18.6 6z"/></svg>
      ${stars(f.stars)}
      <p class="tm-text">${esc(f.text)}</p>
      <div class="tm-foot">${avatar(f.name)}<div class="tm-name">${esc(f.name)}</div></div>
    </article>`;

  // um relato com foto seguido de recados curtos empilhados de dois em dois
  const stacks = (list) => {
    let out = '';
    for (let i = 0; i < list.length; i += 2) out += `<div class="tm-stack">${list.slice(i, i + 2).map(textCard).join('')}</div>`;
    return out;
  };
  const photos = testimonials.filter(t => t.before && t.after);
  const per = Math.ceil(shorts.length / Math.max(photos.length, 1));
  let html = '';
  photos.forEach((t, i) => {
    html += photoCard(t) + stacks(shorts.slice(i * per, (i + 1) * per));
  });
  html += stacks(shorts.slice(photos.length * per));

  qfViewport.innerHTML = `
    <div class="tm-track">
      <div class="tm-set">${html}</div>
      <div class="tm-set" aria-hidden="true">${html}</div>
    </div>`;

  /* Movimento: corre sempre; acelera com a rolagem da página e pode ser arrastado */
  const tmTrack = $('.tm-track', qfViewport);
  const tmSet = $('.tm-set', tmTrack);
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const BASE = reduce ? 18 : 38;            // px por segundo
  let setW = 0, x = 0, last = 0;
  let boost = 0, lastY = window.scrollY;    // impulso vindo da rolagem
  let dragging = false, dragStartX = 0, dragStartPos = 0, lastPX = 0, lastPT = 0, fling = 0;
  let onScreen = true;

  const measure = () => { setW = tmSet.getBoundingClientRect().width; };
  measure();
  window.addEventListener('resize', measure);
  if (document.fonts && document.fonts.ready) document.fonts.ready.then(measure);

  window.addEventListener('scroll', () => {
    const dy = window.scrollY - lastY;
    lastY = window.scrollY;
    if (!reduce) boost = Math.max(-900, Math.min(900, boost + dy * 6));
  }, { passive: true });

  if ('IntersectionObserver' in window) {
    new IntersectionObserver(([e]) => { onScreen = e.isIntersecting; }).observe(qfViewport);
  }

  qfViewport.addEventListener('pointerdown', (e) => {
    if (e.button !== undefined && e.button !== 0) return;
    dragging = true; fling = 0;
    dragStartX = lastPX = e.clientX; dragStartPos = x; lastPT = performance.now();
    qfViewport.classList.add('is-dragging');
    qfViewport.setPointerCapture(e.pointerId);
  });
  qfViewport.addEventListener('pointermove', (e) => {
    if (!dragging) return;
    const now = performance.now();
    x = dragStartPos + (e.clientX - dragStartX);
    fling = (e.clientX - lastPX) / Math.max(1, now - lastPT) * 1000;
    lastPX = e.clientX; lastPT = now;
  });
  const endDrag = () => {
    if (!dragging) return;
    dragging = false;
    fling = Math.max(-2500, Math.min(2500, fling));
    qfViewport.classList.remove('is-dragging');
  };
  qfViewport.addEventListener('pointerup', endDrag);
  qfViewport.addEventListener('pointercancel', endDrag);

  const tick = (t) => {
    const dt = last ? Math.min(0.05, (t - last) / 1000) : 0;
    last = t;
    if (onScreen && setW) {
      if (!dragging) {
        boost *= Math.pow(0.03, dt);
        fling *= Math.pow(0.02, dt);
        x += (fling - BASE - boost) * dt;
      }
      while (x <= -setW) x += setW;
      while (x > 0) x -= setW;
      const skew = reduce ? 0 : Math.max(-4, Math.min(4, (boost + (dragging ? 0 : -fling)) * 0.006));
      tmTrack.style.transform = `translate3d(${x}px,0,0) skewX(${skew}deg)`;
    }
    requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

/* ---------- Reveal on scroll ---------- */
if ('IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
  }, { rootMargin: '0px 0px -8% 0px' });
  $$('.section-head, .product, .step, .support-box').forEach(n => { n.classList.add('reveal'); io.observe(n); });
}

/* ---------- Year ---------- */
$('#year').textContent = new Date().getFullYear();
