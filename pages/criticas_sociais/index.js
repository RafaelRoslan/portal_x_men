//conteúdo Criticas Sociais

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div>
    <article>
        <h1>Lorem</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis neque, necessitatibus inventore, dolorem alias, dicta tempore omnis amet magni illum tenetur facilis ipsa provident eveniet expedita quo odio quia magnam.</p>
        <p>Ipsa, fugiat maxime tenetur officia quisquam laboriosam impedit. Aliquid veritatis odit praesentium harum corporis corrupti fuga libero iusto, autem nulla ipsam est quod a hic et ipsum! Eos, fuga quis.</p>
        <p>Minima impedit voluptas, officiis deleniti aliquid tenetur blanditiis, ipsam porro animi molestias magni quaerat repudiandae possimus reprehenderit iste doloremque rerum aliquam accusamus quis earum? Vitae dolorem nobis exercitationem
            soluta ipsum.</p>
    </article>
    <aside>
        <img src="" alt="" width="200" height="400">
    </aside>
    <article>
        <h2>Lorem</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eaque repudiandae, earum expedita magni commodi quod eum mollitia, reiciendis eius laborum aut? Amet optio, possimus porro maxime mollitia tenetur laborum!</p>
        <p>Sit autem excepturi deleniti deserunt id voluptates? Rerum officia optio quo, nesciunt eos excepturi ipsa odit animi beatae? Eos vero, deleniti eaque quae totam nisi commodi cum rerum et inventore.</p>
    </article>

    <article>
        <h2>Lorem</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eaque repudiandae, earum expedita magni commodi quod eum mollitia, reiciendis eius laborum aut? Amet optio, possimus porro maxime mollitia tenetur laborum!</p>
        <p>Sit autem excepturi deleniti deserunt id voluptates? Rerum officia optio quo, nesciunt eos excepturi ipsa odit animi beatae? Eos vero, deleniti eaque quae totam nisi commodi cum rerum et inventore.</p>
    </article>
    <aside>
        <img src="" alt="" width="200" height="400">
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