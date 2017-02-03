module.exports = [
    {
      method: 'GET',
      path: '/',
      handler: function (request, reply) {
        reply.file('./dist/index.html')
      },
      config: {
        description: 'web app initial page',
        notes: 'this is landing page with the client app script paths',
        tags : ['app']
      }
    },
    {
      method: 'GET',
      path: '/{file*}',
      handler:{
        directory: {
           path: './dist'
       }
    }
    }
];
