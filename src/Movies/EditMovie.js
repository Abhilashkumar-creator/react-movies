import { useState } from "react";
import Button from '@mui/material/Button';
import { useHistory, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';

export function EditMovie({ movies, setMovies }) {
  const { id } = useParams();
  const movie = movies[id];
  const [name, setName] = useState(movie.name);
  const [poster, setPoster] = useState(movie.poster);
  const [summary, setSummary] = useState(movie.summary);
  const [rating, setrating] = useState(movie.rating);
  const [trailer, settrailer] = useState(movie.trailer);
  const history = useHistory();
  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setSummary("");
    setrating("");
    settrailer("");
  };
  const editMovie = () => {
    const updatedMovie = {
      name,
      poster,
      rating,
      summary,
      trailer,
    };
    // setMovies([...movies, newMovie]);
    const copyMovies = [...movies];
    copyMovies[id] = updatedMovie;
    setMovies(copyMovies)
    resetMovieForm();
    history.push("/movies");
  };
  return <div className="app-movie-form">
    <TextField value={name}
      onChange={(event) => setName(event.target.value)}
      label="Movie name"
      variant="outlined" />
    <TextField value={poster}
      onChange={(event) => setPoster(event.target.value)}
      label="Movie Poster"
      variant="outlined" />
    <TextField value={summary}
      onChange={(event) => setSummary(event.target.value)}
      label="Movie Summary"
      variant="outlined" />
    <TextField value={trailer}
      onChange={(event) => settrailer(event.target.value)}
      label="Movie Trailer"
      variant="outlined" />
    <TextField value={rating}
      onChange={(event) => setrating(event.target.value)}
      label="Movie Rating"
      variant="outlined" />
    {/* <input value ={poster} onChange={(event)=> setPoster(event.target.value) } placeholder="Enter a paste url" />
        <input value ={summary} onChange={(event)=> setSummary(event.target.value) } placeholder="Enter a movie summary" />
        <input value ={rating} onChange={(event)=> setrating(event.target.value) } placeholder="Enter a movie rating" /> */}
    {/* <button ></button> */}
    <Button className="movie-button"
      variant="contained"
      color ="success"
      onClick={editMovie}>Save</Button>
  </div>;

}
