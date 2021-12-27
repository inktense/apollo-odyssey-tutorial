import { ApolloServer } from "apollo-server";
import { typeDefs } from "./schema.js";

// With mocks enabled, Apollo Server always returns exactly two entries for every list field.
// To get more entries at a time, let's say 6, we'll add a Query.tracksForHome to our mocks object and return an 
// Array of that given length like so: [...new Array(6)].
const mocks = {
  Query: () => ({
    tracksForHome: () => [...new Array(7)],
  }),
  Track: () => ({
    id: () => "track_01",
    title: () => "Astro Kitty, Space Explorer",
    author: () => {
      return {
        name: "Grumpy Cat",
        photo:
          "https://res.cloudinary.com/dety84pbu/image/upload/v1606816219/kitty-veyron-sm_mctf3c.jpg",
      };
    },
    thumbnail: () =>
      "https://res.cloudinary.com/dety84pbu/image/upload/v1598465568/nebula_cat_djkt9r.jpg",
    length: () => 1210,
    modulesCount: () => 6,
  }),
};

const server = new ApolloServer({
  typeDefs,
  //To enable basic mocked data, we could provide mocks:true to the ApolloServer constructor.
  mocks,
});

server.listen().then(() => {
  console.log(`
      🚀  Server is running!
      🔉  Listening on port 4000
      📭  Query at https://studio.apollographql.com/dev
    `);
});
