module.exports = {
	base: 'https://vrjuliao.github.io/vuepress/'
	head: [
		['link', { rel: 'icon', type: 'image/png', sizes:'96x96', href: '/bomb.png' }]
	],
	// title: 'Hello VuePress',
	// description: 'VuePress test on github project page',
	themeConfig: {
		logo: '/assets/bomb.png',
		searchMaxSuggestions: 10,
		nav: [
			{
				//text: '<label on navbar>', link: '<link to redirect>'
				text: 'Home', link: '/'
			}
		],
		sidebar: [
			{
				title: 'Grupo 1',
				collapsable: true,
				children: [
					//['<route>', '<label to show on sidebar>']
					['/', 'Home'],
					['/teste2/', 'Teste 2'],
					['/teste2/1.md', 'Teste 2.1']
				]
			}
		]
	}
}