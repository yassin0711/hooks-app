import React, { useState } from "react";
import { Card, ListGroup } from "react-bootstrap";
// import ListMovie from "./movieList";
const Movie = (movie) => {
    const [name, setName] = useState(movie.title);
    const [Poster, setPoster] = useState(movie.Poster);
    const [description, setDescription] = useState(movie.description);
    const [rate, setRate] = useState(movie.rate);
    const [url, setUrl] = useState(movie.url)

    return (



        <div className='container'>
            <Card>
                <a href={url}><Card.Img variant="top" src={Poster} style={{ width: "100px" }} /></a>
                <Card.Body>
                    <Card.Title><h1>{name}</h1></Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroup.Item>{rate}</ListGroup.Item>

                </ListGroup>
            </Card>
        </div>



    );
};

export default Movie;
