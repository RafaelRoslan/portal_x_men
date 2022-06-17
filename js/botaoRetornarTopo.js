const botaoVoltarTopo = document.querySelector(".botaoRetornarTopo");

window.addEventListener("scroll",()=>{
    // console.log("acessou funcao");
    if (window.scrollY > 85) {
        botaoVoltarTopo.setAttribute('style','display: flex !important');
    } else {
        botaoVoltarTopo.setAttribute('style','display: none !important');
    }
})


function retornaTopo() {
    window.scroll({
        top:0,
        behavior:'smooth'
    });
}



