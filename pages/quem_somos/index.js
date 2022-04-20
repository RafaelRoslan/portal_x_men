//conteúdo Quem Somos

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default ()=>{

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');
     
    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div>
        <article>
        <h1>Assas,Discórdia e Despedida</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus quo porro illum quia dolores quis dolor, modi non et eveniet iure magnam recusandae facilis corporis vitae sint expedita! Quod, quidem!</p>
            <p>Pariatur aspernatur perferendis expedita assumenda cupiditate sed, excepturi autem distinctio rem aliquid eveniet esse nulla, atque harum laudantium magni aut voluptas eos eligendi impedit obcaecati eaque consequuntur quidem? Voluptatem, velit.</p>
            <p>Aut minus aspernatur esse dignissimos nisi placeat odit reprehenderit, eum inventore laboriosam laborum cupiditate obcaecati autem quos, corporis explicabo assumenda facere, voluptates laudantium aliquid dolor voluptatem eveniet officiis. Sint, vitae!</p>
        </article>

        <aside>
        <div>
            <section>
                <h3>Anderson Silva</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis repellat provident pariatur harum tempore! Eum pariatur blanditiis beatae, minus architecto dolores quam ipsum. Accusamus quasi facilis culpa obcaecati vitae deserunt.</p>
            </section>
        </div>
        <div>
            <section>
                <h3>Rafael Roslan</h3>
                <p>Nisi dicta libero, pariatur rem aperiam exercitationem ea, iste fugiat excepturi qui in enim iusto eaque facere. Assumenda dignissimos aliquam, maiores totam et esse, delectus laboriosam in quis alias corrupti?</p>
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
