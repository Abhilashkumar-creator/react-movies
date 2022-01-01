import { useState } from "react"
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteIcon from '@mui/icons-material/Delete';
import AlarmIcon from '@mui/icons-material/Alarm';
import Badge from '@mui/material/Badge';
import MailIcon from '@mui/icons-material/Mail';
function Counter(){
    const [like,setLike] = useState(0);
    const [disLike,setDisLike] = useState(0);
    // const incrementLike = () =>setLike(like+1);
    // const incrementDisLike = () =>setLike(dislike+1);
    return(
      <div className="counter-Container">
        <IconButton className = "like-dislike"
        onClick={()=> setLike(like+1)}
         aria-label="delete"
         color="primary">
        
        <Badge color="primary" badgeContent={like}>👍</Badge>
      </IconButton>
      

      <IconButton className = "like-dislike"
        onClick={()=> setDisLike(disLike+1)}
         aria-label="delete"
         color="error">
         <Badge color="error" badgeContent={disLike}>👎</Badge>
      </IconButton>
          </div>
    )
  }
  // 1.named export and import
  //2. default export and import in index.html
//Only components need to start with  Caps Letter as double is not component it starts with lower case
 function double(n){
      return [n, n * 2];
  }

  export{Counter,double}