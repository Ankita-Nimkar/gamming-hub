import { useState, useEffect } from "react";
import apiClient from "../services/api-client";

export interface Genres {
  id: number;
  name: string;
  image_background: string;
  description: string;
}
interface fetchGenresResponse {
  count: number;
  results: Genres[];
}

const useGenres = () => {
  const [genres, setGenres] = useState<Genres[]>();
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    setIsLoading(true);
    apiClient
      .get<fetchGenresResponse>("/genres")
      .then((res) => {
        console.log(res.data.results);
        setGenres(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setIsLoading(false);
      });
  }, []);
  return { genres, error, isLoading };
};

export default useGenres;
