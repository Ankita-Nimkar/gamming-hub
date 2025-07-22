import { useState, useEffect } from "react";
import apiClient from "../services/api-client";
interface Game {
  id: number;
  name: string;
}
interface fetchGameResponse {
  count: number;
  results: Game[];
}
useState;
const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClient
      .get<fetchGameResponse>("/games")
      .then((res) => {
        setGames(res.data.results);
      })
      .catch((err) => setError(err.message));
  }, []);
  return { games, error };
};

export default useGames;
