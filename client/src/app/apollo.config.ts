import {ApolloClient, ApolloCache, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from '@apollo/client/link/http';
import { ApolloLink } from '@apollo/client/core';
const httpLink = new HttpLink({
    uri: 'http://localhost:8080/graphql/'
});

export const apolloClient = new ApolloClient({
    link: ApolloLink.from([httpLink]),
    cache: new InMemoryCache(),
    
   
})
