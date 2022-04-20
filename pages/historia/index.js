//conteúdo História

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default ()=>{

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');
     
    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div>
        <nav>
            <ul>
                <li>
                <a href="#historia">História</a>
                </li>
                <li>
                <a href="#origem">Origem</a>
                </li>
            </ul>
        </nav>
        
        <h2>História</h2>

        <aside>
            <div>
                <img src="" alt="" width="300" height="300">
            </div>
        </aside>
        
        <article>
            <h3>Lorem Ipsum</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, ipsa in! Vero mollitia iure modi voluptates placeat nobis sed animi fuga, cum aliquid architecto quo quisquam quod rerum eveniet repellat.</p>
            <p>Inventore aliquid hic nulla corrupti ratione minima sint voluptatum cumque quisquam in aperiam, dolor quod nobis! Provident reprehenderit, nostrum maxime sapiente eveniet inventore neque cumque, ducimus molestiae, hic aliquid. Nostrum!</p>
            <p>Itaque, in laborum, dolores ex totam obcaecati impedit rem minus sed beatae inventore voluptatem eaque consequuntur tenetur quidem a laudantium illo distinctio ipsum veritatis animi repudiandae dicta expedita? Consequuntur, ipsum.</p>
        </article>
        
        <aside>
            <div>
                <img src="" alt="" width="400" height="200">
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
