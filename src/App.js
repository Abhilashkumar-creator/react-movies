import { useState, useEffect } from "react";
import "./App.css";
import { MovieList } from "./MovieList";
import Button from '@mui/material/Button';
import { Switch, Route, Redirect } from "react-router-dom";
import { AddColor } from "./AddColor";
import { useHistory } from "react-router-dom";
import { AddMovie } from "./AddMovie";
import { EditMovie } from "./EditMovie";
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { MovieDetails } from "./MovieDetails";
import { BasicForm } from "./BasicForm";

export default function App() {
  const [movies, setMovies] = useState([])
  const history = useHistory();

  const [mode, setMode] = useState("light");

  const theme = createTheme({
    palette: {
      mode: mode,
    },
  })

  useEffect(() => {
    fetch('https://61d5b9cc2b4f730017a82a0e.mockapi.io/movies', {
      method: "GET",
    }) 
    .then((data) => data.json())
    .then((mvs) => setMovies(mvs))
  }, [])

  const paperStyles = {minHeight: '100vh'}

  return (
    <ThemeProvider theme={theme}>
    <Paper elevation={3} style={paperStyles}>

    <div className="App">
    <AppBar position="static">
        <Toolbar>
          <Button
            onClick = {() => history.push("/") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
              Home
          </Button>
          <Button
            onClick = {() => history.push("/movies") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          Movies
          </Button>
          <Button
            onClick = {() => history.push("/movies/add-movie") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          Add Movies
          </Button>
          <Button
            onClick = {() => history.push("/color-game") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          Color Game
          </Button>
          <Button
            onClick = {() => history.push("/basic-form") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
          Basic Form
          </Button>
          <Button
            style= {{marginLeft: "auto"}}
            onClick = {() => setMode(mode === "light" ? "dark" : "light") }
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
            startIcon= {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          >
              {(mode === "light" ? "dark" : "light")} Mode
          </Button>
        </Toolbar>
      </AppBar>

<Switch>
<Route exact path="/">
<h1 style={{textAlign: 'center', margin: '200px'}}>Welcome Movie Learners</h1>
</Route>

<Route path="/films">
  <Redirect to='/movies' />
</Route>

<Route path="/movies/add-movie">
  <AddMovie />
</Route>

<Route path="/movies/edit/:id">
  <EditMovie />
</Route>

<Route path="/movies/:id">
  <MovieDetails />
</Route>

<Route path="/movies">
<MovieList />
</Route>

<Route path="/color-game">
<AddColor />
</Route>

<Route path="/basic-form">
<BasicForm />
</Route>

<Route path="**">
<NotFound />
</Route>
</Switch>

  </div>
  </Paper>
  </ThemeProvider>
  );
}

function NotFound() {
  const styles = {width: '100%', objectFit: 'cover'}
  return (
    <img style={styles} src='https://www.figmints.com/wp-content/uploads/2019/09/image16.gif' alt="" />
  ) 
}