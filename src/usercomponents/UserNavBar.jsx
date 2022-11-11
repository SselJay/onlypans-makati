import React from "react";
// import {Link} from 'react-router-dom';
import './UserNavBar.css';
import { Link, useNavigate } from 'react-router-dom'

const UserNavBar = ()=>{
  const navigate = useNavigate()


  const onHome = () => {
    navigate('/home')
  }

  const onMenu = () => {
    navigate('/usermenu')
  }

  const onEvents = () => {
    navigate('/userevents')
  }

  const onAboutUs = () => {
    navigate('/useraboutus')
  }


    return (
      <div className="container-fluid m-0 p-0">
<nav className="custom-className-main-nav navbar sticky-top navbar-expand-lg p-3 shadow bg-white borderless px-5">
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="custom-className-logo-top collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="custom-className-logo-top nav-item">
          <Link to="/home" id="homeicon" className="custom-className-logo-top nav-link active" aria-current="page"><img className="custom-className-logo-top" src="/img/onlypansprofilepicture.jpeg" alt=""  onClick={onHome} style={{borderRadius: 15}}/></Link>
          <hr className="custom-className-logo-top-hr"></hr>
        </li>
      </ul>
      <ul className="custom-className-navbar-gap navbar-nav mb-2 mb-lg-0">
        <li className="nav-item text-center">
          <Link to="/home" id="custom-className-hover-a" className="fs-5 nav-link" aria-current="page" onClick={onHome}><i class="fa-solid fa-house"></i> Home</Link>
        </li>
        <li className="nav-item text-center">
          <Link to="/usermenu" id="custom-className-hover-a" className="fs-5 nav-link" aria-current="page" onClick={onMenu}><i class="fa-solid fa-utensils"></i> Menu</Link>
        </li>
        <li className="nav-item text-center">
          <Link to="/userevents" id="custom-className-hover-a" className="fs-5 nav-link" aria-current="page" onClick={onEvents}><i class="fa-regular fa-calendar-days"></i> Events</Link>
        </li>
        <li className="nav-item text-center">
          <Link to="/useraboutus" id="custom-className-hover-a" className="fs-5 nav-link" onClick={onAboutUs}><i class="fa-solid fa-user"></i> About Us</Link>
        </li>
      
        {/* <li className="custom-className-dropdown nav-item dropdown">
        <a className=" dropdown-toggle" type="button" data-bs-toggle="dropdown">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="30" fill="red" className="bi bi-person-square" viewBox="0 0 16 16">
                <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
                <path d="M2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2zm12 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1v-1c0-1-1-4-6-4s-6 3-6 4v1a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12z"/>
              </svg>
        </a>
        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="dropdownMenuButton1">
          <li>
          <a className='btn' >
               Logout
            </a>
            </li>
          <li>
          <Link className='btn btn-light ' to='/register'>
                Register
              </Link>
              </li>
        </ul>
      </li> */}
    </ul>
    </div>
</nav>
</div>
    )
}
export default UserNavBar