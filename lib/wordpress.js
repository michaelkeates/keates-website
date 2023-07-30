import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const GRAPHQL_ENDPOINT = 'https://blog.michaelkeates.co.uk/graphql';

let client;

/**
 * getApolloClient
 */

export function getApolloClient() {
  if (!client) {
    client = _createApolloClient();
  }
  return client;
}

/**
 * createApolloClient
 */

export function _createApolloClient() {
  const endpoint = process.env.WORDPRESS_GRAPHQL_ENDPOINT;
  console.log('GraphQL Endpoint:', endpoint);
  return new ApolloClient({
    link: new HttpLink({
      uri: GRAPHQL_ENDPOINT,
    }),
    cache: new InMemoryCache(),
  });
}