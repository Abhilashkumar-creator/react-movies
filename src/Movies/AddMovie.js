import { useState } from "react";
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';

export function AddMovie({ movies, setMovies }) {
  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [summary, setSummary] = useState("");
  const [rating, setrating] = useState("");
  const [trailer, settrailer] = useState("");
  const history = useHistory();
  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setSummary("");
    setrating("");
    settrailer("");
  };
  const addMovie = () => {
    const newMovie = {
      name,
      poster,
      rating,
      summary,
    };
    setMovies([...movies, newMovie]);
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
      onClick={addMovie}>Add movie</Button>
  </div>;

}
