# República Adega — site oficial (modelo)

Site estático em português do Brasil, adaptado do layout de `gabrielxcosta.github.io` para `gabrielxcosta/republica-adega`.

## Publicação pelo GitHub Pages

1. Extraia o ZIP e envie **os arquivos de dentro da pasta `republica-adega`** para a raiz do repositório `gabrielxcosta/republica-adega`. Não envie só o arquivo ZIP ou a pasta como subpasta.
2. Em **Settings → Pages**, configure **Deploy from a branch** → **main** → **/(root)**.
3. O site ficará disponível em `https://gabrielxcosta.github.io/republica-adega/` após a publicação.

## Estrutura

- `index.html`: Sobre; fundação (1963), história, acervo, vagas e localização com mapa interativo.
- `ex-alunos.html`: primeira geração e espaço para futuros perfis de ex-moradores.
- `homenageados.html`: seção preparada para homenagens confirmadas.
- `moradores.html`: seção preparada para residentes atuais; nomes não inventados.
- `assets/site.css`, `assets/site.js`: visual responsivo e comportamento do site.
- `imagens/logo-adega.png`: o logo principal escolhido, conservado como enviado (apenas margens transparentes recortadas).
- `imagens/logo-adega-700.webp` e `logo-adega-1100.webp`: versões otimizadas.
- O site usa somente o logo principal `imagens/logo-adega.png` (e suas versões otimizadas) em toda a identidade visual, inclusive como ícone do navegador.
- `imagens/historia-*.webp`: páginas digitalizadas do acervo fornecido para apoio à seção histórica.

## Cores

- Fundo: `#ebe6dc`
- Detalhes: `#61262a`

## Fontes da história

- Material comemorativo da República Adega (50 anos), digitalização fornecida pelo solicitante, especialmente páginas 10–11, 14–15, 20, 28–29 (numeração impressa no acervo).
- Site histórico da República: https://adega5.wixsite.com/republicaadega/slideshow
- Notícia UFOP de 2014: https://ufop.br/noticias/repblica-adega-lana-livro-e-documentrio-sobre-sua-histria
- Registro institucional: https://www.prace.ufop.br/assistencia-estudantil/moradia-estudantil/modalidade-de-gestao-compartilhada/adega

O relato dos quatro moradores que se mudaram no marco fundador e o estatuto que lista cinco fundadores são apresentados separadamente. Não são inventados nomes, fotografias ou homenagens de pessoas atuais. O CEP `35400-111` e as informações de proximidade seguem os dados enviados pelo solicitante; registros mais antigos mostram `35400-000`.

**Mapa**: incorporado via Google Maps (iframe pela busca do endereço informado). Não requer token nem servidor; depende de conexão à internet. Ao abrir localmente, o navegador pode restringir incorporações; no GitHub Pages funcionará conforme as políticas do provedor.
