
import React from 'react';
import '../App.css';
import pic66 from '../assets/pic66.jpeg'; 
import Nav from '../components/nav';
import Footer from '../components/footer';

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
        <p className=' px-24 pt-6'>
        MARLOCA WEST BEACH CLUB is a destination and place to experience the beach in a jovial way. Where we have beautiful sunsets, great music, direct access to the beach, water sports activities and drinks prepared by the most talented mixologists
        </p>
    </div>

     <div className=' grid bg-slate-500 grid-cols-2'>
     <div className='p-12'>
          Bar Image
      </div>
      <div className='p-12'>
          Bar
      </div>
      <div className='p-12'>
          Beach Image
      </div>
      <div className='p-12'>
          Beach
      </div>

     </div>

     <div className=' grid bg-yellow-500 grid-cols-2'>
     <div className='p-12'>
         Music
      </div>
      <div className='p-12'>
          Music Image
      </div>
      <div className='p-12'>
          Cocktail Image
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
