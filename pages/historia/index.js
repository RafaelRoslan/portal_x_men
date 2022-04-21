//conteúdo História

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default ()=>{

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');
     
    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div class="row mt-3 d-flex align-content-center justify-content-center">
        <nav class="col-10 p-0">
        <ul class="nav nav-tabs justify-content-center gap-5">
            <li class="nav-item">
            <a class="nav-link" href="#historia">História</a>
            </li>
            <li class="nav-item">
            <a class="nav-link" href="#origem">Origem</a>
            </li>
        </ul>
        </nav>

        <div class="row mt-5 text-justify gap-3 gap-md-0">
        <article class="col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 order-1 order-md-0">
            <h2 class="text-center">História</h2>
            <p>A história começa quando Professor Charles Francis Xavier com sua fortuna, transforma sua mansão na
            Escola para Jovens Superdotados do Professor Charles Xavier, uma fachada para treinar mutantes, humanos
            que, como resultado de um súbito salto evolucionário, nasceram com habilidades super-humanas latentes, que
            geralmente se manifestam na puberdade.</p>
            <p>Assim surge os X-Men liderados pelo próprio professor Xavier que não era somente uma pessoa rica, mas
            também um mutante, um telepata e “a mente mais poderosa do planeta”. Por outro lado, Erik Magnus
            Lehnsherr, também conhecido como Magneto, um mutante que consegue controlar qualquer tipo de metal, forma
            um grupo de guerrilha, a Irmandade dos Mutantes.</p>
            <p>A partir disso, uma sucessão de acontecimentos envolvendo as duas equipes e suas ideologias ocorrem. De
            um lado, os X-Men com o ideal de convivência pacífica entre os humanos e os mutantes, de outro A Irmandade
            com o objetivo de tomar o poder à força para que os mutantes tenham seu lugar assegurado.</p>
        </article>

        <aside class="p-md-0 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 order-0 mt-md-3 order-md-2">
            <div>
            <img src="./imagens/brotherhood.png" class="img-fluid" alt="">
            </div>
        </aside>

        <aside class="p-md-0 col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6 order-2 mt-md-3 order-md-1">
            <div>
            <img src="./imagens/x_men.png" class="img-fluid" alt="" >
            </div>
        </aside>
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
