//conteúdo Personagens

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div>
            <article>
                <h1>Personagens</h1>
                <nav>

                    <ul class="card-group">
                        <li>
                            <a class="nav-link card" href="#x-men">
                                <img src="./imagens/Personagens_X-Men.jpg" class="card-img-top" alt="..." width="500"
                                    height="600">
                                <div class="card-body">
                                    <h5 class="card-title">X-Men</h5>
                                </div>
                            </a>
                        </li>
                        <li>

                            <a class="nav-link card" href="#antagonistas">
                                <img src="./imagens/Personagens_Antagonista.jpg" class="card-img-top" alt="..."
                                    width="500" height="600">
                                <div class="card-body">
                                    <h5 class="card-title">Antagonista</h5>
                                </div>
                            </a>
                        </li>
                        <li>

                            <a class="nav-link card" href="#novos-mutantes">
                                <img src="./imagens/Personagens_Novos_Mutantes.jpg" class="card-img-top" alt="..."
                                    width="500" height="600">
                                <div class="card-body">
                                    <h5 class="card-title">Novos Mutantes</h5>
                                </div>
                            </a>
                        </li>
                    </ul>

                </nav>
            </article>
        </div>
    
    `;

    //adição do template ao container - aqui nós colocamos todo o conteúdo dentro da div.
    container.innerHTML = template;

    //Portanto o retorno dessa função será algo assim:
    //<div>
    //  conteúdo do site
    //</div>
    return container;
}