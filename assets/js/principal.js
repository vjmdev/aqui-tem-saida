/* =========================================================
   Aqui Tem Saída — script principal
   Recursos: saída rápida, menu móvel, revelação ao rolar,
   ano automático no rodapé e impressão do cartão de bolso.
   ========================================================= */
(function () {
  "use strict";

  /* ---------- 1. Saída rápida ----------
     Abre um site neutro em nova aba e SUBSTITUI a página atual
     no histórico, para que o botão "voltar" não retorne aqui. */

  var SITE_NEUTRO_NOVA_ABA = "https://www.google.com.br";
  var SITE_NEUTRO_ATUAL = "https://www.google.com.br/search?q=previs%C3%A3o+do+tempo";

  function sairRapido() {
    try {
      window.open(SITE_NEUTRO_NOVA_ABA, "_blank");
    } catch (e) {
      /* bloqueio de pop-up: segue para a substituição da página */
    }
    window.location.replace(SITE_NEUTRO_ATUAL);
  }

  document.querySelectorAll("[data-saida-rapida]").forEach(function (botao) {
    botao.addEventListener("click", sairRapido);
  });

  document.addEventListener("keydown", function (evento) {
    if (evento.key === "Escape") {
      sairRapido();
    }
  });

  /* ---------- 1b. Navegação sem empilhar histórico ----------
     Cada link interno SUBSTITUI a entrada atual do histórico em vez de
     criar uma nova. Assim, por mais páginas que a pessoa visite, a aba
     mantém uma única entrada — e o botão "voltar" leva direto para o que
     havia antes do site, não para a página anterior daqui.

     Efeito colateral proposital: o botão "voltar" não funciona para
     navegar dentro do site. O menu está em todas as páginas. */

  document.addEventListener("click", function (evento) {
    var link = evento.target.closest ? evento.target.closest("a") : null;
    if (!link) return;

    var href = link.getAttribute("href");
    if (!href) return;

    /* Ignora âncoras, telefones, e-mails e links que abrem em nova aba */
    if (href.charAt(0) === "#") return;
    if (href.indexOf("tel:") === 0 || href.indexOf("mailto:") === 0) return;
    if (link.target && link.target !== "" && link.target !== "_self") return;

    /* Ignora cliques com Ctrl, Shift, Alt ou botão do meio */
    if (evento.ctrlKey || evento.metaKey || evento.shiftKey || evento.altKey) return;

    var destino;
    try {
      destino = new URL(link.href, window.location.href);
    } catch (e) {
      return;
    }

    /* Só intercepta links do próprio site */
    if (destino.origin !== window.location.origin) return;

    evento.preventDefault();
    window.location.replace(destino.href);
  });

  /* ---------- 2. Menu móvel ---------- */
  var botaoMenu = document.querySelector("[data-menu-botao]");
  var navegacao = document.querySelector("[data-navegacao]");

  if (botaoMenu && navegacao) {
    botaoMenu.addEventListener("click", function () {
      var aberto = navegacao.classList.toggle("aberta");
      botaoMenu.setAttribute("aria-expanded", String(aberto));
    });

    navegacao.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", function () {
        navegacao.classList.remove("aberta");
        botaoMenu.setAttribute("aria-expanded", "false");
      });
    });
  }

  /* ---------- 3. Revelação ao rolar ---------- */
  var alvos = document.querySelectorAll(".revelar");
  var movimentoReduzido = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!alvos.length) {
    /* nada a revelar */
  } else if (movimentoReduzido || !("IntersectionObserver" in window)) {
    alvos.forEach(function (alvo) { alvo.classList.add("visivel"); });
  } else {
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visivel");
          observador.unobserve(entrada.target);
        }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });

    alvos.forEach(function (alvo) { observador.observe(alvo); });
  }

  /* ---------- 4. Ano automático ---------- */
  document.querySelectorAll("[data-ano]").forEach(function (elemento) {
    elemento.textContent = String(new Date().getFullYear());
  });

  /* ---------- 6. Imprimir cartão de bolso ---------- */
  document.querySelectorAll("[data-imprimir]").forEach(function (botao) {
    botao.addEventListener("click", function () { window.print(); });
  });
})();
