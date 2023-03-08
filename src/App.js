import React from "react";
import { useState, useEffect } from "react";

// 46bacd4c
import './App.css';
import SearchIcon from './search.svg';
import MovieCard from "./MovieCard";

const API_URL = "http://www.omdbapi.com?apikey=46bacd4c";

// const movie1 = {
//     "Title":"Pathan"
// }

const App = () => {
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState('')
    const searchMovies = async (title) => {
        const response = await fetch(`${API_URL}&s=${title}`);
        const data = await response.json();
        setMovies(data.Search);
    }

    useEffect(() => {
        searchMovies("batman")
    }, []);
    return (
        <div className="app">
            <h1>Movie Browser</h1>
            <div className="search">
                <input
                    placeholder="Search movie name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <img
                    src={SearchIcon}
                    alt="Search"
                    onClick={() => searchMovies(searchTerm)}
                />
            </div>
            {
                movies?.length > 0
                    ? (
                        <div className="container">
                            {
                                movies.map((movie) => (
                                    <MovieCard movie={movie} />
                                ))
                            }

                        </div>
                    ) : (
                        <div className="empty">
                            <h2>Movie not found</h2>
                        </div>
                    ) 
            }

        </div>
    );
}

export default App;