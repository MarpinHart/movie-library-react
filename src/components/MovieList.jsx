import React from "react";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

export default function MovieList({ i, movie }) {
  console.log(movie.poster_path);
  return (
    <div className="MovieCard">
      <Card id={i}>
        <CardActionArea>
          <img
            src={`http://image.tmdb.org/t/p/w185${movie.poster_path}`}
            alt="Missing Poster"
          />
          <CardContent>
            <Typography gutterBottom variant="h8" component="h2">
              {movie.title}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="p">
              <strong>Rating: </strong>
              {movie.vote_average}  <br/>
              <strong>Released: </strong>
              {movie.release_date.substring(0, 4)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </div>
  );
}
