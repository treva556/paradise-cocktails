
import React from 'react';
import '../App.css';
import pic66 from '../assets/pic66.jpeg'; 
import Nav from '../components/nav';
import Footer from '../components/footer';
import bar from '../assets/bar.jpeg';
import beach from '../assets/beach.jpeg';
import ctail from '../assets/cocktail.jpeg';

function Home() {
  return (
    <div>

    
    <div className="App">
       <header className="p-3">
        <Nav/>
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
      <div className=' pb font-mono '>
        <p className=' px-10 pb-4 pt-6'>
        MARLOCA WEST BEACH CLUB is a destination and place to experience the beach in a jovial way. Where we have beautiful sunsets, great music, direct access to the beach, water sports activities and drinks prepared by the most talented mixologists
        </p>
    </div>

     <div className=' grid pb grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
     <div className="relative w-full h-60 rounded-3xl">
            <img
                src={bar}
                alt="Example"
                className="w-full h-full object-cover rounded-3xl"
            />
        </div>
      <div className='p-12'>
          Bar
      </div>
      <div className='p-12 border border-t-rose-800'>
          Beach 
      </div>
      <div className="relative w-full h-60 rounded-3xl">
            <img
                src={beach}
                alt="Example"
                className="w-full h-full object-cover rounded-3xl"
            />
        </div>

     </div>

     <div className=' grid br grid-cols-2 '>
     <div className='p-12'>
         Music
      </div>
      <div className='p-12'>
          Music Image
      </div>
      <div className="relative w-full h-60 rounded">
            <img
                src={ctail}
                alt="Example"
                className="w-full h-full object-cover rounded"
            />
        </div>
      <div className='p-12'>
          Cocktail
      </div>

     </div>




    <div className=' pb p-12'>
          TOP DRINKS
      </div>




    <div>
        <div className=' bg-red-300 p-4'>
          SUNSETS
      </div>
      <div className=' bg-blue-300 p-20'>
        WATERSPORTS
      </div>
    
      </div>
      </div>
      <Footer/>
    </div>
  );
}

export default Home;
