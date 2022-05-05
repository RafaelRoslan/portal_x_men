//conteúdo Personagens

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div>
            <article class="col-12 col-sm-12 col-md-12 col-lg-12">
                <h1 class="text-center">Personagens</h1>
                <nav class="nav justify-content-center p-0">

                    <ul class="card-group justify-content-center p-0">
                        <li class="nav-item p-3">
                            <a class="nav-link card testepersonagem" href="#x-men">
                                <h5 class="card-title text-center">X-Men</h5>
                                <img src="./imagens/Personagens_X-Men.jpg" class="card-img-top" alt="Imagem da primeira equipe dos X-Men, da esquerda para direita: Anjo, Jean Grey, Ciclope, Fera e Homem de Gelo" width="300" height="400">



                            </a>
                        </li>
                        <li class="nav-item p-3 ">

                            <a class="nav-link card testepersonagem" href="#antagonistas">
                                <h5 class="card-title text-center">Antagonista</h5>
                                <img src="./imagens/Personagens_Antagonista.jpg" class="card-img-top" alt="Imagem do Personagem Apocalipse" width="300" height="400">



                            </a>
                        </li>
                        <li class="nav-item p-3">

                            <a class="nav-link card testepersonagem" href="#novos-mutantes">
                                <h5 class="card-title text-center">Novos Mutantes</h5>
                                <img src="./imagens/Personagens_Novos_Mutantes.jpg" class="card-img-top" alt="Imagem dos Novos Mutantes, da esquerda para direita: Magia, Mancha Solar, Miragem, Míssil e Lupina" width="300" height="400">



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