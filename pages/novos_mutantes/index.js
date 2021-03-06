//conteúdo Novos Mutantes

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    
    <div class="row mt-3 d-flex align-content-center justify-content-center">
            <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 col-xxl-8">

                <article class="row d-grid gap-4 text-justify d-flex align-content-center justify-content-center gap-5">

                    <h1 class="text-center">Personagens</h1>
                    <nav class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-12 col-xxl-12 p-0">
                        <ul class="nav nav-tabs justify-content-center">
                            <li class="nav-item">
                                <a class="nav-link" href="#x-men">
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
                                <a class="nav-link active" href="#novos-mutantes">
                                    <img src="imagens/Personagens_Novos_Mutantes_img2.jpg" alt="Imagem dos Novos Mutantes, da esquerda para direita: Magia, Mancha Solar, Miragem, Míssil e Lupina" width="275" height="150">
                                    <h2 class="text-center">Novos Mutantes</h2>
                                </a>
                            </li>
                        </ul>
                    </nav>

                    <section class="row d-flex justify-content-center align-content-center align-items-center gap-3">

                         <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-3 col-xxl-3">
                            <img src="imagens/Personagens/Personagens_Novos_Mutantes_Rahne_Sinclair_Lupina.jpg" class="img-fluid" alt="Imagem da Personagem Lupina">

                        </div>
                         <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-7 col-xxl-7">

                            <h4 class="text-center">Rahne Sinclair – Lupina</h4>
                            <p>Rahne Sinclair é uma jovem escocesa que possui a habilidade de se transformar em lobo e também em uma espécie de lobisomem. Foi resgatada por Moira em uma de suas transformações. A jovem estava sendo perseguida por cidadãos,
                                em um ataque promovido por um reverendo que acreditava se tratar de uma bruxa, uma obra do demônio. Ela foi criada pelo Reverendo Sinclair e teve uma criação bastante religiosa, que fez com que acreditasse que é amaldiçoada
                                e que a sua mutação é obra do Diabo.</p>


                        </div>
                    </section>

                    <section class="row d-flex justify-content-center align-content-center align-items-center gap-3">

                         <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-3 col-xxl-3">
                            <img src="imagens/Personagens/Personagens_Novos_Mutantes_Roberto_da_Costa_Mancha_Solar.jpg" class="img-fluid" alt="Imagem do Personagem Mancha Solar">

                        </div>
                         <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-7 col-xxl-7">

                            <h4 class="text-center">Roberto da Costa – Mancha Solar</h4>
                            <p>Roberto da Costa é um jovem rico e brasileiro que possui a habilidade de absorver energia solar e convertê-la em rajadas de energia. Quando usa os seus poderes ao máximo, o seu corpo assume uma forma que se assemelha a superfície
                                do Sol. Beto também é um jogador de futebol e a sua mutação se manifestou pela primeira vez durante uma partida em que sofreu ataques racistas do time adversário por ser negro. O seu pai nasceu pobre, mas conseguiu enriquecer,
                                o que garantiu que sua família tivesse uma qualidade de vida melhor e alcançasse novos espaços, mas isso não impediu que eles fossem mal vistos nesses lugares.</p>


                        </div>
                    </section>

                    <section class="row d-flex justify-content-center align-content-center align-items-center gap-3">

                         <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-3 col-xxl-3">
                            <img src="imagens/Personagens/Personagens_Novos_Mutantes_Sam_Guthrie_Míssil.jpg" class="img-fluid" alt="Imagem do Personagem Míssil">

                        </div>
                         <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-7 col-xxl-7">

                            <h4 class="text-center">Sam Guthrie – Míssil</h4>
                            <p>Sam Guthrie é um jovem americano que possui a habilidade de se transformar em um “míssil-vivo”. Quando está nessa forma, possui a habilidade de voar e ganha super-força. Depois que o seu pai morreu, passou a trabalhar em uma
                                mina para sustentar a família. Manifestou os seus poderes durante um acidente na mina em que trabalhava e os usou para salvar um dos colegas.</p>


                        </div>
                    </section>

                    <section class="row d-flex justify-content-center align-content-center align-items-center gap-3">

                         <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-3 col-xxl-3">
                            <img src="imagens/Personagens/Personagens_Novos_Mutantes_Xian_Coy_Mahn_Karma.jpg" class="img-fluid" alt="Imagem da Personagem Karma">

                        </div>
                         <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-7 col-xxl-7">

                            <h4 class="text-center">Xi’an Coy Mahn – Karma</h4>
                            <p>Xi’an Coy Mahn é uma jovem vietinamita e telepata que possui a habilidade de possuir corpos. Filha de imigrantes que fugiram do Vietinã, ela e o seu irmão, também mutante (mesmas habilidades), trabalharam como criminosos ao
                                lado de seu tio. Despertou os seus poderes quando invadiu a mente de um soldado para salvar a vida do seu irmão. Foi a primeira líder da equipe. Eventualmente, a jovem acabou perdendo uma das pernas em um acidente. Mais
                                tarde também foi revelado que Xi’an é lésbica.</p>

                        </div>
                    </section>

                    <section class="row d-flex justify-content-center align-content-center align-items-center gap-3">

                         <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-3 col-xxl-3">
                            <img src="imagens/Personagens/Personagens_Novos_Mutantes_Danielle_Moonstar_Miragem.jpg" class="img-fluid" alt="Imagem da Personagem Miragem">

                        </div>
                         <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-7 col-xxl-7">

                            <h4 class="text-center">Danielle Moonstar – Miragem</h4>
                            <p class="card-text">Danielle Moonstar é uma nativo-americana chayene. É uma telepata que possui a habilidade de projetar os maiores medos das pessoas. Os seus pais morreram em um acidente. O seu avô, conhecido como Pássaro, acreditava que era
                                hora dela aprender a controlar os seus dons e falou que ela deveria ir para a Escola Xavier. Inicialmente, a jovem se recusa a ir, pois considerava todos os homens brancos como inimigos, devido ao que fizeram com os seus
                                ancestrais.
                            </p>
                        </div>
                    </section>
                    <section class="row d-flex justify-content-center align-content-center align-items-center gap-3">

                         <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-3 col-xxl-3">
                            <img src="imagens/Personagens/Personagens_Novos_Mutantes_Illyana_Rasputin_Magia.jpg" class="img-fluid" alt="Imagem da Personagem Magia">

                        </div>
                         <div class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-7 col-xxl-7">

                            <h4 class="text-center">Illyana Rasputin – Magia</h4>
                            <p class="card-text">Illyana Rasputin irá substituir Karma como um dos membros fundadores da equipe no filme. Ela é irmã de Piotr Rasputin, o Colossus. É uma mutante russa que possui a habilidade de se transportar entre dimensões e tempo através
                                de portais, além de ser capaz de conjurar magia. Adquiriu as suas habilidades mágicas após ter vivido experiências traumáticas em uma dimensão conhecida como Limbo, local onde cresceu, após ser sequestrada quando criança.
                                Perdeu a sua alma, que foi transformada na espada que empunha.</p>

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