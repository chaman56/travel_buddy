
import { useState } from "react";

import './main.css'
import ExploreCard from './main_components/explore';
import Intro from './main_components/intro';
import Package from './main_components/packages';
import Testm from './main_components/testimonials';
import Footer from "./footer";

function Main() {
  const [i, seti] = useState(1);
  return ( 
  <>
    <main>
      <Intro />
      
      <div className='info wrap-c' style={{"padding":"1rem"}}>
        <div className='about-india'>
          <h2><span className='heading'>About India</span></h2>
          <p>India is a very diversified country which makes it the best spot to travel and exploer it vast diversity and culture.</p>
          <p>Come and have a tour of different tourist sites of India and Enjoy its beauty.</p>
        </div>
      </div>

      <h2><span className='heading'>PACKAGES</span></h2>
      <div className='packages'>
        <Package title={'Trip to Goa'} price={8000} url={'./images/goa.jpeg'} />
        <Package title={'Trip to Darjling'} price={8000} url={'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTPNcY6Q5AQKV37XxQlRua2bIoEwUYV2JqEro1s4H1whVkCXPeQkq-n0hDu4blHKg88LB4-MSq9nUq9iDJL27Xy5bGRTw'} />
        <Package title={'Trip to Goa'} price={8000} url={'./images/goa.jpeg'} />
        <Package title={'Trip to Goa'} price={8000} url={'./images/goa.jpeg'} />
      </div>

      <h2><span className='heading'> Explore before you Visit </span></h2>
      <div className='explore'>
        <ExploreCard title={'Maldeeves'} url={'./images/goa.jpeg'} />
        <ExploreCard title={'manali'} url={'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/11/Top-4-Indian-skiing-destinations-Solang.webp'} />
        <ExploreCard title={'Shimla'} url={'https://assets-news.housing.com/news/wp-content/uploads/2022/07/18131039/shimla-feature-compressed.jpg'} />
        <ExploreCard title={'Varanasi'} url={'https://www.tourmyindia.com/packages-tour-india/uttar-pradesh-tours/images/varanasi-pilgrimage-tour1.jpg'} />
        <ExploreCard title={'Goa'} url={'./images/goa.jpeg'} />
      </div>

      <h2><span className='heading'> Celebrate with us </span></h2>
      <div className='festivals packages'>
        <Package title={'Holi in Vrindavan'} price={8000} url={'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/03/Holi-In-Vrindavan-Mathura-Featue.jpg?tr=w-600'} />
        <Package title={'Durga Puja WestBengal'} price={8000} url={'https://www.deccanherald.com/sites/dh/files/articleimages/2021/10/09/pti10052021000110b-1-1037681-1633796926.jpg'} />
        <Package title={'Holi in Vrindavan'} price={8000} url={'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/03/Holi-In-Vrindavan-Mathura-Featue.jpg?tr=w-600'} />
        <Package title={'Durga Puja WestBengal'} price={8000} url={'https://www.deccanherald.com/sites/dh/files/articleimages/2021/10/09/pti10052021000110b-1-1037681-1633796926.jpg'} />
      </div>
      <h2><span className='heading'> Why Travel Buddy </span></h2>
      <div style={{"padding":"1rem","textAlign":"center"}}>
        <p>Travel Buddy offers a Lot of great benifits to its customers at the best prices possible.</p>
        <p>It Gaurantees the best comfort to the tourists.</p>
        <p>Easy and convinient Bookings.</p>
        <p>24 hours Customer Supports.</p>
      </div>

      <h2><span className='heading'> User's Testimonials </span></h2>
      <div className='testimonials flex'>
        <button onClick={()=>{(i>0)?seti(i-1):seti(2)}}><i class="fa-solid fa-arrow-left fa-xl"></i></button>
        <div className='flex-c' >
          <div style={Testm[i].profile}></div>
          <h2>{Testm[i].name}</h2>
          <p style={{"textAlign":"center"}}>" {Testm[i].description} "</p>
        </div>
        <button onClick={()=>{i<2?seti(i+1):seti(0)}}><i class="fa-solid fa-arrow-right fa-xl"></i></button>
      </div>
      {/* <div style={{"borderBottom":"2px solid black","width":"80%"}}></div> */}
      <br></br>
      <h2><span className='heading'> BLOGS </span></h2>
      <div className="blogs packages">
        <Package title={'Top 10 place to visit in Summer.'} date={'June 25,2023'} url={'./images/goa.jpeg'} />
        <Package title={'Top 10 place to visit in Summer.'} date={'June 25,2023'} url={'https://assets-news.housing.com/news/wp-content/uploads/2022/07/18131039/shimla-feature-compressed.jpg'} />
        <Package title={'Top 10 place to visit in Summer.'} date={'June 25,2023'} url={'./images/goa.jpeg'} />
      </div>
      <Footer />
    </main>
  </> 
  );
}

export default Main;