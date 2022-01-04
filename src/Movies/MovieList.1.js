import { IconButton } from "@mui/material";
import { Movies } from "./Movies";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useParams, useHistory } from "react-router-dom";
export function MovieList({ movies, setMovies }){
  const history=useHistory();
  const removeMovie= (index) =>{
    console.log(index);
    const removeMovieIndex=index;
    const remainingMovies = movies.filter(
      (mv,idx)=> idx !== removeMovieIndex);
    setMovies(remainingMovies);}
  return (
    <section className="movie-list">
      {movies.map(({ name, poster, summary, rating, trailer }, index) => (
        <Movies name={name} 
        poster={poster} 
        summary={summary} 
        rating={rating} 
        tailer={trailer} 
        index={index}
        editButton={
          <IconButton
           onClick={()=>history.push("/movies/edit/" + index)}
          color="error"
          aria-label="delete"><EditIcon />
          </IconButton>
        }
        deleteButton={
          <IconButton onClick={()=>removeMovie(index)}
          color="error"
          aria-label="delete"><DeleteIcon />
          </IconButton>
        }
        
        />
      ))}
    </section>
  );

}
