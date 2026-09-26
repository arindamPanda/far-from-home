/* site.js: renders the views described in content.js into <main>, routes
   between them on the URL hash, and runs the lightbox.
   Nothing here is content: edit content.js to change what the site shows. */
(() => {
  'use strict';

  const app = document.getElementById('app');

  /* ── helpers ─────────────────────────────────────────────────────────── */
  const esc = (s) => String(s ?? '').replace(/[&<>"']/g, (c) => (
    { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]
  ));

  // Every photograph, flattened, with its year and a stable index the
  // lightbox steps through.
  const ALL = [];
  YEARS.forEach((y) => y.photos.forEach((p) => {
    ALL.push({ ...p, year: y.label, index: ALL.length });
  }));

  // The one group in YEARS that is not a year. Its name is set in content.js,
  // so renaming it there renames it everywhere it appears.
  const UNDATED = (YEARS.find((y) => !/^\d{4}$/.test(y.label)) || {}).label || '';

  const ratioValue = (ar) => {
    const m = /^\s*(\d+(?:\.\d+)?)\s*\/\s*(\d+(?:\.\d+)?)\s*$/.exec(ar || '');
    return m ? (Number(m[1]) / Number(m[2])) : 1.5;
  };

  // One framed photograph. `open` is the ALL index the lightbox opens at;
  // `href` makes the frame a link instead (journal covers in the list).
  const frame = (p, { ar = p.ar || '3/2', open = null, href = null, caption = null, cls = '' } = {}) => {
    const label = esc([p.title, p.place || p.year].filter(Boolean).join(' · '));
    const box =
      `<div class="frame-box" style="aspect-ratio:${esc(ar)};--ar:${ratioValue(ar)}">` +
        `<img src="${esc(p.src)}" alt="${esc(p.title)}" loading="lazy" decoding="async"` +
          ` onerror="this.parentNode.classList.add('is-missing')">` +
        `<span class="slot-label">${label}</span>` +
      `</div>`;
    const cap = caption === null ? '' : `<figcaption>${caption}</figcaption>`;
    if (href !== null) {
      return `<figure class="frame ${cls}"><a href="${esc(href)}" class="frame-link" aria-label="${esc(p.title)}">${box}</a>${cap}</figure>`;
    }
    const act = open === null ? '' : ` data-photo="${open}" tabindex="0" role="button" aria-label="${esc(p.title)}: open"`;
    return `<figure class="frame ${cls}"${act}>${box}${cap}</figure>`;
  };

  const yearTags = (prefix) => YEARS.map((y) =>
    `<a href="${prefix}${esc(y.label)}" class="tag tag-outline">${esc(y.label)}</a>`
  ).join('');

  const ICONS = {
    instagram: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z',
    x: 'M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z',
    github: 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.333-1.755-1.333-1.755-1.09-.744.083-.729.083-.729 1.205.084 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.42-1.305.762-1.605-2.665-.303-5.466-1.332-5.466-5.93 0-1.31.468-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.955-.267 1.98-.399 3-.405 1.02.006 2.045.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12',
  };
  const social = () => `<span class="social">` + Object.entries(SITE.links)
    .filter(([k, url]) => url && ICONS[k])
    .map(([k, url]) => `<a href="${esc(url)}" target="_blank" rel="noopener" aria-label="${esc(k)}">` +
      `<svg viewBox="0 0 24 24" aria-hidden="true"><path d="${ICONS[k]}"/></svg></a>`)
    .join('') + `</span>`;

  const postYear = (post) => (post.date.match(/\d{4}/) || [''])[0];

  /* ── views ───────────────────────────────────────────────────────────── */
  const views = {};

  views.home = () => {
    const lead = POSTS[0];
    const recent = ALL.slice(0, 2);
    // Under the fold: the whole undated gallery with its captions (the
    // gallery that used to sit on the main site). Without such a group,
    // four pictures spread across the archive stand in.
    const gallery = UNDATED ? YEARS.find((y) => y.label === UNDATED) : null;
    const stride = Math.max(1, Math.floor(ALL.length / 4));
    const strip = gallery
      ? ALL.filter((p) => p.year === UNDATED)
      : [0, 1, 2, 3].map((i) => ALL[Math.min(ALL.length - 1, i * stride + 2)]).filter(Boolean);
    return `
      <div class="wrap">
        <div class="rule-3" style="margin-top:4px"></div>
        <div class="dateline">
          <span>${esc(SITE.tagline)}</span>
          <span class="byline">Photographs by ${esc(SITE.name)}</span>
        </div>
        <div class="rule-1"></div>

        <div class="front">
          <div class="front-lead">
            ${lead ? `
            <div class="kicker">Recent entry · ${esc(lead.place)}, ${esc(lead.date)}</div>
            <h1 class="headline">${esc(lead.title)}</h1>
            ${frame({ title: lead.title, place: lead.place, src: lead.cover, ar: lead.ar }, { href: `#/journal/${lead.id}` })}
            <div class="front-intro">
              <p>${esc(lead.excerpt)}</p>
              <div class="front-action">
                <a href="#/journal/${esc(lead.id)}" class="pill-link">Continue reading <span class="pill-arrow" aria-hidden="true">&rarr;</span></a>
                <a href="#/journal" class="pill-link">Read all entries <span class="pill-arrow" aria-hidden="true">&rarr;</span></a>
              </div>
            </div>` : `<p class="text-muted">No journal entries yet. Add one to POSTS in content.js.</p>`}
          </div>

          <aside class="front-aside">
            <div>
              <div class="rule-1"></div>
              <h2>Latest shots</h2>
              <div class="recent">
                ${recent.map((p) => frame(p, {
                  open: p.index,
                  caption: esc(p.title),
                })).join('')}
              </div>
            </div>
            <div>
              <div class="rule-1"></div>
              <h2>By year</h2>
              <div class="year-tags">${yearTags('#/photography/')}</div>
            </div>
          </aside>
        </div>

        <div class="rule-1 front-strip-rule"></div>
        ${gallery ? `
        <div class="front-gallery-head">
          <h2>${esc(UNDATED)}</h2>
          <span class="text-muted">${esc(gallery.note)}</span>
          <a href="#/photography/${esc(UNDATED)}" class="arrow-link">All ${esc(UNDATED.toLowerCase())} &rarr;</a>
        </div>
        <div class="gallery">
          ${strip.map((p) => frame(p, {
            open: p.index,
            caption: esc(p.title),
          })).join('')}
        </div>` : `
        <div class="strip">
          ${strip.map((p) => frame(p, {
            ar: '3/2', open: p.index,
            caption: `${esc(p.title)} · ${esc(p.place)}`,
          })).join('')}
        </div>`}
      </div>`;
  };

  views.photography = () => `
      <div class="wrap page-head">
        <h1 class="page-title">Photography</h1>
        <p class="text-muted page-intro">Everything, by the year it was made. Click a frame to see it whole.</p>
        <div class="year-tags" style="margin-top:26px">${yearTags('#/photography/')}</div>
      </div>
      ${YEARS.map((y) => `
      <section class="year" id="year-${esc(y.label)}">
        <div class="wrap year-head">
          <h2 class="year-num">${esc(y.label)}</h2>
          <span class="text-muted">${esc(y.note)}</span>
        </div>
        <div class="wrap gallery year-gallery">
          ${y.photos.map((p) => {
            const g = ALL.find((q) => q.src === p.src && q.year === y.label);
            return frame(g, {
              open: g.index,
              caption: `<span>${esc(p.title)}</span>${p.place ? `<span class="text-muted">${esc(p.place)}</span>` : ''}`,
            });
          }).join('')}
        </div>
      </section>`).join('')}`;

  views.journal = () => `
      <div class="wrap page-head">
        <h1 class="page-title">Journal</h1>
        <p class="text-muted page-intro">Notes from the trips these photographs came from.</p>
        <div class="posts">
          ${POSTS.map((post) => `
          <article class="post-card">
            ${frame({ title: post.title, place: post.place, src: post.cover, ar: post.ar }, { href: `#/journal/${post.id}` })}
            <div>
              <div class="kicker">${esc(post.date)} · ${esc(post.place)}</div>
              <h2><a href="#/journal/${esc(post.id)}">${esc(post.title)}</a></h2>
              <p class="measure">${esc(post.excerpt)}</p>
              <a href="#/journal/${esc(post.id)}" class="pill-link">Continue reading <span class="pill-arrow" aria-hidden="true">&rarr;</span></a>
            </div>
          </article>`).join('')}
        </div>
      </div>`;

  views.post = (id) => {
    const i = POSTS.findIndex((p) => p.id === id);
    if (i < 0) return views.journal();
    const post = POSTS[i];
    const next = POSTS[i + 1];
    const prev = POSTS[i - 1];
    const body = post.paras.length ? post.paras : [post.excerpt];
    const cover = { title: post.title, place: post.place, src: post.cover, ar: post.ar || '3/2', year: postYear(post) };
    return `
      <div class="wrap page-head">
        <article class="entry">
          <a href="#/journal" class="back-link"><span class="back-arrow" aria-hidden="true">&larr;</span> Read all entries</a>
          <div class="kicker">${esc(post.date)} · ${esc(post.place)}</div>
          <h1>${esc(post.title)}</h1>
          ${frame(cover, { open: 'cover' })}
          ${body.map((t) => {
            // an object is a photograph set into the body. Its shape and its
            // place in the lightbox both come from the archive entry with the
            // same src, so the caption is the only thing written here.
            if (typeof t === 'object' && t.image) {
              const g = ALL.find((q) => q.src === t.image);
              return frame(
                { title: t.caption || (g && g.title) || '', place: '', src: t.image, ar: (g && g.ar) || t.ar || '3/2' },
                { open: g ? g.index : null, caption: esc(t.caption || ''), cls: 'entry-figure' },
              );
            }
            return t.startsWith('## ') ? `<h2>${esc(t.slice(3))}</h2>` : `<p>${esc(t)}</p>`;
          }).join('')}
          ${(post.sources || []).length ? `
          <div class="entry-sources">
            <h2>Sources</h2>
            <p>To read more about this place, and to check anything written above, start with these.</p>
            <ul>
              ${post.sources.map((s) => `<li><a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.label)}</a></li>`).join('')}
            </ul>
          </div>` : ''}
          <div class="entry-nav">
            <a href="#/photography/${esc(postYear(post))}" class="link-plain">The frames from ${esc(postYear(post))} &rarr;</a>
            ${prev ? `<a href="#/journal/${esc(prev.id)}" class="link-plain">Newer: ${esc(prev.title)}</a>` : ''}
            ${next ? `<a href="#/journal/${esc(next.id)}" class="link-plain">Older: ${esc(next.title)}</a>` : ''}
          </div>
        </article>
      </div>`;
  };
  views.post.cover = null; // set by render() so the lightbox can open the cover

  views.about = () => `
      <div class="wrap two-col">
        <div>
          <h1 class="page-title">About</h1>
          <p class="lede about-lede">${esc(ABOUT.lede)}</p>
          ${ABOUT.paras.map((t) => `<p class="measure">${esc(t)}</p>`).join('')}
          <p class="measure">Prints, permissions and conversations: <a href="#/contact">get in touch</a>.</p>
        </div>
        ${frame({ title: `${SITE.name}`, place: 'portrait', src: ABOUT.portrait }, { ar: ABOUT.portraitAr || '4/5', cls: 'about-portrait' })}
      </div>`;

  views.contact = () => `
      <div class="wrap two-col">
        <div>
          <h1 class="page-title" style="margin-bottom:18px">Contact</h1>
          <p style="max-width:48ch">${esc(CONTACT.blurb)}</p>
          ${SITE.email ? `<p style="font-size:19px;margin-top:26px"><a href="mailto:${esc(SITE.email)}">${esc(SITE.email)}</a></p>` : ''}
          <p class="text-muted" style="font-size:14px;display:flex;gap:12px;align-items:center">Elsewhere ${social()}</p>
        </div>
        ${SITE.email ? `
        <form class="contact-form" id="contact-form">
          <div class="field"><label for="c-name">Name</label><input class="input" id="c-name" name="name" placeholder="Your name" required></div>
          <div class="field"><label for="c-mail">Email</label><input class="input" id="c-mail" name="email" type="email" placeholder="you@somewhere.com" required></div>
          <div class="field"><label for="c-msg">Message</label><textarea class="input" id="c-msg" name="message" placeholder="Which photograph, and what you'd like" required></textarea></div>
          <button class="btn btn-primary" type="submit">Send message</button>
        </form>` : ''}
      </div>`;

  /* ── router ──────────────────────────────────────────────────────────── */
  let current = { view: '', param: '' };

  const parse = () => {
    const [view = '', param = ''] = location.hash.replace(/^#\/?/, '').split('/');
    return { view: view || 'home', param: decodeURIComponent(param) };
  };

  const render = () => {
    const { view, param } = parse();
    closeLightbox();

    let html;
    let scrollTo = 0;
    if (view === 'journal' && param) {
      html = views.post(param);
      const post = POSTS.find((p) => p.id === param);
      views.post.cover = post ? { title: post.title, place: post.place, src: post.cover, ar: post.ar || '3/2', year: postYear(post) } : null;
    } else if (views[view]) {
      html = views[view]();
    } else {
      html = views.home();
    }
    app.innerHTML = html;

    document.querySelectorAll('.nav [data-route]').forEach((a) => {
      const r = a.dataset.route;
      const on = r === view || (r === 'home' && view === 'home');
      if (on && r !== 'home') a.setAttribute('aria-current', 'page');
      else a.removeAttribute('aria-current');
    });

    const same = current.view === view;
    current = { view, param };
    if (view === 'photography' && param) {
      const el = document.getElementById('year-' + param);
      if (el) {
        scrollTo = el.getBoundingClientRect().top + window.scrollY - 20;
        window.scrollTo({ top: scrollTo, behavior: same ? 'smooth' : 'auto' });
        return;
      }
    }
    window.scrollTo(0, 0);
  };

  window.addEventListener('hashchange', render);

  /* ── lightbox ────────────────────────────────────────────────────────── */
  const lb = document.getElementById('lightbox');
  const lbImg = document.getElementById('lb-img');
  const lbBox = document.getElementById('lb-box');
  const lbTitle = document.getElementById('lb-title');
  const lbMeta = document.getElementById('lb-meta');
  const lbCount = document.getElementById('lb-count');
  const lbSlot = document.getElementById('lb-slot');
  let lbList = [];
  let lbIndex = 0;
  let lbReturn = null;

  const showLightbox = () => {
    const p = lbList[lbIndex];
    lbBox.classList.remove('is-missing');
    lbImg.src = p.src;
    lbImg.alt = p.title;
    lbTitle.textContent = p.title;
    lbMeta.textContent = [p.place, p.year].filter(Boolean).join(' · ');
    lbSlot.textContent = [p.title, p.place || p.year].filter(Boolean).join(' · ');
    lbCount.textContent = lbList.length > 1 ? `${lbIndex + 1} / ${lbList.length}` : '';
    lbBox.style.setProperty('--ar', ratioValue(p.ar));
    document.getElementById('lb-prev').hidden = lbList.length < 2;
    document.getElementById('lb-next').hidden = lbList.length < 2;
  };
  lbImg.addEventListener('error', () => lbBox.classList.add('is-missing'));

  const openLightbox = (list, index, returnTo) => {
    lbList = list;
    lbIndex = index;
    lbReturn = returnTo || null;
    showLightbox();
    lb.hidden = false;
    document.body.classList.add('lightbox-open');
    document.getElementById('lb-close').focus();
  };
  function closeLightbox() {
    if (lb.hidden) return;
    lb.hidden = true;
    lbImg.removeAttribute('src');
    document.body.classList.remove('lightbox-open');
    if (lbReturn && document.contains(lbReturn)) lbReturn.focus();
  }
  const stepLightbox = (d) => {
    if (lbList.length < 2) return;
    lbIndex = (lbIndex + d + lbList.length) % lbList.length;
    showLightbox();
  };

  document.getElementById('lb-close').addEventListener('click', closeLightbox);
  document.getElementById('lb-prev').addEventListener('click', () => stepLightbox(-1));
  document.getElementById('lb-next').addEventListener('click', () => stepLightbox(1));
  window.addEventListener('keydown', (e) => {
    if (lb.hidden) return;
    if (e.key === 'Escape') closeLightbox();
    else if (e.key === 'ArrowRight') stepLightbox(1);
    else if (e.key === 'ArrowLeft') stepLightbox(-1);
  });

  // Swipe between frames on touch screens.
  let swipeX = null;
  const stage = document.getElementById('lb-stage');
  stage.addEventListener('pointerdown', (e) => { swipeX = e.clientX; });
  stage.addEventListener('pointerup', (e) => {
    if (swipeX === null) return;
    const dx = e.clientX - swipeX;
    swipeX = null;
    if (Math.abs(dx) > 40) stepLightbox(dx < 0 ? 1 : -1);
  });

  const openFrom = (el) => {
    const key = el.dataset.photo;
    if (key === 'cover') {
      if (views.post.cover) openLightbox([views.post.cover], 0, el);
    } else {
      openLightbox(ALL, Number(key), el);
    }
  };
  app.addEventListener('click', (e) => {
    const el = e.target.closest('[data-photo]');
    if (el) openFrom(el);
  });
  app.addEventListener('keydown', (e) => {
    if (e.key !== 'Enter' && e.key !== ' ') return;
    const el = e.target.closest('[data-photo]');
    if (!el) return;
    e.preventDefault();
    openFrom(el);
  });

  /* ── contact form → the visitor's mail client ────────────────────────── */
  app.addEventListener('submit', (e) => {
    const form = e.target.closest('#contact-form');
    if (!form) return;
    e.preventDefault();
    const f = new FormData(form);
    const subject = encodeURIComponent(`${SITE.brand}: message from ${f.get('name')}`);
    const body = encodeURIComponent(`${f.get('message')}\n\nFrom ${f.get('name')} <${f.get('email')}>`);
    location.href = `mailto:${SITE.email}?subject=${subject}&body=${body}`;
  });

  /* ── boot ────────────────────────────────────────────────────────────── */
  document.querySelectorAll('.nav-main, .footer-main').forEach((a) => {
    if (SITE.mainSite) a.href = SITE.mainSite; else a.remove();
  });
  document.getElementById('footer-year').textContent = new Date().getFullYear();
  document.getElementById('footer-name').textContent = SITE.name;
  document.querySelector('.nav-brand').textContent = SITE.brand;
  render();
})();
