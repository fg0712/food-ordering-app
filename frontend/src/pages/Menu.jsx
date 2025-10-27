import { useState, useEffect } from 'react';

export default function Menu() {
  const [menu, setMenu] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5000/api/menu')
      .then(response => response.json())
      .then(data => setMenu(data));
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-3xl font-bold mb-4">Our Menu</h2>
      <div className="grid grid-cols-3 gap-4">
        {menu.map(item => (
          <div key={item.id} className="border p-4 rounded">
            <h3 className="font-bold">{item.name}</h3>
            <p>${item.price}</p>
            <button className="bg-blue-500 text-white px-3 py-1 rounded mt-2">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}