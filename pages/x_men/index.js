//conteúdo X-Mens

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div class="row mt-3 d-flex align-content-center justify-content-center">
            <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 col-xxl-8">

                <article class="row d-grid gap-4 text-justify d-flex align-content-center justify-content-center">

                    <h1 class="text-center">Personagens</h1>
                    <nav class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-12 col-xxl-12 p-0">
                        <ul class="nav nav-tabs justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link active" href="#x-men">
                                    <img src="imagens/Personagens_X-Men_img2.jpg" alt="Imagem da primeira equipe dos X-Men, da esquerda para direita: Anjo, Jean Grey, Ciclope, Fera e Homem de Gelo" width="275" height="150">
                                    <h2 class="text-center">X-Men</h2>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#antagonistas">
                                    <img src="imagens/Personagens_Antagonista_img2.jpg" alt="Imagem de alguns antagonistas, da esquerda para direita: Emma Frost, Sentinela, Fanático, Apocalipse, Magneto e Sinistro." width="275" height="150">
                                    <h2 class="text-center">Antagonista</h2>
                                </a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#novos-mutantes">
                                    <img src="imagens/Personagens_Novos_Mutantes_img2.jpg" alt="Imagem dos Novos Mutantes, da esquerda para direita: Magia, Mancha Solar, Miragem, Míssil e Lupina" width="275" height="150">
                                    <h2 class="text-center">Novos Mutantes</h2>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <section class="row d-flex justify-content-center align-content-center align-items-center">

                        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-3 col-xxl-3">
                            <img src="imagens/Personagens/Personagens_x_men_ciclope.jpg" class="img-fluid" alt="Imagem do Personagem Ciclope">

                        </div>
                        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-7 col-xxl-7">

                            <h5 class="text-center">Scott Summers - Ciclope </h5>
                            <p>Scott Summers é o filho mais velho do Major Christopher Summers (também conhecido como Corsário), um piloto de teste na Força Aérea dos Estados Unidos, e sua esposa Katherine Ann. Seu irmão mais novo é Alex, hoje conhecido
                                como o mutante Destrutor.</p>
                            <p>Quando Scott e Alex eram meninos e estavam voando para casa após uma férias com a família no avião particular de seu pai, uma nave de reconhecimento do Império Shi'ar de repente se materializou e incendiou o avião. Katherine
                                empurrou Scott e Alex para fora do avião com o único paraquedas disponível. O paraquedas pegou fogo, então Scott usou suas rajadas óticas mutantes pela primeira vez para desacelerar a sua queda. Scott e Alex não sabiam
                                que seus pais haviam sido teletransportados do avião pelos Shi'ar um segundo antes de ele explodir.</p>
                            <p>Scott sofreu uma lesão na cabeça ao pousar, o que danificou a parte do cérebro de Scott que teria lhe permitido controlar suas rajadas óticas. Os dois garotos foram hospitalizados e ambos sofreram amnésia traumática sobre o
                                incidente. O geneticista, que acabou sendo o Sr. Sinistro, teve um interesse nos garotos. Ele acreditava que Scott era o irmão Summers com o maior potencial, então ele fez Alex ser adotado para separá-los e tornar Scott
                                emocionalmente vulnerável, algo que acabou dando certo.</p>
                            <p>Na Escola para Jovens Superdotados, os X-Men foram ensinados pelo Professor X e treinados no uso dos seus poderes na Sala de Perigo. Xavier deu a Scott um visor de quartzo rubi para ajudá-lo a controlar seus poderes no campo.
                                Como Ciclope, Scott tornou-se vice-líder dos X-Men. Embora ele era um hábil estrategista, Scott não possuía habilidades sociais. Scott tinha se apaixonado por sua companheira de equipe Jean Grey, mas seu comportamento reservado
                                o impediu de expressar seus sentimentos reais por ela.</p>
                            <p>Por um longo tempo, Scott se recusou a admitir, até para si mesmo, que tinha sentimentos por Jean, com medo de se machucar novamente ou que suas rajadas óticas fossem a machucar - ou qualquer outra pessoa com quem ele se importasse.
                            </p>


                        </div>
                    </section>

                    <section class="row d-flex justify-content-center align-content-center align-items-center">

                        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-3 col-xxl-3">
                            <img src="imagens/Personagens/Personagens_x_men_jean_grey.jpg" class="img-fluid" alt="Imagem da Personagem Jean Grey">

                        </div>
                        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-7 col-xxl-7">

                            <h5 class="text-center">Jean Grey - Garota Marvel</h5>
                            <p>Jean Grey era a filha mais nova do Professor John Grey do Departamento de História do Colégio Bard em Annandale-on-Hudson, Nova York, e sua esposa Elaine Grey. Quando Jean tinha dez anos de idade, ela estava brincando com sua
                                melhor amiga, Annie Richardson, quando Annie foi atropelada por um carro. A emoção que Jean sentiu enquanto ela segurava sua amiga morrendo despertou seus próprios poderes telepáticos latentes e ela experimentou as próprias
                                emoções de Annie enquanto ela morria. Este evento traumático deixou Jean em um estado afastado e profundamente deprimida. Além disso, Jean não podia controlar sua recém-despertada habilidade telepática e teve que se isolar
                                das outras pessoas para manter sua sanidade.</p>
                            <p>Quando Jean tinha onze anos, um psiquiatra recomendou a seus pais que consultassem um colega seu, o Professor Charles Xavier, o qual era secretamente um mutante com habilidades telepáticas. O Prof. Xavier explicou a Jean, mas
                                não aos pais dela, que ela era uma mutante e ele tratou dela durante vários anos. O professor ensinou a Jean como levitar e manipular objetos através da força psíquica quando ela desenvolveu telecinese aos treze anos. </p>
                            <p>Quando o Prof. Xavier julgou que Jean havia alcançado um certo nível de maestria com seus poderes telecinéticos, ele recomendou a seus pais que eles a matriculassem na sua recém-criada Instituto Xavier Para Jovens Superdotados.
                                Sem que o Sr. e Sra. Grey, essa escola servia como um disfarce para os X-Men, uma equipe de jovens mutantes sobre-humanos sendo treinados pelo Prof. Xavier para combater as ameaças representadas por mutantes do mal que
                                usavam seus poderes contra a humanidade. Mesmo que Jean Grey fosse a primeira aluna a se inscrever, Xavier não permitiu que ela se juntasse a escola até que tivesse reunido mais quatro alunos. Ela se tornou o quinto X-Man
                                e a primeira mulher a integrar a equipe, a qual também consistia de Ciclope, Homem de Gelo, Anjo e Fera. Jean assumiu o codinome de Garota Marvel. Na Escola para Jovens Superdotados, os X-Men originais foram ensinados pelo
                                Professor X e treinados no uso dos seus poderes na Sala de Perigo. Eles permaneceram juntos por vários anos.</p>

                        </div>
                    </section>

                    <section class="row d-flex justify-content-center align-content-center align-items-center">

                        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-3 col-xxl-3">
                            <img src="imagens/Personagens/Personagens_x_men_homem_de_gelo.jpg" class="img-fluid" alt="Imagem do Homem de Gelo">

                        </div>
                        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-7 col-xxl-7">

                            <h5 class="text-center">Robert "Bobby" Louis Drake - Homem de Gelo</h5>
                            <p>Bobby Drake descobriu sua habilidade mutante de controlar o gelo ainda no início de sua adolescência, o jovem sofria de fortes surtos de frio proveniente de seu poder. Seus pais o convenceram a não expor seus poderes a ninguém,
                                porém, um dia, Bob estava voltando de um passeio com sua namorada, Juddy, quando é atacado por uma gangue. Quando Eles levavam Juddy, Bob usou seu poder para salva-la. Os caras fogem, mas sua namorada também. A notícia
                                do incidente logo se espalhou pela comunidade local. Acreditando que Bob era uma ameaça, alguns homens organizaram um grupo para invadir a casa da família Drake. Ele tentou impedir a invasão usando suas habilidades, mas
                                eram muitas pessoas para um jovem mutante que ainda estava descobrindo seus poderes. Eles o captura e o leva para a delegacia.</p>
                            <p>Assim que o Professor X toma conhecimento de Bob, manda Ciclope para resgatá-lo. O X-Man consegue entrar na cela de Bob, mas ele se recusava a ir com ele. Mas nesta época Scott não era muito sutil, e tenta levar Bob a força,
                                eles chegam a estourar a parede e cair fora da delegacia, os homens ainda estavam ali, e resolvem acabar de vez com aquilo, queriam matar o mutante. Bob foge, deles e de Ciclope. No fim os dois mutantes acabam encurralados,
                                mas conseguem escapar. Já na casa de Bob, Xavier pessoalmente o convida para participar da Escola, ele apagou a memória da população local sobre o acontecido. Agradecido, por Xavier evitar que sua família sofresse retaliações,
                                e já simpatizando com a idéia, Bob aceita o convite do Professor X, e torna-se o segundo X-Men.</p>


                        </div>
                    </section>

                    <section class="row d-flex justify-content-center align-content-center align-items-center">

                        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-3 col-xxl-3">
                            <img src="imagens/Personagens/Personagens_x_men_anjo.jpg" class="img-fluid" alt="Imagem do Personagem Anjo">

                        </div>
                        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-7 col-xxl-7">

                            <h5 class="text-center">Warren Worthington III - Anjo</h5>
                            <p>Warren Kenneth Worthington III é o mutante filho dos rico Warren K. Worthington Jr. e sua esposa Kathryn, sendo que nenhum dos dois estava ciente de que seu filho havia desenvolvido um par de grandes asas emplumadas em suas
                                costas que o permitiam voar. Por outro lado, o Doutor Stuart, o qual realizou o parto de Warren, imediatamente notou a distorção de suas omoplatas e percebeu o que ele iria se tornar. Warren frequentou muitos colégios internos,
                                como o Fairburn Boys School. Warren começou sua carreira de super-herói após ocorrer um incêndio em seu dormitório na Academia Phillips em Exeter, Nova Hampshire. Warren se disfarçou com uma peruca e uma camisola e levou
                                dois estudantes em segurança para o chão com uma corda. Warren também salvou seu colega Cameron Hodge de um valentão e os dois se tornaram grandes amigos.</p>
                            <p>Warren brevemente se tornou um super-herói fantasiado conhecido como o Anjo Vingador. Ele chamou a atenção do Professor X, o qual o recrutou como o terceiro dos cinco membros fundadores dos X-Men, junto com Ciclope, Homem de
                                Gelo, Fera e a Garota Marvel. No Instituto Xavier Para Jovens Superdotados, os X-Men foram ensinados pelo Professor X e treinados no uso dos seus poderes na Sala de Perigo. Durante seu tempo na sala de aula, Warren era
                                um estudante despreocupado, geralmente viajando durante as aulas do Prof. Xavier e em público. Warren escondia sua mutação com um cinto que Xavier havia criado. Embora Warren estava inicialmente atraído pela Garota Marvel,
                                ele passou a maior parte de seu tempo namorando Candy Southern.</p>

                        </div>
                    </section>

                    <section class="row d-flex justify-content-center align-content-center align-items-center">

                        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-3 col-xxl-3">
                            <img src="imagens/Personagens/Personagens_x_men_fera.jpg" class="img-fluid" alt="Imagem do Personagem Fera">

                        </div>
                        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-7 col-xxl-7">

                            <h5 class="text-center">Hank McCoy - Fera</h5>
                            <p>Hank é filho único de Edna e Norton MacCoy. Antes de seu nascimento, seu pai trabalhava numa usina nuclear, ocorreu um acidente onde Norton sobreviveu por pouco. Sempre especulou-se o que causara a mutação na nova geração de
                                seres humanos, no caso de Hank suspeita-se que foi este acidente. Ao contrário de outros mutantes, ele já nasceu com pés e mãos grandes, além de uma força bem incomum para um bebê.</p>
                            <p>Conforme ia crescendo, Hank demonstrava mais sua habilidades: Sempre muito inteligente, inicialmente era um pouco desajeitado mas logo foi ficando mais ágil e vivia se pendurando em tudo. Apesar de todas essas peculiaridades,
                                Hank sempre foi criado com muito amor, sem nunca ser rejeitado.</p>
                            <p>Um bandido tenta roubar a bilheteria em dos jogos que participou, Hank o detém mas é fotografado por um repórter. Assim chamou a atenção de um vilão chamado Conquistador, que tinha muito interesse em suas habilidades, toma
                                os pais de Hank como reféns para que o garoto cumprisse missões em troca da liberdade de sua família. O Conquistador só não sabia que Xavier também já sabia da existência do mutante. Fera derrota sozinho o vilão e seus
                                capangas, seus pais se assustam com as capacidades do filho que diz aos pais que achava que era um mutante. Professor e seus três X-Men, Ciclope, Homem de Gelo e Anjo o convidam a se reunir a equipe e apagam todas as lembranças
                                que as pessoas tinham de McCoy para preservar o segredo dos mutantes. No fim, ele aceita o convite e torna-se o quarto X-Men.</p>
                        </div>
                    </section>
                    <section class="row d-flex justify-content-center align-content-center align-items-center">

                        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-3 col-xxl-3">
                            <img src="imagens/Personagens/Personagens_x_men_charlie_xavier.jpg" class="img-fluid" alt="Imagem do Personagem Charlie Xavier">

                        </div>
                        <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-7 col-xxl-7">

                            <h5 class="text-center">Dr. Charlie Francis Xavier – Professor X</h5>
                            <p>Antes mesmo de nascer, quando ainda estava sendo gerado no útero de Sharon Xavier, Charles teve que enfrentar um Mummundrai - parasitas sem corpo que tentam consumir o feto – e Xavier instintivamente o detém psionicamente em
                                seu primeiro ato consciente.</p>
                            <p>Começou a ter crises de dor de cabeça quando as manifestações de seu poder começam a aparecer, sentiu sua mente recebendo pensamentos de milhões de pessoas de todo o mundo simultaneamente. Isso era mais do que ele poderia suportar,
                                e o jovem Xavier foi forçado a aprender a bloquear seus poderes mentais para não enlouquecer. Com o passar dos anos e a evolução de seus dons mutantes, o jovem Charles passa a ter queda de seus cabelos como efeito colateral
                                de seus poderes.</p>

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