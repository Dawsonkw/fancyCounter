import Count from "./Count"
import ButtonContainer from "./ButtonContainer"
import Reset from "./Reset"
import Title from "./Title"
import { useState } from "react";


function Card() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
        <Title />
        <Count count={count} />
        <Reset setCount={setCount} />
        <ButtonContainer setCount={setCount} />
    </div>
  );
}

export default Card;