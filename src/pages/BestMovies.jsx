import { useEffect, useState } from "react";

import MovieCard from "../components/MovieCard";

import "./MovieGrid.css";

const YourMoviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



const BestMovies = () => {
    const [bestMovies, setBestMovies] = useState([])

    const getTopRatedMovies = async (url) => {
        const res = await fetch(url);
        const data = await res.json();
        setBestMovies(data.results);
      };

      useEffect(() => {
        const topRatedUrl = `${YourMoviesURL}top_rated?${apiKey}`;
        console.log(topRatedUrl);
        getTopRatedMovies(topRatedUrl);
      }, []);

      console.log(bestMovies);

      return (
        <div className="movies-container">
          {bestMovies.length > 0 &&
            bestMovies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      );
    };
    

export default BestMovies;
