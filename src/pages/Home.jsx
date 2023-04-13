import { useEffect, useState } from "react";

const YourMoviesURL = import.meta.env.VITE_API;
const apiKey = import.meta.env.VITE_API_KEY;



const Home = () => {
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
    <div>
        {bestMovies &&
        bestMovies.map((movie) => <p>{movie.title}</p>)}
    </div>
    );
};

export default Home;