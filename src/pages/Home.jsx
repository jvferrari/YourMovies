import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

import "./MovieGrid.css";

const YourMoviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () => {
    const [nowMovies, setNowMovies] = useState([])

    const getNowMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setNowMovies(data.results);
      };

      useEffect(() => {
        const nowMoviesUrl = `${YourMoviesURL}now_playing?${apiKey}`;
        console.log(nowMoviesUrl);
        getNowMovies(nowMoviesUrl);
      }, []);

      console.log(nowMovies);

      return (
        <div className="movies-container">
          {nowMovies.length > 0 &&
            nowMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      );
    };
    

export default Home;