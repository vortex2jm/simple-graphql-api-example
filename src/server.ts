import { ApolloServer, gql} from 'apollo-server';

const typeDefs = gql `
  type Query {
    text1: String!
  }
`

const server = new ApolloServer({
  typeDefs,
  resolvers: {
    Query: {
      text1: () => {
        return "Hello world"
      }
    }
  } 

});

server.listen().then(({url}) => {
  console.log(`Server running on ${url}`);
})
