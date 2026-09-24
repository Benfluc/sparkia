/* =========================================================================
   SparkIA — ARQUIVO DE CONTEÚDO
   -------------------------------------------------------------------------
   Este é o ÚNICO arquivo que você precisa editar para mudar os textos do site.
   Basta alterar o que está entre aspas e salvar. Depois recarregue a página.

   Dicas rápidas:
   • Para quebrar linha dentro de um texto, use <br>
   • Para destacar uma palavra em azul, envolva assim: <b>palavra</b>
   • Para remover um item de uma lista, apague o bloco { ... }, inclusive a vírgula
   • Nunca apague as aspas, as chaves { } ou os colchetes [ ]

   >>> Tudo marcado com "SUBSTITUIR" é um exemplo fictício. Troque pelos
       seus dados reais antes de publicar o site. <<<
   ========================================================================= */

const CONTEUDO = {

  /* ---------------------------------------------------------------------
     1. IDENTIDADE DO SITE
     --------------------------------------------------------------------- */
  site: {
    nome: "SparkIA",
    slogan: "Consultoria em Inteligência Artificial e Ciência de Dados",
    // Texto que aparece na aba do navegador
    tituloAba: "SparkIA — Consultoria em Inteligência Artificial e Ciência de Dados",
    // Descrição usada pelo Google e por links compartilhados no WhatsApp/LinkedIn
    descricao: "Consultoria em Inteligência Artificial e Ciência de Dados: aplicação de IA em negócios, coleta de dados, websites, monitoramento e chatbots.",
    // Endereço do site depois de publicado (opcional)
    url: "https://www.sparkia.com.br"   // SUBSTITUIR
  },

  /* ---------------------------------------------------------------------
     2. MENU DO TOPO
     O campo "alvo" precisa começar com # e corresponder ao id da seção.
     --------------------------------------------------------------------- */
  menu: [
    { rotulo: "Quem somos",  alvo: "#quem-somos" },
    { rotulo: "Serviços",    alvo: "#servicos" },
    { rotulo: "Como fazemos", alvo: "#processo" },
    { rotulo: "Clientes",    alvo: "#clientes" },
    { rotulo: "Contato",     alvo: "#contato" }
  ],
  botaoTopo: { rotulo: "Fale com a gente", alvo: "#contato" },

  /* ---------------------------------------------------------------------
     3. SEÇÃO INICIAL (HERO)
     --------------------------------------------------------------------- */
  hero: {
    etiqueta: "Inteligência Artificial aplicada a negócios reais",
    titulo: "Transformamos <b>dados</b> em decisões<br>que geram resultado",
    subtitulo: "Somos uma consultoria de tecnologia que ajuda empresas a sair da intuição e passar a decidir com evidência. Diagnóstico, dados, modelos e automação. Do primeiro diagnóstico ao sistema rodando em produção.",
    botaoPrincipal:   { rotulo: "Agendar diagnóstico gratuito", alvo: "#contato" },
    botaoSecundario:  { rotulo: "Ver nossos serviços", alvo: "#servicos" },
    // Números que aparecem logo abaixo. Use o formato que quiser no "valor".
    indicadores: [
      { valor: "+40",  rotulo: "projetos entregues" },       // SUBSTITUIR
      { valor: "+12",  rotulo: "setores atendidos" },        // SUBSTITUIR
      { valor: "98%",  rotulo: "de clientes recorrentes" },  // SUBSTITUIR
      { valor: "24h",  rotulo: "para o primeiro retorno" }   // SUBSTITUIR
    ]
  },

  /* ---------------------------------------------------------------------
     4. QUEM SOMOS
     --------------------------------------------------------------------- */
  quemSomos: {
    etiqueta: "Quem somos",
    titulo: "Tecnologia com método,<br>resultado com <b>evidência</b>",
    paragrafos: [
      "A SparkIA nasceu da união entre pesquisa acadêmica e prática de mercado. Trabalhamos na fronteira entre ciência de dados, inteligência artificial e desenvolvimento de software. Nossa obsessão é simples: entregar tecnologia que muda um indicador de negócio, não apenas uma demonstração bonita.",
      "Atuamos lado a lado com o cliente. Entendemos o processo antes de propor a ferramenta, medimos o ponto de partida antes de prometer ganho e deixamos tudo documentado para que a sua equipe siga sozinha depois que sairmos."
    ],
    // Pilares/diferenciais exibidos em cartões
    pilares: [
      {
        icone: "alvo",
        titulo: "Foco em problema, não em moda",
        texto: "Só recomendamos IA quando ela é a melhor resposta. Muitas vezes o ganho está em organizar o dado antes de modelar."
      },
      {
        icone: "grafico",
        titulo: "Rigor metodológico",
        texto: "Validação estatística, métricas claras e honestidade sobre os limites de cada modelo. Sem números inflados."
      },
      {
        icone: "engrenagem",
        titulo: "Entrega em produção",
        texto: "Levamos a solução até o uso diário: integração, monitoramento e treinamento da equipe."
      },
      {
        icone: "escudo",
        titulo: "Dados sob controle",
        texto: "Arquitetura pensada para privacidade e conformidade com a LGPD desde o primeiro dia."
      }
    ]
  },

  /* ---------------------------------------------------------------------
     5. SERVIÇOS
     Ícones disponíveis: "cerebro", "banco", "codigo", "radar", "chat",
     "nuvem", "grafico", "alvo", "engrenagem", "escudo", "raio", "robo"
     --------------------------------------------------------------------- */
  servicos: {
    etiqueta: "Nossos serviços",
    titulo: "Do dado bruto ao sistema <b>rodando</b>",
    subtitulo: "Contrate uma frente isolada ou a jornada completa. Cada serviço começa com um diagnóstico sem custo.",
    itens: [
      {
        icone: "cerebro",
        titulo: "Consultoria em IA para negócios",
        texto: "Mapeamos os processos da empresa, identificamos onde a inteligência artificial gera retorno real e desenhamos um roteiro de adoção com prioridade, custo e prazo.",
        marcadores: ["Diagnóstico de maturidade", "Casos de uso priorizados", "Estudo de viabilidade e ROI"]
      },
      {
        icone: "banco",
        titulo: "Coleta e engenharia de dados",
        texto: "Construímos a base sobre a qual tudo se apoia: extração de fontes públicas e internas, web scraping, integração de APIs, limpeza, padronização e armazenamento.",
        marcadores: ["Web scraping e APIs", "Pipelines automatizados (ETL)", "Tratamento e qualidade de dados"]
      },
      {
        icone: "grafico",
        titulo: "Análise de dados e modelagem",
        texto: "Modelos preditivos, séries temporais, segmentação de clientes, avaliação de eficiência e painéis interativos que traduzem números em decisão.",
        marcadores: ["Modelos preditivos", "Dashboards interativos", "Relatórios técnicos"]
      },
      {
        icone: "codigo",
        titulo: "Criação de websites e sistemas",
        texto: "Sites institucionais, landing pages de alta conversão, portais e sistemas web sob medida: rápidos, responsivos e preparados para buscadores.",
        marcadores: ["Sites e landing pages", "Sistemas web sob medida", "Otimização para SEO"]
      },
      {
        icone: "radar",
        titulo: "Monitoramento inteligente",
        texto: "Sensores, indicadores e alertas em tempo real. Acompanhamos o que importa e avisamos antes que o problema vire prejuízo.",
        marcadores: ["Painéis em tempo real", "Alertas automáticos", "Detecção de anomalias"]
      },
      {
        icone: "chat",
        titulo: "Chatbots e assistentes de IA",
        texto: "Assistentes treinados com o conhecimento da sua empresa para atender clientes, apoiar equipes internas e responder no WhatsApp, site ou sistemas próprios.",
        marcadores: ["Assistentes com base própria (RAG)", "Integração com WhatsApp e site", "Atendimento 24 horas"]
      },
      {
        icone: "nuvem",
        titulo: "Automação de processos",
        texto: "Eliminamos o trabalho repetitivo: relatórios que se montam sozinhos, rotinas agendadas e integrações entre os sistemas que você já usa.",
        marcadores: ["Rotinas agendadas", "Integração entre sistemas", "Relatórios automáticos"]
      },
      {
        icone: "raio",
        titulo: "Treinamento e capacitação",
        texto: "Workshops práticos para times técnicos e não técnicos usarem IA e dados no dia a dia, com material e exercícios sobre o contexto da sua empresa.",
        marcadores: ["Workshops sob medida", "Trilhas para times", "Material de apoio"]
      }
    ]
  },

  /* ---------------------------------------------------------------------
     6. COMO TRABALHAMOS
     --------------------------------------------------------------------- */
  processo: {
    etiqueta: "Como trabalhamos",
    titulo: "Um método em <b>quatro etapas</b>",
    subtitulo: "Transparente do começo ao fim: você sabe onde estamos, o que vem depois e quanto custa.",
    etapas: [
      { numero: "01", titulo: "Diagnóstico",  texto: "Conversa inicial sem custo para entender o processo, os dados disponíveis e o resultado esperado." },
      { numero: "02", titulo: "Proposta",     texto: "Escopo, entregáveis, prazo e investimento por escrito. Nada começa sem alinhamento." },
      { numero: "03", titulo: "Construção",   texto: "Desenvolvimento em ciclos curtos, com entregas parciais e validação contínua com você." },
      { numero: "04", titulo: "Operação",     texto: "Implantação, treinamento da equipe, documentação e acompanhamento dos resultados." }
    ]
  },

  /* ---------------------------------------------------------------------
     7. CLIENTES
     LOGOS: se você tiver o arquivo do logo, salve em img/clientes/ e coloque
     o caminho em "logo". Ex.: logo: "img/clientes/acme.png"
     Deixando logo como null, o site mostra o nome escrito em estilo de marca.
     --------------------------------------------------------------------- */
  clientes: {
    etiqueta: "Clientes",
    titulo: "Empresas que confiam na <b>SparkIA</b>",
    subtitulo: "De startups a órgãos públicos — o método é o mesmo: entender o problema antes de propor a tecnologia.",
    // SUBSTITUIR todos os nomes abaixo pelos seus clientes reais
    logos: [
      { nome: "Norte Agro",        logo: null },
      { nome: "Vertize",           logo: null },
      { nome: "Clínica Aurora",    logo: null },
      { nome: "Prefeitura Modelo", logo: null },
      { nome: "LogPrime",          logo: null },
      { nome: "Editora Cedro",     logo: null },
      { nome: "Banco Aurum",       logo: null },
      { nome: "InovaLab",          logo: null }
    ],
    // SUBSTITUIR os depoimentos por textos reais, com autorização do cliente
    depoimentos: [
      {
        texto: "A SparkIA organizou dados que estavam espalhados em dez planilhas e entregou um painel que hoje abre toda reunião de diretoria. Paramos de discutir qual número está certo e passamos a discutir o que fazer com ele.",
        autor: "Mariana Alves",
        cargo: "Diretora de Operações",
        empresa: "Norte Agro",
        foto: null            // opcional: "img/clientes/mariana.jpg"
      },
      {
        texto: "Implantamos o assistente de atendimento em três semanas. A fila de e-mails caiu pela metade e o time passou a cuidar dos casos que realmente exigem uma pessoa.",
        autor: "Rafael Menezes",
        cargo: "Gerente de Atendimento",
        empresa: "Vertize",
        foto: null
      },
      {
        texto: "O que mais me marcou foi a honestidade. Em vez de vender um modelo caro, mostraram que o ganho estava em corrigir o cadastro. Fizeram isso, e só depois falamos de IA.",
        autor: "Juliana Prado",
        cargo: "Coordenadora Administrativa",
        empresa: "Clínica Aurora",
        foto: null
      },
      {
        texto: "Precisávamos monitorar indicadores de vários setores em tempo real. Recebemos um sistema que funciona, documentação clara e uma equipe treinada para tocar sozinha.",
        autor: "Carlos Bittencourt",
        cargo: "Secretário de Planejamento",
        empresa: "Prefeitura Modelo",
        foto: null
      }
    ]
  },

  /* ---------------------------------------------------------------------
     8. CONTATO
     --------------------------------------------------------------------- */
  contato: {
    etiqueta: "Contate-nos",
    titulo: "Vamos conversar sobre<br>o seu <b>próximo projeto</b>",
    subtitulo: "Conte em poucas linhas o desafio que você tem hoje. Respondemos em até 24 horas úteis com uma primeira leitura — sem compromisso e sem custo.",

    // SUBSTITUIR pelos seus dados reais
    email: "contato@sparkia.com.br",
    telefone: "(38) 99999-0000",
    whatsapp: "5538999990000",            // só números, com 55 + DDD
    mensagemWhatsapp: "Olá! Vim pelo site da SparkIA e gostaria de conversar sobre um projeto.",
    cidade: "Montes Claros — MG, Brasil",
    horario: "Segunda a sexta, 9h às 18h",

    // Redes sociais. Deixe o campo "url" vazio ("") para esconder o ícone.
    redes: [
      { rede: "linkedin",  url: "https://www.linkedin.com/company/sparkia" },  // SUBSTITUIR
      { rede: "instagram", url: "https://www.instagram.com/sparkia" },         // SUBSTITUIR
      { rede: "github",    url: "" },
      { rede: "youtube",   url: "" }
    ],

    formulario: {
      titulo: "Envie sua mensagem",
      // "mailto" abre o programa de e-mail do visitante (funciona sem servidor).
      // Se você criar uma conta no Formspree, troque para "endpoint" e cole o
      // endereço em "endpoint" abaixo. Instruções completas no LEIA-ME.md
      modo: "mailto",
      endpoint: "",
      assunto: "Novo contato pelo site da SparkIA",
      botao: "Enviar mensagem",
      sucesso: "Mensagem preparada! Confira no seu programa de e-mail e clique em enviar.",
      campos: {
        nome:      "Seu nome",
        email:     "Seu melhor e-mail",
        empresa:   "Empresa (opcional)",
        assuntoSel:"Sobre o que quer falar?",
        mensagem:  "Conte um pouco sobre o desafio"
      },
      // Opções do campo de seleção
      opcoes: [
        "Consultoria em IA",
        "Coleta e engenharia de dados",
        "Análise de dados e modelagem",
        "Criação de website ou sistema",
        "Monitoramento",
        "Chatbot / assistente de IA",
        "Automação de processos",
        "Treinamento de equipe",
        "Outro assunto"
      ]
    }
  },

  /* ---------------------------------------------------------------------
     9. RODAPÉ
     --------------------------------------------------------------------- */
  rodape: {
    texto: "Consultoria em Inteligência Artificial e Ciência de Dados. Tecnologia aplicada a problemas reais.",
    cnpj: "",                       // opcional: "00.000.000/0001-00"
    direitos: "Todos os direitos reservados."
  }
};
