import { useState } from "react"
import { double } from"./Counter"
import "./App.css";
import { MovieList } from "./MovieList";
import Button from '@mui/material/Button';
import {Switch,Route,Link} from "react-router-dom"
import { INITIAL_MOVIES } from "./INITIAL_MOVIES";
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
        <Route path="/movies">
        <input value ={name} className= "movie-button" onChange={(event)=> setName(event.target.value)} placeholder="Enter a movie name" />
      <input value ={poster}className= "movie-button" onChange={(event)=> setPoster(event.target.value) } placeholder="Enter a paste url" />
      <input value ={summary} className= "movie-button" onChange={(event)=> setSummary(event.target.value) } placeholder="Enter a movie summary" />
      <input value ={rating} className= "movie-button" onChange={(event)=> setrating(event.target.value) } placeholder="Enter a movie rating" />
      {/* <button ></button> */}
      <Button className= "movie-button" variant="contained" onClick={addMovie}>Add movie</Button>
     <MovieList movies={movies} /> 
        </Route>
        <Route path="/color-game">
        {<AddColor />} 
        </Route>
        <Route path="/">
        <h1>Welcome Movie Lovers</h1>
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
