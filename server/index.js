let { ApolloServer } = require('apollo-server');
let typeDefs = require('./schema');
let resolvers = require('./resolvers');

let apolloServer = new ApolloServer({typeDefs,resolvers});

apolloServer.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
  });