//conteúdo Outras Mídias

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default ()=>{

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');
     
    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div>
        <article>
            <h1>Lorem Ipsum</h1>
            <section>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur vitae et minima suscipit tempora ullam minus repudiandae animi quaerat explicabo consectetur deserunt quidem corporis in distinctio, magni, dicta, accusamus veritatis.</p>
                <p>At beatae nulla suscipit atque natus in, dolorem minima fuga. Ipsa debitis facere ratione fugit magni vitae, et non consequatur laboriosam nesciunt tempora maxime odit? Optio impedit sed ad atque.</p>
                <div><img src="" alt="" width="300" height="300"></div>
            </section>
            <section>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus sunt nisi, voluptates eum quaerat iste explicabo aperiam nihil est alias voluptatibus natus. Optio impedit nostrum dolor quidem earum commodi in.</p>
                <p>Voluptatum cumque quisquam qui laborum amet possimus dolore eaque cum officia sit unde accusantium eum, facere incidunt dolorum inventore, fugiat in? Vitae labore obcaecati sequi vero praesentium dolorum cumque officiis?</p>
                <div><img src="" alt="" width="300" height="300"></div>
            </section>
            <section>
                <h3>Lorem Ipsum</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore deserunt eius numquam tempora quasi sunt. Cum provident nulla deleniti recusandae iusto alias, laborum iure dolores, numquam repellat harum esse quo?</p>
                <p>Nisi reiciendis dolor voluptatem dicta temporibus tenetur aperiam dolorem vero aliquid eum, quas neque! Laborum commodi, minima tempora corporis quis inventore totam vitae voluptas, quisquam sapiente itaque esse? In, harum?</p>
                <div><img src="" alt="" width="300" height="300"></div>
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
