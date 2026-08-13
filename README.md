# Aqui Tem Saída

Site informativo sobre conscientização e combate à violência doméstica, desenvolvido como
atividade de extensão do curso de Formação Pedagógica em Informática (UNIASSELVI),
vinculado ao **ODS 16 — Paz, justiça e instituições eficazes**.

HTML, CSS e JavaScript puros. Sem frameworks, sem build, sem dependências. Basta abrir o
`index.html` no navegador.

---

## Estrutura

```
site-violencia-domestica/
├── index.html             Início — cinco formas de violência, ciclo, quem é atingido
├── o-que-e.html           Definição legal, mitos e verdades, sinais de alerta
├── direitos.html          Lei Maria da Penha, medidas protetivas, Lei 14.994/2024
├── denunciar.html         Canais, passo a passo, plano de segurança, cartão de bolso
├── rede-de-apoio.html     CRAS, CREAS, DEAM, Defensoria, saúde, serviços locais
├── escolas.html           Sinais em crianças, fluxo institucional, atividades pedagógicas
├── sobre.html             O projeto, metodologia, referências, contato institucional
└── assets/
    ├── css/estilo.css     Folha de estilos única, com tokens no :root
    └── js/principal.js    Saída rápida, menu, revelação ao rolar, impressão
```

---

## Recursos de segurança (não remova)

| Recurso | Onde está | O que faz |
|---|---|---|
| **Saída rápida** | Barra fixa no topo + tecla `Esc` | Abre um site neutro em nova aba e **substitui** a página atual no histórico, para que o botão "voltar" não retorne ao site |
| **Barra de emergência** | Rodapé fixo no celular | Mantém 190 e 180 a um toque em qualquer página |
| **Sem rastreamento** | Todo o site | Nenhum cookie, nenhum script de análise, nenhum dado pessoal coletado |
| **Aviso no formulário** | `sobre.html` | Deixa explícito que o canal não recebe denúncias e redireciona para 180/190 |
| **Orientações de navegação segura** | `denunciar.html#navegacao-segura` | Como usar janela anônima, limpar histórico e revisar o celular |

O site do agressor de plantão é o histórico do navegador. Se você alterar o layout,
mantenha o botão de saída rápida visível **em todas as páginas**.

---

## O que personalizar antes de entregar

1. **Nome do projeto** — "Aqui Tem Saída" aparece no cabeçalho, no rodapé e no `<title>`.
   Se a instituição parceira preferir outro nome, troque em todas as páginas (Ctrl+Shift+F no VS Code).
2. **Serviços locais** — `rede-de-apoio.html`, seção "Onde procurar aqui perto". A tabela está com
   "Preencher". Levante endereços e telefones com a instituição parceira e **ligue para confirmar cada um**
   antes de publicar. Telefone errado em site de violência doméstica é falha grave.
3. **E-mail de contato** — `sobre.html`, atributo `data-email="contato@exemplo.org"` no `<form>`.
4. **Logotipo da instituição parceira** — pode entrar ao lado da marca, no cabeçalho.

---

## Como publicar de graça

### GitHub Pages — recomendado

Funciona direto do VS Code, é gratuito para sempre e gera um endereço público.

1. Crie uma conta em [github.com](https://github.com) e um repositório público chamado, por exemplo, `aqui-tem-saida`.
2. No VS Code: `Ctrl+Shift+P` → **Git: Clone** → cole a URL do repositório.
3. Copie os arquivos deste projeto para dentro da pasta clonada.
4. Aba **Source Control** (`Ctrl+Shift+G`) → escreva uma mensagem → **Commit** → **Sync Changes**.
5. No GitHub: **Settings** → **Pages** → em *Source*, escolha **Deploy from a branch**, branch `main`, pasta `/ (root)` → **Save**.
6. Em poucos minutos o site estará em `https://seu-usuario.github.io/aqui-tem-saida/`.

Se quiser o endereço mais curto `https://seu-usuario.github.io`, nomeie o repositório exatamente
como `seu-usuario.github.io`.

### Netlify Drop — mais rápido, sem Git

Acesse [app.netlify.com/drop](https://app.netlify.com/drop) e arraste a pasta do projeto.
Sai no ar em segundos, com endereço `nome-escolhido.netlify.app`.

### Sobre o WordPress

O plano gratuito do **WordPress.com** não permite instalar tema próprio nem enviar arquivos HTML —
então este código não sobe lá como está. Você teria de recriar as páginas no editor deles, perdendo
o botão de saída rápida e a barra de emergência, que são justamente os diferenciais do projeto.

O **WordPress.org** (auto-hospedado, aquele que o PDF do projeto sugere instalar com XAMPP) aceita
tudo isso, mas roda só na sua máquina — a instituição parceira não conseguiria acessar. Para ficar
no ar de verdade, precisaria de hospedagem paga.

**Sugestão:** publique no GitHub Pages, que atende à exigência de entregar uma solução acessível ao
público, e use o XAMPP + WordPress local apenas se o professor cobrar explicitamente essa ferramenta
na etapa 6 do cronograma. As duas coisas podem constar do relatório: a comparação entre CMS e
desenvolvimento próprio, com a justificativa da escolha, é conteúdo excelente para o Paper acadêmico.

---

## Rodando localmente no VS Code

Abra a pasta no VS Code e instale a extensão **Live Server** (Ritwick Dey).
Clique com o botão direito em `index.html` → **Open with Live Server**.
O navegador recarrega sozinho a cada alteração salva.

---

## Checklist de verificação e validação (etapas 7 e 8 do cronograma)

- [ ] Todas as páginas abrem e o menu funciona no celular
- [ ] Botão "Sair rápido" funciona em todas as páginas
- [ ] Tecla `Esc` dispara a saída rápida
- [ ] Links `tel:` abrem o discador no celular
- [ ] Cartão de bolso imprime corretamente (Ctrl+P em `denunciar.html`)
- [ ] Nenhum telefone ou endereço local ficou como "Preencher"
- [ ] Todos os telefones locais foram confirmados por ligação
- [ ] Navegação por teclado (`Tab`) mostra foco visível em todos os links
- [ ] Testado em Chrome, Firefox e no navegador do celular
- [ ] Testado com conexão lenta (DevTools → Network → Slow 3G)

---

## Aviso

O conteúdo deste site é educativo e foi redigido com base na legislação brasileira e em fontes
oficiais. Não substitui orientação jurídica, atendimento psicológico ou socorro policial.
Em situação de emergência, ligue **190**.

Conteúdo de uso livre para fins educativos e de interesse público.
