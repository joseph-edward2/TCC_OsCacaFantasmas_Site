/* ════════════════════════════════════════
   Aguarda o HTML carregar completamente
════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {


  /* ── NAVBAR: transparente com hero, sólida sem hero ── */
  const navbar  = document.querySelector('#navbar');
  const temHero = document.querySelector('.hero');

  if (!temHero) {
    // Páginas sem hero (login, cadastro, notícias etc.) — navbar sempre sólida
    navbar.classList.add('solida');
  } else {
    // index — navbar transparente que escurece ao rolar
    function atualizarNavbar () {
      navbar.classList.toggle('scrolled', window.scrollY > 30);
    }
    window.addEventListener('scroll', atualizarNavbar);
    atualizarNavbar();
  }


  /* ── MENU DE USUÁRIO: abre/fecha ao clicar no ícone ── */
  const userBtn      = document.querySelector('#userBtn');
  const userDropdown = document.querySelector('#userDropdown');

  userBtn.addEventListener('click', function (e) {
    e.stopPropagation();
    const aberto = userDropdown.classList.toggle('visivel');
    userBtn.classList.toggle('ativo', aberto);
    userBtn.setAttribute('aria-expanded', aberto);
  });

  document.addEventListener('click', function () {
    userDropdown.classList.remove('visivel');
    userBtn.classList.remove('ativo');
    userBtn.setAttribute('aria-expanded', 'false');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      userDropdown.classList.remove('visivel');
      userBtn.classList.remove('ativo');
      userBtn.setAttribute('aria-expanded', 'false');
    }
  });


  /* ── DOTS: troca o dot ativo ao clicar ── */
  const dots = document.querySelectorAll('.dot');

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      dots.forEach(function (d) { d.classList.remove('active'); });
      dot.classList.add('active');
    });

    dot.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dot.click();
      }
    });
  });


  /* ── SCROLL REVEAL: anima elementos ao entrar na tela ── */
  const elementosAnimados = document.querySelectorAll(
    '.card, .stat-card, .sobre-texto, .lore-quote'
  );

  elementosAnimados.forEach(function (el) {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  });

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  elementosAnimados.forEach(function (el) { observer.observe(el); });


  /* ── PARALAX: apenas nas páginas com hero ── */
  const heroBg = document.querySelector('.hero-bg');

  if (heroBg) {
    let scrollPendente = false;

    function aplicarParalax () {
      const offset = window.scrollY * 0.4;
      heroBg.style.transform = 'translateY(' + offset + 'px) scale(1.09)';
      scrollPendente = false;
    }

    window.addEventListener('scroll', function () {
      if (!scrollPendente) {
        scrollPendente = true;
        window.requestAnimationFrame(aplicarParalax);
      }
    });
  }


  /* ── FILTROS DE NOTÍCIAS: troca o botão ativo ao clicar ── */
  const filtros = document.querySelectorAll('.filtro-btn');

  filtros.forEach(function (btn) {
    btn.addEventListener('click', function () {
      filtros.forEach(function (b) { b.classList.remove('ativo'); });
      btn.classList.add('ativo');
    });
  });


  /* ── LINKS ÂNCORA: scroll suave compensando a navbar ── */
  const linksAncora = document.querySelectorAll('a[href^="#"]');

  linksAncora.forEach(function (link) {
    link.addEventListener('click', function (e) {
      const alvo = link.getAttribute('href');
      if (alvo === '#') return;

      const secao = document.querySelector(alvo);
      if (secao) {
        e.preventDefault();
        const posicao = secao.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top: posicao, behavior: 'smooth' });
      }
    });
  });


  console.log('🔥 CURUPIRA — Scripts carregados!');

}); // fim DOMContentLoaded
