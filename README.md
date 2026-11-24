# República Adega — site oficial

Site estático em português do Brasil sobre a República Adega, sua história, sua casa e sua comunidade em Ouro Preto.

## Publicação pelo GitHub Pages

1. Envie os arquivos e pastas do site para a raiz do repositório `gabrielxcosta/republica-adega`.
2. Em **Settings → Pages**, configure **Deploy from a branch** → **main** → **/(root)**.
3. Após a publicação, o site estará disponível em <https://gabrielxcosta.github.io/republica-adega/>.

O site não requer instalação de dependências ou etapa de compilação. Para visualizar localmente, abra `index.html` no navegador ou, na pasta do projeto, execute `python3 -m http.server 8000` e acesse `http://localhost:8000/`.

## Estrutura

- `index.html`: apresentação, história, fotos da casa, informações para calouros e localização.
- `ex-alunos.html`: cartões de ex-alunos e homenageados, em seções separadas.
- `homenageados.html`: redirecionamento do endereço antigo para a seção de homenageados.
- `moradores.html`: cartões dos moradores atuais, com fotos e cursos.
- `assets/site.css`: estilos responsivos, marca-d’água e animações.
- `assets/site.js`: menu para celular, carrossel da casa e seleção de locais no mapa.
- `imagens/logo-adega.png`: logo da República e ícone do site.
- `imagens/EM.png` e `imagens/em-tracos.svg`: brasão da Escola de Minas e versão animada usada como marca-d’água.
- `imagens/pessoa.svg`: imagem provisória dos cartões de ex-alunos e homenageados.
- `imagens/casa/`: fotos originais da casa; `imagens/casa/otimizadas/` contém as versões usadas no carrossel.
- `imagens/moradores/`: fotos dos moradores atuais.

Para atualizar os cartões, edite os dados na página HTML correspondente. Para alterar as fotos do carrossel, atualize também a lista de arquivos em `assets/site.js` e as versões otimizadas em `imagens/casa/otimizadas/`.

## Recursos visuais e mapa

O fundo usa a cor `#ebe6dc`, e os detalhes usam `#61262a`. O brasão da Escola de Minas aparece como marca-d’água com traços animados; a animação respeita a preferência do navegador por movimento reduzido.

O mapa é incorporado em um iframe do Google Maps e depende de conexão à internet. Ao passar o mouse ou selecionar uma categoria de locais próximos, o mapa exibe a busca correspondente. A disponibilidade da incorporação depende do Google Maps e das configurações do navegador.

## Fontes da história

- Material comemorativo da República Adega (50 anos), especialmente as páginas 10–11, 14–15, 20 e 28–29 da numeração impressa.
- [Site histórico da República](https://adega5.wixsite.com/republicaadega/slideshow).
- [Notícia da UFOP de 2014](https://ufop.br/noticias/repblica-adega-lana-livro-e-documentrio-sobre-sua-histria).
- [Registro institucional da UFOP](https://www.prace.ufop.br/assistencia-estudantil/moradia-estudantil/modalidade-de-gestao-compartilhada/adega).
