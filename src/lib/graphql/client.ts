const ENDPOINT =
    process.env.NEXT_PUBLIC_API_URL! +
    process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT!;

export async function gql<T>(
    query: string,
    variables?: Record<string, any>
): Promise<T> {
    const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query }),
        cache: "no-store",
    });

    const json = await res.json();

    if (!res.ok || json.errors) {
        throw new Error(json.errors?.[0]?.message ?? "GraphQL request failed");
    }

    return json.data as T;
}
