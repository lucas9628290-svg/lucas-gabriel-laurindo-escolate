```html
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <title>Dia Nacional de Luta da Pessoa com Deficiência</title>

    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        html {
            scroll-behavior: smooth;
        }

        body {
            font-family: Arial, Helvetica, sans-serif;
            background: #f4f8f5;
            color: #1f2937;
            line-height: 1.6;
        }

        /* MENU */
        header {
            background: #087f5b;
            color: white;
            padding: 18px 8%;
            position: sticky;
            top: 0;
            z-index: 1000;
            box-shadow: 0 3px 15px rgba(0,0,0,0.15);
        }

        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
            gap: 20px;
        }

        .logo {
            font-size: 22px;
            font-weight: bold;
        }

        nav a {
            color: white;
            text-decoration: none;
            margin-left: 20px;
            font-weight: bold;
        }

        nav a:hover {
            text-decoration: underline;
        }

        /* CAPA */
        .hero {
            min-height: 90vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            padding: 50px 20px;
            background:
                linear-gradient(rgba(0,80,55,0.88), rgba(0,120,80,0.82)),
                radial-gradient(circle at top, #45d69b, #087f5b);
            color: white;
        }

        .hero-content {
            max-width: 900px;
        }

        .hero h1 {
            font-size: clamp(38px, 6vw, 72px);
            margin-bottom: 20px;
        }

        .hero h2 {
            font-size: 25px;
            font-weight: normal;
            margin-bottom: 20px;
        }

        .hero p {
            font-size: 18px;
            max-width: 750px;
            margin: auto;
        }

        .data {
            display: inline-block;
            margin-top: 30px;
            padding: 12px 25px;
            border-radius: 30px;
            background: white;
            color: #087f5b;
            font-weight: bold;
            font-size: 18px;
        }

        /* SEÇÕES */
        section {
            padding: 70px 8%;
        }

        .titulo {
            text-align: center;
            color: #087f5b;
            font-size: 34px;
            margin-bottom: 35px;
        }

        .texto {
            max-width: 950px;
            margin: auto;
            font-size: 18px;
            text-align: center;
        }

        /* CARDS */
        .cards {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 25px;
            max-width: 1100px;
            margin: 40px auto 0;
        }

        .card {
            background: white;
            border-radius: 18px;
            padding: 30px;
            text-align: center;
            box-shadow: 0 5px 20px rgba(0,0,0,0.10);
            transition: 0.3s;
            border-top: 7px solid #087f5b;
        }

        .card:hover {
            transform: translateY(-8px);
            box-shadow: 0 10px 30px rgba(0,0,0,0.15);
        }

        .icone {
            font-size: 50px;
            margin-bottom: 15px;
        }

        .card h3 {
            color: #087f5b;
            margin-bottom: 12px;
        }

        /* BENGALAS */
        .bengalas {
            background: #e8f7f0;
        }

        .bengala {
            position: relative;
            overflow: hidden;
        }

        .bengala-branca {
            border-top-color: #ffffff;
        }

        .bengala-verde {
            border-top-color: #18a558;
        }

        .bengala-vermelha {
            border-top-color: #e63946;
        }

        .barra {
            height: 18px;
            width: 100%;
            border-radius: 20px;
            margin: 15px 0 20px;
        }

        .barra-branca {
            background: #ffffff;
            border: 2px solid #bbb;
        }

        .barra-verde {
            background: #18a558;
        }

        .barra-vermelha {
            background: linear-gradient(
                to right,
                #ffffff 0%,
                #ffffff 50%,
                #e63946 50%,
                #e63946 100%
            );
            border: 1px solid #aaa;
        }

        /* VIDEO */
        .video-area {
            background: #111827;
            color: white;
            text-align: center;
        }

        .video-area .titulo {
            color: #7fffc4;
        }

        .video-container {
            max-width: 900px;
            margin: 35px auto 0;
            aspect-ratio: 16 / 9;
            border-radius: 18px;
            overflow: hidden;
            box-shadow: 0 10px 40px rgba(0,0,0,0.4);
        }

        .video-container iframe {
            width: 100%;
            height: 100%;
            border: none;
        }

        /* ACESSIBILIDADE */
        .acessibilidade {
            max-width: 1000px;
            margin: auto;
        }

        .lista {
            background: white;
            border-radius: 18px;
            padding: 30px 40px;
            box-shadow: 0 5px 20px rgba(0,0,0,0.08);
        }

        .lista li {
            margin: 15px 0;
            font-size: 18px;
        }

        /* FRASE FINAL */
        .frase {
            background: #087f5b;
            color: white;
            text-align: center;
            padding: 70px 20px;
        }

        .frase h2 {
            font-size: 36px;
            margin-bottom: 15px;
        }

        .frase p {
            font-size: 20px;
        }

        /* RODAPÉ */
        footer {
            background: #052e24;
            color: white;
            text-align: center;
            padding: 25px;
        }

        /* RESPONSIVO */
        @media (max-width: 700px) {
            nav {
                flex-direction: column;
            }

            nav a {
                margin: 5px;
                font-size: 14px;
            }

            section {
                padding: 50px 5%;
            }

            .lista {
                padding: 25px;
            }
        }
    </style>
</head>

<body>

    <!-- MENU -->
    <header>
        <nav>
            <div class="logo">♿ Inclusão</div>

            <div>
                <a href="#sobre">Sobre</a>
                <a href="#bengalas">Bengalas</a>
                <a href="#video">Vídeo</a>
                <a href="#acessibilidade">Acessibilidade</a>
            </div>
        </nav>
    </header>


    <!-- CAPA -->
    <section class="hero">

        <div class="hero-content">

            <h1>Dia Nacional de Luta da Pessoa com Deficiência</h1>

            <h2>Respeito • Inclusão • Acessibilidade • Igualdade</h2>

            <p>
                Uma data para conscientizar a sociedade sobre os direitos,
                a inclusão e a importância de combater o preconceito contra
                as pessoas com deficiência.
            </p>

            <div class="data">
                21 de Setembro
            </div>

        </div>

    </section>


    <!-- SOBRE -->
    <section id="sobre">

        <h2 class="titulo">O que é essa data?</h2>

        <p class="texto">
            O Dia Nacional de Luta da Pessoa com Deficiência é celebrado
            em 21 de setembro. A data busca conscientizar a sociedade
            sobre a importância da inclusão, da acessibilidade, do respeito
            e dos direitos das pessoas com deficiência.
        </p>

        <div class="cards">

            <div class="card">
                <div class="icone">🤝</div>
                <h3>Inclusão</h3>
                <p>
                    Todas as pessoas devem ter oportunidades de participar
                    da sociedade com igualdade.
                </p>
            </div>

            <div class="card">
                <div class="icone">♿</div>
                <h3>Acessibilidade</h3>
                <p>
                    Espaços, serviços e tecnologias devem ser acessíveis
                    para diferentes necessidades.
                </p>
            </div>

            <div class="card">
                <div class="icone">❤️</div>
                <h3>Respeito</h3>
                <p>
                    Respeitar as diferenças é fundamental para combater
                    o preconceito e a discriminação.
                </p>
            </div>

        </div>

    </section>


    <!-- BENGALAS -->
    <section id="bengalas" class="bengalas">

        <h2 class="titulo">Você sabe o significado das cores das bengalas?</h2>

        <p class="texto">
            A bengala longa é um recurso de orientação e mobilidade.
            No Brasil, as cores podem indicar diferentes condições
            relacionadas à deficiência visual.
        </p>


        <div class="cards">

            <!-- BRANCA -->
            <div class="card bengala bengala-branca">

                <div class="icone">⚪</div>

                <h3>Bengala Branca</h3>

                <div class="barra barra-branca"></div>

                <p>
                    É utilizada por pessoas com <strong>cegueira</strong>.
                </p>

            </div>


            <!-- VERDE -->
            <div class="card bengala bengala-verde">

                <div class="icone">🟢</div>

                <h3>Bengala Verde</h3>

                <div class="barra barra-verde"></div>

                <p>
                    É utilizada por pessoas com
                    <strong>baixa visão</strong>.
                </p>

            </div>


            <!-- VERMELHA E BRANCA -->
            <div class="card bengala bengala-vermelha">

                <div class="icone">🔴</div>

                <h3>Bengala Branca e Vermelha</h3>

                <div class="barra barra-vermelha"></div>

                <p>
                    É utilizada por pessoas com
                    <strong>surdocegueira</strong>.
                </p>

            </div>

        </div>

    </section>


    <!-- VÍDEO -->
    <section id="video" class="video-area">

        <h2 class="titulo">Vídeo sobre Inclusão</h2>

        <p>
            Assista ao vídeo sobre inclusão de uma criança com deficiência.
        </p>

        <div class="video-container">

            <iframe
                src="https://www.youtube.com/embed/Bz1LAj3kt6s"
                title="Inclusão de uma criança com deficiência"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>

        </div>

    </section>


    <!-- ACESSIBILIDADE -->
    <section id="acessibilidade">

        <div class="acessibilidade">

            <h2 class="titulo">Como podemos ajudar na inclusão?</h2>

            <div class="lista">

                <ul>

                    <li>
                        Respeitar a autonomia e as escolhas da pessoa com deficiência.
                    </li>

                    <li>
                        Não fazer comentários preconceituosos ou tratar a pessoa
                        de forma infantilizada.
                    </li>

                    <li>
                        Perguntar antes de oferecer ajuda e respeitar a resposta.
                    </li>

                    <li>
                        Respeitar espaços e recursos destinados à acessibilidade.
                    </li>

                    <li>
                        Incentivar ambientes escolares, profissionais e públicos
                        mais acessíveis.
                    </li>

                    <li>
                        Combater o preconceito e valorizar as diferenças.
                    </li>

                </ul>

            </div>

        </div>

    </section>


    <!-- FRASE FINAL -->
    <section class="frase">

        <h2>Inclusão não é favor. É direito.</h2>

        <p>
            Uma sociedade acessível é uma sociedade para todos.
        </p>

    </section>


    <!-- RODAPÉ -->
    <footer>

        <p>
            Dia Nacional de Luta da Pessoa com Deficiência • 21 de Setembro
        </p>

        <p>
            Trabalho de conscientização e inclusão
        </p>

    </footer>


    <script>

        // Pequena animação ao aparecerem os cards
        const cards = document.querySelectorAll(".card");

        const observer = new IntersectionObserver((entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }

            });

        }, {
            threshold: 0.15
        });


        cards.forEach(card => {

            card.style.opacity = "0";
            card.style.transform = "translateY(25px)";
            card.style.transition = "0.6s ease";

            observer.observe(card);

        });

    </script>

</body>
</html>
```
