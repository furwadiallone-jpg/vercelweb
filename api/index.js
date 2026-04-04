const express = require("express");
const path = require("path");
const app = express();
const port = 80
/* STATIC */
app.use(express.static(path.resolve(__dirname, '../public')));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/",(req,res) =>{
  res.sendFile(path.resolve(__dirname, '../public/home.html'))
})

/* SERVER */
app.listen(port, () => {
console.log(`Web Online port ${port}`)
});
