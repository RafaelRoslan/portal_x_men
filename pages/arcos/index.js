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
        <p>Aqui está listado alguns dos arcos mais incríveis dos X-mex</p>

        <section>
            <h3>A Saga da Fênix Negra (1980)</h3>
            <p>Escolhida pela entidade cósmica conhecida como Fênix para ser sua hospedeira, Jean Grey obtém poderes quase absolutos. Mas todo esse poder cobra seu preço, e a X-men acaba se tornando alvo dos shiars, uma raça alienígena que pretende destruir a Fênix, e tem seus pensamentos manipulados pelo Mestre Mental, que pretende usá-la para atingir seus próprios objetivos malignos. Com sua mente corrompida, Jean se transforma na Fênix Negra e ameaça consumir o universo. Uma das melhores fases dos X-Men, essa saga enche os olhos com um enredo envolvente que deixa cicatrizes que são sentidas até hoje no Universo Marvel. Emocionante e espetacular, é a melhor história dos X-Men de todos os tempos e o ápice criativo da dupla Claremont/Byrne.</p>
            <div><img src="" alt="" width="250" height="400"></div>
        </section>

        <section>
            <h3>Dias de Um Futuro Esquecido (1981)</h3>
            <p>Em um futuro devastador, no qual os mutantes foram impiedosamente caçados e exterminados pelos Sentinelas e apenas alguns sobreviventes estão em um campo de concentração. Wolverine é o único dos antigos X-Men ainda livre e ajuda seus companheiros em um plano suicida, lançar a consciência de Kitty Pryde ao passado, mudar os eventos e evitar que aquela tragédia ocorra. É uma das mais notáveis histórias escritas por Chris Claremont. O arco e suas consequências marcam o fim da colaboração entre Claremont e John Byrne. Curiosamente esta história foi uma das inspirações para James Cameron criar o Exterminador do Futuro em 1984.</p>
            <div><img src="" alt="" width="250" height="400"></div>
        </section>

        <section>
            <h3>Deus Ama, o Homem Mata (1982)</h3>
            <p>O reverendo William Stryker, não satisfeito em comandar um grupo de extermínio de mutantes, chamado de Purificadores, se utiliza de passagens bíblicas diante de câmeras de televisão e auditórios lotados para justificar o extermínio de uma raça que, por razões pessoais, considera uma afronta aos desígnios de Deus. Os Purificadores, embora secretos, agem sob a proteção da Cruzada Stryker, um grupo religioso que conta com vários fiéis que compartilham da crença intolerante de seu fundador.</p>
            <div><img src="" alt="" width="250" height="400"></div>
        </section>

        <section>
            <h3>A Era do Apocalipse (1995)</h3>
            <p>O que teria acontecido no mundo se Charles Xavier não estivesse presente para guiar os X-Men? A saga que abalou profundamente o universo mutante em um mundo em que o Professor Charles Xavier foi assassinado antes de formar os X-Men, a humanidade acabou escravizada pelo mutante Apocalipse. Afetando os arcos anteriores, Magneto toma o legado de Xavier para si e se torna o líder dos X-Men. Escrita por Fabian Nicieza e arte de Geraldo Sandoval, a saga afetou todas as publicações dos mutantes na época, que foram alteradas para refletir essa nova realidade.</p>
            <div><img src="" alt="" width="250" height="400"></div>
        </section>

        <section>
            <h3>Massacre de Mutantes (1986)</h3>
            <p>Massacre de Mutantes conta a covarde matança dos vilões conhecidos como Carrascos contra os Morlocks, mutantes deformados que por não conseguirem se misturar com os humanos devido a sua aparência, vivem nos esgotos. Os X-Men acabam chegando tarde e encontram os mutantes mortos, mas assim começam uma caçada por vingança, atrás dos Carrascos. Essa saga é conhecida por trazer para o cânone personagem como Dentes de Sabre e Sr Sinistro, além de ser marcada pela tragédia do Anjo perder suas asas.</p>
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

