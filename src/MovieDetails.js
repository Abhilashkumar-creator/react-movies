import Button from '@mui/material/Button';
import { useParams, useHistory } from "react-router-dom";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export function MovieDetails({ movies }) {
  const { id } = useParams();
  const movie = movies[id];
  const history = useHistory();
  console.log(movies, movie);
  // return <h1> Movie {id}</h1>
  return <div className="movie-detail-container">
    <iframe
      width="100%"
      height="600"
      src={movie.trailer}
      title="YouTube video player" frameborder="0"
      allow="accelerometer; 
    autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    <div className="movie-specs">
      <h3 className="movie-name">{movie.name}</h3>
      <p className="movie-rating">{movie.rating}</p>
      <Button
        onClick={() => history.goBack()}
        variant="contained"
        startIcon={<ArrowBackIcon />}>
      </Button>
      <Button
        onClick={() => history.goForward()}
        variant="contained"
        startIcon={<ArrowForwardIcon />}>
      </Button>
    </div>
    <p className="movie-summary">{movie.summary}</p>
  </div>;
}
