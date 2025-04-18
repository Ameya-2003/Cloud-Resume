const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the static directory
app.use(express.static(path.join(__dirname, 'static')));

// Start the server
const PORT = 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Static website preview running at http://localhost:${PORT}`);
});