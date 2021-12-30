import { useState } from "react"
import "./App.css";

function App() {
  const movies=[{name : 'Avengers:Endgame'
  ,rating : '⭐ 8.4'
  ,poster : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQA_-tL18_rj9zEcjN6n41NEaJm-kRNF9UeOtvksZ4z_OW6jRA9'
  ,summary:`'After Thanos, an intergalactic warlord, disintegrates half of the 
  universe, the Avengers must reunite and assemble again to reinvigorate 
  their trounced allies and restore balance.'`
  },
  {name : 'Pushpa'
  ,rating : '⭐ 8.1'
  ,poster : 'https://www.tollywood.net/wp-content/uploads/2021/12/Pushpa-loss-rs30cr-because-of-sukumar.jpg'
  ,summary:`'Violence erupts between red sandalwood smugglers and the police charged with bringing down their organization.'`
  },
  {name : 'Shyam Singha Roy'
  ,rating : '⭐ 8.5'
  ,poster : 'https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcRzUSRwK0ZcOTvMQDC0YfHD2W8vSBoGi-vK5t78hhvLnMRhUAk1'
  ,summary:`'Shyam Singha Roy is a 2021 Indian Telugu-language supernatural romantic drama film directed by Rahul Sankrityan who co-wrote the film with Janga Satyadev. The film stars Nani in a dual role and Sai Pallavi with Krithi Shetty and Madonna Sebastian.'`
  },
  {name : 'Akhanda'
  ,rating : '⭐ 7.7'
  ,poster : 'https://cdn.123telugu.com/content/wp-content/uploads/2021/12/Akhanda-m-1.jpg'
  ,summary:`'Akhanda is a strong fierce devotee of Lord Shiva, who stands tall against evildoers.'`
  },
  {name : 'Lost in Space'
  ,rating : '⭐ 7.3'
  ,poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMS7oahS942ONrJCZjnticmZvLokM74iwjtT3HLamyxsQNsLuU'
  ,summary:`'Due to unforeseeable circumstances, the Robinsons, a family of space colonists, crash-land on an unknown planet. Now, they must fight for survival and escape, despite the dangers surrounding them.'`
  },
  {name : 'Spider:Man No Way Home'
  ,rating : '⭐ 8.9'
  ,poster : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrdPsGJEBxBev7gKo_EMp0Pgk7Q7su_xTUxf3vo8dE9S_CiG2Z'
  ,summary:`'With Spider-Man's identity now revealed, our friendly neighborhood web-slinger is unmasked and no longer able to separate his normal life as Peter Parker from the high stakes of being a superhero. When Peter asks for help from Doctor Strange, the stakes become even more dangerous, forcing him to discover what it truly means to be Spider-Man.'`
  },
  {name : 'Jersey'
  ,rating : '⭐ 8.6'
  ,poster : 'https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQjRzo0COMhH7UoYpVDo5RL6qyVOUf1TWAFXWX5KXPv7T0esSSP'
  ,summary:`'A talented but failed cricketer decides to return to cricket in his late thirties driven by the desire to represent the Indian cricket team and fulfil his son's wish for a jersey as a gift.'`
  },

  ]
     return (
       
    <div className="App">
      <section className="movie-list">
      {movies.map(({name,poster,summary,rating})=>(
        <Movies name = {name} poster = {poster} summary = {summary} rating = {rating}/>
      ))
      }
   </section>
  
      </div>
  );
}

export default App;

function Counter(){
  const [like,setLike] = useState(0);
  const [dislike,setDisLike] = useState(0);
  return(
    <div className="counter-Container">
      <button className = "like-dislike"onClick={()=> setLike(like+1)}>👍 {like}</button>
      <button className = "like-dislike" onClick={()=> setDisLike(like+1)}>👎 {dislike}</button>
    </div>
  )
}
function Movies({name, rating, summary, poster}){
  return (<div className="movie-container">
    <img className="movie-poster" src = {poster} alt = {name}/>
    <div className="movie-specs">
    <h3 className="movie-name">{name}</h3>
      <p className="movie-rating">{rating}</p>
      </div>
      <p className="movie-summary">{summary}</p>
      <Counter />
      </div>
      
  );
}
