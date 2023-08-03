
import { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import './header.css';  
const Header = ({user, handleLogout}) =>{
  let [Search, setSearch] = useState(false);
  const [dispProf, setdispProf] = useState(false);

  return (
    <>
      <div className='header'>
        <div className="wrap-c" style={{"width":"100%","position":"relative"}}>
        <div className='header1'>
          <div className="btn"><i class="fa-solid fa-bars fa-xl"></i></div>
          <a href="/" className="logo"><img src="logo.jpg" height={100} alt="logo"></img></a>
          <div className="flex">
            <div style={{"cursor": "pointer"}} onClick={()=>{setSearch((Search?false:true));}}><i class="fa-solid fa-magnifying-glass"></i></div>
            {
            (!user)?
              <Link to='/login' className={"button"}>login</Link>
              :
              <button className="flex-cc" style={{"height":"40px","width":"40px","borderRadius":"50%","border":"none"}} onClick={()=>{dispProf ? setdispProf(false):setdispProf(true)}}><i class="fa-solid fa-user fa-xl"></i></button>}      
          </div>
        </div>
        </div>
        <div style={{"position":"relative"}} className="wrap-c">
          <div className='header2 flex'>
            <div><a href="/">Home</a></div>
            <div><a href="/">Packages</a></div>
            <div><a href="/">Expenses</a></div>
            <div><a href="/">locale</a></div>
            <div><a href="/">hello</a></div>
          </div>
          {dispProf && user &&
            <div style={{"position":"absolute","background":"white","right":"0","zIndex":"11000","padding":"1rem","top":"0"}} classaName="_user">
              <p>{user.email}</p>
              <Button variant="primary" onClick={handleLogout}>
                Log out
              </Button>
            </div>
          }
        </div>
        <div>{Search ?<div className="wrap-c" style={{"padding":"10px 0"}}>
          <input style={{"width":"90%","maxWidth":"1000px","padding":"10px","borderRadius":"30px"}} type="text" placeholder="Search..."></input></div>:<div></div>}
        </div>
      </div>
    </>
  )
}

export default Header;