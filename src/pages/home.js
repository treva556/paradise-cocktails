
import React from 'react';
import '../App.css';
import pic66 from '../assets/pic66.jpeg'; 
import Nav from '../components/nav';
import Footer from '../components/footer';
import bar from '../assets/bar.jpg';
import beach from '../assets/beach.jpeg';
import ctail from '../assets/cocktail.jpg';
import dj from '../assets/dj.jpeg';
import Sun from '../assets/sun.jpg';
import Water from '../assets/water.jpg';
import food from '../assets/food.jpg';
import Map from '../components/map';
import neg from '../assets/negroni.jpeg';
import prp from '../assets/prp.jpeg';
import Mar from '../assets/mar.png';
import { Link } from 'react-router-dom';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 2, 
    slidesToScroll: 2, 
    autoplay: true,
    autoplaySpeed: 2000
  };

  return (
    <div>
      <div className="App">
        <header className="p-3">
          <Nav />
          <div className="relative w-full h-80 rounded-3xl">
            <img
              src={pic66}
              alt="Example"
              className="w-full h-full object-cover rounded-3xl"
            />
            <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-lg">
              MARLOCA WEST BEACH CLUB
            </div>
          </div>
          <div className='bg-red-500 p-6 mt-3 rounded-2xl italic text-white'>
            Experience the ultimate bonanaza
          </div>
        </header>

        <div className='pb font-mono'>
          <p className='px-10 pb-4 pt-6'>
            MARLOCA WEST BEACH CLUB is a destination and place to experience the beach in a jovial way. Where we have beautiful sunsets, great music, direct access to the beach, water sports activities and drinks prepared by the most talented mixologists.
          </p>
        </div>

      <div className=' pb'>

      <div className=' flex flex-col md:flex-row lg:flex-row text-red-500 justify-around p-12'>
        <div>
          <h3> Address </h3>
          <p> Westlands</p>
        </div>
        <div>
          <h4> Contact us for reservations, bookings for events & deliveries </h4>
          <p> number</p>
        </div>
      </div>

        <Slider {...settings}>
          <div className='p-1 '>
            <h2 className="text-xl font-bold">Music</h2>
            <p className="mt-2">Experience live music performances from top artists and DJs.</p>
          </div>
          <div className="relative w-full h-96 rounded">
            <img
              src={bar}
              alt="DJ"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className='p-1 '>
            <h2 className="text-xl font-bold">Music</h2>
            <p className="mt-2">Experience live music performances from top artists and DJs.</p>
          </div>
          <div className="relative w-full h-96 rounded">
            <img
              src={food}
              alt="DJ"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className='p-1'>
            <h2 className="text-xl font-bold">Cocktail</h2>
            <p className="mt-2">Savor our expertly crafted cocktails made by talented mixologists.</p>
          </div>
          <div className="relative w-full h-96 rounded">
            <img
              src={ctail}
              alt="Cocktail"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </Slider>


        <Slider {...settings}>
          <div className='p-1 '>
            <h2 className="text-xl font-bold">Music</h2>
            <p className="mt-2">Experience live music performances from top artists and DJs.</p>
          </div>
          <div className="relative w-full h-96 rounded">
            <img
              src={Sun}
              alt="DJ"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className='p-1 '>
            <h2 className="text-xl font-bold">Music</h2>
            <p className="mt-2">Experience live music performances from top artists and DJs.</p>
          </div>
          <div className="relative w-full h-96 rounded">
            <img
              src={Water}
              alt="DJ"
              className="w-full h-full object-cover rounded"
            />
          </div>
          {/* <div className='p-1'>
            <h2 className="text-xl font-bold">Cocktail</h2>
            <p className="mt-2">Savor our expertly crafted cocktails made by talented mixologists.</p>
          </div>
          <div className="relative w-full h-96 rounded">
            <img
              src={beach}
              alt="Cocktail"
              className="w-full h-full object-cover rounded"
            />
          </div> */}
        </Slider>
        </div>





        <div className=' pb'>
        <div className=" mx-24 pb p-6">
          <h1>Real-time Map in React</h1>
          <Map /> {/* Render the Map component */}
        </div>
  </div>
       

        <div className='pb p-4'>
          <h2 className="text-xl font-bold">Top Drinks</h2>
          <div className='flex justify-center'>
            <div className='grid grid-cols-3 p-2 py-4 gap-4'>
              <div className="relative  w-20 h-32 rounded-xl lg:w-52 lg:h-64 md:w-32 md:h-40">
                <img
                  src={neg}
                  alt="Negroni"
                  className="w-full hover:scale-110 h-full object-cover rounded-xl"
                />
                <p className="text-center mt-2">Negroni</p>
              </div>
              <div className="relative w-20 h-32 rounded-xl lg:w-52 lg:h-64 md:w-32 md:h-40">
                <img
                  src={Mar}
                  alt="Martini"
                  className="w-full h-full  hover:scale-110 object-cover rounded-xl"
                />
                <p className="text-center mt-2">Martini</p>
              </div>
              <div className='border border-b-red-700 border-amber-100'>
                <div className="relative w-24 h-32 rounded-xl lg:w-52 lg:h-64 md:w-32 md:h-40">
                  <img
                    src={prp}
                    alt="P.Rum Punch"
                    className="w-full hover:scale-110 h-full object-cover rounded-t-xl"
                  />
                </div>
                <p className="text-center mt-2">P.Rum Punch</p>
              </div>
            </div>
          </div>

        <div>
         
        <div className='pb p-4'>
          <h2 className="text-xl font-bold">Weekly Specials</h2>
          <div className='flex justify-center'>
            <div className='grid grid-cols-3 p-2 py-4 gap-4'>
              <div className="relative w-36 h-56 rounded-xl lg:w-96 lg:h-104 md:w-56 md:h-80">
                <img
                  src={neg}
                  alt="Negroni"
                  className="w-full hover:scale-110 h-full object-cover rounded-xl"
                />
                <p className="text-center mt-2">Negroni</p>
              </div>
              <div className="relative w-36 h-56 rounded-xl lg:w-96 lg:h-104 md:w-56 md:h-80">
                <img
                  src={Mar}
                  alt="Martini"
                  className="w-full h-full  hover:scale-110 object-cover rounded-xl"
                />
                <p className="text-center mt-2">Martini</p>
              </div>
              <div className='border border-b-red-700 border-amber-100'>
                <div className="relative w-36 h-56 rounded-xl lg:w-96 lg:h-104 md:w-56 md:h-80">
                  <img
                    src={prp}
                    alt="P.Rum Punch"
                    className="w-full hover:scale-110 h-full object-cover rounded-t-xl"
                  />
                </div>
                <p className="text-center mt-2">P.Rum Punch</p>
              </div>
            </div>
          </div>
      </div>
      </div>
          
      <div>
         
         <div className='pb p-4'>
           <h2 className="text-xl font-bold"> Meet the Team </h2>
           <div className='flex justify-center'>
             <div className='grid grid-cols-3 p-2 py-4 gap-4'>
               <div className="relative  w-20 h-32 rounded-xl lg:w-52 lg:h-64 md:w-32 md:h-40">
                 <img
                   src={neg}
                   alt="Negroni"
                   className="w-full hover:scale-110 h-full object-cover rounded-xl"
                 />
                 <p className="text-center mt-2">Negroni</p>
               </div>
               <div className="relative w-20 h-32 rounded-xl lg:w-52 lg:h-64 md:w-32 md:h-40">
                 <img
                   src={Mar}
                   alt="Martini"
                   className="w-full h-full  hover:scale-110 object-cover rounded-xl"
                 />
                 <p className="text-center mt-2">Martini</p>
               </div>
               <div className='border border-b-red-700 border-amber-100'>
                 <div className="relative w-24 h-32 rounded-xl lg:w-52 lg:h-64 md:w-32 md:h-40">
                   <img
                     src={ctail}
                     alt="P.Rum Punch"
                     className="w-full hover:scale-110 h-full object-cover rounded-t-xl"
                   />
                 </div>
                 <p className="text-center mt-2">P.Rum Punch</p>
               </div>
             </div>
           </div>
       </div>
       </div>


          <div className='text-center mt-4'>
            <Link to="/menu">
              <button className='bg-blue-300 hover:bg-white hover:text-black text-white font-bold py-1 px-2 border border-blue-700 rounded'>
                View Full Menu
              </button>
            </Link>
          </div>
        </div>

      </div>

      <div className=' flex flex-col md:flex-row lg:flex-row justify-around pb'>
        <div>
        <h4> The Best Customers </h4>
        </div>
        <div>
          comments
        </div>
        </div>

        <div className=' text-5xl p-4 py-14 pb'>
          <p>
          Cold Beers
          <br/>
          Late night Food
          <br/>
          Real Good Cocktails

          </p>
        </div>



      <Footer />
    </div>
  );
}

export default Home;