//conteúdo Origem

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
      <div class="row mt-3 d-flex align-content-center justify-content-center">
        <nav class="col-10 col-sm-10 col-md-10 col-lg-7 p-0">
          <ul class="nav nav-tabs justify-content-center gap-5  menu-tab">
          <li class="nav-item">
          <a class="nav-link" href="#historia"><h4>História</h4></a>
      </li>
      <li class="nav-item">
          <a class="nav-link" href="#origem"><h4>Origem</h4></a>
      </li>
          </ul>
        </nav>

        <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 col-xxl-8">
          <article class="row mt-5 text-justify d-flex justify-content-center">

            <div class="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5 col-xxl-5 order-md-0">
              <h2 class="text-center mb-3">Origem</h2>
              <p>Os X-Men foram criados em 1963 por Stan Lee e Jack Kirby como uma metáfora tanto para a adolescência
                (mutantes manifestam seus poderes quando entram na puberdade) como para os conflitos raciais.</p>
              <p>Curiosamente, porém, do lançamento, em 1963, até a entrada de Chris Claremont nos roteiros, X-Men era
                um dos grandes desastres de venda da onda Marvel dos anos 60. A partir de 1970, a editora parou de
                produzir novas histórias, apenas republicando as antigas, e o público nem se importou. Foi só com a
                nova chance, quatro anos depois, que o grupo realmente entrou no caminho do sucesso.</p>

            </div>

            <aside class="col-10 col-sm-10 col-md-5 col-lg-5 col-xl-5 col-xxl-5 order-md-1 d-flex align-items-center">
              <div>
                <img src="./imagens/stan-and-jack.jpg" class="img-fluid" width=""
                  alt="Uma foto perdida de Jack Kirby e Stan Lee que veio à tona. Kirby (a esquerda) abraçado com Stan (a direita), ambos olhando para a câmera. Foto Tirada em uma convenção onde os dois participaram.">
              </div>
            </aside>

            <div class="col-10 col-sm-10 col-md-6 col-lg-6 col-xl-6 col-xxl-6 order-md-3">
              <p>Claremont recriou os X-Men ao assumir os roteiros da série em 1974, e continuou escrevendo-os, bem
                como várias séries adjacentes, até 1991. Estabeleceu o ritmo de novela nas histórias, desenvolveu
                dezenas de personagens importantes (entre criações, mortes e ressurreições), alavancou as vendas para
                a posição em que ainda estão hoje e definiu um padrão do que deve ser uma série de supergrupo no
                quadrinho americano.</p>
            </div>
            <aside class="col-10 col-sm-10 col-md-4 col-lg-4 col-xl-4col-xxl-4 order-md-2">
              <div>
                <img src="./imagens/Chris_Claremon.jpg" class="img-fluid"  alt="Foto de Claremont que assumiu os roteiros da série em 1974">
              </div>
            </aside>

            <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 order-md-4">
              <p>No final de sua antológica passagem pela equipe, Claremont contou com os desenhos de Jim Lee, que
                revolucionou as personagens em fins dos anos 80, início dos 90, com desenhos que fizeram X-Men 1,
                primeira edição de uma nova série mutante, chegar aos declarados 8 milhões de edições vendidas, marca
                nunca antes ou depois alcançada no mercado norte-americano.</p>

              <div class="d-flex gap-2 justify-content-end">
                <p>Fonte:</p>
                <a href="https://www.omelete.com.br/x-men">Omelete</a>
              </div>

            </div>

          </article>
        </div>
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