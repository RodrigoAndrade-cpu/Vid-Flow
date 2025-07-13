📺 VidFlow
é uma plataforma web inspirada no layout do YouTube. O projeto consome dados de uma API local e exibe vídeos categorizados com opções de busca e filtro.

🚀 Funcionalidades
. Exibição de vídeos via iframe.

. Filtro de vídeos por categoria.

. Campo de busca por título.

. Interface responsiva com HTML, CSS Flexbox e JavaScript.

. Alternância de tema (botão switch no topo - funcionalidade opcional).

🧠 Como funciona

.Ao carregar a página, script.js faz uma requisição GET para http://localhost:3000/videos.
.Os vídeos retornados são exibidos em uma lista no DOM (ul.videos__container).
.Cada vídeo possui:

  . Título

  . URL (para o iframe)

  . Imagem (representando o canal)

  . Descrição

  . Categoria (usada nos filtros)

🔍 Filtros

. Por texto: digite no campo de busca para filtrar por título.
. Por categoria: clique em uma das categorias na barra horizontal (ex: “Podcasts”, “Mobile”, etc).

⚙️ Pré-requisitos
Para rodar localmente:

1. Servidor local de vídeos:

  . Você precisa de um servidor rodando em http://localhost:3000/videos.
  . Exemplo usando json-serve

2. Abrir o index.html em um navegador.

📦 Tecnologias Utilizadas

. HTML5

. CSS3 (com Flexbox)

. JavaScript (Vanilla)

. Google Fonts (Roboto)

. json-server (para API fake)

📝 Autor

Rodrigo César Andrade de Oliveira  
