import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: '/technology/',
  title: "LargeRice16pro's Blog",
  description: "A VitePress Site",

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    outlineTitle: '目录',
    outline: [2,6],
    nav: [
      { text: '首页', link: '/' },
      { text: 'Python', link: '/python' },
      { text: '出题',
        items:[
          { text: 'ZSTU', link: '/出题/zstu'},
          { text: 'nowcoder', link: '/出题/nowcoder'},
        ]
      },
    ],

    sidebar: {
      '/about/': [
        {
          text: '关于我',
          items: [
            { text: '我是谁', link: '/about/我是谁' },
            { text: '获奖情况', link: '/about/获奖情况' },
            { text: '实习-工作经历', link: '/about/实习-工作经历'},
          ]
        }
      ],

      '/出题/zstu': [
        {
          text: 'ZSTU ACM 出题日志',
          items:[
            {text: 'zstu 2025 校赛', link: '/出题/zstu/2025校赛'},
          ]
        }
      ],


      '/出题/nowcoder': [
        {
          text: '牛客出题日志',
          items:[
            {text: '牛客小白月赛备选 1 号', link: '/出题/nowcoder/小白 1'},
            {text: '牛客小白月赛备选 2 号', link: '/出题/nowcoder/小白 2'},
            {text: '牛客小白月赛备选 3 号', link: '/出题/nowcoder/小白 3'},
          ]
        }
      ],

    },

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]

    lastUpdated:{
      text: "最后更新",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "short",
      },
    },
  },

    markdown: {
      math: true
    },
})
