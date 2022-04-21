//conteúdo Novos Mutantes

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div>
            <aside>
                <nav>
                    <ul>
                        <li>
                            <a href="">
                                <img src="" alt="" width="500" height="300">
                                <p>X-Men</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="" alt="" width="500" height="300">
                                <p>Antagonistas</p>
                            </a>
                        </li>
                        <li>
                            <a href="">
                                <img src="" alt="" width="500" height="300">
                                <p> Novos Mutantes</p>
                            </a>
                        </li>
                    </ul>
                </nav>
            </aside>
            <article>
                <h1>Novos Mutantes</h1>
                <img src="" alt="" width="500" height="300">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eius suscipit doloribus, quae tempora beatae nesciunt ducimus est asperiores velit magnam dolor quod numquam illum ab dignissimos. Id, tenetur maxime.</p>
                <section>
                    <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti hic, delectus est minima omnis vero ipsam ab unde nulla reprehenderit dignissimos inventore natus possimus, aliquam cumque! Officia sequi cumque ea?
                    </h3>
                    <img src="" alt="" width="500" height="300">
                </section>
                <section>
                    <h3>Vitae qui fuga consectetur praesentium eum ipsum optio delectus amet sequi nemo, veniam corrupti maiores explicabo, molestiae sint cupiditate odit laboriosam cumque molestias itaque minima. A rerum tenetur in laboriosam.</h3>
                    <img src="" alt="" width="500" height="300">
                </section>
                <section>
                    <h3>Iste dicta, dolor iusto eveniet corrupti sint officiis nostrum blanditiis magni perferendis quasi ipsam numquam! Aperiam doloribus libero architecto ad? Similique, sapiente? Dolorem nulla quibusdam explicabo error quam deserunt quod.
                    </h3>
                    <img src="" alt="" width="500" height="300">
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