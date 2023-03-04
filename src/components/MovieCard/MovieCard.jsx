import React from "react";
import ReactStars from "react-stars";
import { Card } from "react-bootstrap";
import "./MovieCard.css"

const MovieCard = ({ movie }) => {
  return (
    <div className="Carde">
      <Card
        style={{ width: "360px", height: "700px", backgroundColor: "black" }}
      >
        <Card.Img
          variant="top"
          src={movie.posterUrl}
          alt={movie.posterUrl}
          height="360"
        />
        <Card.Body>
          <Card.Title style={{ color: "gray" }}>
            <h1>{movie.title}</h1>
          </Card.Title>
          <Card.Text style={{ color: "white" }}>
            {movie.description}
          </Card.Text>
          <ReactStars
            count={5}
            size={24}
            color2={"#ffd700"}
            edit={false}
            half={false}
            value={movie.rating}
          
          />
        </Card.Body>
      </Card>
    </div>
  );
};

export default MovieCard;
