import { useState } from "react";
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';

function Counter() {
    const [like, setLike] = useState(0)
    const [disLike, setDisLike] = useState(0)
    const incrementLike = () => setLike(like + 1)
    const incrementDisLike = () => setDisLike(disLike + 1)
    return(
      <div className="counter-container">

        <IconButton aria-label="like" color='primary' onClick={incrementLike}>
        <Badge badgeContent={like} color="primary">
        👍
        </Badge>
        </IconButton>

        <IconButton aria-label="dislike" color='primary' onClick={incrementDisLike}>
        <Badge badgeContent={disLike} color="error">
        👎
        </Badge>
        </IconButton>
    </div>
    )
  }

  function double(n){
    return [n, n * 2];
}

export{Counter,double}
  // 1.named export and import
  //2. default export and import in index.html
//Only components need to start with  Caps Letter as double is not component it starts with lower case
 