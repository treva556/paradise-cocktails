

import React from 'react';
import Nav from '../components/nav';

function Menu() {
  return (
    <div className="App">
      <Nav />
      <div className="p-16 bg-gray-100 pb">
        <h1 className="text-4xl font-bold text-center mb-8">Our Menu</h1>
           <h3 className=' text-red-500'> Sample Menu Mockup  </h3>
        {/* Starters Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Starters</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold">Garlic Bread</h4>
              <p className="text-gray-700">Toasted with fresh garlic and herbs.</p>
              <p className="font-semibold">$5.99</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Bruschetta</h4>
              <p className="text-gray-700">Grilled bread topped with tomato, basil, and olive oil.</p>
              <p className="font-semibold">$7.49</p>
            </div>
          </div>
        </div>

        {/* Mains Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Mains</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold">Grilled Salmon</h4>
              <p className="text-gray-700">Served with lemon butter sauce and vegetables.</p>
              <p className="font-semibold">$18.99</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Pasta Primavera</h4>
              <p className="text-gray-700">Fresh veggies sautéed in garlic olive oil.</p>
              <p className="font-semibold">$14.99</p>
            </div>
          </div>
        </div>

        {/* Desserts Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Desserts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold">Tiramisu</h4>
              <p className="text-gray-700">Classic Italian dessert with mascarpone and espresso.</p>
              <p className="font-semibold">$6.99</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Cheesecake</h4>
              <p className="text-gray-700">Creamy cheesecake with a graham cracker crust.</p>
              <p className="font-semibold">$5.99</p>
            </div>
          </div>
        </div>

        {/* Drinks Section */}
        <div className="mb-12">
          <h2 className="text-3xl font-semibold mb-4">Drinks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold">Cocktails</h4>
              <p className="text-gray-700">Our signature cocktails crafted by expert mixologists.</p>
              <p className="font-semibold">From $8.99</p>
            </div>
            <div>
              <h4 className="text-xl font-semibold">Wines</h4>
              <p className="text-gray-700">A curated selection of fine wines from around the world.</p>
              <p className="font-semibold">From $6.99</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;