module.exports = () => `
module.exports = {
    info: {
      // API informations (required)
      title: 'Application APIs', // Title (required)
      version: '1.0.0', // Version (required)
      description: 'Application APIs', // Description (optional)
    },
    apis: ['./*-swagger-spec.js'],
    // host: 'http://localhost:3000',
    basePath: '/', // Base path (optional)
};
`;