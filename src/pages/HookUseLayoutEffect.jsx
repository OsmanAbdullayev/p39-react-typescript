import React, { useEffect, useLayoutEffect, useState } from 'react'

const HookUseLayoutEffect = () => {
  const [message, setMessage] = useState("Hi")
  // alert("hello")


  // useEffect(()=> {
  //   setMessage("useEffect implemented")
  // works asynchronously
  // })

  useLayoutEffect(()=> {
    setMessage("useLayoutEffect implemented")
    // works synchronously
  })

  return (
    <div className='container text-center mt-3'><h3>{message}</h3></div>
  )
}

export default HookUseLayoutEffect