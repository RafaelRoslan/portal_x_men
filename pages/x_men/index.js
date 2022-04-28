//conteúdo X-Mens

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div class="card text-center">
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
                <a class="nav-link active" aria-current="true" href="#x-men">
                    <img src="imagens/Personagens_X-Men_img2.jpg" width="300" height="150">
                    <h2>X-Men</h2>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#antagonistas">
                    <img src="imagens/Personagens_Antagonista_img2.jpg" width="300" height="150">
                    <h2>Antagonista</h2>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#novos-mutantes">
                    <img src="imagens/Personagens_Novos_Mutantes_img2.jpg" width="300" height="150">
                    <h2>Novos Mutantes</h2>
                </a>
            </li>
        </ul>
    </div>
    <div class="card-body">
        <h5 class="card-title">Special title treatment</h5>
        <p class="card-text">X-men teste</p>
        <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
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