
import { useEffect, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import MovieCard from "../components/MovieCard";

import "./Myfavs.css";

function Favoritos() {
  const [filmes, setFilmes] = useState([]);

  useEffect(() => {
    const minhaLista = localStorage.getItem("@yourmovies");
    setFilmes(JSON.parse(minhaLista) || []);
  }, []);

  const excluirFilme = useCallback(
    (id) => {
      const filtroFilmes = filmes.filter((item) => item.id !== id);
      setFilmes(filtroFilmes);
      localStorage.setItem("@yourmovies", JSON.stringify(filtroFilmes));
    },
    [filmes]
  );

  return (
    <div className="meus-filmes">
      <h1>Meus filmes</h1>

      {filmes.length === 0 && <span>Você não possui nenhum filme salvo :(</span>}

      <ul>
        {filmes.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <div>
              <Link to={`/movie/${item.id}`}>Ver detalhes</Link>
              <button onClick={() => excluirFilme(item.id)}>Excluir</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Favoritos;

