const nomeTimeA = prompt("Digite o nome do time A");
const nomeTimeB = prompt("Digite o nome do time B");

const nomeA_HTML = document.getElementById("nomeTimeA");
const nomeB_HTML = document.getElementById("nomeTimeB");
const pontoA_HTML = document.getElementById("pontuacaoA");
const pontoB_HTML = document.getElementById("pontuacaoB");
const setA_HTML = document.getElementById("setA");
const setB_HTML = document.getElementById("setB");

nomeA_HTML.innerText = nomeTimeA;
nomeB_HTML.innerText = nomeTimeB;

let pontoA = 0;
let pontoB = 0;
let setA = 0;
let setB = 0;
let arraydepontosA = [];
let arraydepontosB = [];
let totaldepontosA = 0;
let totaldepontosB = 0;

pontoA_HTML.innerText = pontoA;
pontoB_HTML.innerText = pontoB;

pontoA_HTML.addEventListener("click", function () {
    //o que estiver aqui dentro sera executado 
    //quando o pontoA_HTML for clicado 
    //pontoA = pontoA + 1;
    pontoA++;
    pontoA_HTML.innerText = pontoA;
    verificarfimdoset();   
});

pontoB_HTML.addEventListener("click", function () {
    pontoB++;
    pontoB_HTML.innerText = pontoB;
    verificarfimdoset();
});

function verificarfimdoset() {
    if (pontoA >= 21 && pontoA - pontoB >= 2) {
        alert(`Time ${nomeTimeA} venceu o set`);
        setA++; //soma um ao valor anterior do set
         setA_HTML.innerText = setA; //exibe na tela
        salvarEzerarplacar();
        verificarfimdojogo();
    }
    if (pontoB >= 21 && pontoB - pontoA >= 2) {
        alert(`Time ${nomeTimeB} venceu o set`);
        setB++;
        setB_HTML.innerText = setB;
        salvarEzerarplacar();
        verificarfimdojogo();
    }      
    
}

function verificarfimdojogo() {
    if (setA == 2) {
        //time A ganhou o jogo
        for (let item of arraydepontosA) {
            totaldepontosA = totaldepontosA + item;
        }
        alert(`Time ${nomeTimeA} Venceu o jogo fazendo ${totaldepontosA}!`);
    }

    if (setB == 2) {
        for (let item of arraydepontosB) {
            totaldepontosB = totaldepontosB + item;
        }
        alert(`Time ${nomeTimeB} Venceu o jogo fazendo ${totaldepontosB}!`);
    }
}
 
function salvarEzerarplacar() {
    //salvar a pontuacao do set nos arrays
    arraydepontosA.push(pontoA);
    arraydepontosB.push(pontoB);
    //zerar a pontuação de cada set
    pontoA = 0;
    pontoB = 0;

    //atualizar na tela 
    pontoA_HTML.innerText = pontoA;     
    pontoB_HTML.innerText = pontoB;
}
    















//_-----------

// function darOiParaAlguem(nome) {
//     alert(`Oi, ${nome}`);
//     console.log('Mensagem no console');
// }

// darOiParaAlguem('Iago');
// darOiParaAlguem('Andrey');
// darOiParaAlguem('Juliete');





