const express=require('express');
const app=express();
const path = require('path');
const port = process.env.PORT || 3000;
require("./db/connect");
const static_path=path.join(__dirname,"../public")
app.use(express.static(static_path))


app.get('/', (req, res) => {
    res.send('Railway CMS Project');
  });
  
  app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
  });

