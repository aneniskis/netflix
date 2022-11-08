import axios from "axios";

export const BASE_URL = "https://image.tmdb.org/t/p/original/";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

export default instance;
