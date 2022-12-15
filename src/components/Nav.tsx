import { useState } from 'react'
import {NavLink} from 'react-router-dom'
import User from './User'


const Nav = () => {
  const [log, setLog] = useState(false)
  return (
<nav className="navbar navbar-expand-lg bg-dark navbar-dark shadow py-3">
  <div className="container-fluid">
    <NavLink className="navbar-brand" to="/">GUCCI</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <NavLink className="nav-link active" aria-current="page" end to="/" >Home</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/products">Products</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/services">Services</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/useLayoutEffect">useLayoutEffect hook</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/useRef">useRef hook</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/useImperativeHandle">useImperativeHandle hook</NavLink>
        </li>
        
       
      </ul>
      <div className="d-flex">
      {log?    <User username="Osman" messageCount={30} isLoggedIn={log}/>:""}
        <button className="btn btn-light" onClick={()=>{
          log?setLog(false):setLog(true)
        }}>{log?"Log Out":"Sign In"}</button>
      </div>
    </div>
  </div>
</nav>

  )
}

export default Nav