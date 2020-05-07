module.exports = {
  base: '/wc-ui/',
  dest: './dist',
  title: 'Web component组件库',
  description: 'Web component组件库',
  themeConfig: {
    repo: 'gitbu/wc-ui',
    editLinks: true,
    docsDir: 'docs',
    editLinkText: '在 GitHub 上编辑此页',
    lastUpdated: '上次更新',
    sidebar: {
      '/docs/': [
        {
          title: '开始',
          collapsable: false,
          children: [
            'start',
          ]
        }
      ]
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/to/some/dir'
      }
    }
  }
}