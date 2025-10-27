const express = require('express');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: "Backend is working!" });
});

// Sample menu data
const menuItems = [
  { id: 1, name: 'Pizza', price: 12.99, category: 'Main' },
  { id: 2, name: 'Burger', price: 8.99, category: 'Main' },
  { id: 3, name: 'Pasta', price: 10.99, category: 'Main' },
  { id: 4, name: 'Salad', price: 7.99, category: 'Starter' },
  { id: 5, name: 'Coke', price: 2.99, category: 'Drink' }
];

// Menu API
app.get('/api/menu', (req, res) => {
  res.json(menuItems);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});