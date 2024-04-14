import { ResetIcon } from '@radix-ui/react-icons'

function Reset ({ setCount }) {
    const handleClick = (event) => {
        setCount(0)
        event.currentTarget.blur();
    }

    return (
        <button className="reset-btn"><ResetIcon onClick={handleClick} className='reset-btn-icon'/></button>
    )
}

export default Reset