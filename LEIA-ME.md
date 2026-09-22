# SparkIA — site institucional

Landing page de página única, sem dependências de servidor. Basta abrir o
`index.html` no navegador para ver o site funcionando.

---

## 1. Estrutura dos arquivos

```
SparkIA-site/
├── index.html          ← estrutura da página (raramente precisa mexer)
├── LEIA-ME.md          ← este guia
├── css/
│   └── estilo.css      ← CORES, fontes e tamanhos
├── js/
│   ├── conteudo.js     ← ★ TODOS OS TEXTOS DO SITE (edite aqui)
│   └── site.js         ← animações e comportamento (não precisa mexer)
└── img/
    ├── logo-horizontal-claro.png   logotipo usado no site (fundo escuro)
    ├── logo-horizontal.png         logotipo original (fundo claro)
    ├── simbolo.png                 símbolo isolado
    ├── simbolo-escuro.png          símbolo para fundo claro
    ├── favicon.ico / favicon.png   ícone da aba do navegador
    ├── apple-touch-icon.png        ícone em celulares Apple
    ├── og-image.png                imagem que aparece ao compartilhar o link
    └── clientes/                   coloque aqui os logos dos seus clientes
```

**Regra de ouro:** 95% das alterações que você vai querer fazer estão em
`js/conteudo.js`. Abra com qualquer editor de texto (Bloco de Notas, VS Code,
Notepad++), altere o que está entre aspas, salve e recarregue a página
(`Ctrl + F5` para forçar a atualização).

---

## 2. Trocar textos

Abra `js/conteudo.js`. Cada seção do site tem um bloco com o mesmo nome:

| Bloco no arquivo | Onde aparece no site |
|---|---|
| `site` | título da aba, descrição no Google |
| `menu` | links do topo |
| `hero` | primeira tela (título grande e números) |
| `quemSomos` | seção "Quem somos" |
| `servicos` | cartões de serviços |
| `processo` | as quatro etapas |
| `clientes` | logos e depoimentos |
| `contato` | e-mail, WhatsApp, redes e formulário |
| `rodape` | rodapé |

Dentro dos textos você pode usar:

- `<br>` para quebrar a linha
- `<b>palavra</b>` para deixar a palavra em azul destacado

---

## 3. Adicionar ou remover um serviço

Em `js/conteudo.js`, procure `servicos:` → `itens: [`. Cada serviço é um bloco
assim:

```js
{
  icone: "radar",
  titulo: "Monitoramento inteligente",
  texto: "Descrição do serviço...",
  marcadores: ["Item 1", "Item 2", "Item 3"]
},
```

Para **adicionar**, copie um bloco inteiro (das chaves `{` até `},`) e cole
logo abaixo, trocando o conteúdo.
Para **remover**, apague o bloco inteiro, incluindo a vírgula final.

**Ícones disponíveis:** `cerebro`, `banco`, `codigo`, `radar`, `chat`,
`nuvem`, `grafico`, `alvo`, `engrenagem`, `escudo`, `raio`, `robo`.

---

## 4. Clientes e depoimentos

### Logos

Em `clientes` → `logos`, cada entrada é:

```js
{ nome: "Norte Agro", logo: null },
```

- Deixando `logo: null`, o site escreve o **nome** em estilo de marca.
- Tendo o arquivo do logo, salve em `img/clientes/` (de preferência PNG com
  fundo transparente, altura de ~80 px) e escreva o caminho:

```js
{ nome: "Norte Agro", logo: "img/clientes/norte-agro.png" },
```

Os logos giram numa esteira contínua e ficam em tons de cinza, coloridos ao
passar o mouse. Funciona bem com 6 a 12 logos.

### Depoimentos

Em `clientes` → `depoimentos`. O campo `foto` é opcional: sem foto, o site
mostra um círculo com as iniciais da pessoa.

> Os nomes, empresas e depoimentos que vieram no arquivo são **fictícios**.
> Troque por clientes reais antes de publicar, e peça autorização por escrito
> para usar nome e depoimento.

---

## 5. Dados de contato

Em `js/conteudo.js`, bloco `contato`:

```js
email: "contato@sparkia.com.br",
telefone: "(38) 99999-0000",
whatsapp: "5538999990000",     // só números: 55 + DDD + número
cidade: "Montes Claros — MG, Brasil",
horario: "Segunda a sexta, 9h às 18h",
```

O número em `whatsapp` alimenta tanto o botão verde flutuante quanto o link do
telefone. Para **esconder uma rede social**, deixe a `url` vazia (`""`).

---

## 6. Formulário: como receber as mensagens

O formulário vem no modo **`mailto`**: ao enviar, abre o programa de e-mail do
visitante já preenchido. Funciona sem servidor nenhum, mas depende de o
visitante ter e-mail configurado.

Para receber as mensagens direto na sua caixa de entrada (recomendado depois de
publicar o site):

1. Crie uma conta gratuita em <https://formspree.io>
2. Crie um formulário e copie o endereço gerado
   (algo como `https://formspree.io/f/xabcdefg`)
3. Em `js/conteudo.js`, bloco `contato` → `formulario`, altere:

```js
modo: "endpoint",
endpoint: "https://formspree.io/f/xabcdefg",
```

Alternativas equivalentes: Getform, Web3Forms ou Basin.

---

## 7. Trocar as cores

Abra `css/estilo.css`. As primeiras 30 linhas concentram tudo:

```css
:root{
  --marca-500:#0E7BB8;   /* azul principal — botões */
  --marca-300:#4FB6EC;   /* azul claro — destaques */
  --fundo-0:#060A10;     /* fundo da página */
  --txt-1:#E9F1F9;       /* cor dos títulos */
  ...
}
```

Mudar esses valores muda o site inteiro de uma vez. As fontes também estão
ali (`--fonte-titulo` e `--fonte-texto`); se trocar por outra família,
lembre-se de atualizar o link do Google Fonts no `index.html`.

---

## 8. Trocar imagens da marca

Substitua os arquivos dentro de `img/` mantendo **os mesmos nomes**. Assim
nada mais precisa ser alterado no código.

- `logo-horizontal-claro.png` — usado no topo e no rodapé (fundo escuro)
- `simbolo.png` — usado no ícone do menu e na arte da primeira tela
- `og-image.png` — miniatura ao compartilhar o link (ideal: 1200 × 630 px)

---

## 9. Publicar o site na internet

Como é um site estático, qualquer hospedagem serve. As opções gratuitas mais
simples:

**Netlify (a mais fácil)**
1. Acesse <https://app.netlify.com/drop>
2. Arraste a pasta `SparkIA-site` inteira para a área indicada
3. Pronto — o site já fica no ar com um endereço provisório

**Vercel**
1. Instale o aplicativo ou use <https://vercel.com/new>
2. Envie a pasta e confirme

**GitHub Pages**
1. Crie um repositório e envie os arquivos
2. Em *Settings → Pages*, escolha a branch `main` e a pasta raiz

**Hospedagem tradicional (cPanel, Hostinger, Locaweb…)**
Envie todo o conteúdo da pasta para o diretório `public_html` por FTP.

Depois de publicar, atualize o campo `site.url` em `js/conteudo.js`.

---

## 10. Perguntas frequentes

**Alterei o arquivo e nada mudou.**
Force a atualização com `Ctrl + F5`. O navegador guarda uma cópia antiga.

**A página ficou em branco.**
Provavelmente falta uma vírgula, uma aspa ou uma chave em `conteudo.js`.
Abra o navegador, pressione `F12`, vá na aba *Console* e veja a linha indicada
no erro.

**As fontes ficaram diferentes.**
O site usa Poppins e Inter, carregadas do Google Fonts. Sem internet, ele cai
para a fonte padrão do sistema — o layout continua correto.

**Funciona no celular?**
Sim. O layout se adapta a celular, tablet e desktop, com menu retrátil.
