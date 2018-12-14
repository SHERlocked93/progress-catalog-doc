module.exports = {
  title: 'progress-catalog',
  port: 9500,
  base: '/progress-catalog-doc/',
  dest: 'progress-catalog-doc',
  description:
    'Generate a progress catalog by html tag (h1, h2, h3, h4, h5, h6) 😜',
  themeConfig: {
    lastUpdated: 'Last Updated',
    sidebar: [
      {
        title: '目录',
        collapsable: false,
        children: ['/guide', '/api']
      }
    ],
    displayAllHeaders: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Api', link: '/api' },
      { text: 'Guide', link: '/guide' },
      {
        text: 'Github',
        link: 'https://github.com/SHERlocked93/progress-catalog'
      }
    ]
  },
  markdown: { lineNumbers: true }
};
