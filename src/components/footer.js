
import './footer.css'

function Footer() {
  return ( 
    <footer className='flex-cc' style={{"flexDirection":"column"}}>
      <div className='footer' style={{"display":"flex","justifyContent":"space-around"}}>
        <div className='flex-c' style={{"alignItems":"start"}}>
          <h3>Social Media</h3>
          <a href='/'><i class="fa-brands fa-square-instagram fa-xl"></i> Instagram</a>
          <a href='/'><i class="fa-brands fa-twitter fa-xl"></i> Twitter</a>
          <a href='/'><i class="fa-brands fa-square-facebook fa-xl"></i> Facebook</a>
          <a href='/'><i class="fa-brands fa-linkedin fa-xl" ></i> Linkedin</a>
        </div>
        <div className='flex-c' style={{"alignItems":"start"}}>
          <h3>Services</h3>
          <a href='/'>Travel Packages</a>
          <a href='/'>Custom Tour</a>
          <a href='/'>Clebrate with us</a>
          <a href='/'>Connect with Locals</a>
        </div>
        <div className='flex-c' style={{"alignItems":"start"}}>
          <h3>Top Packeges</h3>
          <a href='/'>Rajsthan Tour</a>
          <a href='/'>Andman Island</a>
          <a href='/'>Maldeevs</a>
          <a href='/'>Shimla</a>
        </div>
      </div>
      <br></br>
      <p>© 2023, Built by chaman and Travel Buddy team </p>
    </footer>
  );
}

export default Footer;