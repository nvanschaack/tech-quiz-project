const typeDefs = `
  type User {
    _id: ID
    username: String
    email: String
    password: String
    highScore: Float
  }

  type Quiz {
    question: String!
    options: [String]!
    correctAnswer: String!
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    users: [User]
    user(_id: ID!): User
    quizzes: [Quiz]
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth

    login(email: String!, password: String!): Auth
    
    # addQuiz in future....
  }
`;

module.exports = typeDefs;
