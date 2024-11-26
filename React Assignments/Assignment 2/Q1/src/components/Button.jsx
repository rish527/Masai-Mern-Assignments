import React from 'react'

function Button({label, onClick}) {
  return (
    <div>
        <button onClick={onClick} className='bg-blue-500 hover:bg-blue-700  rounded-full text-white py-2 px-8 font-bold'>{label}</button>
    </div>
  )
}

export default Button