//conteúdo Contato

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div>
    <article>
        <h1>Lorem ipsum</h1>
        <form>
            <p>Nome Completo:</p>
            <input type="text" name="Nome Completo">
            <p>E-mail:</p>
            <input type="text" name="Nome Completo">
            <p>Mensagem</p>
            <input type="text" name="Nome Completo">
        </form>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio numquam consequatur atque libero odio maxime, voluptatem nulla quo laboriosam. Quidem numquam harum fuga magni beatae asperiores voluptatum porro rem. Deleniti.</p>
        <p>Obcaecati, error ad. Dignissimos, laboriosam? Non ut quasi consectetur quisquam! Unde, suscipit voluptatibus aspernatur fugiat enim placeat velit eius est, perferendis doloremque deserunt illum ut dolore deleniti quae aut nam?</p>
        <p>Est suscipit id laborum voluptatibus doloremque iste reiciendis fugit quae ratione! Perspiciatis repudiandae nihil totam adipisci quibusdam sint beatae molestias doloribus obcaecati accusamus? Porro, repellat magnam. Ipsa tempore provident
            autem!
        </p>
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