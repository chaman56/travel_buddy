
import './intro.css';

function Intro() {

  return (<>
    <div className="wrap-c intro" style={{"width":"100%"}}>
        <video src={'./videos/pixel.mp4'} muted autoPlay loop />
          <div className="intro-cover">
            <div style={{"paddingLeft":"1rem","maxWidth":"min(60%, 400px)"}}>
              <h1>Tour India</h1>
              <p>The best country full of culture and diversity with drops of peace and perfection in the ocean of warm and welcoming hearts.</p>
              <br></br>
              Enjoy your trip -
            </div>
          </div>
    </div>
  </>);
}

export default Intro;