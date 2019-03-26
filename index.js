const { GraphQLServer } = require('graphql-yoga');
const { prisma } = require('./generated/prisma-client');

const typeDefs = `
type Query {
    info: String!
    users: [User!]!
  }


type Mutation {
    createUser(name: String!): User!
}

type User {
    id: ID! 
    firstName: String!
    lastName: String!
    email: String!
    avatar: String
    phoneNumber: String
}
`

const resolvers = {
    Query: {
        info: () => `This is the API Team Home 3`
      }
}

const server = new GraphQLServer({
    typeDefs,
    resolvers,
    context: {prisma}
})
server.start(() => console.log(`Server is running on http://localhost:4000`));

// endpoint: https://manaje-be-8de8017c47.herokuapp.com/labs11-teamhome3BE-refactor/dev