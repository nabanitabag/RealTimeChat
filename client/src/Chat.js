import React from "react";
import ReactDOM from "react-dom";

import {
    ApolloClient,
    InMemoryCache,
    ApolloProvider,
    useQuery,
    gql
  } from "@apollo/client";

  const client = new ApolloClient({
    uri: 'https://localhost:4000/',
    cache: new InMemoryCache()
  });

  const GET_MESSAGES = []
  const Chat = ()=>{
      return (
          <div>
              I am chat window.
          </div>
      )
  }

  export default ()=>(
      <ApolloProvider client={client}>
          <Chat />
      </ApolloProvider>
  );
   