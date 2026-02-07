export const GET_ALL_MUSIC = `
query {
  artists { id name country createdAt }
  albums { id title rate artist { id name country createdAt } }
  songs  { id title rate album { id title rate artist { id name country createdAt } } }
}
`;
