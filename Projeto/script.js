/* ════════════════════════════════════════
   Aguarda o HTML carregar completamente
════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', function () {


  /* ── NAVBAR: efeito ao rolar ── */
  const navbar = document.querySelector('#navbar');

  function atualizarNavbar () {
    if (window.scrollY > 30) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', atualizarNavbar);
  atualizarNavbar(); // roda uma vez ao carregar


  /* ── DOTS: troca o dot ativo ao clicar ── */
  const dots = document.querySelectorAll('.dot');

  dots.forEach(function (dot) {
    dot.addEventListener('click', function () {
      dots.forEach(function (d) { d.classList.remove('active'); });
      dot.classList.add('active');
    });

    // Suporte a teclado (acessibilidade)
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

  // Estado inicial: invisível e deslocado para baixo
  elementosAnimados.forEach(function (el) {
    el.style.opacity    = '0';
    el.style.transform  = 'translateY(30px)';
    el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
  });

  // Observer: detecta quando o elemento entra na área visível
  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.style.opacity   = '1';
          entry.target.style.transform = 'translateY(0)';
          observer.unobserve(entry.target); // anima só uma vez
        }
      });
    },
    { threshold: 0.12 }
  );

  elementosAnimados.forEach(function (el) { observer.observe(el); });


  /* ── PARALAX: fundo do hero se move mais devagar que o scroll ── */
  const heroBg = document.querySelector('.hero-bg');
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
