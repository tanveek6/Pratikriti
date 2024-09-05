const express = require('express');
const app = express();
const port = 3000; // You can choose any port you like

app.use(express.static(__dirname)); // Serve your HTML, CSS, and JavaScript files

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
