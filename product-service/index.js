const express = require('express');
const app = express();
const PORT = 3001;

// Home route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>Product Service</title>
        <style>
          body { font-family: Arial; text-align: center; margin-top: 50px; background-color: #f0f8ff; }
          h1 { color: #d2691e; }
        </style>
      </head>
      <body>
        <h1>Welcome to the Product Microservice</h1>
        <p>Go to <a href="/product">/product</a> to view a product</p>
      </body>
    </html>
  `);
});

// Product route
app.get('/product', (req, res) => {
  const product = { id: 101, name: 'Wireless Mouse', price: 29.99, inStock: true };
  res.send(`
    <html>
      <head>
        <title>Product Info</title>
        <style>
          body { font-family: Arial; background: #fffaf0; padding: 30px; }
          .card {
            max-width: 400px;
            margin: auto;
            background: #fff;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
          }
          h2 { color: #333; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>Product Details</h2>
          <p><strong>ID:</strong> ${product.id}</p>
          <p><strong>Name:</strong> ${product.name}</p>
          <p><strong>Price:</strong> $${product.price}</p>
          <p><strong>In Stock:</strong> ${product.inStock ? 'Yes' : 'No'}</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log(`Product Service running on port ${PORT}`);
});
