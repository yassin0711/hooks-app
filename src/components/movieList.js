import React, { useState } from "react";
import Add from "./addMovie";
import Movie from "./components/cardMovie";
const ListMovie = (newMovie) => {
    let mv = [{ name: "avangers", poster: "../poster/avangers.jpg", description: "Double-sided advance for Marvel's superhero blockbuster  :a ", rate: 8, url: "https://epco.egybest.run/movie/avengers-endgame-2019/" }, { name: "avangers", poster: "../poster/avangers.jpg", description: "Double-sided advance for Marvel's superhero blockbuster  :a ", rate: 8, url: "https://epco.egybest.run/movie/avengers-endgame-2019/" }, { name: "avangers", poster: "../poster/avangers.jpg", description: "Double-sided advance for Marvel's superhero blockbuster  :a ", rate: 8, url: "https://epco.egybest.run/movie/avengers-endgame-2019/" }, { name: "avangers", poster: "../poster/avangers.jpg", description: "Double-sided advance for Marvel's superhero blockbuster  :a ", rate: 8, url: "https://epco.egybest.run/movie/avengers-endgame-2019/" }, { name: "avangers", poster: "../poster/avangers.jpg", description: "Double-sided advance for Marvel's superhero blockbuster  :a ", rate: 8, url: "https://epco.egybest.run/movie/avengers-endgame-2019/" }, { name: "avangers", poster: "../poster/avangers.jpg", description: "Double-sided advance for Marvel's superhero blockbuster  :a ", rate: 8, url: "https://epco.egybest.run/movie/avengers-endgame-2019/" }];
    // const [nMovie, setNMovie] = useState({});
    const [movies, setmovies] = useState(mv);
    return (
        <div>
            <button onClick={() => { <Add list={setmovies()} /> }} >Add</button>
            {movies.map((item) => {

                return <Movie titel={movies[item].name} poster={movies[item].poster} description={movies[item].description} rate={movies[item].rate} url={movies[item].url} />
            })}

        </div>

    );
};




export default ListMovie;