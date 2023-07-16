
function ExploreCard({title,url}) {
  
  return ( 
  <> 
    <div>
    <a href="/" className="flex-cc" style={{"height":"250px","width":"200px","background":`url('${url}')center no-repeat`,"backgroundSize":"cover","borderRadius":"10px","position":"relative","overflow":"hidden"}}>
      <span className="flex-cc" style={{"background":"rgba(95, 91, 91, 0.326)","borderRadius":"50%","height":"40px","width":"40px"}} ><img src="./images/arrow-right-solid.svg" height={"20px"} alt="" ></img></span>
      <div style={{"position":"absolute","width":"inherit","height":"inherit","background":"rgba(128, 128, 128, 0.326)"}}>
        <h3 style={{"position":"absolute","bottom":"5px","left":"10px","color":"white"}}>{title}</h3>
      </div>
    </a>
    </div>
  </> );
}

export default ExploreCard;