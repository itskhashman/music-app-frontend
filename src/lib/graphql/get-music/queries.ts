import { gql } from "@apollo/client";

export const GET_ALL_MUSIC = gql`
  query GetAllMusic {
    artists { id name country createdAt }
    albums  { id title rate artist { id name country createdAt } }
    songs   { id title rate album { id title rate artist { id name country createdAt } } }
  }
`;
