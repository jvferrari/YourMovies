import { Link } from "react-router-dom";

import { FaStar } from "react-icons/fa";

const imagesURL = import.meta.env.VITE_IMG;

const MovieCard = ({ movie, showLink = true }) => {

  function salvarFilme() {
    // Requisitando onde os filmes salvos serão armazenados no localStorage
    const minhaLista = localStorage.getItem("@yourmovies");
    let filmesSalvos = JSON.parse(minhaLista) || [];
  
    // Verificando se o filme já está na lista com base no id
    const hasFilme = filmesSalvos.some((filmeSalvo) => filmeSalvo.id === movie.id);
  
    if (hasFilme) {
      alert("Esse filme já está na lista");
      return;
    }
  
    filmesSalvos.push(movie);
    localStorage.setItem("@yourmovies", JSON.stringify(filmesSalvos));
    alert("Filme salvo com sucesso");
  }
    return (
    <div className="movie-card">
      <img src={imagesURL + movie.poster_path} alt={movie.title} />
      <h2>{movie.title}</h2>
      <p>
        <FaStar /> {movie.vote_average}
      </p>
      {showLink && <Link to={`/movie/${movie.id}`}>Detalhes</Link>}
      <button onClick={salvarFilme}>Salvar</button>
    </div>
  );
};

export default MovieCard;
