import { gql } from "apollo-server";

const typeDefs = gql`
  "A track is a group of Modules that teaches about a specific topic"
  type Track {
    id: ID!
    title: String!
    author: Author!
    thumbnail: String
    length: Int
    modulesCount: Int
  }

  "Author of a complete Track or a Module"
  type Author {
    id: ID!
    name: String!
    photo: String
  }

  type Query {
    "Get tracks array for homepage grid"
    tracksForHome: [Track!]!
  }



#   const typeDefs = gql`
#   type SpaceCat {
#     id: ID!
#     name: String!
#     age: Int
#     missions: [Mission] 
#   }

#   type Mission {
#     id: ID!
#     name: String!
#     description: String!
#   }

#   type Query {
#     spaceCats: [SpaceCat]
#   }
# `
`;
module.exports = typeDefs;
