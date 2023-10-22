import express from "express";
 
const app = express();

const host = '0.0.0.0';
const porta = 3000;

function gerarPaginaTabuada(requisicao, resposta) {
  try {
    const numero = Number(requisicao.query.numero);
    let conteudoResposta = `<!DOCTYPE html>
    <html lang="pt-br">
    
      <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet"
          integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
          <title>Tabuada do número ${numero}</title>
      </head>
      <body>
      <header>
      </header>
      <main>
            <div class="container">
                <div class="row">
                    <div class="col-2">
                        <h1>Tabuada do Número ${numero}</h1>
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>Multiplicador</th>
                                    <th>Resultado</th>
                                </tr>
                            </thead>
                            <tbody>
                                <!-- Loop para exibir a tabuada -->
                                `;
    for (let i = 1; i <= 10; i++) {
        conteudoResposta += `
                                <tr>
                                    <td>${numero} x ${i} = </td>
                                    <td>${numero * i}</td>
                                </tr>
                                `;
    }
    conteudoResposta += `
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
      </main>
      <footer>
      </footer>
      <!-- Bibliotecas JavaScript do Bootstrap -->
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.6/dist/umd/popper.min.js"
        integrity="sha384-oBqDVmMz9ATKxIep9tiCxS/Z9fNfEXiDAYTujMAeBAsjFuCZSmKbSSUnQlmh/jp3" crossorigin="anonymous">
      </script>
    
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.min.js"
        integrity="sha384-7VPbUDkoPSGFnVtYi0QogXtr74QeVeeIs99Qfg5YCF+TidwNdjvaKZX19NZ/e6oz" crossorigin="anonymous">
      </script>
     </body>
    
    </html>`;
    resposta.end(conteudoResposta);

  } catch(erro) {
    resposta.status(400);
    resposta.end(`<!DOCTYPE html>
    <html lang="pt-br">
    <head>
      <meta charset="utf-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
       <title>Tabuada</title>
       </head>
       <body>
       <h1>Não foi possível gerar a tabuada</h1>
        <h2>Erro: ${erro.message}</h2>
        </body>
        </html>
        `);
        return;
  }
}


app.get('/tabuada', gerarPaginaTabuada);

app.listen(porta, host, () => {
  console.log(`Servidor executando em http://${host}:${porta}.`);
});
