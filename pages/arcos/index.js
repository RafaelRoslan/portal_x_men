//conteúdo Arcos

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default ()=>{

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');
     
    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
        <div class="row mt-3 d-flex align-content-center justify-content-center">
        <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 col-xxl-8">
        <article class="row d-grid gap-4 text-justify d-flex align-content-center justify-content-center">
          <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
            <h1 class="text-center">Arcos Importantes</h1>
            <p>Se removesemos todos os personagens da MARVEL, exceto os X-Men, ainda existiria uma grande quantidade de história. Aqui está listado alguns dos arcos mais incríveis dos X-mex:</p>
          </div>
          <section class="row d-flex justify-content-center align-content-center align-items-center">
            <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6 ">
              <h4 class="text-center">A Saga da Fênix Negra (1980)</h4>
              <p>Escolhida pela entidade cósmica conhecida como Fênix para ser sua hospedeira, Jean Grey obtém poderes quase absolutos. Mas todo esse poder cobra seu preço, e a X-men acaba se tornando alvo dos shiars, uma raça alienígena que pretende destruir a Fênix, e tem seus pensamentos manipulados pelo Mestre Mental, que pretende usá-la para atingir seus próprios objetivos malignos. Com sua mente corrompida, Jean se transforma na Fênix Negra e ameaça consumir o universo. Uma das melhores fases dos X-Men, essa saga enche os olhos com um enredo envolvente que deixa cicatrizes que são sentidas até hoje no Universo Marvel. Emocionante e espetacular, é a melhor história dos X-Men de todos os tempos e o ápice criativo da dupla Claremont/Byrne.</p>
            </div>
            <div class="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4 col-xxl-4 justify-content-center p-lg-3">
              <img src="./imagens/fenix_negra.jpg" alt="" class="img-fluid">
            </div>
          </section>
          <section class="row d-flex justify-content-center align-content-center align-items-center">
            <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6 order-0 order-lg-1">
              <h4 class="text-center">Dias de Um Futuro Esquecido (1981)</h4>
              <p>Em um futuro devastador, no qual os mutantes foram impiedosamente caçados e exterminados pelos Sentinelas e apenas alguns sobreviventes estão em um campo de concentração. Wolverine é o único dos antigos X-Men ainda livre e ajuda seus companheiros em um plano suicida, lançar a consciência de Kitty Pryde ao passado, mudar os eventos e evitar que aquela tragédia ocorra. É uma das mais notáveis histórias escritas por Chris Claremont. O arco e suas consequências marcam o fim da colaboração entre Claremont e John Byrne. Curiosamente esta história foi uma das inspirações para James Cameron criar o Exterminador do Futuro em 1984.</p>
            </div>
            <div class="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center order-1 order-lg-0 p-lg-3">
              <img src="./imagens/dias_de_futuro.jpg" alt="" class="img-fluid">
            </div>
          </section>
          <section class="row d-flex justify-content-center align-content-center align-items-center">
            <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
              <h4 class="text-center">Deus Ama, o Homem Mata (1982)</h4>
              <p>O reverendo William Stryker, não satisfeito em comandar um grupo de extermínio de mutantes, chamado de Purificadores, se utiliza de passagens bíblicas diante de câmeras de televisão e auditórios lotados para justificar o extermínio de uma raça que, por razões pessoais, considera uma afronta aos desígnios de Deus. Os Purificadores, embora secretos, agem sob a proteção da Cruzada Stryker, um grupo religioso que conta com vários fiéis que compartilham da crença intolerante de seu fundador.</p>
            </div>
              <div class="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4 col-xxl-4 justify-content-center p-lg-3">
                <img src="./imagens/deus_ama_homem_mata.jpg" alt="" class="img-fluid">
              </div>
          </section>
          <section class="row d-flex justify-content-center align-content-center align-items-center">
            <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6 order-0 order-lg-1">
              <h4 class="text-center">A Era do Apocalipse (1995)</h4>
              <p>O que teria acontecido no mundo se Charles Xavier não estivesse presente para guiar os X-Men? A saga que abalou profundamente o universo mutante em um mundo em que o Professor Charles Xavier foi assassinado antes de formar os X-Men, a humanidade acabou escravizada pelo mutante Apocalipse. Afetando os arcos anteriores, Magneto toma o legado de Xavier para si e se torna o líder dos X-Men. Escrita por Fabian Nicieza e arte de Geraldo Sandoval, a saga afetou todas as publicações dos mutantes na época, que foram alteradas para refletir essa nova realidade.</p>
            </div>
              <div class="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4 col-xxl-4 d-flex justify-content-center order-1 order-lg-0 p-lg-3">
                <img src="./imagens/era_apocalpse.jpg" alt="" class="img-fluid">
              </div>
          </section>
          <section class="row d-flex justify-content-center align-content-center align-items-center">
            <div class="col-10 col-sm-10 col-md-10 col-lg-6 col-xl-6 col-xxl-6">
              <h4 class="text-center">Massacre de Mutantes (1986)</h4>
              <p>Massacre de Mutantes conta a covarde matança dos vilões conhecidos como Carrascos contra os Morlocks, mutantes deformados que por não conseguirem se misturar com os humanos devido a sua aparência, vivem nos esgotos. Os X-Men acabam chegando tarde e encontram os mutantes mortos, mas assim começam uma caçada por vingança, atrás dos Carrascos. Essa saga é conhecida por trazer para o cânone personagem como Dentes de Sabre e Sr Sinistro, além de ser marcada pela tragédia do Anjo perder suas asas.</p>
            </div>
              <div class="col-10 col-sm-10 col-md-10 col-lg-4 col-xl-4 col-xxl-4 justify-content-center p-lg-3">
                <img src="./imagens/mutant_Massacre.jpg" alt="" class="img-fluid">
              </div>
          </section>
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

