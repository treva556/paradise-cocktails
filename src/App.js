import React from 'react';
import './App.css';
import pic66 from './assets/pic66.jpeg'; 
import Nav from './components/nav';

function App() {
  return (
    <div className="App">
       <header className="p-6">
        <Nav/>
        <img src={pic66} className='w-full md:w-full lg:w-full rounded-3xl object-cover' alt="Description of the image" />
        <div className='bg-red-600 p-6 mt-2 rounded-2xl'>
          hh
        </div>
      </header>
      <div className=' pb '>
        pwww
        <div className=' pb p-20'>
        pwww
      </div>
      <div className='p-20'>
        pwww
      </div>

<p>jjj</p>



      </div>
    </div>
  );
}

export default App;
