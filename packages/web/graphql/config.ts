import {
  InMemoryCache,
  IntrospectionFragmentMatcher
} from "apollo-cache-inmemory";

import { Context } from "@nuxt/types";
import schema from "./schema.json";

const fragmentMatcher = new IntrospectionFragmentMatcher({
  introspectionQueryResultData: schema
});

const ApolloConfig = (context: Context) => {
  return {
    cache: new InMemoryCache({ fragmentMatcher }),
    httpEndpoint: context.app.$env.GRAPHQL_HTTP_ENDPOINT,
    wsEndpoint: context.app.$env.GRAPHQL_WS_ENDPOINT
  };
};

export default ApolloConfig;
