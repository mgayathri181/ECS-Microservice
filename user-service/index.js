const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// Home route
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>User Service</title>
        <style>
          body { font-family: Arial; text-align: center; margin-top: 50px; background-color: #f5f5f5; }
          h1 { color: #007acc; }
        </style>
      </head>
      <body>
        <h1>Welcome to the User Microservice</h1>
        <p>Go to <a href="/user">/user</a> to view user information</p>
      </body>
    </html>
  `);
});

// User route
app.get('/user', (req, res) => {
  const user = { id: 1, name: 'John Doe', role: 'Admin' };
  res.send(`
    <html>
      <head>
        <title>User Info</title>
        <style>
          body { font-family: Arial; background: #fefefe; padding: 30px; }
          .card {
            max-width: 400px;
            margin: auto;
            background: #ffffff;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            padding: 20px;
            border-radius: 10px;
            text-align: center;
          }
          h2 { color: #333; }
          p { font-size: 16px; color: #555; }
        </style>
      </head>
      <body>
        <div class="card">
          <h2>User Profile</h2>
          <p><strong>ID:</strong> ${user.id}</p>
          <p><strong>Name:</strong> ${user.name}</p>
          <p><strong>Role:</strong> ${user.role}</p>
        </div>
      </body>
    </html>
  `);
});

app.listen(PORT, () => {
  console.log("User Service running on port", PORT);
});
