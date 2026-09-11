
<!DOCTYPE html>
<html lang="pt-BR">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">

<title>Digitalização no Mundo do Trabalho</title>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    background: #000;
    color: white;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
}

/* ==================================================
   TELA DE BOOT
================================================== */

#boot {
    position: fixed;
    inset: 0;
    background: #000;
    z-index: 9999;

    display: flex;
    align-items: center;
    justify-content: center;

    color: #00ff55;
    font-family: "Courier New", monospace;
}

.terminal {
    width: 80%;
    max-width: 800px;
}

.terminal-text {
    font-size: 16px;
    line-height: 1.8;
    margin-bottom: 30px;

    text-shadow: 0 0 10px #00ff55;
}

.progress-bar {
    width: 100%;
    height: 25px;

    border: 2px solid #00ff55;

    padding: 3px;

    box-shadow:
        0 0 10px #00ff55,
        inset 0 0 15px rgba(0,255,85,.3);
}

.progress-fill {
    width: 0%;
    height: 100%;

    background: #00ff55;

    box-shadow: 0 0 20px #00ff55;

    transition: width .05s linear;
}

.loading-info {
    display: flex;
    justify-content: space-between;

    margin-top: 12px;

    text-shadow: 0 0 10px #00ff55;
}

/* ==================================================
   GLITCH
================================================== */

.glitch {
    animation:
        shake .07s infinite,
        rgb .1s infinite;
}

@keyframes shake {

    0% {
        transform: translate(0);
    }

    25% {
        transform: translate(-10px, 5px);
    }

    50% {
        transform: translate(8px, -6px);
    }

    75% {
        transform: translate(-6px, -4px);
    }

    100% {
        transform: translate(0);
    }
}

@keyframes rgb {

    0% {
        filter: none;
    }

    30% {
        filter:
            drop-shadow(8px 0 red)
            drop-shadow(-8px 0 cyan);
    }

    60% {
        filter:
            drop-shadow(-10px 0 blue)
            drop-shadow(10px 0 red);
    }

    100% {
        filter: none;
    }
}

.glitch::before {

    content: "";

    position: fixed;

    inset: 0;

    z-index: 10000;

    pointer-events: none;

    background:
        repeating-linear-gradient(
            0deg,
            rgba(255,255,255,.05) 0px,
            rgba(255,255,255,.05) 2px,
            transparent 2px,
            transparent 6px
        );
}

/* ==================================================
   SITE
================================================== */

#site {
    display: none;

    min-height: 100vh;

    padding: 40px 20px;

    background:
        radial-gradient(
            circle at top,
            #071f14,
            #020806 45%,
            #000 100%
        );

    position: relative;
}

/* GRID DE FUNDO */

#site::before {

    content: "";

    position: fixed;

    inset: 0;

    pointer-events: none;

    opacity: .18;

    background-image:
        linear-gradient(#00ff5520 1px, transparent 1px),
        linear-gradient(90deg, #00ff5520 1px, transparent 1px);

    background-size: 40px 40px;
}

/* ==================================================
   CONTAINER
================================================== */

.container {

    max-width: 1000px;

    margin: auto;

    position: relative;

    z-index: 2;
}

/* ==================================================
   CABEÇALHO HACKER
================================================== */

header {

    position: relative;

    margin-bottom: 35px;

    padding: 35px;

    background:
        linear-gradient(
            145deg,
            rgba(0,25,12,.96),
            rgba(0,8,4,.98)
        );

    border: 1px solid #00ff55;

    box-shadow:
        0 0 10px #00ff55,
        inset 0 0 30px rgba(0,255,85,.08);

    overflow: hidden;
}

/* LINHA DIGITAL */

header::before {

    content: "";

    position: absolute;

    top: 0;
    left: -100%;

    width: 100%;
    height: 2px;

    background: #00ff55;

    box-shadow: 0 0 15px #00ff55;

    animation: scan 3s linear infinite;
}

@keyframes scan {

    from {
        left: -100%;
    }

    to {
        left: 100%;
    }
}

.system {

    color: #00ff55;

    font-family: "Courier New", monospace;

    font-size: 13px;

    margin-bottom: 20px;

    text-shadow: 0 0 8px #00ff55;
}

header h1 {

    font-family: "Courier New", monospace;

    font-size: 34px;

    color: #00ff55;

    margin-bottom: 20px;

    text-shadow:
        0 0 5px #00ff55,
        0 0 20px #00ff55;
}

header p {

    color: #b8ffc9;

    line-height: 1.8;

    font-size: 16px;
}

/* ==================================================
   QUESTÕES
================================================== */

.questao {

    position: relative;

    background:
        linear-gradient(
            135deg,
            rgba(0,20,10,.98),
            rgba(0,8,4,.98)
        );

    margin-bottom: 25px;

    padding: 28px;

    border: 1px solid #008f35;

    box-shadow:
        0 0 10px rgba(0,255,85,.12),
        inset 0 0 25px rgba(0,255,85,.04);

    transition: .3s;

    overflow: hidden;
}

/* CANTO DIGITAL */

.questao::before {

    content: "";

    position: absolute;

    top: 0;
    left: 0;

    width: 55px;
    height: 3px;

    background: #00ff55;

    box-shadow: 0 0 12px #00ff55;
}

.questao::after {

    content: "";

    position: absolute;

    right: 0;
    bottom: 0;

    width: 55px;
    height: 3px;

    background: #00ff55;

    box-shadow: 0 0 12px #00ff55;
}

.questao:hover {

    transform: translateY(-4px);

    border-color: #00ff55;

    box-shadow:
        0 0 20px rgba(0,255,85,.3),
        inset 0 0 30px rgba(0,255,85,.08);
}

/* ==================================================
   NUMERO
================================================== */

.numero {

    display: inline-block;

    color: #00ff55;

    font-family: "Courier New", monospace;

    font-weight: bold;

    border: 1px solid #00ff55;

    padding: 8px 15px;

    margin-bottom: 18px;

    background: #001a09;

    box-shadow:
        0 0 8px rgba(0,255,85,.4);

    text-shadow:
        0 0 8px #00ff55;
}

/* ==================================================
   PERGUNTA
================================================== */

.questao h2 {

    color: #eaffef;

    font-family: "Courier New", monospace;

    font-size: 19px;

    line-height: 1.6;

    margin-bottom: 20px;
}

/* ==================================================
   RESPOSTA HACKER
================================================== */

.resposta {

    position: relative;

    background: #000b05;

    border: 1px solid #00a83a;

    padding: 20px;

    color: #a8ffbd;

    font-family: "Courier New", monospace;

    font-size: 16px;

    line-height: 1.8;

    box-shadow:
        inset 0 0 20px rgba(0,255,85,.05);

    text-shadow:
        0 0 5px rgba(0,255,85,.4);
}

/* TERMINAL DA RESPOSTA */

.resposta::before {

    content: "> RESPONSE.exe";

    display: block;

    color: #00ff55;

    font-size: 12px;

    margin-bottom: 10px;

    opacity: .8;
}

/* CURSOR */

.resposta::after {

    content: " █";

    color: #00ff55;

    animation: cursor 1s infinite;
}

@keyframes cursor {

    0%, 50% {
        opacity: 1;
    }

    51%, 100% {
        opacity: 0;
    }
}

/* ==================================================
   RODAPÉ
================================================== */

footer {

    margin-top: 40px;

    padding: 20px;

    text-align: center;

    color: #00ff55;

    font-family: "Courier New", monospace;

    border-top: 1px solid #005c22;

    text-shadow:
        0 0 8px #00ff55;
}

/* ==================================================
   RESPONSIVO
================================================== */

@media (max-width: 600px) {

    #site {
        padding: 20px 12px;
    }

    header {
        padding: 22px;
    }

    header h1 {
        font-size: 25px;
    }

    header p {
        font-size: 14px;
    }

    .questao {
        padding: 20px;
    }

    .questao h2 {
        font-size: 16px;
    }

    .resposta {
        font-size: 14px;
    }

    .terminal {
        width: 90%;
    }

    .terminal-text {
        font-size: 12px;
    }
}
</style>
</head>

<body>


<!-- ==================================================
     BOOT HACKER
================================================== -->

<div id="boot">

    <div class="terminal">

        <div class="terminal-text">

            &gt; SYSTEM BOOT<br>
            &gt; INITIALIZING...<br>
            &gt; LOADING FILES...<br>
            &gt; CHECKING SYSTEM...<br>
            &gt; ESTABLISHING CONNECTION...<br>
            &gt; ACCESSING SCHOOL PROJECT...

        </div>

        <div class="progress-bar">

            <div
                class="progress-fill"
                id="progress">
            </div>

        </div>

        <div class="loading-info">

            <span>
                CARREGANDO...
            </span>

            <span id="percent">
                0%
            </span>

        </div>

    </div>

</div>


<!-- ==================================================
     TRABALHO
================================================== -->

<div id="site">

<div class="container">


<header>

    <div class="system">
        &gt; SYSTEM ONLINE<br>
        &gt; PROJECT: DIGITALIZAÇÃO.exe<br>
        &gt; STATUS: ACCESS GRANTED
    </div>

    <h1>
        Digitalização no mundo do trabalho
    </h1>

    <p>
        A digitalização é o ato de transformar estruturas e prestações de serviço
        de uma empresa em um modelo de negócio digital, assim como a implementação
        de equipamentos. Esse é um fenômeno contemporâneo universal e atinge
        empresas e setores públicos de todos os países, em diferentes níveis,
        com maior ou menor grau de planejamento e acompanhamento.
    </p>

</header>


<!-- QUESTÃO 1 -->

<section class="questao">

    <span class="numero">
        [ QUESTÃO 01 ]
    </span>

    <h2>
        Como você imagina a participação das mulheres na área de tecnologia até 2030
        e o que pode ser feito para aumentar essa participação?
    </h2>

    <div class="resposta">

        foco e disciplina e saber fazer o trabalho digital de forma eficaz

    </div>

</section>


<!-- QUESTÃO 2 -->

<section class="questao">

    <span class="numero">
        [ QUESTÃO 02 ]
    </span>

    <h2>
        Você acha que as tecnologias digitais conseguem resolver todos os tipos
        de problemas? Explique sua opinião.
    </h2>

    <div class="resposta">

        a inclusao de mulheres na tecnologia ajuda a promover igualdade de genero
        e a combater a descriminacao.A tecnologia é um campo dominado pelos
        homens,isso pode afastar mulheres da area de trabalhomesmo q tenham interece.

    </div>

</section>


<!-- QUESTÃO 3 -->

<section class="questao">

    <span class="numero">
        [ QUESTÃO 03 ]
    </span>

    <h2>
        Quais habilidades digitais você acredita que precisará desenvolver para
        o mercado de trabalho? Justifique.
    </h2>

    <div class="resposta">

        é mais para empresas ajuda a prestar servicos como a implementacao de
        equipamentos digitais.

    </div>

</section>


<footer>

    &gt; SYSTEM END<br>
    Trabalho escolar • Digitalização no mundo do trabalho

</footer>


</div>
</div>


<script>

/* ==================================================
   CARREGAMENTO
================================================== */

let progresso = 0;

const barra =
    document.getElementById("progress");

const porcentagem =
    document.getElementById("percent");

const boot =
    document.getElementById("boot");

const site =
    document.getElementById("site");


const carregamento =
setInterval(() => {

    progresso++;

    barra.style.width =
        progresso + "%";

    porcentagem.textContent =
        progresso + "%";


    if (progresso >= 100) {

        clearInterval(carregamento);


        setTimeout(() => {

            /*
                COMEÇA O GLITCH
            */

            document.body.classList.add(
                "glitch"
            );


            setTimeout(() => {

                /*
                    SAI DA TELA DE BOOT
                */

                boot.style.display =
                    "none";


                document.body.classList.remove(
                    "glitch"
                );


                /*
                    MOSTRA O TRABALHO
                */

                site.style.display =
                    "block";


            }, 2000);


        }, 400);

    }

}, 45);

</script>

</body>
</html>
