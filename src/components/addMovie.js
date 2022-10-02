import React, { useState } from "react";
const Add = (props) => {
    const [movie, setmovies] = useState(props.movie);
    // const [Name, setName] = useState({});

    return (
        <form onSubmit={() => { let x = Object.assign(props.list, movie) }} >
            <label htmlFor="name">titel</label>
            <input type="text" id="name" value="" onChange={e => {
                let s = { name: e.target.value };
                let x = Object.assign(setmovies, s);

            }} />
            <label htmlFor="poster">poster</label>
            <input type="text" id="poster" onChange={e => {
                let s = { poster: e.target.value };
                let x = Object.assign(setmovies, s);

            }} />
            <label htmlFor="desc">decription</label>
            <input type="text" id="desc" onChange={e => {
                let s = { description: e.target.value };
                let x = Object.assign(setmovies, s);

            }} />
            <label htmlFor="rate">rate</label>
            <input type="number" id="rate" onChange={e => {
                let s = { rate: e.target.value };
                let x = Object.assign(setmovies, s);

            }} />
            <label htmlFor="url">url</label>
            <input type="text" id="url" onChange={e => {
                let s = { url: e.target.value };
                let x = Object.assign(setmovies, s);

            }} />
            <input type="submit" value="Submit" />
        </form>)


};



export default Add;
