import { gql } from '@apollo/client';

export const CREATE_USER = gql`
mutation createUser($username: String!, $email: String!, $password: String!) {
    addUser(username: $username, email: $email, password: $password) {
      user {
        _id
        username
        email
        password
        highScore
      }
    }
  }
`;

//displays auth token (expires after 2 hours)
export const ADD_PROFILE = gql`
mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      user {
        _id
        username
        email
        password
        highScore
      }
      token
    }
  }
`;

export const ADD_THOUGHT = gql`
mutation AddThought($thoughtText: String!) {
  addThought(thoughtText: $thoughtText) {
    _id
    thoughtAuthor
    thoughtText
  }
}
`;