//conteúdo Outras Mídias

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default ()=>{

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');
     
    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
      <div class="row mt-3 d-flex align-content-center justify-content-center">
        <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 col-xxl-8">
          <article class="row d-grid gap-4 text-justify d-flex align-content-center justify-content-center">
            <h1 class="text-center">Outras Mídias</h1>

            <section class=" row d-flex justify-content-center align-content-center align-items-center">
              <h3 class="text-center mt-2 mb-4">Desenhos</h3>
              <div class="col-10 col-sm-10 col-md-10 col-lg-5 col-xl-5 col-xxl-5 order-lg-0">
                <p>A primeira versão animada dos X-Men, foi na série The Marvel Super Heroes (apelidada no Brasil de
                  Desenhos Desanimados do Marvel), no segmento The Sub-Mariner estrelado por Namor Anjo, Fera,
                  Ciclope,Homem de Gelo,Garota Marvel e Professor-X aparecem no episódio "Dr. Doom's Day", história
                  adaptada da revista Fantastic Four Annual #3 (1965), a Grantray-Lawrence Animation não tinha possuía
                  os
                  direitos do Quarteto Fantástico (que na época estavam com a Hanna Barbera) então, os produtores os
                  substituiram pelos X-Men, que no episódio são chamados de "Aliados da Paz" (Allies for Peace).</p>
              </div>
              <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 order-lg-2">
                <p>Em 1992, a Fox Network lançou uma série animada dos X-Men com o elenco contando com: Ciclope, Jean
                  Grey, Fera, Gambit, Jubileu, Professor X, Vampira, Tempestade e Wolverine, com Bishop, Morfo e Cable
                  co-estrelando com frequência. A série foi um sucesso extraordinário, tornando-se um dos desenhos mais
                  vistos na história da televisão e ajudando a aumentar a popularidade dos X-Men. Ela durou cinco
                  temporadas e terminou em 1997. Recentemente voltou a ser apresentada pela Fox, por vários meses após o
                  lançamento do primeiro filme.</p>
                <p>Em 2004, Warner Brothers Network lançou X-Men: Evolution que mostrou os X-Men como adolescentes
                  frequentando o colegial, além do Instituto Xavier. A série terminou em 2008 após cinco temporadas.</p>
              </div>
              <div class="col-10 col-sm-10 col-md-10 col-lg-5 col-xl-5 col-xxl-5 order-lg-1">
                <img src="./imagens/x_men_animacao.jpg" alt="" class="img-fluid">
              </div>
            </section>
            <section class=" row d-flex justify-content-center align-content-center align-items-center">
              <h3 class="text-center mt-2 mb-4">Jogos Eletrônicos</h3>
              <div class="col-10 col-sm-10 col-md-10 col-lg-5 col-xl-5 col-xxl-5 order-lg-1">
                <p>Há vários jogos de diversas plataformas em que estrelam os X-Men. A maioria deles são jogos de luta em
                  2D, tais como X-Men:Children of the Atom de 1994, X-Men vs. Street Fighter de 1996 e X-Men: Mutant
                  Academy de 2000. Há também um jogo de luta em 3D chamado X-Men: Next Dimension.</p>
                <p>Os mais recentes da série são os jogos de RPG, X-Men Legends de 2004 X-Men Legends II: The Rise of
                  Apocalipse de 2005, e X-Men: Destiny de 2011. Os personagens também apareceram na série Marvel vs.
                  Capcom e nos jogos Marvel: Ultimate Alliance e Marvel: Ultimate Alliance 2. Em 2006, acompanhando o
                  terceiro filme, X-men 3 The Last Stand, temos o jogo X-men- The Official Game, tendo como protagonistas,
                  Wolverine, Homem de Gelo e Noturno.</p>
              </div>
              <div class="col-10 col-sm-10 col-md-10 col-lg-5 col-xl-5 col-xxl-5 order-lg-0">
                <img src="./imagens/x_men_jogo.jpg" alt="" class="img-fluid">
              </div>
            </section>
            <section class="row d-flex justify-content-center align-content-center align-items-center">
              <h3 class="text-center mt-2 mb-4">Filmes</h3>
              <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                <p>Poucas franquias foram tão essenciais para a evolução do gênero de filmes de super-heróis como X-Men ,
                  que ajudou a inaugurar uma nova era de filmes de quadrinhos.</p>
                <p>Em 2000, X-Men foi adaptado como uma história sobre a humanidade em primeiro lugar, traçando paralelos
                  com o movimento pelos direitos civis e a luta das minorias em todos os lugares. Essa combinação de drama
                  humano e espetáculo de alto vôo fez X-Men Extremamente popular, gerando uma franquia que até agora
                  abrangeu 13 longas-metragens diversos em tom, elenco e, claro, período de tempo.</p>
                <div>
                  <img src="./imagens/x_men_filme.jpg" alt="" class="img-fluid">
                </div>
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
