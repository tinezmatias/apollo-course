import { gql } from 'apollo-server';

export const EXAMPLE = gql`
  query books {
    books {
      title
    }
  }
`;
