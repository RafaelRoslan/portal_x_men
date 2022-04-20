//conteúdo Home

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div>
    <article>
    <h1>aaaaaaaaaaaaa</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe natus modi omnis cum quos rem vitae dicta laudantium eligendi perspiciatis, aperiam et sequi expedita? Obcaecati accusantium cum architecto facilis! Distinctio.</p>
</article>
<aside>
    <img src="" alt="" width="400" height="200">
</aside>
<section>
    <img src="" alt="" width="400" height="200">
    <h2>Titulo</h2>
    <p>Voluptates, praesentium harum. Commodi eligendi saepe similique pariatur beatae quis iste magnam quidem praesentium tempora. Quam modi beatae pariatur accusantium, adipisci molestias nobis quod voluptas voluptatum dolor, consequuntur sit animi?
    </p>
</section>
<section>
    <img src="" alt="" width="400" height="200">
    <h2>Titulo</h2>
    <p>Voluptates, praesentium harum. Commodi eligendi saepe similique pariatur beatae quis iste magnam quidem praesentium tempora. Quam modi beatae pariatur accusantium, adipisci molestias nobis quod voluptas voluptatum dolor, consequuntur sit animi?
    </p>
</section>
<section>
    <img src="" alt="" width="400" height="200">
    <h2>Titulo</h2>
    <p>Voluptates, praesentium harum. Commodi eligendi saepe similique pariatur beatae quis iste magnam quidem praesentium tempora. Quam modi beatae pariatur accusantium, adipisci molestias nobis quod voluptas voluptatum dolor, consequuntur sit animi?
    </p>
</section>
<section>
    <img src="" alt="" width="400" height="200">
    <h2>Titulo</h2>
    <p>Voluptates, praesentium harum. Commodi eligendi saepe similique pariatur beatae quis iste magnam quidem praesentium tempora. Quam modi beatae pariatur accusantium, adipisci molestias nobis quod voluptas voluptatum dolor, consequuntur sit animi?
    </p>
</section>

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