import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.js";
import { resolvers } from "./resolvers.js";
import { TrackAPI } from "./datasources/track-api.js";

// With mocks enabled, Apollo Server always returns exactly two entries for every list field.
// To get more entries at a time, let's say 6, we'll add a Query.tracksForHome to our mocks object and return an
// Array of that given length like so: [...new Array(6)].
// const mocks = {};

const server = new ApolloServer({
  typeDefs,
  // To enable basic mocked data, we could provide mocks:true to the ApolloServer constructor.
  // mocks,
  resolvers,
  dataSources: () => {
    return {
      trackAPI: new TrackAPI(),
    };
  },
});

server.listen().then(() => {
  console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at https://studio.apollographql.com/dev
    `);
});
