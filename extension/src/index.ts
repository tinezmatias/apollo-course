import { ApolloServer } from 'apollo-server';
const { loadFiles } = require('@graphql-tools/load-files'); // loadFiles doesn't support #import syntax
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
require('dotenv').config();

const main = async () => {
  const typeDefs = await loadFiles('src/schemas/*.graphql');
  const resolvers = await loadFiles('src/resolvers/*.ts');

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
    context: ({ req }) => {
      return {
        authorization: req.headers.authorization,
      };
    },
  });

  // The `listen` method launches a web server.
  server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });
};

main();
