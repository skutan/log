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
  title: 'Hjálpin',
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
          { text: 'Almennt', link: '/logskraning/fiski-u12' },
          { text: 'Lög og reglur', link: '/logskraning/log-reglur' },
          { text: 'Mönnunarreglur', link: '/flokkar-fiski' }
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
          { text: 'Innskráning', link: '/logskraning/log-ytri'},
          { text: 'Val á skip', link: '/logskraning/log-ytri' },
          { text: 'Lögskráningarsíða skips', link: '/almennt/logskraning' },
          { text: 'Lögskráning einstaklings', link: '/almennt/logskraning' },
          
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
          { text: 'Fiskiskip og önnur skip', link: '/logskraning/log-ytri' },

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
