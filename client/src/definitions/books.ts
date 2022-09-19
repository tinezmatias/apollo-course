import { gql } from '@apollo/client';

const BOOK_FRAGMENT = gql`
  fragment Books on Book {
    title
  }
`;

export const BOOKS_QUERY = gql`
  query getBooks($filters: BookFilterInput!) {
    books(data: $filters) {
      ...Books
    }
  }
  ${BOOK_FRAGMENT}
`;

export const DATE_MUTATION = gql`
  mutation SetDate($today: Date) {
    setDate(today: $today)
  }
`;

// 1663604990289
