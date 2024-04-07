import Count from "./Count"
import CountButtons from "./CountButtons"
import Reset from "./Reset"
import Title from "./Title"

function Card() {
  return (
    <div>
        <Title />
        <Count />
        <Reset />
        <CountButtons />
    </div>
  );
}

export default Card;