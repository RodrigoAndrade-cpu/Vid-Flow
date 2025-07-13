const containerVideos = document.querySelector('.videos__container');

async function buscasEMostrarvideos() {
    try {
        const busca = await fetch("http://localhost:3000/videos");
        const videos = await busca.json();

        videos.forEach((video) => {
            if (!video.categoria || video.categoria.trim() === "") {
                console.warn(`Vídeo "${video.titulo}" sem categoria. Ignorando.`);
                return; // Pula esse vídeo
            }

            containerVideos.innerHTML += `
        <li class="videos__item">
            <iframe src="${video.url}" title="${video.titulo}" frameborder="0" allowfullscreen></iframe>
            <div class="descricao-video">
                <img class="img-canal" src="${video.imagem}" alt="Logo do canal">
                <h3 class="titulo-video">${video.titulo}</h3>
                <p class="titulo-canal">${video.descricao}</p>
                <p class="categoria" hidden>${video.categoria}</p>
            </div>
        </li>
    `;
        });


        // Importante: Só adiciona os eventos depois que os vídeos estiverem no DOM
        adicionarEventosDeFiltro();

    } catch (error) {
        containerVideos.innerHTML = `<p> Houve um erro ao carregar os vídeos: ${error}</p>`;
    }
}

buscasEMostrarvideos();

function adicionarEventosDeFiltro() {
    const barraDePesquisa = document.querySelector(".pesquisar__input");

    // Verifica se a barra existe
    if (barraDePesquisa) {
        barraDePesquisa.addEventListener("input", filtrarPesquisa);
    }

    const botoesCategoria = document.querySelectorAll('.superior__item');
    botoesCategoria.forEach((botao) => {
        let nomeCategoria = botao.getAttribute('nome');
        botao.addEventListener('click', () => filtrarPorCategoria(nomeCategoria));
    });
}

function filtrarPesquisa() {
    const videos = document.querySelectorAll(".videos__item");
    const valorFiltro = document.querySelector(".pesquisar__input").value.toLowerCase();

    console.log("Valor digitado:", valorFiltro);
    console.log("Vídeos encontrados:", videos.length);

    videos.forEach(video => {
        const titulo = video.querySelector(".titulo-video").textContent.toLowerCase();
        video.style.display = titulo.includes(valorFiltro) ? "block" : "none";
    });
}

const botoesCategoria = document.querySelectorAll('.superior__item');

botoesCategoria.forEach((botao) => {
    let nomeCategoria = botao.getAttribute('name');  // pega o atributo name de cada botão
    botao.addEventListener('click', () => filtrarPorCategoria(nomeCategoria));
});


function filtrarPorCategoria(filtro) {
    const videos = document.querySelectorAll('.videos__item');
    const valorFiltro = filtro.toLowerCase();

    videos.forEach(video => {
        const categoriaElemento = video.querySelector('.categoria');

        if (categoriaElemento) {
            const categoria = categoriaElemento.textContent.toLowerCase();

            if (valorFiltro === 'tudo' || categoria.includes(valorFiltro)) {
                video.style.display = 'block';
            } else {
                video.style.display = 'none';
            }
        } else {
            video.style.display = 'none';
        }
    });
}



