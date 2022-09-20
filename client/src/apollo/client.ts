import {
  ApolloClient,
  InMemoryCache,
  HttpLink,
  from,
  ApolloLink,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';

const httpLink = new HttpLink({
  uri: 'http://localhost:4000/',
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, path }) => {
      console.log(`GQLError: ${message}  ${path}`);
    });
  }

  if (networkError) {
    console.log(`Network error: ${networkError}`);
  }
});

const loggerLink = new ApolloLink((operation, forward) => {
  console.log('Logger link - Operation request:', operation);

  return forward(operation).map((data) => {
    console.log('Logger link - Operation response:', data);

    return data;
  });
});

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: from([errorLink, loggerLink, httpLink]),
});

export default client;
