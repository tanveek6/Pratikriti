const mysql = require('mysql');
const http = require('http');
const fs = require('fs');
const url = require('url');

// Create a MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345',
  database: 'login',
});

// Connect to the database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database: ' + err.stack);
    return;
  }
  console.log('Connected to the database');
});

// Create a server to handle form submissions
http.createServer((req, res) => {
  if (req.method === 'POST') {
    let body = '';

    req.on('data', (data) => {
      body += data;
    });

    req.on('end', () => {
      const formData = new URLSearchParams(body);

      const name = formData.get('name');
      const email = formData.get('email');
      const phone = formData.get('phone');
      const address = formData.get('coupon');
      const message = formData.get('message');

      // Insert the data into the database
      const insertQuery = 'INSERT INTO login_info (name, email, phone, address, message) VALUES (?, ?, ?, ?, ?)';
      db.query(insertQuery, [name, email, phone, address, message], (err) => {
        if (err) {
          console.error('Error inserting data into the database: ' + err.stack);
          res.end('Error');
        } else {
          console.log('Data inserted into the database');
          res.end('Data inserted into the database');
        }
      });
    });
  } else {
    // Serve the HTML form
    fs.readFile('r.html', (err, data) => {
      if (err) {
        res.writeHead(404);
        res.end('File not found');
        return;
      }

      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.write(data);
      res.end();
    });
  }
}).listen(8080);

console.log('Server is running on http://localhost:8080');
