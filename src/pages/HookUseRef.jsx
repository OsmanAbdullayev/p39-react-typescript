import React, { useRef } from 'react'

const HookUseRef = () => {
const inputRef = useRef();

const handleClick = () => {
  const message = inputRef.current.value;
  console.log(message)

}


  return (
    <div className="container mt-3 text-center">
      <input type="text" className='me-2' ref={inputRef} />
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default HookUseRef