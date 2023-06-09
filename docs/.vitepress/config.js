// import { SearchPlugin } from "vitepress-plugin-search";
import { defineConfig } from 'vitepress'

//default options
// var options = {
//   ...flexSearchIndexOptions,
//   previewLength: 62,
//   buttonLabel: "Search",
//   placeholder: "Search docs",
// };

export default ({
  // plugins: [SearchPlugin(options)],
  base: '/log/',
  title: 'Skútan',
  description: "Skútan - lögskráningar",
  themeConfig: {
    search: {
      provider: 'local'
    },
    outlineTitle: 'Í þessum kafla',
    logo: 'https://images.ctfassets.net/8k0h54kbe6bj/3EumKpWqbPFygVWxWteoW/2961b0d9c162e8528e5771ab1707a368/Samgongustofa-stakt-400-400.png',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Forsíða', link: '/' },
      // { text: 'Skip', link: '/skirteini' },
      { text: 'Lögskráningar', 
        items: [
          { text: 'Almennt um kerfið', link: '/almennt' },
          { text: 'Réttindaflokkar', link: '/flokkar-fiski' },
          { text: 'Forsendur lögskráninga', link: '/forsendur-onnur-skip' },
          { text: 'Mönnunarreglur', link: '/monnun-fiski-u12' }
        ]
       },
       { text: 'Lög og reglur', link: '/logskraning/log-reglur' },
      // { text: 'Vefþjónustur', link: '/markdown-examples' },
      { text: 'Spurt & svarað', link: '/faq' },
      
    ],
    sidebar: [
      {
        text: 'Almennt',
        collapsed: false,
        items: [
          { text: 'Almennt um kerfið', link: '/almennt'},
          // { text: 'Listi skipa', link: '/almennt#val-a-skipi'},
          // { text: 'Val á skip', link: '/logskraning/log-ytri' },
          // { text: 'Lögskráningarsíða skips', link: '/almennt/logskraning' },
          // { text: 'Lögskráning einstaklings', link: '/almennt/logskraning' },
          
          // { text: 'Lög og reglur', link: '/logskraning/log-reglur' },
        ]
      },
      {
        text: 'Flokkar atvinnuréttinda',
        collapsed: false,
        items: [
          { text: 'Fiskiskip og önnur skip', link: '/flokkar-fiski'},
          { text: 'Farþegaskip', link: '/flokkar-fartega' },
        ]
      },
      {
        text: 'Forsendur lögskráningar',
        collapsed: false,
        items: [
          { text: 'Fiskiskip og önnur skip', link: '/forsendur-onnur-skip'},
          { text: 'Farþegabátar og farþegaskip', link: '/forsendur-fartegaskip'}
        ]
      },
      {
        text: 'Mönnunarreglur',
        collapsed: false,
        items: [
          { text: 'Fiskiskip og önnur skip <12m', link: '/monnun-fiski-u12' },
          { text: 'Farþegabátar, farþega- og flutningarskip', link: '/monnun-fartega' },
          // { text: 'Fiskiskip og önnur skip <15m, <750kW', link: '/monnun/fiski-u15' },
          // { text: 'Fiskiskip og önnur skip >15m', link: '/logskraning/monnun-y15' },
          // { text: 'Farþegabátar, farþega- og flutningaskip', link: '/logskraning/monnun-fartega' },
        ]
      },
      // {
      //   text: 'Annað',
      //   collapsed: true,
      //   items: [
      //     { text: 'Markdown Examples', link: '/markdown-examples' },
      //     { text: 'Runtime API Examples', link: '/api-examples' }
      //   ]
      // }
    ],

    // socialLinks: [
    //   { icon: '', link: 'https://www.samgongustofa.is' }
    // ]
  }
})
