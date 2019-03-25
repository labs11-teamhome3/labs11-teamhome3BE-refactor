const { GraphQLServer } = require('graphql-yoga')

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
})
server.start(() => console.log(`Server is running on http://localhost:4000`));