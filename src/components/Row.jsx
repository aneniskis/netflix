import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import "./row.scss";
import axios from "../axios";
import requests from "../requests";
import { BASE_URL } from "../axios";

const Row = ({ title, fetchUrl, isLargeRow = false }) => {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(fetchUrl);
      setMovies(data.data.results);
      return data;
    };
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies?.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${BASE_URL}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt="poster"
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
