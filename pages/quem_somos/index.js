//conteúdo Quem Somos

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default ()=>{

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');
     
    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
        <div class="row mt-3 d-flex align-content-center justify-content-center">
        <div class="col-12 col-sm-12 col-md-12 col-lg-10 col-xl-8 col-xxl-8">
            <div class="row d-grid gap-4 text-justify d-flex align-content-center justify-content-center">
            <article class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10 mb-3">
                <h1 class="text-center mb-3">Fadas,Discórdia e Despedida</h1>
                <p>Nem todo grupo se mantem, alguns se dissipam, outros se perdem, há aqueles divergentes que são aniquilados pelas desventuras da jornada e a casos como o nosso em que o círculo deve ser quebrado. Como Gesóneis, alcançamos nosso objetivo, triunfamos no momento que nos foi dito que não conseguiríamos. Atualmente no terceiro semestre do curso de Sistemas para Internet da Faculdade de Tecnologia de São Roque, a FATEC-SR, demos início ao terceiro projeto, agora com o tema: QUADRINHOS.</p>
                <p>Ainda no início do semestre, os Gesóneis se separaram, cada um seguindo seu semestre e nós que seguimos pelo mesmo semestre, nos unimos a outros para nosso projeto, agora sob o título de clube das Winx. Porém aquilo que deveria seguir de forma cooperativa, se mostrou como um obstáculo. A discórdia e a falta de ânimo haviam corroído nosso grupo.</p>
                <p>No momento de maior tensão, levamos a questão a nosso preceptor, que de forma calma e imediata, partiu o grupo em dois, nós e eles. E nossos infortúnios não acabaram ali, nossa dupla, sofreu por efeito de saúde, o que atrapalhou o andamento do projeto. Aparentemente a sombra de ser sempre o último grupo não se desvencilhará de nós e como nos foi dito, somos “dois ferrados na chuva”.</p>
                <p>Entretanto, a persistência ainda acompanha o último grupo, recuperamos nossa saúde, criamos amizades com outros grupos, melhoramos a cada dia, e até ao presente seguimos tentando mostrar que podemos terminar o projeto. E esse trecho, essa pequena nota, deixamos a nosso professor, que mesmo que ainda possamos nos deparar pela faculdade, é possível que não tenhamos mais suas aulas, portanto se está lendo isso, obrigado.</p>

                <div class="text-end">
                    <p><b>Dos Triunfantes Gesonéis,</b></p>
                    <p><b>Os ferrados na chuva,</b></p>
                    <p><b>Clube das Winx.</b></p>
                </div>

            </article>

            <aside class="col-10 col-sm-10 col-md-10 col-lg-10 col-xl-10 col-xxl-10">
                <div class="row d-flex justify-content-center align-content-center gap-4 gap-md-5">
                <div class="card p-2 col-12 col-sm-10 col-md-5 d-flex justify-content-center align-content-center">
                    <section class="row d-flex justify-content-center align-content-center align-items-center">
                    <div class="col-5">
                        <img src="./imagens/anderson.png" class="img-fluid"
                        alt="Integrante do grupo de desenvolvedores. Nome: Anderson Silva. Titulos:Porpeta, Gesonel do Caos, Primeira Winx, Fragmentador de Grupo, Coração Fraco, O ela não me ama">
                    </div>
                    <div class="col-7 p-0">
                        <div class="card-body d-flex row justify-content-center align-content-center">
                        <h5 class="card-title">Anderson Silva</h5>
                        <p class="card-text">RA: 2650832023009</p>
                        </div>
                    </div>
                    </section>
                </div>
                <div class="card p-2 col-12 col-sm-10 col-md-5 d-flex justify-content-center align-content-center">
                    <section class="row d-flex justify-content-center align-content-center align-items-center">
                    <div class="col-5">
                        <img src="./imagens/rafael.png" class="img-fluid"
                        alt="Integrante do grupo de desenvolvedores. Nome: Rafael Roslan. Titulos: Steve.">
                    </div>
                    <div class="col-7 p-0">
                        <div class="card-body d-flex row justify-content-center align-content-center">
                        <h5 class="card-title">Rafael Roslan</h5>
                        <p class="card-text">RA: 2650832113006</p>
                        </div>
                    </div>
                    </section>
                </div>
                </div>
            </aside>
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
