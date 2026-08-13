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

  /* ---------- 5. Imprimir cartão de bolso ---------- */
  document.querySelectorAll("[data-imprimir]").forEach(function (botao) {
    botao.addEventListener("click", function () { window.print(); });
  });

  /* ---------- 6. Formulário de parcerias ----------
     Sem back-end: monta um e-mail com os dados preenchidos.
     Troque por um serviço (Formspree, Google Forms) se preferir. */
  var formulario = document.querySelector("[data-formulario-parceria]");

  if (formulario) {
    formulario.addEventListener("submit", function (evento) {
      evento.preventDefault();

      var dados = new FormData(formulario);
      var destino = formulario.getAttribute("data-email") || "contato@exemplo.org";
      var assunto = "Contato institucional pelo site Aqui Tem Saída";
      var corpo =
        "Nome: " + (dados.get("nome") || "") + "\n" +
        "Instituição: " + (dados.get("instituicao") || "") + "\n" +
        "E-mail: " + (dados.get("email") || "") + "\n" +
        "Cidade/UF: " + (dados.get("cidade") || "") + "\n" +
        "Assunto: " + (dados.get("assunto") || "") + "\n\n" +
        "Mensagem:\n" + (dados.get("mensagem") || "");

      window.location.href =
        "mailto:" + destino +
        "?subject=" + encodeURIComponent(assunto) +
        "&body=" + encodeURIComponent(corpo);

      var retorno = formulario.querySelector("[data-retorno]");
      if (retorno) {
        retorno.hidden = false;
        retorno.textContent = "Seu programa de e-mail foi aberto com a mensagem preenchida. Confira e envie para concluir.";
      }
    });
  }
})();
