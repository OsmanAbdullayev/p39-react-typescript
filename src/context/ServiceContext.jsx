import React, { useState } from 'react'
import { createContext } from 'react'



export const ServiceContext = createContext()

const ServiceProvider = (props) => {

  const [services, setServices] = useState([
    {
      id: '1',
      title: "Ironing",
      price: 109.95,
      description: "You clothes will be like new",
      image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aXJvbiUyMCUyMGNsb3RoZXN8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: '1',
      title: "Chemical Cleaning",
      price: 10,
      description: "You clothes will be fresh and all bacterias will be gone",
      image: "https://images.unsplash.com/photo-1531956656798-56686eeef3d4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2hlbWljYWx8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: '1',
      title: "Coloring",
      price: 59,
      description: "Change colors of your clothes, only for cotton!",
      image: "https://images.unsplash.com/photo-1464820453369-31d2c0b651af?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sb3JzfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: '1',
      title: "Washing",
      price: 59,
      description: "Your clothes will get fresh as never before!",
      image: "https://images.unsplash.com/photo-1611737716329-69c2bb3056b9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bGF1bmRyeXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: '1',
      title: "Resizing",
      price: 49,
      description: "Decrease size of your clothes",
      image: "https://images.unsplash.com/photo-1545038495-06c466616626?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2l6ZXxlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: '1',
      title: "Sewing",
      price: 105,
      description: "Your clothes teared apart? We will make sure they are like new!",
      image: "https://images.unsplash.com/photo-1619470148699-ce3476e0e1f0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHNld2luZ3xlbnwwfDJ8MHx8&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: '1',
      title: "Whitening",
      price: 49,
      description: "We will deliver the Siberian whiteness to your clothes!",
      image: "https://images.unsplash.com/photo-1565940340677-c98b931ffebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8d2hpdGV8ZW58MHwyfDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    },
    {
      id: '1',
      title: "Blackening",
      price: 49,
      description: "We will restore the blackenss of your clothes",
      image: "https://images.unsplash.com/photo-1592833578500-1082e18665a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fGJsYWNrfGVufDB8MnwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    },

  ])

  return (
    <ServiceContext.Provider value={[services, setServices]}>
      {props.children}
    </ServiceContext.Provider>
  )
}

export default ServiceProvider