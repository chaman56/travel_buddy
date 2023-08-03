
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import packages from "../../database/packages";

function Package({id,title,price,url,date}) {
  const [bsize, setbsize] = useState(200);
  const [bg, setbg] = useState('white');

  return (
  <>
    <Link to={`/packages`} className="package" style={{"background": bg}}
    onMouseEnter={()=>{setbg('rgb(230, 230,230)')}}
    onMouseLeave={()=>{setbg('white')}}>
      {!date && <h6>{title}</h6>} 
      <div style={{"background":`url('${url}')center no-repeat`,"backgroundSize":"cover","height":bsize,"width":"290px","borderRadius":"10px","transition":".5s"}}></div>
      {price ? <div>
        <p>Starting at ₹ {price} per Person.</p>
        <div className="flex-b" style={{"padding":"10px 0"}}><span style={{"padding":"4px 7px","background":"orange","borderRadius":"20px"}}> Book Now </span> <span className="flex-cc" style={{"background":"gainsboro","borderRadius":"50%","height":"40px","width":"40px"}} ><img src="./images/arrow-right-solid.svg" height={"20px"} alt="" ></img></span></div>
      </div>:
      <div style={{"padding":"10px 0"}}>
        <h4 style={{"color":"gray"}}>{date}</h4>
        <p>{title}</p>
        </div>
      }
    </Link>
  </> );
}

export default Package;