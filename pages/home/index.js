//conteúdo Home

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
   
    <div>
            <div class="row mt-3 d-flex align-content-center justify-content-center">
                <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 col-xxl-8">

                    <div class="row align-items-center justify-content-center">

                        <article class="col-10 col-sm-12 col-md-10 col-lg-6 order-lg-1 gap-3">
                            <h1 class="text-center mb-3">X-Men</h1>
                            <p>Percebendo que os mutantes eram o próximo passo na evolução humana, o professor Charles Xavier reuniu adolescentes talentosos para serem sua primeira turma de alunos. Seu objetivo é proteger e educar a próxima geração de homo
                                superior, enquanto persegue um sonho de harmonia.</p>
                        </article>

                        <aside class="col-10 col-sm-10 col-md-10 col-lg-5 order-lg-0">
                            <img src="imagens/teste.png" class="img-fluid" alt="Imagem de alguns x-men, da esquerda para direita: Gambit, Jean Grey, Wolverine, Tempestade, Ciclope e Vampira">
                        </aside>
                    </div>
                </div>
            </div>

            <article class="row justify-content-evenly cardajuste">
                <!-- <article class="container my-5"> -->
                <h1 class="text-center pt-5">Últimas Notícias</h1>
                <div class="row justify-content-center">
                    <section class="card m-2 cardlargura">
                        <a href="https://olhardigital.com.br/2022/04/07/cinema-e-streaming/hq-da-marvel-sugere-que-jesus-poderia-ter-sido-um-mutante-dos-x-men/" class="limpar">
                            <img src="imagens/Noticia_1.jpg" class="img-fluid" width="300" height="150" alt="Imagem da HQ Immortal X-Men">
                            <div class="card-body mt-2">
                                <h5>HQ da Marvel sugere que Jesus poderia ter sido um mutante</h5>

                            </div>
                        </a>

                    </section>
                    <section class="card m-2 cardlargura">
                        <a href="https://canaltech.com.br/quadrinhos/x-men-e-eternos-envolvem-os-vingadores-em-novas-saga-epica-da-marvel-213864/" class="limpar">
                            <img src="imagens/noticia_2.jpeg" class="img-fluid" width="300" height="150" alt="Imagem dos vingadores, eternos e os X-Men">
                            <div class="card-body mt-2">
                                <h5>X-Men e Eternos envolvem os Vingadores em nova saga</h5>

                            </div>
                        </a>

                    </section>
                    <section class="card m-2 cardlargura">
                        <a href="https://www.omelete.com.br/marvel-cinema/x-men-97-mcu-roteirista-comenta" class="limpar">
                            <img src="imagens/noticia_3.jpg" class="img-fluid" width="300" height="150" alt="Imagem do Wolverine olhando para o quadro do X-men 97">
                            <div class="card-body mt-2">
                                <h5>X-Men 97 - Roteirista despista sobre entrada da série no MCU</h5>

                            </div>
                        </a>

                    </section>
                    <section class="card m-2 cardlargura">
                        <a href="https://olhardigital.com.br/2022/04/07/cinema-e-streaming/hq-da-marvel-sugere-que-jesus-poderia-ter-sido-um-mutante-dos-x-men/" class="limpar">
                            <img src="imagens/noticia_4.jpg" class="img-fluid" width="300" height="150" alt="Imagem da cena do Filme X-Men: Apocalypse">
                            <div class="card-body mt-2">
                                <h5>Oscar Isaac não se arrepende de interpretar Apocalypse em X-Men</h5>

                            </div>
                        </a>

                    </section>
                </div>
                <div class="row justify-content-center align-items-center">
                    <section class="col-10 col-sm-10 col-md-10 col-lg-6 bg-dark bg-opacity-25 rounded-2 mt-3 p-2 text-center">
                        <h4 class="m-0"><a href="https://www.google.com/search?q=x+men+noticias" class="limpar">Leia
                                mais</a></h4>
                    </section>
                </div>

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