//conteúdo Arcos

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default ()=>{

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');
     
    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div>
        <article>
        <h2>Arcos Importantes</h2>

        <section>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Reiciendis veritatis vero est odio facere nam ut sed ipsam, a sapiente ipsa consequuntur aspernatur dolore et recusandae tenetur. Maxime, voluptate sit.</p>
            <div><img src="" alt="" width="250" height="400"></div>
        </section>

        <section>
            <h3>Lorem Ipsum</h3>
            <p>Laudantium eveniet a modi molestiae. Delectus libero beatae ut quia aut suscipit esse cupiditate alias culpa! Dolore fugiat, obcaecati doloremque numquam ipsum assumenda facilis aliquam officiis tempora, nesciunt similique dolorem?</p>
            <div><img src="" alt="" width="250" height="400"></div>
        </section>

        <section>
            <h3>Lorem Ipsum</h3>
            <p>Praesentium, distinctio ullam natus provident possimus inventore cupiditate magnam, tempore laudantium porro repellendus, vel nobis sit! Ut, animi facilis laboriosam accusamus ipsam vitae reiciendis commodi aperiam deserunt ipsum aspernatur ad?</p>
            <div><img src="" alt="" width="250" height="400"></div>
        </section>

        <section>
            <h3>Lorem Ipsum</h3>
            <p>Hic libero quibusdam quo. Sequi voluptas veniam aspernatur pariatur quas eveniet unde incidunt tempora et facilis eum reiciendis odit harum tenetur vitae nobis architecto, porro natus qui fuga. Cum, optio.</p>
            <div><img src="" alt="" width="250" height="400"></div>
        </section>

        <section>
            <h3>Lorem Ipsum</h3>
            <p>Tempore minima distinctio facere consectetur. Soluta voluptatem, eveniet nostrum eum nulla, alias sapiente voluptates laboriosam architecto provident debitis necessitatibus commodi eaque ratione amet ab quas illo rem ipsa ex quasi?</p>
            <div><img src="" alt="" width="250" height="400"></div>
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

