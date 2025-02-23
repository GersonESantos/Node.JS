// Importações necessárias
const { ApolloServer, gql } = require('apollo-server');

// Dados iniciais (simulando um banco de dados)
const users = [
  { id: '1', name: 'John Doe', email: 'john@example.com' },
  { id: '2', name: 'Jane Smith', email: 'jane@example.com' },
];

// Definindo o esquema GraphQL
const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    addUser(name: String!, email: String!): User!
  }
`;

// Resolvers (funções que implementam as operações do esquema)
const resolvers = {
  Query: {
    users: () => users,
    user: (parent, args) => users.find(user => user.id === args.id),
  },
  Mutation: {
    addUser: (parent, args) => {
      const newUser = {
        id: String(users.length + 1),
        name: args.name,
        email: args.email,
      };
      users.push(newUser);
      return newUser;
    },
  },
};

// Criando o servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciando o servidor
server.listen().then(({ url }) => {
  console.log(`🚀 Servidor GraphQL rodando em ${url}`);
});