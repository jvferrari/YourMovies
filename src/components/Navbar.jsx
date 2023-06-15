import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { BiCameraMovie, BiSearchAlt2 } from "react-icons/bi";
import { useStore } from "./themeStore";

import "./Navbar.css";


const Navbar = () => {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();
  const { theme, toggleTheme } = useStore();

  const handleThemeToggle = () => {
    toggleTheme();
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!search) return;

    navigate(`/search?q=${search}`, { replace: true });
    setSearch("");
  };

  return (
    <nav id="navbar">
      <h2>
        <Link to="/">
          <BiCameraMovie /> YourMovies
        </Link>
      </h2>
      <h5>
        <Link to="/melhoresfilmes">
          MELHORES FILMES
        </Link>
      </h5>
      <h5>
        <Link to="/meusfavs">
          MEUS FAVORITOS
        </Link>
      </h5>
      <div className="switch">
        <input
          className="switch-input"
          type="checkbox"
          checked={theme === "dark"}
          onChange={toggleTheme}
        />
        <label className="switch-label">
          <span className="switch-inner"></span>
          <button onClick={handleThemeToggle}>
        {theme === "" ? "" : ""}
      </button>
        </label>
        
      </div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Busque um filme"
          onChange={(e) => setSearch(e.target.value)}
          value={search}
        />
        <button type="submit">
          <BiSearchAlt2 />
        </button>
      </form>
    </nav>
 
  );
};

export default Navbar;