import katex from 'markdown-it-katex'


export default {
  base: '/aguas-da-cidade-jardim/',

  lang: 'pt-BR',
  title: 'Monitorando as Águas',
  description: 'Monitorando as Águas da Ponte Cidade Jardim.',

  head: [
    ['link', { rel: 'icon', href: "data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%22-0.1em%22 y=%22.90em%22 font-size=%2286%22>🔬</text></svg>" }],
    ['link', { rel: 'stylesheet', href: "https://cdnjs.cloudflare.com/ajax/libs/KaTeX/0.5.1/katex.min.css" }]
  ],

  markdown: {
    config: (md) => {
      // use more markdown-it plugins!
      md.use(katex)
    }
  },

  themeConfig: {
    siteTitle: '🔬 Monitorando as Águas',

    nav: [
      { text: 'Insper', link: 'https://insper.edu.br' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/FelixLuciano/aguas-da-cidade-jardim' }
    ],

    sidebar: [
      {
        text: 'Introdução',
        items: [
          { text: 'Sobre', link: '/sobre/' },
          { text: 'Indicadores', link: '/sobre/indicadores' }
        ]
      },
      {
        text: 'Resultados',
        items: [
          { text: 'Relatório 2022', link: '/reports/2022' }
        ]
      }
    ],

    outline: 'deep',
    outlineTitle: 'Tópicos',

    footer: {
      message: 'Publicado sob a Licença MIT.',
      copyright: 'Copyright © 2022'
    }
  }
}
