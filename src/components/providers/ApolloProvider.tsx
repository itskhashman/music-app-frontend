"use client";

import { ApolloProvider } from "@apollo/client/react";
import { apolloClient } from "@/src/lib/apolloClient";

export default function ApolloAppProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    return <ApolloProvider client={apolloClient}>{children}</ApolloProvider>;
}
