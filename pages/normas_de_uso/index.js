//conteúdo Normas de Uso

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default ()=>{

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');
     
    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div>
        <article>
        <h1>Normas de Uso</h1>
        <section>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil nam tempore tempora! Eligendi doloremque dolorum ratione quibusdam eos. Quia officiis quas qui velit laboriosam itaque harum voluptas quis veritatis unde!</p>
        </section>
        <section>
            <h3>Lorem Ipsum</h3>
            <p>Voluptas odio praesentium totam voluptatum unde officia omnis itaque deserunt fugit consequuntur temporibus explicabo nulla, repellendus iusto quos neque minus illum reiciendis recusandae cum vero quod numquam deleniti et. Repellendus?</p>
        </section>
        <section>
            <h3>Lorem Ipsum</h3>
            <p>Temporibus minus rerum facilis asperiores, unde quaerat non molestiae vero molestias, alias quos similique odio perspiciatis voluptates! Ducimus nam vitae voluptatibus quae magnam nobis dolores sapiente, eveniet quis aliquid minima!</p>
        </section>
        <section>
            <h3>Lorem Ipsum</h3>
            <p>Officiis possimus illum laborum, dolorum tenetur, quibusdam veritatis blanditiis facilis consequatur enim omnis libero? Similique, quod ullam est distinctio veritatis odio blanditiis? Aliquam aliquid officiis necessitatibus nulla voluptate et soluta!</p>
        </section>
        <section>
            <h3>Lorem Ipsum</h3>
            <p>Ut fuga quia sint quod eos est explicabo dolore vel id nobis porro quo, dolorum quae officiis modi iste reprehenderit. Optio, voluptatibus laborum reiciendis eaque alias veritatis dicta quod earum.</p>
        </section>
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
