module.exports = {
  client: {
    service: {
      name: 'my-schema',
      localSchemaFile: './src/schemas/schema.graphql',
    },
    // hack: remove .graphql from includes to avoid duplicate schema errors
    includes: ['./src/**/*.{ts,js,tsx}'],
  },
};
