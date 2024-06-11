import { gql } from '@apollo/client';

export const QUERY_ALL_USERS = gql`
    query getAllUsers {
      users {
        _id
        username
        email
        password
        highScore
      }
    }
`;

export const QUERY_USER = gql`
query getOneUser($id: ID!) {
  user(_id: $id) {
    _id
    username
    email
    password
    highScore
  }
}
`;

export const QUERY_ALL_QUIZZES = gql`
query getAllQuizzes {
  quizzes {
    question
    options
    correctAnswer
  }
}
`;

// TO DISPLAY HIGH SCORE
export const QUERY_ME = gql`
query me {
  me {
    _id
    username
    email
    password
    highScore
  }
}
`;