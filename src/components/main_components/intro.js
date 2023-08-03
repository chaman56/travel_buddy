
import './intro.css';

function Intro() {

  return (<>
    <div className="wrap-c intro" style={{"width":"100%"}}>
        <video src={'./videos/pixel.mp4'} muted autoPlay loop />
          <div className="intro-cover">
            <div style={{"paddingLeft":"1rem","maxWidth":"min(60%, 400px)"}}>
              <h1>Travel Buddy</h1>
              <p>Travel Buddy let's you dive in the indescrivable ocean of culture, peace and beauty of diversified places of India.</p>
              
              So why wait Let's dive Now.
            </div>
          </div>
    </div>
  </>);
}

export default Intro;