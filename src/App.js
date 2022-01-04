import { useState } from "react"
import { double } from"./Counter"
import "./App.css";
import { MovieList } from "./Movies/MovieList.1";
import {Switch,Route,Link, Redirect} from "react-router-dom"
import { INITIAL_MOVIES } from "./Movies/INITIAL_MOVIES";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { MovieDetails } from "./Movies/MovieDetails";
import { AddColor } from "./AddColor";
import { AddMovie } from "./Movies/AddMovie";
import { EditMovie } from "./Movies/EditMovie";
// import { AddMovie } from "./Movies/AddMovie"
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useHistory } from "react-router-dom"
function App() {
    const [movies, setMovies] = useState(INITIAL_MOVIES);
    const history = useHistory();
    return (
    <div className="App">
         {/* <li>
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
          </li> */}
          <AppBar position="static">
        <Toolbar>
          <Button
            onClick={() => history.push('/')}
            size="large"
            edge="start"
            color="inherit"
            aria-label="home" >
            Home
          </Button>
          <Button
            onClick={() => history.push('/movies')}
            size="large"
            edge="start"
            color="inherit"
            aria-label="home" >
            Movies
          </Button>
          <Button
            onClick={() => history.push('/movies/add')}
            size="large"
            edge="start"
            color="inherit"
            aria-label="home" >
            Add Movie
          </Button>
          <Button
            onClick={() => history.push('/color-game')}
            size="large"
            edge="start"
            color="inherit"
            aria-label="home" >
            Color Game
          </Button>
      
        </Toolbar>
        </AppBar>
      
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
        <Route path="/movies/edit/:id">
          < EditMovie movies={movies}/></Route>
        <Route path="/movies/:id">
          < MovieDetails movies={movies}/></Route>
        <Route path="/movies">
         <MovieList movies={movies} setMovies={setMovies}/> 
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

