import React from 'react';
import ReactDOM from 'react-dom/client';
import {BrowserRouter, Routes, Route} from "react-router-dom"; 

import App from './App';
import BestMovies from './pages/BestMovies';
import Home from './pages/Home';
import Movie from './pages/Movie';
import Search from './pages/Search';
import Erro from './pages/Erro';
import Myfavs from './pages/Myfavs';


import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
     <Routes>
      <Route element={<App />}>
        <Route path="/melhoresfilmes" element={<BestMovies />} />
        <Route path="/" element={<Home />} />
        <Route path="movie/:id" element={<Movie />} />
        <Route path="search" element={<Search />} />
        <Route path="meusfavs" element={<Myfavs />} />
        <Route path="*" element={ <Erro/> } />
      </Route>
     </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
