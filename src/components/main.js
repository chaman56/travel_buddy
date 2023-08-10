
import { useState } from "react";

import './main.css'
import ExploreCard from './main_components/explore';
import Intro from './main_components/intro';
import Package from './main_components/packages';
import Testm from './main_components/testimonials';
import { useRef } from "react";

function Main() {
  let [i, seti] = useState(1);

  const ref1 = useRef(null);
  const ref2 = useRef(null);
  const ref3 = useRef(null);
  const scroll_Left = (ref) =>{
    const timer = setInterval(function(){
      ref.current.scrollLeft -= 10;
    },10)
    setTimeout(function(){
      clearInterval(timer)
    },500)
  }
  const scroll_Right = (ref) =>{
    const timer = setInterval(function(){
      ref.current.scrollLeft += 10;
    },10)
    setTimeout(function(){
      clearInterval(timer)
    },500)
  }

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
      <div className="flex flex-cc" style={{"width":"100%"}}>
        <button id="package3" onClick={()=>scroll_Left(ref1)} className="slide_button" style={{"marginRight":"5px"}}><i class="fa-solid fa-chevron-left fa-xl"></i></button>
          <div id="scroll1" className='packages' ref={ref1}>
            <Package id={1} title={'ENCHANTING INDIA'} price={39999} url={'./images/goa.jpeg'} />
            <Package id={2} title={'HERITAGE GEMS OF NORTH INDIA'} price={41999} url={'https://encrypted-tbn1.gstatic.com/licensed-image?q=tbn:ANd9GcTPNcY6Q5AQKV37XxQlRua2bIoEwUYV2JqEro1s4H1whVkCXPeQkq-n0hDu4blHKg88LB4-MSq9nUq9iDJL27Xy5bGRTw'} />
            <Package id={3} title={'WESTERN WONDERS'} price={36999} url={'./images/goa.jpeg'} />
          </div>
        <button id="package3" onClick={()=>scroll_Right(ref1)} className="slide_button" style={{"marginLeft":"5px"}}><i class="fa-solid fa-chevron-right fa-xl"></i></button>
      </div>

      <h2><span className='heading'> Explore before you Visit </span></h2>
      <div className="wrap-c" style={{"width":"100%"}}>
      <button onClick={()=>scroll_Left(ref2)} className="slide_button" style={{"marginRight":"5px"}}><i class="fa-solid fa-chevron-left fa-xl"></i></button>
      <div className='explore' ref={ref2}>
        <ExploreCard id={1} title={'Maldeeves'} url={'./images/goa.jpeg'} />
        <ExploreCard id={2} title={'manali'} url={'https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/11/Top-4-Indian-skiing-destinations-Solang.webp'} />
        <ExploreCard id={3} title={'Shimla'} url={'https://assets-news.housing.com/news/wp-content/uploads/2022/07/18131039/shimla-feature-compressed.jpg'} />
        <ExploreCard id={4} title={'Varanasi'} url={'https://www.tourmyindia.com/packages-tour-india/uttar-pradesh-tours/images/varanasi-pilgrimage-tour1.jpg'} />
        <ExploreCard id={5} title={'Goa'} url={'./images/goa.jpeg'} />
      </div>
      <button onClick={()=>scroll_Right(ref2)} className="slide_button" style={{"marginLeft":"5px"}}><i class="fa-solid fa-chevron-right fa-xl"></i></button>
      </div>

      <h2><span className='heading'> Celebrate with us </span></h2>
      <div className="wrap-c" style={{"width":"100%"}}>
      <button onClick={()=>scroll_Left(ref3)} className="slide_button" style={{"marginRight":"5px"}}><i class="fa-solid fa-chevron-left fa-xl"></i></button>
      <div className='festivals packages' ref={ref3}>
        <Package title={'Holi in Vrindavan'} price={8000} url={'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/03/Holi-In-Vrindavan-Mathura-Featue.jpg?tr=w-600'} />
        <Package title={'Durga Puja WestBengal'} price={8000} url={'https://i.pinimg.com/564x/e8/ae/8d/e8ae8dd3bd7ca0cd25d4a07f44f78662.jpg'} />
        <Package title={'Holi in Vrindavan'} price={8000} url={'https://images.travelandleisureasia.com/wp-content/uploads/sites/2/2019/03/Holi-In-Vrindavan-Mathura-Featue.jpg?tr=w-600'} />
        <Package title={'Durga Puja WestBengal'} price={8000} url={'https://i.pinimg.com/564x/1e/5f/98/1e5f988e5db0b2a0adfe54e0a72279d1.jpg'} />
      </div>
      <button onClick={()=>scroll_Right(ref3)} className="slide_button" style={{"marginLeft":"5px"}}><i class="fa-solid fa-chevron-right fa-xl"></i></button>
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
        <button onClick={()=>{(i>0)?seti(i-1):seti(2)}}><i className="fa-solid fa-arrow-left fa-xl"></i></button>
        <div className='flex-c' >
          <div style={Testm[i].profile}></div>
          <h2>{Testm[i].name}</h2>
          <p style={{"textAlign":"center"}}>" {Testm[i].description} "</p>
        </div>
        <button onClick={()=>{i<2?seti(i+1):seti(0)}}><i className="fa-solid fa-arrow-right fa-xl"></i></button>
      </div>
      {/* <div style={{"borderBottom":"2px solid black","width":"80%"}}></div> */}
      <br></br>
      <h2><span className='heading'> BLOGS </span></h2>
      <div className="blogs flex">
        <div className="flex">
          <Package title={'Top 10 place to visit in Summer.'} date={'June 25,2023'} url={'./images/goa.jpeg'} />
          <Package title={'Top 10 place to visit in Summer.'} date={'June 25,2023'} url={'https://assets-news.housing.com/news/wp-content/uploads/2022/07/18131039/shimla-feature-compressed.jpg'} />
          <Package title={'Top 10 place to visit in Summer.'} date={'June 25,2023'} url={'./images/goa.jpeg'} />
        </div>
      </div>
    </main>
  </> 
  );
}

export default Main;