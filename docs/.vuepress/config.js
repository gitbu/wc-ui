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
          title: '开发指南',
          collapsable: false,
          children: [
            'start',
            'theme',
          ]
        },
        {
          title: '基础',
          collapsable: false,
          children: [
            'basic/color',
            'basic/font',
            'basic/border',
          ]
        },
        {
          title: '组件',
          collapsable: false,
          children: [
            'components/icon',
            'components/json-view',
            'components/table'
          ]
        },
      ],
    }
  },
  configureWebpack: {
    resolve: {
      mainFields: ["main"],
      alias: {
        '@alias': '/to/some/dir'
      }
    }
  }
}