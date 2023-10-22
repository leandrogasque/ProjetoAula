import express from "express";
 
const app = express();

const host = '0.0.0.0';
const porta = 3000;

function paginaInicial(requisicao, resposta){
    resposta.send(`<!doctype html>
    <html lang="pt-br">
    
    <head>
      <title>Primeira App web</title>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
    </head>
    <body>
      <header>
      </header>
      <main>
            <div class="container">
                <div class="row">
                    <div class="col">
                        <h1>Primeira App web</h1>
                        <p>Esta é a primeira aplicação web com Node.js e Express</p>
                        <p>Esta é a primeira aplicação web com Node.js e Express</p>
                        <p>Esta é a primeira aplicação web com Node.js e Express</p>
                        <p>Esta é a primeira aplicação web com Node.js e Express</p>
                    </div>
                </div>
            </div>
      </main>
      <footer>
      </footer>
      <!-- Bootstrap JavaScript Libraries -->
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
      </script>
    
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
        integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
      </script>
    </body>
    
    </html>`);
    resposta.end();
}
app.get('/', paginaInicial);
app.listen(porta, host, () => {
console.log(`Servidor executando em http://${host}:${porta}.`);
});

