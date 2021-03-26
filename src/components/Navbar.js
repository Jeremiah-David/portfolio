import { NavLink, Link, Router } from 'react-router-dom';



const myNavbar = () => {
  return (

    <div className="Nav">


      <div className="sns-btn sns-btn--home">
        <NavLink  style={{ textDecoration: 'none', color: 'white'}} className="nav-link" to="/"> Home </NavLink>
      </div>
      <div className="sns-btn sns-btn--stacks">
        <NavLink  style={{ textDecoration: 'none', color: 'white'}}className="nav-link" to="/stacks"> Technology Stacks </NavLink>
      </div>
      <div className="sns-btn sns-btn--projects">
        <NavLink  style={{ textDecoration: 'none', color: 'white'}} className="nav-link" to="/projects"> Projects </NavLink>
      </div>
      <div className="sns-btn sns-btn--about">
        <NavLink  style={{ textDecoration: 'none', color: 'white'}} className="nav-link" to="/about">Meet Jeremiah</NavLink>
      </div>
      




    </div>

  )
}

export default myNavbar