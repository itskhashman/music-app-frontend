import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const ENDPOINT =
    process.env.NEXT_PUBLIC_API_URL! +
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export const apolloClient = new ApolloClient({
    link: new HttpLink({
        uri: ENDPOINT,
    }),
    cache: new InMemoryCache(),
});
