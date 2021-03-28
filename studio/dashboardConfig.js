export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '6060f0c6000369c69d0c12b4',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-eb2yrw6v',
                  apiId: '1863bfe6-8157-41c1-8e95-fffc10b18cd5'
                },
                {
                  buildHookId: '6060f0c6fd0e7cfd9dbaa8e0',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-6zykxst6',
                  apiId: 'b5825cbb-5fa5-4b23-b80d-fb3b6820aa09'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/JakeBHU/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-6zykxst6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
