import React from 'react'
import Button from './Button'

function Counter() {
    const [count, setCount] = React.useState(0);

    const handlePlus=()=>{
        setCount(count+1);
        console.log("+")
    }
    const handleMinus=()=>{
        if (count === 0) {
            alert("Can't go down");
        } else {
            setCount(count - 1);
        }
    }

  return (
    <div className='flex flex-col justify-center items-center gap-10'>
        <div className="num text-5xl">{count}</div>
        <div className="controls flex gap-6">
            <Button label='-' onClick={handleMinus} />
            <Button label='+' onClick={handlePlus} />
        </div>
    </div>
  )
}

export default Counter