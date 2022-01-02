import { useState } from "react"
import { double } from"./Counter"
import "./App.css";
import { MovieList } from "./MovieList";
import Button from '@mui/material/Button';
import {Switch,Route,Link, Redirect,useParams} from "react-router-dom"
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
function App() {
  const [movies, setMovies] = useState(INITIAL_MOVIES);
  
  // const [movies, setMovies]= useState([

  // ]);
  const [name, setName] =useState("");
  const [poster, setPoster] =useState("");
  const [summary, setSummary] =useState("");
  const [rating, setrating] =useState("");

  const resetMovieForm = () => {
    setName("");
    setPoster("");
    setSummary("");
    setrating("");
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
  };
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
        <Route path="/movies/:id">
          < MovieDetails movies={movies}/></Route>
        <Route path="/movies">
          <div className="app-movie-form">
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
         <TextField value ={rating}
         onChange={(event)=> setrating(event.target.value)} 
         label="Movie Rating" 
         variant="outlined"/>
      {/* <input value ={poster} onChange={(event)=> setPoster(event.target.value) } placeholder="Enter a paste url" />
      <input value ={summary} onChange={(event)=> setSummary(event.target.value) } placeholder="Enter a movie summary" />
      <input value ={rating} onChange={(event)=> setrating(event.target.value) } placeholder="Enter a movie rating" /> */}
      {/* <button ></button> */}
      <Button className= "movie-button" variant="contained" onClick={addMovie}>Add movie</Button>
      </div>
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
 function AddColor(){
   const [color, setColor] = useState("");
   const styles = {backgroundColor: color}
   //Tying ->onChange -> event.target.value (content) -> setColor
   //map function is used to loop in react

   const [colors, setColors] = useState([]);
   return(
     <div>
       <input
       style={styles}
       onChange={(event)=>setColor(event.target.value)}
       placeholder="Enter a color"
       />
       <button onClick={()=> setColors([...colors,color])}>Add color</button>
              {colors.map((clr, index)=>(
         <ColorBox key={index} clr={clr}/>
       ))}
     </div>
   );
 }

 function ColorBox({ clr }){
   const styles ={
     backgroundColor:clr,
     height:"50px",
     width:"200px",
     margin:"10px 0px",
   };
   return <div style={styles}></div>
 }
function MovieDetails({ movies }){
  const { id }=useParams();
  const movie = movies[id];
  console.log(movies,movie)
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
  </div>
 <p className="movie-summary">{movie.summary}</p>
 </div>
}