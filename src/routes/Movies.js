import { useApolloClient, gql } from "@apollo/client";
import { useEffect, useState } from "react";

export default function Movie(){
  const [movies, setMovies] = useState([]);
  const client = useApolloClient();
  useEffect(() => {
    client.query({
      query: gql`
        {
          allMovies{
            title
          }
        }
      `
    }).then((result) => setMovies(result.data.allMovies));
  },[client]);
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>{movie.title}</li>
      ))}
    </ul>
  );
}
