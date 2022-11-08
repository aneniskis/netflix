import React from "react";
import { useState } from "react";
import "./banner.scss";
import requests from "../requests";
import { useEffect } from "react";
import axios from "../axios";

const Banner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(requests.fetchNetflixOriginals);

      setMovie(
        data.data.results[
          Math.floor(Math.random() * data.data.results.length - 1)
        ]
      );

      return data;
    };

    fetchData();
  }, []);
  //   console.log(movie);

  const truncate = (string, n) => {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  };
  return (
    <header
      className="banner"
      style={{
        backgroundImage: `url('https://image.tmdb.org/t/p/original/${
          movie?.backdrop_path || movie?.poster_path
        }')`,
        backgroundSize: "cover",
        backgroundColor: "black",
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__desc">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
