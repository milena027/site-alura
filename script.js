const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Nicolas gosta de uma menina, ele tem duas opções?",
        alternativas: [
            {
                texto: "Vai chamar ela pra sair.",
                afirmacao: "<b>Inteligencia</b> Sabe demais fiote."
            },
            {
                texto: "Não vai chamar ela pra sair.",
                afirmacao: "Você se destaca pela <b>Burrice</b>, Larga de ser cabaço."
            }
        ]
    },
    {
        enunciado: "Ele não se decide entt?",
        alternativas: [
            {
                texto: "Pergunta pros amigos.",
                afirmacao: "Tem que criar cérebro né <b>Não pensa sozinho</b>."
            },
            {
                texto: "Joga no cara e coroa.",
                afirmacao: "Não faz nada sozinho entt <b>Tenta a sorte</b>."
            }
        ]
    },
    {
        enunciado: "Ele não faz nenhum dos dois",
        alternativas: [
            {
                texto: "É idiota.",
                afirmacao: "<b>Nasceu assim</b> é bom fazer um exame pra ver se tem parafuzo solto."
            },
            {
                texto: "Só é indeciso.",
                afirmacao: "<b>As vezes acontece</b>, mais não sempre né, igual vc."
            }
        ]
    },
    {
        enunciado: "Ele é os dois",
        alternativas: [
            {
                texto: "Já tinha percebido",
                afirmacao: "<b>Vc tem moral</b> o Nicolas não kkkkkk."
            },
            {
                texto: "Descobriu agora.",
                afirmacao: "<b>Ta lerdo né</b> Ta parencendo o nicolas."
            }
        ]
    },
    {
        enunciado: "Ele morre sozinho",
        alternativas: [
            {
                texto: "Bobão kkkkk",
                afirmacao: "<b>Frieza</b> as vezes é necessário."
            },
            {
                texto: "Que dó.",
                afirmacao: "<b>Compaixão</b> em excesso é burrice."
            }
        ]
    }
];

let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta(){
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas)
    }
}

function respostaSelecionada(opcaoSelecionada){
    const afirmacoes = opcaoSelecionada.afirmacao;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Olha só o que podemos afirmar sobre você...";
    textoResultado.innerHTML = historiaFinal;
    caixaAlternativas.innerHTML = "";
}

mostraPergunta(); 