//conteúdo Criticas Sociais

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div>
            <div class="row mt-3 d-flex align-items-center justify-content-center">

                <div class="row d-flex align-items-center justify-content-center">
                    <article class="row align-items-center justify-content-center col-12 ">
                        <h1 class="text-center">Critica Social Foda</h1>
                        <aside class="d-flex justify-content-center col-12 col-sm-12 col-md-12 col-lg-12">
                            <img class="img-fluid" src="./imagens/Critica_social_img.jpeg" alt="">
                        </aside>
                        <div class="col-12 col-sm-12 col-md-12 col-lg-10 pt-5">


                            <p>"Rótulos arbitrários são mais importantes do que a maneira como levamos a nossa vida? O que supostamente somos é mais importante do que o que realmente somos?", questionou muito sabiamente Scott Summers, o famigerado Ciclope,
                                durante um debate contra Willian Stryker (um pastor que prega em seu programa de tv o extermínio dos mutantes), transmitido pela televisão, sobre a questão a respeito do preconceito contra os mutantes. Isso acontece na
                                HQ Deus Ama, O Homem Mata, uma das edições responsáveis por deixar explícito que o principal inimigo dos X-Men, em meio a tantos vilões e desafios propriamente ditos, é o preconceito. Sendo assim, por trás de todo o universo
                                fantástico com direito a poderes e muita ação, há questões verdadeiramente mais profundas do que se pensa.
                            </p>
                            <p>Escrita por Chris Claremont e Brent Anderson, a HQ Deus Ama, O Homem Mata gira em torno do poder que a palavra tem e como ela pode influenciar toda uma população. Acontece que Stryker lidera um grupo de pessoas que atende pelo
                                nome de Purificadores, cuja premissa é eliminar a raça mutante do país. Isso porque Stryker acredita que os mutantes são criaturas do Diabo, enquanto os humanos foram criados por Deus.
                            </p>
                            <p>
                                De acordo com o historiador e sociólogo Eduardo Molina, dono do canal Geek História, no YouTube, onde relaciona momentos da história da humanidade às HQs, se fizermos um recorte histórico, temos em 1954 a Suprema Corte Americana se posicionando com referência
                                à separação entre negros e brancos nas instituições de ensino (High School) alegando inconstitucionalidade nesse ato. A população americana ignorou o fato e continuou com o racismo e o segregacionismo, inclusive, em espaços
                                públicos. Segundo o professor universitário, em 1955, o caso Rosa Parks estourou como uma bomba nos Estados Unidos, uma negra que se recusou a ceder seu lugar no ônibus para um branco e foi presa por isso. Esses eventos
                                levam ao início da década de 60 com o Movimento dos Direitos Civis dos Negros nos Estados Unidos, encabeçado por Martin Luther King Jr. e Malcolm X.
                            </p>
                        </div>

                        <div class="col-12 col-sm-12 col-md-12 col-lg-5">
                            <p>
                                Quando os X-Men foram criados, em 1963, os Estados Unidos passavam por uma série de revoluções sociais, que, ao fim daquela década, se espalhariam pelo mundo, culminando com a ascensão do movimento hippie. Dentre os movimentos sociais da época, um que
                                ganhava bastante força era justamente aquele que exigia que os negros tivessem mais direitos e não fossem segregados pela maioria branca.
                            </p>
                            <p>
                                Nos estados do sul, derrotados pela Guerra Civil ocorrida entre 1861 e 1865, que culminou com o fim da escravidão no país, os reflexos dessa segregação eram maiores do que no resto dos Estados Unidos. Graças a líderes como Martin Luther King e Malcom
                                X, as coisas passaram por uma mudança e, se ainda existe um preconceito muito grande em relação às minorias na Terra do Tio Sam, ele agora é mais velado do que naqueles dias.
                            </p>
                            <p>
                                Para lidar com a questão do preconceito contra as minorias, Stan Lee e Jack Kirby criaram o conceito dos "mutantes", seres humanos que, devido a uma característica genética incomum - o "fator x", mais tarde mudado para "gene x" - desenvolviam capacidades
                                extraordinárias quando alcançavam a adolescência. "X" é uma incógnita muito usada na matemática, daí a inspiração de Lee e Kirby para nomear sua nova criação como os "X-Men". O grupo nada mais era do que uma alegoria que
                                representava todas as minorias - negros, homossexuais, imigrantes, judeus, que sofriam de preconceito pela maioria dominante. Lee e Kirby usaram os quadrinhos até mesmo para representar as duas faces da luta pela igualdade
                                de classes. Aqueles que defendem uma convivência pacífica entre as minorias e as maiorias têm como maior representante o Professor Charles Xavier, e o grupo que defende a guerra aberta como a única solução para o problema
                                têm o seu ideal personificado em Magneto.
                            </p>
                        </div>
                        <aside class="d-flex col-12 col-sm-12 col-md-12 col-lg-5 justify-content-center ">
                            <img class=" img-fluid " src="./imagens/Critica_social_malconX.jpeg " alt=" ">
                        </aside>


                        <div class="col-12 col-sm-12 col-md-12 col-lg-10">
                            <p>
                                "Nas histórias podemos perceber nitidamente questões racistas, mas, não apenas. Os X-Men também abordam questões homossexuais, feministas. Por exemplo, no filme de 2006 desenvolvem uma vacina para "curar" os mutantes, como se houvesse algo errado em serem
                                o que são. Quantas vezes já ouvimos sobre projetos de branqueamento da população? Extermínio de "raças"? Cura gay? A temática dos X-Men segue muito atual", aponta Eduardo Molina.
                            </p>
                            <p>
                                O filme a que se refere é X-Men 3: O Confronto Final, baseado no arco A Saga da Fênix Negra. Na trama, em paralelo com a ascensão da Fênix gira em torno de um mutante cujo poder é justamente neutralizar os poderes dos outros mutantes, o que leva os humanos
                                a interná-lo em um laboratório para se apropriar de seu gene X e transformá-lo no que acabam chamando de "A cura", já que eles definem a mutação como uma doença.
                            </p>
                            <p>
                                Durante o longa, inclusive, há um marcante diálogo em que a notícia sobre a tal cura aparece na televisão. Tempestade, Wolverine e Xavier estão na sala, e Vampira entra, empolgada com a notícia: "É verdade? Eles podem nos curar?", ao que o professor responde:
                                "Sim, aparentemente, é verdade", mas acaba sendo interrompido pela Tempestade, que diz: "Não, professor. Não podem nos curar. Quer saber por quê? Porque não há nada a curar. Não há nada de errado com você. Com nenhum de
                                nós, na verdade".
                            </p>
                            <p>
                                É perfeitamente possível relacionar isso com um caso de 2017, quando a "cura gay" foi um assunto que entrou em pauta, uma vez que retornou para a Câmara dos Deputados. Na época, depois de uma grande discussão sobre o assunto que acabou levado ao arquivamento,
                                voltou à tona na Comissão de Seguridade Social e Família (CSSF) o PL 4931/2016 — que acaba com a punição do profissional de saúde mental que tratar o paciente com “transtorno de orientação sexual”.
                            </p>
                            <p>A sociedade atual resgatou um discurso conservador e tradicional, usando a religião como um pano de fundo moralizante e fundamentalista. Nessa história, o reverendo Stryker conduz uma cruzada contra os mutantes porque eles
                                eram obras diabólicas usadas para atormentar os homens, hoje, por exemplo, temos esse mesmo discurso para com a comunidade LGBTQIA+ ou para com aqueles que não se enquadram no "padrão" moral estabelecido por eles.</p>
                            <p>
                                No entanto, X-Men não apenas pode ser visto como uma metáfora para a homossexualidade, como também aborda abertamente o tema, como no caso da personagem Estrela Polar (North Star), um dos membros mais antigos do grupo, que assumiu que era gay na década
                                de 1990. A Marvel fez isso com naturalidade. Apesar dos preconceitos, das ofensas recebidas, o personagem se mantém correto em suas atitudes, mostrando sua força, não abaixando a cabeça para ninguém. Tivemos também, em
                                2013, na edição 10 de X-Treme X-Men (um universo alternativo), um Wolverine, símbolo da virilidade e da masculinidade, protagonizando um beijo gay com o personagem Hércules.
                            </p>
                        </div>
                        <aside class="d-flex col-12 col-sm-12 col-md-12 col-lg-12 justify-content-center ">
                            <img class="img-fluid" src="./imagens/Critica_social_Casamento.jpeg" alt="">
                        </aside>




                        <div class="col-12 col-sm-12 col-md-12 col-lg-5 pt-5">
                            <p>
                                Atentos às mudanças políticas e sociais que os rodeiam, os escritores de X-Men - pelo menos os melhores dentre eles - sempre dão um jeito de criar tramas que refletem essas mudanças. Quando a epidemia da AIDS chegou ao ápice de seu preconceito contra
                                os portadores da doença, o escritor Scott Lobdell bolou o Vírus Legado.
                            </p>
                            <p>
                                No nosso mundo "real" a AIDS, a princípio, era vista como uma doença que atacava apenas homossexuais ou pessoas com comportamento de risco pessoas ditas "promíscuas", prostitutas e viciados em drogas injetáveis.
                            </p>
                            <p>
                                Já nos quadrinhos, a trajetória do Vírus Legado foi semelhante. Inicialmente, a doença - um vírus liberado na atmosfera pelo vilão Conflito - atingia apenas aos portadores do gene x. O contaminado perdia cada vez mais o controle de seus poderes e ia definhando
                                até falecer.
                            </p>
                            <p>
                                Assim como na nossa realidade, o Vírus Legado não era digno de preocupação enquanto afetava apenas uma minoria. A partir do momento em que o primeiro não-mutante - no caso, a doutora Moira MacTaggert - foi contaminado e vitimado pela moléstia, começou-se
                                uma corrida contra o tempo para encontrar uma cura para aquela doença. A cura para o Vírus Legado foi encontrada pelo Dr. Henry McCoy, o Fera, e liberada na atmosfera por Colossus, sacrificando a vida do herói.
                            </p>


                        </div>
                        <aside class="d-flex col-12 col-sm-12 col-md-12 col-lg-5 justify-content-center ">
                            <img class="img-fluid" src="./imagens/Critica_social_virus.jpeg" alt="">
                        </aside>


                    </article>

                </div>
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