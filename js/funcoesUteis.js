const divRetornaTopo  = document.querySelector(".botaoRetornarTopo");
const botaoRetornTopo = document.querySelector(".retorna-topo");

const btnDarkMode     = document.querySelector("#dmSwitch");
const btnCanhoto      = document.querySelector("#canhotoSwitch");
const btnSpace        = document.querySelector("#spaceSwitch");
const imgCanhoto      = document.querySelector(".iconCanhoto");
const objHtml         = document.querySelector("html");
const objALogo        = document.querySelector("#aLogo");



window.addEventListener("scroll",()=>{
    // console.log("acessou funcao");
    if (window.scrollY > 85) {
        divRetornaTopo.setAttribute('style','display: flex !important');
    } else {
        divRetornaTopo.setAttribute('style','display: none !important');
    }
});

botaoRetornTopo.addEventListener("click",()=>{
    window.scroll({
        top:0,
        behavior:'smooth'
    });
});

btnDarkMode.addEventListener("click",()=>{
    objHtml.classList.toggle("dark");
});

btnCanhoto.addEventListener("click",()=>{
    objALogo.classList.toggle("flex-row-reverse");
    imgCanhoto.classList.toggle("inverter");

});

btnSpace.addEventListener("click",()=>{
    objHtml.classList.toggle("line-space")
});

window.addEventListener('resize',()=>{
    if(window.innerWidth < 992){
        objALogo.classList.add("flex-grow-1");
    }
    else{
        objALogo.classList.remove("flex-grow-1");
    }
  });
  window.addEventListener('load',()=>{
    if(window.innerWidth < 992){
        objALogo.classList.add("flex-grow-1");
    }
  });
