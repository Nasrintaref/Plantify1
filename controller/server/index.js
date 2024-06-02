const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
const cors = require('cors');
const  Page=  require('./NewJson.js'); // Importing the JSON data

app.use(cors());
app.use(express.json());




app.post('/Page/:pagename', (req, res) => {
  const pagename = req.params.pagename; // Getting the page name from the request

  // Finding the page in the Page array by the page name
  const page = Page.find(page => page.pagename === pagename);

  // If the page is not found, send a 404 error response
  if (!page) {
    return res.status(404).send('Page not found');
  }

  // If the page is found, send its content in the response
  res.json(page);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});