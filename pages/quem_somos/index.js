//conteúdo Quem Somos

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default ()=>{

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');
     
    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div class="row mt-3 d-flex align-content-center justify-content-center text-justify">

        <article class="col-12 col-sm-11 col-md-11 col-lg-11 col-xl-12 col-xxl-12">
        <h1 class="text-center">Assas,Discórdia e Despedida</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quo porro illum quia dolores quis
            dolor, modi non et eveniet iure magnam recusandae facilis corporis vitae sint expedita! Quod, quidem!</p>
        <p>Pariatur aspernatur perferendis expedita assumenda cupiditate sed, excepturi autem distinctio rem aliquid
            eveniet esse nulla, atque harum laudantium magni aut voluptas eos eligendi impedit obcaecati eaque
            consequuntur quidem? Voluptatem, velit.</p>
        <p>Aut minus aspernatur esse dignissimos nisi placeat odit reprehenderit, eum inventore laboriosam laborum
            cupiditate obcaecati autem quos, corporis explicabo assumenda facere, voluptates laudantium aliquid dolor
            voluptatem eveniet officiis. Sint, vitae!</p>
        </article>

        <aside class="row d-flex justify-content-center align-content-center gap-4">
        <div class="card p-2 col-12 col-sm-10 col-md-5 bg-opacity-50 bg-black d-flex justify-content-center align-content-center">
            <section class="row d-flex justify-content-center align-content-center align-items-center">
            <div class="col-5">
                <img src="./imagens/anderson.png" class="img-fluid" alt="Integrante do grupo de desenvolvedores. Nome: Anderson Silva. Titulos:Porpeta, Gesonel do Caos, Primeira Winx, Fragmentador de Grupo, Coração Fraco">
            </div>
            <div class="col-7 p-0">
                <div class="card-body d-flex row justify-content-center align-content-center">
                <h5 class="card-title">Anderson Silva</h5>
                <p class="card-text">RA: 2650832023009</p>
                </div>
            </div>
            </section>
        </div>
        

        <div class="card p-2 col-12 col-sm-10 col-md-5 bg-opacity-50 bg-black d-flex justify-content-center align-content-center">
            <section class="row d-flex justify-content-center align-content-center align-items-center">
            <div class="col-5">
                <img src="./imagens/rafael.png" class="img-fluid" alt="Integrante do grupo de desenvolvedores. Nome: Rafael Roslan. Titulos: Steve.">
            </div>
            <div class="col-7 p-0">
                <div class="card-body d-flex row justify-content-center align-content-center">
                <h5 class="card-title">Rafael Roslan</h5>
                <p class="card-text">RA: 2650832113006</p>
                </div>
            </div>
            </section>
        </div>
        </aside>


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
