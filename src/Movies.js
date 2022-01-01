import { Counter } from "./Counter";
import {useState} from "react";
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
export function Movies({ name, rating, summary, poster }) {
    const [show, setShow] = useState(true);
    const styles ={display : show ? "block":"none"}
  return (
   <Card className="movie-container">
    <img className="movie-poster" src={poster} alt={name} />
    <CardContent>
    <div className="movie-specs">
      <h3 className="movie-name">{name}
      <IconButton onClick={() => setShow(!show)} color="primary" >
      {show ? <ExpandLessIcon/> :<ExpandMoreIcon/>}
    </IconButton>  
    </h3>
      <p className="movie-rating">{rating}</p>
    </div>
    {/* <button onClick={()=>setShow(!show)} style= {{marginBottom:"10px"}}>
            {show ? "Hide":"show"} description</button> */}
   
    {/* <Button onClick={()=>setShow(!show)} style= {{marginBottom:"10px"}}>{show ? "Hide":"show"} 
    description</Button> */}
    
    <p style={styles} className="movie-summary">{summary}</p>
    <CardActions>
    <Counter />
    </CardActions>
    </CardContent>
  </Card>

  );
}
