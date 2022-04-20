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
        <ul>
            <li>
                <a href="">
                    <img src="" alt="" width="500" height="300">
                    <p>X-Men</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" width="500" height="300">
                    <p>Antagonistas</p>
                </a>
            </li>
            <li>
                <a href="">
                    <img src="" alt="" width="500" height="300">
                    <p> Novos Mutantes</p>
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