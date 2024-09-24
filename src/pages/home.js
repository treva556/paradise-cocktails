
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


   // Slider settings for customer reviews
   const settingsReviews = {
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 1, // Show one review at a time
    slidesToScroll: 1, // Scroll one review at a time
    autoplay: true,
    autoplaySpeed: 2500
  };

  return (
    <div>
      <div className="App">
        <header className="p-1 pb">
          <Nav />
          <div className="relative w-full mt-2 h-80 rounded-3xl pb">
            <img
              src={pic66}
              alt="Example"
              className="w-full h-full object-cover pb rounded-3xl"
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
        <Slider {...settings}>
          <div className='p-1'>
            <h2 className="text-xl font-bold">Restaurant</h2>
            <p className="mt-2">Indulge in a wide range of international cuisine prepared by our award-winning chefs.</p>
          </div>
          <div className="relative w-full h-96 rounded">
            <img
              src={bar}
              alt="Restaurant"
              className="w-full h-full object-cover rounded"
            />
          </div>
         
          <div className="relative w-full h-96 rounded">
            <img
              src={food}
              alt="Food"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className='p-1'>
            <h2 className="text-xl font-bold">Food</h2>
            <p className="mt-2">Enjoy exquisite dishes crafted from fresh, locally sourced ingredients.</p>
          </div>
         
          <div className="relative w-full h-96 rounded">
            <img
              src={ctail}
              alt="Cocktail"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className='p-1'>
            <h2 className="text-xl font-bold">Cocktails</h2>
            <p className="mt-2">Savor our expertly crafted cocktails, mixed with a blend of tropical and classic flavors.</p>
          </div>
        </Slider>

        <Slider {...settings}>
          <div className='p-1'>
            <h2 className="text-xl font-bold">Sunset</h2>
            <p className="mt-2">Watch the sunset while enjoying our signature cocktails with breathtaking ocean views.</p>
          </div>
          <div className="relative w-full h-96 rounded">
            <img
              src={Sun}
              alt="Sunset"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className='p-1'>
            <h2 className="text-xl font-bold">Watersports</h2>
            <p className="mt-2">Engage in thrilling water activities, from jet skiing to paddleboarding.</p>
          </div>
          <div className="relative w-full h-96 rounded">
            <img
              src={Water}
              alt="Watersports"
              className="w-full h-full object-cover rounded"
            />
          </div>
        </Slider>
      </div>


        <div className=' pb flex gap-6 flex-col md:flex-row lg:flex-row text-red-500 justify-around p-12'>
       
        <div>
          <h3 className=' hover:underline text-black font-semibold'> Address </h3>
          <p> 20th Floor One Africa Place, Waiyaki Wy, Nairobi  </p>
        </div>

        <div className=' '>
          <h4 className='hover:underline text-black font-semibold'>
             Contact us for reservations, bookings for events & deliveries 
             </h4>
          <p> number</p>
          <div>
           Phone: 
          </div>
          <div>
           Email:
          </div>
        </div>

        <div className=''>
          <h4 className='hover:underline text-black font-semibold '> Lunch </h4>
          <p> number</p>
          <div>
           Phone: 
          </div>
          <h5 className=' hover:underline text-black font-semibold '>
            Dinner
          </h5>
          <div>
           Email:
          </div>
        </div>
      </div>



        <div className=' pb'>
         <div className="  pb p-1">
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

        
         
        <div className='pb p-4'>
          <h2 className="text-xl font-bold">Weekly Specials</h2>
           <div className='flex flex-col gap-6 md:flex-row lg:flex-row justify-center border pb1 md:border-r-red-500'>

              <div className="relative w-full md:w-1/2 lg:h-1/2 border border-red-700 h-56 rounded-xl ">
                <img
                  src={food}
                  alt="Negroni"
                  className="w-full hover:scale-110 h-full object-cover rounded-xl"
                />
                </div>
                <div className=' flex flex-col gap-2 mt-4'>
                  <div className=' border-l-black border-4 border-red-500 bg-red-500'>
                    Special Buggers wednesday
                  </div>
                  <div className='border-l-black border-4 border-red-500 bg-red-500'> 
                    Happy Hour thursdays
                  </div>
                  <div className='border-l-black border-4 border-red-500 bg-red-500'>
                  Happy Hour thursdays
                  </div>
                </div>
              </div>
            </div>
          

            <div className='pb p-4'>
        <h2 className="text-xl font-bold">Meet the Team</h2>
        <div className='grid grid-cols-3 gap-4'>
          <div className="p-2">
            <h3 className="text-lg font-semibold">Head Chef</h3>
            <p>John Doe - Our head chef is a culinary maestro with over 20 years of experience in top kitchens worldwide.</p>
          </div>
          <div className="p-2">
            <h3 className="text-lg font-semibold">Sous Chef</h3>
            <p>Jane Smith - Assisting our head chef, Jane specializes in Mediterranean cuisine with a modern twist.</p>
          </div>
          <div className="p-2">
            <h3 className="text-lg font-semibold">Bartender</h3>
            <p>Michael Lee - A seasoned mixologist who brings creativity and flair to every cocktail he prepares.</p>
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

      {/* Customer Reviews Slider */}
      <div className='pb p-4'>
          <h2 className="text-xl font-bold">Customer Reviews</h2>
          <Slider {...settingsReviews}>
            <div className='p-2'>
              <p className='italic'>"The atmosphere is amazing, and the drinks are to die for!"</p>
              <p>- Sarah K.</p>
            </div>
            <div className='p-2'>
              <p className='italic'>"An unforgettable beach experience with incredible food!"</p>
              <p>- Tom L.</p>
            </div>
            <div className='p-2'>
              <p className='italic'>"Simply the best sunset views I've ever seen."</p>
              <p>- Maria J.</p>
            </div>
            <div className='p-2'>
              <p className='italic'>"Excellent service and vibrant nightlife."</p>
              <p>- David R.</p>
            </div>
          </Slider>
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