//conteúdo Contato

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div>
    <article class="row rounded-3">


        <div class="col-10 col-sm-10 col-md-5 col-lg-5 corcard m-4 p-4 d-flex  justify-content-center">
            <div>
                <h3>Marvel X-men</h3>
                <h5>site official</h5>
                <a href="https://www.marvel.com/teams-and-groups/x-men"><p>Marvel.com</p></a>
                <h5>Endereço da Sede</h5>
                <p>1290 Avenue of the Americas</p>
                <p>New York, NY 10104</p>
            </div>
        </div>

        <form class="col-10 col-sm-10 col-md-5 col-lg-5 m-4 p-4 corcard">

            <h3><b>Fale conosco</b></h3>
            <div class="mb-3">
                <label for="exampleFormControlInput" class="form-label ">Nome completo</label>
                <input type="email" class="form-control" id="exampleFormControlInput" placeholder="">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">Email</label>
                <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com">
            </div>

            <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">Mensagem</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <button type="submit" class="btn btncor mb-2 text-end">Enviar</button>

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