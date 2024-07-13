import React from 'react';
import './App.css';
import pic66 from './assets/pic66.jpeg'; 
import Nav from './components/nav';
import Footer from './components/footer';

function App() {
  return (
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
        <p className=' p-6'>
        MARLOCA WEST BEACH CLUB is a destination and place to experience the beach in a jovial way. Where we have beautiful sunsets, great music, direct access to the beach, water sports activities and drinks prepared by the most talented mixologists
        </p>
        <div className=' pb p-4'>
          SUNSETS
      </div>
      <div className='p-20'>
        WATERSPORTS
      </div>
      <div className=' pb p-12'>
          TOP DRINKS
      </div>



      </div>
      <Footer/>
    </div>
  );
}

export default App;
