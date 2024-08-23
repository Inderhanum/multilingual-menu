import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Movies from './Movies';
import TVShows from './TVShows';
import Sports from './Sports';
import Live from './Live';
import Settings from './Settings';
import './style.css';

// Translation dictionary
const translations = {
  en: {
    home: 'Home',
    movies: 'Movies',
    tvShows: 'TV Shows',
    sports: 'Sports',
    live: 'Live',
    settings: 'Settings',
  },
  fr: {
    home: 'Accueil',
    movies: 'Films',
    tvShows: 'Séries',
    sports: 'Sports',
    live: 'Direct',
    settings: 'Paramètres',
  },
  de: {
    home: 'Startseite',
    movies: 'Filme',
    tvShows: 'Serien',
    sports: 'Sport',
    live: 'Live',
    settings: 'Einstellungen',
  },
  ru: {
    home: 'Главная',
    movies: 'Фильмы',
    tvShows: 'Сериалы',
    sports: 'Спорт',
    live: 'Прямой эфир',
    settings: 'Настройки',
  },
  es: {
    home: 'Inicio',
    movies: 'Películas',
    tvShows: 'Series',
    sports: 'Deportes',
    live: 'En Vivo',
    settings: 'Configuraciones',
  },
  zh: {
    home: '首页',
    movies: '电影',
    tvShows: '电视剧',
    sports: '体育',
    live: '直播',
    settings: '设置',
  },
};

function App() {
  const [language, setLanguage] = useState('en');

  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li><Link to="/">{translations[language].home}</Link></li>
            <li><Link to="/movies">{translations[language].movies}</Link></li>
            <li><Link to="/tvshows">{translations[language].tvShows}</Link></li>
            <li><Link to="/sports">{translations[language].sports}</Link></li>
            <li><Link to="/live">{translations[language].live}</Link></li>
            <li><Link to="/settings">{translations[language].settings}</Link></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/tvshows" element={<TVShows />} />
          <Route path="/sports" element={<Sports />} />
          <Route path="/live" element={<Live />} />
          <Route path="/settings" element={<Settings setLanguage={setLanguage} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
