//conteúdo antagonistas

//Criação da função por meio de arrow-function - Arrow function é uma função resumida.
export default () => {

    //criação da div - a constante container vai amarzenar o elemento criado, nesse caso a a tag <div>. 
    const container = document.createElement('div');

    //criação do template - é aqui onde colocamos o todo conteúdo que será exibido na pagina.
    const template = `
    <div class="card text-center">
    <div class="card-header">
        <ul class="nav nav-tabs card-header-tabs">
            <li class="nav-item">
                <a class="nav-link" href="#x-men">
                    <img src="imagens/Personagens_X-Men_img2.jpg" width="300" height="150">
                    <h2>X-Men</h2>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link active" href="#antagonistas">
                    <img src="imagens/Personagens_Antagonista_img2.jpg" width="300" height="150">
                    <h2>Antagonista</h2>
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#novos-mutantes">
                    <img src="imagens/Personagens_Novos_Mutantes_img2.jpg" width="300" height="150">
                    <h2>Novos Mutantes</h2>
                </a>
            </li>
        </ul>
    </div>
    
</div>


<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="imagens/Personagens/Personagens_Antagonistas_Magneto.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Erik Magnus Lensherr – Magneto</h5>
                <p class="card-text">Max Eisenhardt, Erik Magnus Lensherr ou simplesmente Magneto viu o que há de pior na humanidade. Nascido um judeu ele conheceu os terrores do medo e do preconceito na própria pele e quando descobriu que era um mutante e viu o Homo
                    sapiens despejar contra sua espécie o mesmo ódio que ele já conhecia, custando até mesmo a vida de sua primeira filha e esposa (cena reproduzida no filme Era de Apocalipse).</p>
                <p>
                    Defensor da superioridade mutante, Magneto se colocou contra os planos de coexistência pacifica de seu antigo amigo Charles Xavier, entrando em conflito com os X-Men ao longo dos anos, liderando diversas encarnações de diferentes equipes como a Irmandade
                    de Mutantes e os Acólitos.
                </p>
                <p>Mesmo estando do lado dos mocinhos há algum tempo, não há como negar seu passado, e ações como a vez em que ele arrancou todo o adamantium do corpo do Wolverine (X-Men #25, 1993).</p>
            </div>
        </div>
    </div>
</div>

<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="imagens/Personagens/Personagens_Antagonistas_Apocalipse.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Apocalipse</h5>
                <p class="card-text">Nascido no antigo Egito há mais de 5000 anos, Apocalipse apareceu pela primeira vez em Marvel Graphic Novels #17 (1985) mas sua revelação completa veio em X-Factor #5 (1986).</p>
                <p>Com uma história de mais de 5 séculos, os caminhos de En Sabah Nur já se cruzaram com diversos heróis e vilões da Marvel, entre eles sua relação com Kang e sua persona de Faraó Rama-Tut. Entre seus feitos, Apocalipse é responsável
                    pela criação de vilões como Senhor Sinistro e por transformar heróis em vilões ao escolhe-los para serem um de seus quatro cavaleiros, entre os quais, Warren Worthington III, o anjo, transformado no terrível arcanjo.</p>
                <p>Sua crença na sobrevivência do mais forte, fazem com que ele constantemente tente eliminar a raça humana e os mutantes indignos.</p>
            </div>
        </div>
    </div>
</div>

<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="imagens/Personagens/Personagens_Antagonistas_Sinistro.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Sinistro e os Carniceiros</h5>
                <p class="card-text">Nathaniel Essex é um geneticista nascido no século 19 e mutado através de experiências do próprio Apocalipse. As buscas de Sinistro pela perfeição genética eventualmente colocaram diversos mutantes em sua lista de experimentos,
                    como por exemplo o jovem Scott Summers e a criação do clone de Jean Grey com quem o herói viria a se casar: Madelyne Pryor.</p>
                <p>
                    Entre os feitos mais sombrios (além das experiências) o Senhor Sinistro foi responsável por ordenar a seus Carniceiros que eliminassem os Morlocks, no infame Massacre Mutante, um crossover entre os títulos Fabulosos X-Men #210-213, X-Factor #9-11, Novos
                    Mutantes #46, Thor #373-374 e Power Pack #27. Sua perícia em genética e clonagem garantiram a Sinistro que ele sempre tivesse seus Carniceiros a seu dispor, independentemente de suas mortes.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="imagens/Personagens/Personagens_Antagonistas_Fenix_Negra.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">A Fênix Negra</h5>
                <p class="card-text">Ainda que mais comumente associada com a Jean Grey, a entidade da destruição chamada de Fênix Negra também já se manifestou através do Ciclope e diversos outros personagens envolvidos com os X-Men. A Fênix apareceu pela primeira
                    vez na edição X-Men #101, se tornando a Fênix Negra pela primeira vez em X-Men #134.</p>
                <p>
                    Depois de sua morte na Saga da Fênix Negra de Claremont e Byrne, a força Fênix retornou diversas vezes procurando um novo avatar, como nos arcos Canção Derradeira e Canção de Guerra da Fênix. Além disso com já mencionado, ela recentemente foi a força
                    motriz por trás da guerra entre Vingadores e X-Men, onde um Ciclope possuído acabou matando o Professor Xavier.
                </p>
            </div>
        </div>
    </div>
</div>

<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="imagens/Personagens/Personagens_Antagonistas_Emma_Frost.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">EMMA FROST</h5>
                <p class="card-text">Emma Frost, mais conhecida como Rainha Branca do Clube do Inferno foi introduzida como vilã durante uma das mais icônicas histórias dos X-Men já feita: A Saga da Fênix Negra. Ela é o melhor exemplo de um vilão que se tornou um
                    X-Men porque ela bastante conhecida por ter sido ambos.
                </p>
                <p>Depois da morte dos seus alunos, os Satânicos, Emma fez um esforço para perdoar a si mesma e eventualmente formou a Geração X ao lado de Banshee. Emma se tornou um dos membros dos X-Men durante os Novos X-Men de Grant Morrison.</p>
                <p>Emma e Ciclope tiveram um caso mental enquanto ele ainda era casado, depois da morte de Jean Grey os dois se tornaram um casal. Embora muitas vezes a equipe não confie ela e na firmeza do seu relacionamento com Ciclope, é claro
                    que ela leva a sério ser uma X-Man, mesmo que eventualmente ela tenha a sua própria maneira de lidar com algumas questões.</p>
                <p>Ela é muito diferente do Professor X, mas muitas vezes é mostrado que ela é perfeitamente capaz de dar amor aos seus alunos -e até mesmo aos seus companheiros de equipe – quando eles estão em crise.</p>
            </div>
        </div>
    </div>
</div>

<div class="card mb-3" style="max-width: 540px;">
    <div class="row g-0">
        <div class="col-md-4">
            <img src="imagens/Personagens/Personagens_Antagonistas_Fanatico.jpg" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">Fanático</h5>
                <p class="card-text">Fanático é um dos arqui-inimigos dos X-Men. Como meio irmão de Charles Xavier ele foi originalmente retratado como sendo o oposto do professor: muito músculo e pouco cérebro. Com o passar do tempo ele foi ganhando um pouco mais
                    de complexidade, mas nunca se afastou da sua concepção original.</p>
                <p>
                    Ele se juntou pela primeira vez ao time em Os Fabulosos X-Men como parte de um plano do seu parceiro de crime, Black Tom Cassidy que queria destruir a equipe de dentro para fora. Porém, quando Cassidy o trai, Fanático decidi ficar do lado dos X-Men e
                    faz uma tentativa de mudar de caminho.
                </p>
                <p>Fanático também se juntou a Nova Excalibur por um tempo. Eventualmente, as suas tentativas de mudanças acabam resultado na sua perda de poderes durante Guerra Mundial Hulk. Somente retornando para o seu antigo estilo de vida ele
                    encontra forças o suficiente para restaurar a sua conexão com Cyttorak, uma pedra que lhe dá poderes. Confrontando Xavier tempos depois, Fanático admite que a sua mudança é impossível.</p>
            </div>
        </div>
    </div>
</div>



</div>
    `;

    //adição do template ao container - aqui nós colocamos todo o conteudo dentro da div.
    container.innerHTML = template;

    //Portanto o retorno dessa função será algo assim:
    //<div>
    //  conteúdo do site
    //</div>
    return container;
}