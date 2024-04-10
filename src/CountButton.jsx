import { MinusIcon, PlusIcon } from "@radix-ui/react-icons";

function CountButton ({ type, setCount }) {
    const handleClick = () => {
        setCount((prevCount) => {
            if (type === 'minus') {
                return prevCount - 1
            } else {
                return prevCount + 1
            }
        })
    }

    return(
      <button onClick={handleClick} 
      className="count-btn">
            {
                type === 'minus' ? <MinusIcon className="count-btn-icon"/> : <PlusIcon className="count-btn-icon"/>
            }
            

        </button>
    )
  }

  export default CountButton;