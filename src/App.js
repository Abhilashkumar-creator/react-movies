import { useState } from "react"
import { double } from"./Counter"
import "./App.css";
import { MovieList } from "./Movies/MovieList.1";
import Button from '@mui/material/Button';
import {Switch,Route,Link, Redirect,useHistory} from "react-router-dom"
import { INITIAL_MOVIES } from "./Movies/INITIAL_MOVIES";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { MovieDetails } from "./Movies/MovieDetails";
import { AddColor } from "./AddColor";
function App() {
  const [movies, setMovies] = useState(INITIAL_MOVIES);
    return (
    <div className="App">
      <ul>
        <li>
          <Link to="/">Home</Link>
          </li>
          <li>
          <Link to="/movies">Movie</Link>
          </li>
          <li>
          <Link to="/movies/add">Add Movie</Link>
          </li>
          <li>
          <Link to="/color-game">Color Game</Link>
          </li>
      </ul>
      <Switch>
      <Route exact path="/">
        <h1>Welcome Movie Lovers</h1>
        </Route>
      <Route path="/films">
          <Redirect to ="/movies"></Redirect>
        </Route>
        <Route path="/movies/add">
        <AddMovie movies={movies} setMovies={setMovies} />
        </Route>
        <Route path="/movies/:id">
          < MovieDetails movies={movies}/></Route>
        <Route path="/movies">
         <MovieList movies={movies} /> 
        </Route>
        
        <Route path="/color-game">
        {<AddColor />} 
        </Route>
        <Route path ="**">
          <h1>Not found</h1>  
        </Route>
      </Switch>
   </div>
  );
}
export default App;
function AddMovie({movies,setMovies}) {
const [name, setName] =useState("");
const [poster, setPoster] =useState("");
const [summary, setSummary] =useState("");
const [rating, setrating] =useState("");
const [trailer, settrailer] =useState("");
const history=useHistory();
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
setMovies([...movies, newMovie])
resetMovieForm();
history.push("/movies");
};
return  <div className="app-movie-form">
<TextField value ={name}
onChange={(event)=> setName(event.target.value)} 
label="Movie name" 
variant="outlined"/>
<TextField value ={poster}
onChange={(event)=> setPoster(event.target.value)} 
label="Movie Poster" 
variant="outlined"/>
<TextField value ={summary}
onChange={(event)=> setSummary(event.target.value)} 
label="Movie Summary" 
variant="outlined"/>
<TextField value ={trailer}
onChange={(event)=> settrailer(event.target.value)} 
label="Movie Trailer" 
variant="outlined"/>
<TextField value ={rating}
onChange={(event)=> setrating(event.target.value)} 
label="Movie Rating" 
variant="outlined"/>
{/* <input value ={poster} onChange={(event)=> setPoster(event.target.value) } placeholder="Enter a paste url" />
<input value ={summary} onChange={(event)=> setSummary(event.target.value) } placeholder="Enter a movie summary" />
<input value ={rating} onChange={(event)=> setrating(event.target.value) } placeholder="Enter a movie rating" /> */}
{/* <button ></button> */}
<Button className= "movie-button" 
variant="contained" 
onClick={addMovie}>Add movie</Button>
</div>
  
}

