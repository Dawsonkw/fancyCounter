import Count from "./Count"
import ButtonContainer from "./ButtonContainer"
import Reset from "./Reset"
import Title from "./Title"
import CountButton from "./CountButton"
import { useEffect, useState } from "react";


function Card() {
  const [count, setCount] = useState(0);
  const locked = count === 5 ? true : false;

  useEffect(() => {
    const handleKeydown = (event)  => {
      if (event.code === 'Space') {
        const newCount = count + 1;
        if (newCount > 5) {
          setCount(5);
          return;
        } 
        setCount(count + 1)
      }
    }

    window.addEventListener('keydown', handleKeydown );

    // Cleanup function
    return () => {
      window.removeEventListener('keydown', handleKeydown)
    }
  }, [count])

  return (
    <div className={`card ${locked ? 'card--limit' : ''}`}>
        <Title locked={locked}/>
        <Count count={count} />
        <Reset setCount={setCount} />
        <ButtonContainer >
          <CountButton type="minus" setCount={setCount} locked={locked} />
          <CountButton type="plus" setCount={setCount} locked={locked} />
        </ButtonContainer>
    </div>
  );
}

export default Card;