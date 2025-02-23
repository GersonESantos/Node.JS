const { ApolloServer, gql } = require('apollo-server');
const connection = require('./database');

// Definindo o esquema GraphQL
const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    passwrd: String!
    created_at: String!
    updated_at: String!
  }

  type Query {
    users: [User!]!
    user(id: ID!): User
  }

  type Mutation {
    addUser(username: String!, passwrd: String!): User!
  }
`;

// Resolvers (funções que implementam as operações do esquema)
const resolvers = {
  Query: {
    users: async () => {
      const [rows] = await connection.promise().query('SELECT * FROM users');
      return rows;
    },
    user: async (parent, args) => {
      const [rows] = await connection.promise().query('SELECT * FROM users WHERE id = ?', [args.id]);
      return rows[0];
    },
  },
  Mutation: {
    addUser: async (parent, args) => {
      const [result] = await connection.promise().query(
        'INSERT INTO users (username, passwrd) VALUES (?, ?)',
        [args.username, args.passwrd]
      );
      const [newUser] = await connection.promise().query('SELECT * FROM users WHERE id = ?', [result.insertId]);
      return newUser[0];
    },
  },
};

// Criando o servidor Apollo
const server = new ApolloServer({ typeDefs, resolvers });

// Iniciando o servidor
server.listen().then(({ url }) => {
  console.log(`🚀 Servidor GraphQL rodando em ${url}`);
});