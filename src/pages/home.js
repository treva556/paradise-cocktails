
import React from 'react';
import '../App.css';
import pic66 from '../assets/pic66.jpeg'; 
import Nav from '../components/nav';
import Footer from '../components/footer';
import bar from '../assets/bar.jpeg';
import beach from '../assets/beach.jpeg';
import ctail from '../assets/cocktail.jpeg';
import dj from '../assets/dj.jpeg';
import neg from '../assets/negroni.jpeg';
import prp from '../assets/prp.jpeg';
import Mar from '../assets/mar.png';
import { Link } from 'react-router-dom';

function Home() {
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
        
        <div className='pb'>
          <div className='grid pb grid-cols-1 md:grid-cols-2 lg:grid-cols-2 lg:ml-64 lg:mr-64 px-2'>
            <div className="relative w-full h-60 rounded-3xl">
              <img
                src={bar}
                alt="Bar"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
            <div className='p-4 sm:border border-b-red-800 border-amber-100'>
              <h2 className="text-xl font-bold">Club</h2>
              <p className="mt-2">Enjoy our exclusive club area with premium facilities and a vibrant atmosphere.</p>
            </div>
            <div className='p-4'>
              <h2 className="text-xl font-bold">Beach</h2>
              <p className="mt-2">Relax on our beautiful beach with direct access to the sea and breathtaking sunsets.</p>
            </div>
            <div className="relative w-full h-60 rounded-3xl">
              <img
                src={beach}
                alt="Beach"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>
        </div>

        <div className='grid br grid-cols-2 pt-6 px-2 lg:grid-cols-4 lg:gap-2 pb-2'>
          <div className='p-12'>
            <h2 className="text-xl font-bold">Music</h2>
            <p className="mt-2">Experience live music performances from top artists and DJs.</p>
          </div>
          <div className="relative w-full h-60 rounded">
            <img
              src={dj}
              alt="DJ"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className="relative w-full h-60 rounded">
            <img
              src={ctail}
              alt="Cocktail"
              className="w-full h-full object-cover rounded"
            />
          </div>
          <div className='p-12'>
            <h2 className="text-xl font-bold">Cocktail</h2>
            <p className="mt-2">Savor our expertly crafted cocktails made by talented mixologists.</p>
          </div>
        </div>

        <div className='pb p-4'>
          <h2 className="text-xl font-bold">Top Drinks</h2>
          <div className='flex justify-center'>
            <div className='grid grid-cols-3 p-2 py-4 gap-4'>
              <div className="relative w-20 h-32 rounded-xl lg:w-52 lg:h-64 md:w-32 md:h-40">
                <img
                  src={neg}
                  alt="Negroni"
                  className="w-full h-full object-cover rounded-xl"
                />
                <p className="text-center mt-2">Negroni</p>
              </div>
              <div className="relative w-20 h-32 rounded-xl lg:w-52 lg:h-64 md:w-32 md:h-40">
                <img
                  src={Mar}
                  alt="Martini"
                  className="w-full h-full object-cover rounded-xl"
                />
                <p className="text-center mt-2">Martini</p>
              </div>
              <div className='border border-b-red-700 border-amber-100'>
                <div className="relative w-24 h-32 rounded-xl lg:w-52 lg:h-64 md:w-32 md:h-40">
                  <img
                    src={prp}
                    alt="P.Rum Punch"
                    className="w-full h-full object-cover rounded-t-xl"
                  />
                </div>
                <p className="text-center mt-2">P.Rum Punch</p>
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

        <div>
          <div className='bg-red-300 p-4 grid grid-cols-2 lg:grid-cols-2'>
            <div className='p-3'>
              <h2 className="text-xl font-bold">Sunsets</h2>
              <p className="mt-2">Witness breathtaking sunsets from our exclusive viewing spots.</p>
            </div>
            <div className='p-3'>
              <img src={beach} alt="Sunsets" className="w-40 h-full object-cover rounded" />
            </div>
          </div>

         <div className=''>
          <div className='bg-blue-300 p-4 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2'>
          <div className='p-3 flex justify-center'>
              <img src={beach} alt="Watersports" className=" w-40 h-full object-cover rounded" />
            </div>
            <div className='p-3'>
              <h2 className="text-xl font-bold">Watersports</h2>
              <p className="mt-2">Enjoy a variety of watersports activities including jet skiing and paddleboarding.</p>
            </div>
            
          </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;