//Script de rotas
//Importações das index.js com o conteúdos das paginas - no import definimos um nome para o elemento que estamos importando.
import antagonistas from "../pages/antagonistas/index.js";
import arcos from "../pages/arcos/index.js";
import contato from "../pages/contato/index.js";
import criticasSociais from "../pages/criticas_sociais/index.js";
import historia from "../pages/historia/index.js";
import home from "../pages/home/index.js";
import termosDeUso from "../pages/termos_de_uso/index.js";
import novosMutantes from "../pages/novos_mutantes/index.js";
import origem from "../pages/origem/index.js";
import outrasMidias from "../pages/outras_midias/index.js";
import personagens from "../pages/personagens/index.js";
import quemSomos from "../pages/quem_somos/index.js";
import xMen from "../pages/x_men/index.js";

//Aqui criamos a constante main que recebe um elemento buscado no documento pelo query selector. Nesse caso o elemento <main> com a id="root".
const main = document.querySelector("#root");

//Aqui criamos a constante init que recebe uma arrow-function.
const init = () => {
    //Dentro dessa arrow-function usamos o window.addEventListener para "ouvir" algum evento.
    //Aqui o window.addEventListener está "ouvindo" qualquer mudança na hashtag da url através do hashchange.
    window.addEventListener("hashchange", () => {
        //Aqui limpamos qualquer coisa que esteja dentro da tag <main> ao definir que seu conteúdo é "".
        main.innerHTML = "";
        //Partir daqui usamos um Switch-Case para um teste logíco, o resultado executa a adição do conteudo na tag <main>.
        switch (window.location.hash) {
            case " ":
                main.appendChild(home());
                break;
            case "#historia":
                main.appendChild(historia());
                break;

            case "#origem":
                main.appendChild(origem());
                break;

            case "#personagens":
                main.appendChild(personagens());
                break;

            case "#x-men":
                main.appendChild(xMen());
                break;

            case "#antagonistas":
                main.appendChild(antagonistas());
                break;

            case "#novos-mutantes":
                main.appendChild(novosMutantes());
                break;

            case "#arcos":
                main.appendChild(arcos());
                break;

            case "#outras-midias":
                main.appendChild(outrasMidias());
                break;

            case "#critica-social":
                main.appendChild(criticasSociais());
                break;

            case "#contato":
                main.appendChild(contato());
                break;

            case "#quem-somos":
                main.appendChild(quemSomos());
                break;

            case "#termos-de-uso":
                main.appendChild(termosDeUso());
                break;

            default:
                main.appendChild(home());
                break;
        }
    });
}

//Aqui usamos o window.addEventListener para "ouvir" o evento de "load", ou seja quando a página carregar ele executará a sequencia de código.
window.addEventListener("load", () => {
    main.appendChild(home());
    init();
});