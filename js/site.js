/* =========================================================================
   SparkIA — MOTOR DO SITE
   -------------------------------------------------------------------------
   Normalmente você NÃO precisa mexer neste arquivo.
   Para mudar textos, serviços, clientes ou contato, edite js/conteudo.js
   Para mudar cores e tamanhos, edite css/estilo.css
   ========================================================================= */
(function () {
  'use strict';

  /* ------------------------------------------------------------------
     Biblioteca de ícones (usada pelo campo "icone" em conteudo.js)
     ------------------------------------------------------------------ */
  const T = 'fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"';
  const ICONES = {
    cerebro:   `<svg viewBox="0 0 24 24" ${T}><path d="M12 5a3 3 0 00-6 0 3 3 0 00-2 5.2A3 3 0 006 16a3 3 0 006 1.5zM12 5a3 3 0 016 0 3 3 0 012 5.2A3 3 0 0118 16a3 3 0 01-6 1.5z"/><path d="M12 5v14"/></svg>`,
    banco:     `<svg viewBox="0 0 24 24" ${T}><ellipse cx="12" cy="5.5" rx="8" ry="3"/><path d="M4 5.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/><path d="M4 11.5v6c0 1.7 3.6 3 8 3s8-1.3 8-3v-6"/></svg>`,
    codigo:    `<svg viewBox="0 0 24 24" ${T}><path d="M8 17l-5-5 5-5M16 7l5 5-5 5M14 4l-4 16"/></svg>`,
    radar:     `<svg viewBox="0 0 24 24" ${T}><circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.3" fill="currentColor" stroke="none"/><path d="M12 12l6-4.5"/></svg>`,
    chat:      `<svg viewBox="0 0 24 24" ${T}><path d="M20 14a2.5 2.5 0 01-2.5 2.5H8L4 20V6a2.5 2.5 0 012.5-2.5h11A2.5 2.5 0 0120 6z"/><path d="M8.5 10h.01M12 10h.01M15.5 10h.01"/></svg>`,
    nuvem:     `<svg viewBox="0 0 24 24" ${T}><path d="M17.5 18a4 4 0 00.5-7.97 6 6 0 00-11.6 1.3A3.5 3.5 0 007 18z"/><path d="M12 12v5M9.8 14.8L12 17l2.2-2.2"/></svg>`,
    grafico:   `<svg viewBox="0 0 24 24" ${T}><path d="M3 20h18M6.5 20V11M11 20V5M15.5 20v-6M20 20v-9"/></svg>`,
    alvo:      `<svg viewBox="0 0 24 24" ${T}><circle cx="12" cy="12" r="8.5"/><circle cx="12" cy="12" r="4.5"/><circle cx="12" cy="12" r="1" fill="currentColor" stroke="none"/></svg>`,
    engrenagem:`<svg viewBox="0 0 24 24" ${T}><circle cx="12" cy="12" r="3.2"/><path d="M19.4 14.5a1.6 1.6 0 00.32 1.77l.06.06a2 2 0 11-2.83 2.83l-.06-.06a1.6 1.6 0 00-1.77-.32 1.6 1.6 0 00-.97 1.47V21a2 2 0 11-4 0v-.1a1.6 1.6 0 00-1.05-1.47 1.6 1.6 0 00-1.77.32l-.06.06a2 2 0 11-2.83-2.83l.06-.06a1.6 1.6 0 00.32-1.77 1.6 1.6 0 00-1.47-.97H3a2 2 0 110-4h.1a1.6 1.6 0 001.47-1.05 1.6 1.6 0 00-.32-1.77l-.06-.06a2 2 0 112.83-2.83l.06.06a1.6 1.6 0 001.77.32H9a1.6 1.6 0 00.97-1.47V3a2 2 0 114 0v.1a1.6 1.6 0 00.97 1.47 1.6 1.6 0 001.77-.32l.06-.06a2 2 0 112.83 2.83l-.06.06a1.6 1.6 0 00-.32 1.77V9a1.6 1.6 0 001.47.97H21a2 2 0 110 4h-.1a1.6 1.6 0 00-1.47.97z"/></svg>`,
    escudo:    `<svg viewBox="0 0 24 24" ${T}><path d="M12 3l7.5 3v5.5c0 4.6-3.1 8.5-7.5 9.5-4.4-1-7.5-4.9-7.5-9.5V6z"/><path d="M9.2 12.2l2 2 3.6-3.9"/></svg>`,
    raio:      `<svg viewBox="0 0 24 24" ${T}><path d="M13 2L4.5 13.5H11L10 22l8.5-11.5H12z"/></svg>`,
    robo:      `<svg viewBox="0 0 24 24" ${T}><rect x="4" y="8" width="16" height="12" rx="3"/><path d="M12 4.5V8M9 13h.01M15 13h.01M9.5 16.5h5"/><circle cx="12" cy="3.5" r="1.3"/></svg>`,
    email:     `<svg viewBox="0 0 24 24" ${T}><rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M3.5 7l8.5 6 8.5-6"/></svg>`,
    telefone:  `<svg viewBox="0 0 24 24" ${T}><path d="M21 16.9v2.5a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.4 19.4 0 01-6-6A19.8 19.8 0 011.1 3.6 2 2 0 013.1 1.4h2.5a2 2 0 012 1.7c.13.96.36 1.9.7 2.8a2 2 0 01-.45 2.1l-1.06 1.06a16 16 0 006 6l1.06-1.06a2 2 0 012.1-.45c.9.34 1.84.57 2.8.7a2 2 0 011.7 2.05z"/></svg>`,
    local:     `<svg viewBox="0 0 24 24" ${T}><path d="M20 10.5c0 5.5-8 12-8 12s-8-6.5-8-12a8 8 0 1116 0z"/><circle cx="12" cy="10.5" r="2.8"/></svg>`,
    relogio:   `<svg viewBox="0 0 24 24" ${T}><circle cx="12" cy="12" r="9"/><path d="M12 7v5.2l3.2 2"/></svg>`,
    whatsapp:  `<svg viewBox="0 0 24 24" ${T}><path d="M20.5 11.6a8.4 8.4 0 01-12.3 7.4L3.5 20.5l1.6-4.6A8.4 8.4 0 1120.5 11.6z"/><path d="M9 9.3c0 3 2.4 5.4 5.4 5.4"/></svg>`,
    linkedin:  `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 11-.02 5 2.5 2.5 0 01.02-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-.95 1.83-1.95 3.77-1.95 4.03 0 4.78 2.5 4.78 5.76V21h-4v-5.1c0-1.22-.02-2.8-1.75-2.8-1.75 0-2.02 1.32-2.02 2.7V21H9z"/></svg>`,
    instagram: `<svg viewBox="0 0 24 24" ${T}><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.2" cy="6.8" r="1.1" fill="currentColor" stroke="none"/></svg>`,
    github:    `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 00-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.53 2.34 1.09 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.5 9.5 0 015 0c1.91-1.29 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.74c0 .27.18.58.69.48A10 10 0 0012 2z"/></svg>`,
    youtube:   `<svg viewBox="0 0 24 24" fill="currentColor"><path d="M22.5 7.2a2.7 2.7 0 00-1.9-1.9C18.9 4.8 12 4.8 12 4.8s-6.9 0-8.6.5A2.7 2.7 0 001.5 7.2 28 28 0 001 12a28 28 0 00.5 4.8 2.7 2.7 0 001.9 1.9c1.7.5 8.6.5 8.6.5s6.9 0 8.6-.5a2.7 2.7 0 001.9-1.9A28 28 0 0023 12a28 28 0 00-.5-4.8zM9.8 15.3V8.7l5.8 3.3z"/></svg>`
  };
  const icone = (n) => ICONES[n] || ICONES.raio;

  /* ------------------------------------------------------------------
     Utilitários
     ------------------------------------------------------------------ */
  const $  = (s, ctx = document) => ctx.querySelector(s);
  const $$ = (s, ctx = document) => Array.from(ctx.querySelectorAll(s));
  const pegar = (caminho) => caminho.split('.').reduce((o, k) => (o == null ? o : o[k]), CONTEUDO);
  const esc = (s) => String(s == null ? '' : s).replace(/[&<>"']/g, c => ({ '&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;' }[c]));
  const iniciais = (nome) => String(nome || '').trim().split(/\s+/).slice(0, 2).map(p => p[0] || '').join('').toUpperCase();

  /* ------------------------------------------------------------------
     1. Metadados da página
     ------------------------------------------------------------------ */
  document.title = CONTEUDO.site.tituloAba;
  const metaDesc = $('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', CONTEUDO.site.descricao);

  /* ------------------------------------------------------------------
     2. Preenche textos simples  (data-txt="caminho.no.conteudo")
     ------------------------------------------------------------------ */
  $$('[data-txt]').forEach(el => {
    const v = pegar(el.dataset.txt);
    if (v != null) el.innerHTML = v;
  });

  /* ------------------------------------------------------------------
     3. Preenche links  (data-link="caminho")  → {rotulo, alvo}
     ------------------------------------------------------------------ */
  $$('[data-link]').forEach(el => {
    const v = pegar(el.dataset.link);
    if (!v) return;
    el.textContent = v.rotulo;
    el.setAttribute('href', v.alvo);
  });

  /* ------------------------------------------------------------------
     4. Preenche listas  (data-lista="caminho")
     ------------------------------------------------------------------ */
  const MOLDES = {
    menu: (i) => `<li><a href="${esc(i.alvo)}">${esc(i.rotulo)}</a></li>`,

    'hero.indicadores': (i) =>
      `<li><strong>${esc(i.valor)}</strong><span>${esc(i.rotulo)}</span></li>`,

    'quemSomos.paragrafos': (p) => `<p>${p}</p>`,

    'quemSomos.pilares': (i) => `
      <article class="pilar">
        <div class="pilar__icone">${icone(i.icone)}</div>
        <h3>${esc(i.titulo)}</h3>
        <p>${esc(i.texto)}</p>
      </article>`,

    'servicos.itens': (i) => `
      <article class="servico">
        <div class="servico__icone">${icone(i.icone)}</div>
        <h3>${esc(i.titulo)}</h3>
        <p>${esc(i.texto)}</p>
        ${(i.marcadores && i.marcadores.length)
          ? `<ul>${i.marcadores.map(m => `<li>${esc(m)}</li>`).join('')}</ul>` : ''}
      </article>`,

    'processo.etapas': (i) => `
      <li class="etapa">
        <div class="etapa__numero">${esc(i.numero)}</div>
        <h3>${esc(i.titulo)}</h3>
        <p>${esc(i.texto)}</p>
      </li>`,

    'clientes.logos': (i) => i.logo
      ? `<div class="cliente"><img src="${esc(i.logo)}" alt="${esc(i.nome)}" loading="lazy"></div>`
      : `<div class="cliente">${esc(i.nome)}</div>`,

    'clientes.depoimentos': (i, n) => `
      <blockquote class="depoimento${n === 0 ? ' ativo' : ''}">
        <span class="depoimento__aspas">&ldquo;</span>
        <p>${esc(i.texto)}</p>
        <footer class="depoimento__autor">
          ${i.foto
            ? `<img class="depoimento__foto" src="${esc(i.foto)}" alt="${esc(i.autor)}" loading="lazy">`
            : `<div class="depoimento__foto">${esc(iniciais(i.autor))}</div>`}
          <div>
            <div class="depoimento__nome">${esc(i.autor)}</div>
            <div class="depoimento__cargo">${esc(i.cargo)}${i.empresa ? ' · ' + esc(i.empresa) : ''}</div>
          </div>
        </footer>
      </blockquote>`
  };

  $$('[data-lista]').forEach(el => {
    const chave = el.dataset.lista;
    const dados = pegar(chave);
    const molde = MOLDES[chave];
    if (!Array.isArray(dados) || !molde) return;
    let itens = dados.map(molde).join('');
    // a esteira de logos precisa da lista duplicada para o giro ser contínuo
    if (chave === 'clientes.logos') itens += itens;
    el.innerHTML = itens;
  });

  /* ------------------------------------------------------------------
     5. Bloco de contato + redes sociais + WhatsApp
     ------------------------------------------------------------------ */
  const C = CONTEUDO.contato;
  const linhaContato = (ic, rotulo, valor, href) => {
    const miolo = `<span class="contato__icone">${icone(ic)}</span>
      <span><span class="contato__rotulo">${esc(rotulo)}</span>
      <span class="contato__valor">${esc(valor)}</span></span>`;
    return `<li>${href ? `<a href="${href}">${miolo}</a>` : `<div>${miolo}</div>`}</li>`;
  };
  const zapUrl = C.whatsapp
    ? `https://wa.me/${C.whatsapp}?text=${encodeURIComponent(C.mensagemWhatsapp || '')}`
    : '';

  const itensContato = $('#contato-itens');
  if (itensContato) {
    itensContato.innerHTML = [
      C.email    ? linhaContato('email', 'E-mail', C.email, 'mailto:' + C.email) : '',
      C.telefone ? linhaContato('whatsapp', 'WhatsApp', C.telefone, zapUrl) : '',
      C.cidade   ? linhaContato('local', 'Onde estamos', C.cidade, '') : '',
      C.horario  ? linhaContato('relogio', 'Atendimento', C.horario, '') : ''
    ].join('');
  }

  const redes = $('#redes');
  if (redes) {
    redes.innerHTML = (C.redes || [])
      .filter(r => r.url)
      .map(r => `<a href="${esc(r.url)}" target="_blank" rel="noopener" aria-label="${esc(r.rede)}">${icone(r.rede)}</a>`)
      .join('');
  }

  const zap = $('#whatsapp');
  if (zap) { if (zapUrl) zap.href = zapUrl; else zap.remove(); }

  /* ------------------------------------------------------------------
     6. Rodapé
     ------------------------------------------------------------------ */
  const rc = $('#rodape-contato');
  if (rc) {
    rc.innerHTML = [
      C.email ? `<a href="mailto:${esc(C.email)}">${esc(C.email)}</a>` : '',
      C.telefone ? `<a href="${zapUrl}" target="_blank" rel="noopener">${esc(C.telefone)}</a>` : '',
      C.cidade ? `<span>${esc(C.cidade)}</span>` : ''
    ].join('');
  }
  const rcnpj = $('#rodape-cnpj');
  if (rcnpj) rcnpj.textContent = CONTEUDO.rodape.cnpj ? 'CNPJ ' + CONTEUDO.rodape.cnpj : '';
  const rdir = $('#rodape-direitos');
  if (rdir) rdir.textContent = `© ${new Date().getFullYear()} ${CONTEUDO.site.nome}. ${CONTEUDO.rodape.direitos}`;

  /* ------------------------------------------------------------------
     7. Menu: compactar, abrir/fechar, seção ativa
     ------------------------------------------------------------------ */
  const cabecalho = $('#cabecalho');
  const nav = $('#nav');
  const burger = $('#hamburguer');
  const aoTopo = $('#ao-topo');
  const barra = $('#progresso');

  burger && burger.addEventListener('click', () => {
    const aberto = nav.classList.toggle('aberto');
    burger.classList.toggle('aberto', aberto);
    burger.setAttribute('aria-expanded', String(aberto));
    document.body.style.overflow = aberto ? 'hidden' : '';
  });
  const fecharMenu = () => {
    nav.classList.remove('aberto');
    burger && burger.classList.remove('aberto');
    burger && burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  nav && nav.addEventListener('click', e => { if (e.target.closest('a')) fecharMenu(); });
  window.addEventListener('keydown', e => { if (e.key === 'Escape') fecharMenu(); });

  const secoes = $$('main section[id]');
  const linksMenu = $$('.nav__lista a');

  function aoRolar() {
    const y = window.scrollY;
    cabecalho.classList.toggle('compacto', y > 24);
    aoTopo && aoTopo.classList.toggle('visivel', y > 600);

    const alturaTotal = document.documentElement.scrollHeight - window.innerHeight;
    if (barra) barra.style.width = (alturaTotal > 0 ? (y / alturaTotal) * 100 : 0) + '%';

    let atual = '';
    secoes.forEach(s => { if (y >= s.offsetTop - 140) atual = s.id; });
    linksMenu.forEach(a => a.classList.toggle('ativo', a.getAttribute('href') === '#' + atual));
  }
  window.addEventListener('scroll', aoRolar, { passive: true });
  aoRolar();

  aoTopo && aoTopo.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }));

  /* ------------------------------------------------------------------
     8. Animação de entrada ao rolar
     ------------------------------------------------------------------ */
  // cartões gerados por JS entram na animação com um leve escalonamento
  $$('.pilares > *, .servicos > *, .etapas > *').forEach((el, n) => {
    el.classList.add('anima');
    el.style.transitionDelay = (n % 4) * 90 + 'ms';
  });

  const alvos = $$('.anima');
  if ('IntersectionObserver' in window) {
    const obs = new IntersectionObserver((entradas) => {
      entradas.forEach(e => {
        if (!e.isIntersecting) return;
        e.target.classList.add('visivel');
        obs.unobserve(e.target);
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });
    alvos.forEach(el => obs.observe(el));
  } else {
    alvos.forEach(el => el.classList.add('visivel'));
  }

  /* ------------------------------------------------------------------
     9. Brilho que segue o cursor nos cartões de serviço
     ------------------------------------------------------------------ */
  $$('.servico').forEach(card => {
    card.addEventListener('pointermove', e => {
      const r = card.getBoundingClientRect();
      card.style.setProperty('--mx', (e.clientX - r.left) + 'px');
      card.style.setProperty('--my', (e.clientY - r.top) + 'px');
    });
  });

  /* ------------------------------------------------------------------
     10. Contadores dos indicadores
     ------------------------------------------------------------------ */
  $$('.indicadores strong').forEach(el => {
    const alvoTxt = el.textContent;
    const num = parseFloat(alvoTxt.replace(/[^\d.,]/g, '').replace(',', '.'));
    if (!isFinite(num) || num === 0) return;
    const prefixo = alvoTxt.slice(0, alvoTxt.search(/[\d]/));
    const sufixo = alvoTxt.slice(alvoTxt.search(/[\d]/)).replace(/[\d.,]/g, '');
    let feito = false;
    const rodar = () => {
      if (feito) return; feito = true;
      const inicio = performance.now(), dur = 1400;
      const passo = (t) => {
        const p = Math.min((t - inicio) / dur, 1);
        const v = Math.round(num * (1 - Math.pow(1 - p, 3)));
        el.textContent = prefixo + v + sufixo;
        if (p < 1) requestAnimationFrame(passo);
      };
      requestAnimationFrame(passo);
    };
    if ('IntersectionObserver' in window) {
      new IntersectionObserver((en, o) => {
        if (en[0].isIntersecting) { rodar(); o.disconnect(); }
      }, { threshold: 0.4 }).observe(el);
    } else rodar();
  });

  /* ------------------------------------------------------------------
     11. Carrossel de depoimentos
     ------------------------------------------------------------------ */
  (function carrossel() {
    const slides = $$('.depoimento');
    const pontos = $('#depo-pontos');
    if (slides.length === 0) return;
    let i = 0, timer = null;

    pontos.innerHTML = slides.map((_, n) =>
      `<button class="ponto${n === 0 ? ' ativo' : ''}" aria-label="Depoimento ${n + 1}"></button>`).join('');
    const bolinhas = $$('.ponto', pontos);

    const ir = (n) => {
      i = (n + slides.length) % slides.length;
      slides.forEach((s, k) => s.classList.toggle('ativo', k === i));
      bolinhas.forEach((b, k) => b.classList.toggle('ativo', k === i));
    };
    const reiniciar = () => { clearInterval(timer); timer = setInterval(() => ir(i + 1), 8000); };

    bolinhas.forEach((b, n) => b.addEventListener('click', () => { ir(n); reiniciar(); }));
    $('#depo-proximo').addEventListener('click', () => { ir(i + 1); reiniciar(); });
    $('#depo-anterior').addEventListener('click', () => { ir(i - 1); reiniciar(); });
    if (slides.length > 1) reiniciar();
  })();

  /* ------------------------------------------------------------------
     12. Formulário de contato
     ------------------------------------------------------------------ */
  (function formulario() {
    const form = $('#formulario');
    if (!form) return;
    const F = C.formulario;
    const aviso = $('#formulario-aviso');

    const sel = $('#f-assunto');
    sel.innerHTML = (F.opcoes || []).map(o => `<option value="${esc(o)}">${esc(o)}</option>`).join('');

    form.addEventListener('submit', async (e) => {
      e.preventDefault();
      aviso.className = 'formulario__aviso';
      aviso.textContent = '';

      let ok = true;
      ['f-nome', 'f-email', 'f-mensagem'].forEach(id => {
        const campo = $('#' + id);
        const valido = campo.checkValidity() && campo.value.trim() !== '';
        campo.parentElement.classList.toggle('campo--erro', !valido);
        if (!valido) ok = false;
      });
      if (!ok) {
        aviso.classList.add('erro');
        aviso.textContent = 'Preencha nome, e-mail e mensagem para continuar.';
        return;
      }

      const d = Object.fromEntries(new FormData(form).entries());

      if (F.modo === 'endpoint' && F.endpoint) {
        try {
          const r = await fetch(F.endpoint, {
            method: 'POST',
            headers: { Accept: 'application/json' },
            body: new FormData(form)
          });
          if (!r.ok) throw new Error('falha');
          form.reset();
          aviso.textContent = 'Mensagem enviada! Responderemos em breve.';
        } catch (err) {
          aviso.classList.add('erro');
          aviso.textContent = 'Não foi possível enviar agora. Tente pelo WhatsApp ou e-mail.';
        }
        return;
      }

      // modo padrão: abre o programa de e-mail do visitante
      const corpo =
        `Nome: ${d.nome}\n` +
        `E-mail: ${d.email}\n` +
        `Empresa: ${d.empresa || '-'}\n` +
        `Assunto: ${d.assunto}\n\n` +
        `${d.mensagem}\n`;
      window.location.href =
        `mailto:${C.email}?subject=${encodeURIComponent(F.assunto)}&body=${encodeURIComponent(corpo)}`;
      aviso.textContent = F.sucesso;
    });
  })();

  /* ------------------------------------------------------------------
     13. Partículas do fundo
     ------------------------------------------------------------------ */
  (function particulas() {
    const cv = $('#particulas');
    if (!cv || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const ctx = cv.getContext('2d');
    let p = [], w = 0, h = 0;

    function medir() {
      w = cv.width = window.innerWidth;
      h = cv.height = window.innerHeight;
      const qtd = Math.min(70, Math.round((w * h) / 26000));
      p = Array.from({ length: qtd }, () => ({
        x: Math.random() * w, y: Math.random() * h,
        vx: (Math.random() - .5) * .22, vy: (Math.random() - .5) * .22,
        r: Math.random() * 1.5 + .5
      }));
    }
    function desenhar() {
      ctx.clearRect(0, 0, w, h);
      for (const a of p) {
        a.x += a.vx; a.y += a.vy;
        if (a.x < 0 || a.x > w) a.vx *= -1;
        if (a.y < 0 || a.y > h) a.vy *= -1;
        ctx.beginPath();
        ctx.arc(a.x, a.y, a.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(120,190,240,.45)';
        ctx.fill();
      }
      for (let i = 0; i < p.length; i++) {
        for (let j = i + 1; j < p.length; j++) {
          const dx = p[i].x - p[j].x, dy = p[i].y - p[j].y;
          const d2 = dx * dx + dy * dy;
          if (d2 < 19000) {
            ctx.beginPath();
            ctx.moveTo(p[i].x, p[i].y); ctx.lineTo(p[j].x, p[j].y);
            ctx.strokeStyle = `rgba(90,165,225,${(1 - d2 / 19000) * .16})`;
            ctx.lineWidth = 1; ctx.stroke();
          }
        }
      }
      requestAnimationFrame(desenhar);
    }
    medir();
    window.addEventListener('resize', medir);
    desenhar();
  })();

})();
