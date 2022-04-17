//Script de rotas
//importações das index.js com o contuedos das paginas - no import definimos um nome para o elemento que estamos importando.
import antagonistas from "../pages/antagonistas/index.js";
import arcos from "../pages/arcos/index.js";
import contato from "../pages/contato/index.js";
import criticasSociais from "../pages/criticas_sociais/index.js";
import historia from "../pages/historia/index.js";
import home from "../pages/home/index.js";
import normasDeUso from "../pages/normas_de_uso/index.js";
import novosMutantes from "../pages/novos_mutantes/index.js";
import origem from "../pages/origem/index.js";
import outrasMidias from "../pages/outras_midias/index.js";
import personagens from "../pages/personagens/index.js";
import quemSomos from "../pages/quem_somos/index.js";
import xMen  from "../pages/x_men/index.js";


const main = document.querySelector("#root");

const init = ()=>{
    window.addEventListener("hashchange",()=>{
        main.innerHTML = "";
        switch (window.location.hash) {
            case " ":
                
                main.appendChild(home());
                break;
            case "#historia":
                main.appendChild(historia());
                break;

            case "#personagens":
                main.appendChild(personagens());
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

            default:
                main.appendChild(home());
                break;
        }
    });
}


window.addEventListener("load", ()=>{
    main.appendChild(home());
    init();
});