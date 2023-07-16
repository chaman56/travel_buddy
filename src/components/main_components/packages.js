
function Package({title,price,url,date}) {
  return (
  <>
    <a href="/" className="package">
      {!date && <h2>{title}</h2>}
      <div style={{"background":`url('${url}')center no-repeat`,"backgroundSize":"cover","height":"200px","width":"290px","borderRadius":"10px"}}></div>
      {price ? <div>
        <p>Starting at ₹ {price} per Person.</p>
        <div className="flex-b" style={{"padding":"10px 0"}}><span style={{"padding":"4px 7px","background":"orange","borderRadius":"20px"}}> Book Now </span> <span className="flex-cc" style={{"background":"gainsboro","borderRadius":"50%","height":"40px","width":"40px"}} ><img src="./images/arrow-right-solid.svg" height={"20px"} alt="" ></img></span></div>
      </div>:
      <div style={{"padding":"10px 0"}}>
        <h4 style={{"color":"gray"}}>{date}</h4>
        <p>{title}</p>
        </div>
      }
    </a>
  </> );
}

export default Package;