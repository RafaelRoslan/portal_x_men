//conteúdo Contato

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div class="row mt-3 align-content-center justify-content-center">
    <article class="row col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 col-xxl-8 ">


        

        <form class="col-10 col-sm-10 col-md-10 col-lg-6 corcard corcard">
            <fieldset>
                <legend>Fale conosco</legend>
                <div class="mb-3">
                    <label for="exampleFormControlInput" class="form-label ">Nome completo</label>
                    <input type="email" class="form-control" id="exampleFormControlInput" placeholder="Digite seu nome">
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
                </div>

                <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">Mensagem</label>
                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Digite sua mensagem"></textarea>
                </div>

                <button type="submit" class="btn btn-primary mb-2 text-end">Enviar</button>
            </fieldset>
        </form>

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