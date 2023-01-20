const swaggerConfig = {
  definition: {
    openapi: '3.0.1',
    info: {
      title: 'API SharEnergy',
      description: `API para gerenciar usuários e clientes. \n
        API com autenticação JWT. \n
          - Para acessar rotas protegidas, fazer o login e usar o Token gerado. \n
          - Cada usuário tem um token único que expira a cada 48h.`,
      version: '1.0.0',
    },
    servers: [{
      url: 'http://localhost:3001',
      description: 'servidor local',
    }],
    components: {
      securitySchemes: {
        apiKey: {
          type: 'apiKey',
          name: 'Authorization',
          in: 'header',
        },
      },
    },
  },
  apis: [
    './src/routes/Client.ts',
    './src/routes/User.ts',
  ],
};

export default swaggerConfig;
