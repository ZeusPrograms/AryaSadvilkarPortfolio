/* Builds the whole page from content.js. Edit content.js, not this file. */
(function () {
  const S = window.SITE;
  const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
  const fine = matchMedia('(pointer:fine)').matches && !reduce;
  const $ = (s) => document.querySelector(s);
  const esc = (t) => String(t ?? '').replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
  const on = (sec) => sec && sec.show !== false;
  const P = S.person;

  /* ---------- theme ---------- */
  let theme = matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  function applyTheme() {
    document.documentElement.dataset.theme = theme;
    if (window.orbMat) window.orbMat.color.setHex(theme === 'dark' ? 0xd4ff3a : 0x2f5bff);
  }
  applyTheme();
  $('#themeBtn').addEventListener('click', () => { theme = theme === 'dark' ? 'light' : 'dark'; applyTheme(); });

  /* ---------- sections (order = page order) ---------- */
  const ORDER = ['about', 'experience', 'education', 'research', 'projects', 'skills', 'achievements', 'contact'];
  const hasItems = (sec) => !sec || !sec.items || sec.items.length > 0;
  const shown = ORDER.filter((k) => on(S[k]) && hasItems(S[k]));

  const sections = {
    about: () => `
      <section id="about"><div class="wrap">
        <div class="mono reveal">${esc(S.about.eyebrow)}</div>
        <p class="lead-text reveal" style="margin-top:28px">${esc(S.about.text)}</p>
        <h2 class="reveal" style="font-size:clamp(26px,3vw,40px);margin-top:20px;letter-spacing:-.02em">${esc(S.about.title)}</h2>
        <div class="facts reveal">${S.about.facts.map(([k, v]) => `<div><strong>${esc(k)}</strong><span>${esc(v)}</span></div>`).join('')}</div>
      </div></section>`,

    experience: () => `
      <section id="experience"><div class="wrap">
        <div class="head reveal"><div><div class="eyebrow">${esc(S.experience.eyebrow)}</div><h2>${esc(S.experience.title)}</h2></div></div>
        <div class="tl" id="tl"><div class="fill" id="fill"></div>
          ${S.experience.items.map((j) => `
            <div class="job reveal">
              <span class="mono">${esc(j.period)} · ${esc(j.place)}</span>
              <h3>${esc(j.role)}<br><span class="sub">${esc(j.org)}</span></h3>
              <ul>${j.points.map((p) => `<li>${esc(p)}</li>`).join('')}</ul>
            </div>`).join('')}
        </div>
      </div></section>`,

    education: () => `
      <section id="education"><div class="wrap">
        <div class="head reveal"><div><div class="eyebrow">${esc(S.education.eyebrow)}</div><h2>${esc(S.education.title)}</h2></div></div>
        <div class="edu">${S.education.items.map((e) => `
          <div class="card reveal"><span class="mono">${esc(e.period)}</span><h3>${esc(e.degree)}</h3><p>${esc(e.school)}</p><p style="margin-top:10px;color:var(--fg)">${esc(e.detail)}</p></div>`).join('')}
        </div>
      </div></section>`,

    research: () => `
      <section id="research"><div class="wrap">
        <div class="head reveal"><div><div class="eyebrow">${esc(S.research.eyebrow)}</div><h2>${esc(S.research.title)}</h2></div></div>
        ${S.research.items.map((r) => `
          <article class="paper reveal" data-glow>
            <span class="mono">${esc(r.venue)} · ${esc(r.year)}</span>
            <h3>${esc(r.title)}</h3>
            <p class="abs">${esc(r.abstract)}</p>
            <div class="chips">${r.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
            <div class="meta-row">${r.authors.map((a) => `<div><b>${esc(a)}</b></div>`).join('')}</div>
            ${r.link ? `<p style="margin-top:34px"><a class="btn solid" href="${esc(r.link)}" target="_blank" rel="noopener">Read the paper ↗</a></p>` : ''}
          </article>`).join('')}
      </div></section>`,

    projects: () => `
      <section id="projects"><div class="wrap">
        <div class="head reveal"><div><div class="eyebrow">${esc(S.projects.eyebrow)}</div><h2>${esc(S.projects.title)}</h2></div></div>
        <div class="bento">${S.projects.items.map((p, i) => `
          <article class="tile reveal" data-glow>
            <div><span class="num">${String(i + 1).padStart(2, '0')}</span></div>
            <div><p class="tag mono">${esc(p.tags)}</p><h3>${esc(p.title)}</h3><p>${esc(p.text)}</p>
              ${p.link ? `<p style="margin-top:14px"><a class="btn" href="${esc(p.link)}" target="_blank" rel="noopener">View ↗</a></p>` : ''}</div>
          </article>`).join('')}
        </div>
      </div></section>`,

    skills: () => `
      <section id="skills"><div class="wrap">
        <div class="head reveal"><div><div class="eyebrow">${esc(S.skills.eyebrow)}</div><h2>${esc(S.skills.title)}</h2></div></div>
        <div class="skills">${S.skills.groups.map((g) => `
          <div class="skill-row reveal"><h4>${esc(g.name)}</h4><p>${g.items.map(esc).join(' · ')}</p></div>`).join('')}
        </div>
        ${S.skills.certifications.length ? `<p class="mono reveal certs">Certified · ${S.skills.certifications.map(esc).join(' · ')}</p>` : ''}
      </div></section>`,

    achievements: () => `
      <section id="achievements"><div class="wrap">
        <div class="head reveal"><div><div class="eyebrow">${esc(S.achievements.eyebrow)}</div><h2>${esc(S.achievements.title)}</h2></div></div>
        <ul class="ach">${S.achievements.items.map((a, i) => `
          <li class="reveal"><small>${String(i + 1).padStart(2, '0')}</small><span>${esc(a.title)}</span><em>${esc(a.note)}</em></li>`).join('')}
        </ul>
      </div></section>`,

    contact: () => `
      <section id="contact"><div class="wrap">
        <div class="head reveal"><div><div class="eyebrow">${esc(S.contact.eyebrow)}</div><h2>${esc(S.contact.title)}</h2></div><span class="mono" id="clock">${esc(P.location)}</span></div>
        <div class="contact-grid reveal">
          <div>
            <canvas id="orb" aria-hidden="true"></canvas>
            <p class="contact-lead">${esc(S.contact.lead)}</p>
            <div class="tags">${S.contact.tags.map((t) => `<span>${esc(t)}</span>`).join('')}</div>
            <p class="meta-note">${esc(S.contact.note)}</p>
          </div>
          <div class="contact-card">
            <span class="mono">Email</span>
            <a class="bigmail" id="mail" href="mailto:${esc(P.email)}">${esc(P.email)}</a>
            <div class="cta-row"><button class="btn solid" id="copy" type="button">Copy email</button><a class="btn" href="mailto:${esc(P.email)}">Write to me</a></div>
            <div class="socials">${P.links.map((l) => `<a class="btn" href="${esc(l.url)}" target="_blank" rel="noopener">${esc(l.label)} ↗</a>`).join('')}</div>
          </div>
        </div>
      </div></section>`
  };

  /* ---------- build page ---------- */
  const marq = S.marquee && S.marquee.length ? `
    <div class="marq" aria-hidden="true"><div class="track">
      ${[0, 1].map(() => `<div class="grp">${S.marquee.map((m) => `<span>${esc(m)}</span><i></i>`).join('')}</div>`).join('')}
    </div></div>` : '';

  $('#app').innerHTML = `
    <header class="hero" id="top">
      <div class="spot" id="spot" aria-hidden="true"></div>
      <div class="grid-lines" aria-hidden="true"></div>
      <div class="wrap hero-grid">
        <div>
          <span class="status mono"><i></i>${esc(P.status)}</span>
          <h1 class="name">${[P.first, P.last].map((w) => `<span><span class="w">${esc(w)}</span></span>`).join('')}</h1>
          <p class="rotator">I work as a <span class="rot"><span class="rot-track" id="rot">${P.roles.map((r) => `<b>${esc(r)}</b>`).join('')}</span></span></p>
          <p class="intro">${esc(P.intro)}</p>
          <div class="cta"><a class="btn solid" href="#${shown.includes('research') ? 'research' : 'about'}">${shown.includes('research') ? 'Read the research' : 'About me'}</a><a class="btn" href="#contact">Get in touch</a></div>
        </div>
        <div class="hero-visual">
          <div class="panel"></div>
          <div class="photo"><img src="${esc(P.photo)}" alt="${esc(P.photoAlt)}"></div>
          <svg class="deco d1" viewBox="0 0 24 24" aria-hidden="true"><path d="M12 0 14 10 24 12 14 14 12 24 10 14 0 12 10 10Z" fill="currentColor"/></svg>
          <span class="deco d2" aria-hidden="true"></span>
          <span class="deco d3" aria-hidden="true"></span>
        </div>
      </div>
      <a class="scroll-cue mono" href="#${shown[0] || 'top'}"><span></span>Scroll</a>
    </header>
    ${marq}
    ${shown.map((k) => sections[k]()).join('')}`;

  /* nav and footer come from the same list */
  $('#logo').innerHTML = `${esc(P.first)} ${esc(P.last)}<b></b>`;
  $('#links').innerHTML = shown.map((k) => `<a href="#${k}">${esc(S[k].nav)}</a>`).join('');
  $('#footer').outerHTML = `<footer id="footer"><div class="wrap"><span>© ${new Date().getFullYear()} ${esc(S.footer)}</span><a href="#top">Back to top ↑</a></div></footer>`;
  document.querySelector('meta[name=description]').content = P.summary;
  document.querySelector('meta[property="og:title"]').content = `${P.first} ${P.last} · Portfolio`;
  document.title = `${P.first} ${P.last} · ${P.roles[0]}`;
  $('#initials').textContent = (P.first[0] || '') + (P.last[0] || '') + '.';

  /* ---------- loader, reveals, nav ---------- */
  setTimeout(() => { $('#preloader').classList.add('done'); document.body.classList.add('loaded'); }, reduce ? 0 : 1300);
  setTimeout(() => { const p = $('#preloader'); if (p) p.remove(); }, 2200);

  const nav = $('#nav');
  addEventListener('scroll', () => nav.classList.toggle('scrolled', scrollY > 40), { passive: true });

  const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }), { threshold: 0.15 });
  document.querySelectorAll('.reveal').forEach((el) => io.observe(el));

  const tl = $('#tl'), fill = $('#fill');
  if (tl && fill) addEventListener('scroll', () => {
    const r = tl.getBoundingClientRect();
    fill.style.height = Math.min(Math.max((innerHeight * 0.6 - r.top) / r.height, 0), 1) * 100 + '%';
  }, { passive: true });

  /* ---------- rotating role line ---------- */
  const rot = $('#rot');
  if (rot && rot.children.length > 1 && !reduce) {
    let i = 0;
    setInterval(() => { i = (i + 1) % rot.children.length; rot.style.transform = `translateY(-${i * 1.25}em)`; }, 2600);
  }

  /* ---------- pointer effects (desktop only) ---------- */
  if (fine) {
    const hero = $('#top'), spot = $('#spot');
    hero.addEventListener('pointermove', (e) => {
      const b = hero.getBoundingClientRect();
      spot.style.setProperty('--sx', (e.clientX - b.left) + 'px');
      spot.style.setProperty('--sy', (e.clientY - b.top) + 'px');
    });
    document.querySelectorAll('[data-glow]').forEach((el) => {
      el.addEventListener('pointermove', (e) => {
        const b = el.getBoundingClientRect();
        const x = (e.clientX - b.left) / b.width, y = (e.clientY - b.top) / b.height;
        el.style.setProperty('--mx', (e.clientX - b.left) + 'px');
        el.style.setProperty('--my', (e.clientY - b.top) + 'px');
        el.style.setProperty('--x', x * 100 + '%');
        el.style.setProperty('--y', y * 100 + '%');
      });
    });
  }

  /* ---------- contact: copy, clock, orb ---------- */
  const copy = $('#copy');
  if (copy) copy.addEventListener('click', async () => {
    try { await navigator.clipboard.writeText(P.email); copy.textContent = 'Copied ✓'; }
    catch (_) { copy.textContent = P.email; }
    copy.classList.add('done');
    setTimeout(() => { copy.textContent = 'Copy email'; copy.classList.remove('done'); }, 2000);
  });
  const clock = $('#clock');
  if (clock) {
    const tick = () => { clock.textContent = P.location.split(',')[0] + ' · ' + new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit' }) + ' IST'; };
    tick(); setInterval(tick, 30000);
  }

  const orbEl = $('#orb');
  if (orbEl && window.THREE) {
    try {
      const r = new THREE.WebGLRenderer({ canvas: orbEl, alpha: true, antialias: true });
      r.setPixelRatio(Math.min(devicePixelRatio, 2));
      const sc = new THREE.Scene(), cam = new THREE.PerspectiveCamera(40, 1, 0.1, 50);
      cam.position.z = 5.2;
      sc.add(new THREE.AmbientLight(0xffffff, 0.55));
      const k = new THREE.DirectionalLight(0xffffff, 1.1); k.position.set(3, 4, 5); sc.add(k);
      const f = new THREE.PointLight(0x7fa2ff, 0.9, 20); f.position.set(-3, -2, 2); sc.add(f);
      const geo = new THREE.SphereGeometry(1.4, 96, 96);
      const base = geo.attributes.position.array.slice();
      window.orbMat = new THREE.MeshStandardMaterial({ color: 0x2f5bff, metalness: 0.35, roughness: 0.22 });
      const orb = new THREE.Mesh(geo, window.orbMat); sc.add(orb);
      let mx = 0, my = 0;
      addEventListener('pointermove', (e) => { mx = e.clientX / innerWidth - 0.5; my = e.clientY / innerHeight - 0.5; }, { passive: true });
      const size = () => { const w = orbEl.clientWidth, h = orbEl.clientHeight; r.setSize(w, h, false); cam.aspect = w / h; cam.updateProjectionMatrix(); };
      size(); addEventListener('resize', size);
      const clock3 = new THREE.Clock(); let vis = true;
      new IntersectionObserver((es) => (vis = es[0].isIntersecting)).observe(orbEl);
      (function loop() {
        const t = reduce ? 0 : clock3.getElapsedTime();
        const pa = geo.attributes.position;
        for (let i = 0; i < pa.count; i++) {
          const x = base[i * 3], y = base[i * 3 + 1], z = base[i * 3 + 2];
          const d = 1 + 0.09 * Math.sin(3 * x + t * 1.2) * Math.cos(2.5 * y - t * 0.9) + 0.05 * Math.sin(4 * z + t * 0.7);
          pa.setXYZ(i, x * d, y * d, z * d);
        }
        pa.needsUpdate = true; geo.computeVertexNormals();
        orb.rotation.y = t * 0.12 + mx * 0.6; orb.rotation.x = my * 0.4;
        if (vis) r.render(sc, cam);
        requestAnimationFrame(loop);
      })();
      applyTheme();
    } catch (err) { console.warn('Orb unavailable', err); orbEl.remove(); }
  } else if (orbEl) orbEl.remove();
})();
