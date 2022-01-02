import { useState } from "react";
import { ColorBox } from "./ColorBox";

export function AddColor() {
  const [color, setColor] = useState("");
  const styles = { backgroundColor: color };
  //Tying ->onChange -> event.target.value (content) -> setColor
  //map function is used to loop in react
  const [colors, setColors] = useState([]);
  return (
    <div>
      <input
        style={styles}
        onChange={(event) => setColor(event.target.value)}
        placeholder="Enter a color" />
      <button onClick={() => setColors([...colors, color])}>Add color</button>
      {colors.map((clr, index) => (
        <ColorBox key={index} clr={clr} />
      ))}
    </div>
  );
}
