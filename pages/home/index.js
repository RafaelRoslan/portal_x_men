//conteúdo Home

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
        <div>
        <div class="container">
            <img class="w-100" src="imagens/home_xmen.jpeg" alt="">
            <div class="row align-items-center justify-content-center">

                <article class="col-10 col-sm-12 col-md-10 col-lg-6 order-lg-1 gap-3">
                    <h1 class="text-center mb-3">X-Men</h1>
                    <p>Percebendo que os mutantes eram o próximo passo na evolução humana, o professor Charles Xavier reuniu adolescentes talentosos para serem sua primeira turma de alunos. Seu objetivo é proteger e educar a próxima geração de homo superior,
                        enquanto persegue um sonho de harmonia.</p>
                </article>

                <aside class="col-10 col-sm-10 col-md-10 col-lg-5 order-lg-0">
                    <img src="imagens/teste.png" class="img-fluid" alt="graficos de casos registrados na Itália, desde a abril de 2020 até novembro de 2021.">
                </aside>
            </div>
        </div>
        <section class="row justify-content-evenly">
            <article class="container my-5">
                <h1>Últimas Notícias</h1>
                <div class="row justify-content-center align-items-center ">
                    <section class="card m-2 cardlargura">
                        <img src="imagens/imagem_meramente_ilustrativa" alt="">
                        <div class="card-body mt-2">
                            <h5>Titulo</h5>
                            <p>Voluptates, praesentium harum. Commodi eligendi saepe similique pariatur beatae quis iste magnam quidem praesentium tempora. Quam modi beatae pariatur accusantium, adipisci molestias nobis quod voluptas voluptatum dolor,
                                consequuntur sit animi?
                            </p>
                        </div>
                    </section>
                    <section class="card m-2 cardlargura">
                        <img src="imagens/imagem_meramente_ilustrativa" alt="">
                        <div class="card-body mt-2">
                            <h5>Titulo</h5>
                            <p>Voluptates, praesentium harum. Commodi eligendi saepe similique pariatur beatae quis iste magnam quidem praesentium tempora. Quam modi beatae pariatur accusantium, adipisci molestias nobis quod voluptas voluptatum dolor,
                                consequuntur sit animi?
                            </p>
                        </div>
                    </section>
                    <section class="card m-2 cardlargura">
                        <img src="imagens/imagem_meramente_ilustrativa" alt="">
                        <div class="card-body mt-2">
                            <h5>Titulo</h5>
                            <p>Voluptates, praesentium harum. Commodi eligendi saepe similique pariatur beatae quis iste magnam quidem praesentium tempora. Quam modi beatae pariatur accusantium, adipisci molestias nobis quod voluptas voluptatum dolor,
                                consequuntur sit animi?
                            </p>
                        </div>
                    </section>
                    <section class="card m-2 cardlargura">
                        <img src="imagens/imagem_meramente_ilustrativa" alt="">
                        <div class="card-body mt-2">
                            <h5>Titulo</h5>
                            <p>Voluptates, praesentium harum. Commodi eligendi saepe similique pariatur beatae quis iste magnam quidem praesentium tempora. Quam modi beatae pariatur accusantium, adipisci molestias nobis quod voluptas voluptatum dolor,
                                consequuntur sit animi?
                            </p>
                        </div>
                    </section>
                </div>
            </article>
        </section>
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