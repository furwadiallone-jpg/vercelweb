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
});

app.get("/produk",(req,res)=>{
  // Products data
        const productsFile = [
            {id:'file1',name:'RGX VIP V10',price:10000,img:'p10k.jpg'},
            {id:'file2',name:'RGX VIP V11',price:20000,img:'p20k.jpg'},
            {id:'file3',name:'RGX VIP V12',price:30000,img:'p30k.jpg'},
            {id:'file4',name:'RGX ULTIMATE LITE',price:35000,img:'p35k.jpg'},
            {id:'file5',name:'RGX ULTIMATE ORI',price:40000,img:'p40k.jpg'},
            {id:'file6',name:'RGX ULTIMATE PRO',price:50000,img:'p50k.jpg'},
            {id:'file7',name:'RGX ULTIMATE GOLD EDITION',price:70000,img:'p70k.jpg'},
            {id:'file8',name:'RGX ULTIMATE LEGEND EDITION',price:100000,img:'p100k.jpg'},
            {id:'file9',name:'File Pack To Apk',price:20000,img:'filepack.jpg'}
        ];
        const productsCheat = [
            {id:'cheat1',name:'Cheat Ultimate Medium',price:30000,img:'c30k.jpg'},
            {id:'cheat2',name:'Cheat Ultimate High',price:50000,img:'c50k.jpg'},
            {id:'cheat3',name:'Cheat Ultimate Ultra',price:120000,img:'c120k.jpg'}
        ];
        res.send({
          produkfile:productsFile,
          produkcheat:productsCheat
        })
  
})

// Pastikan ini diletakkan di bawah semua route lainnya
app.use((req, res) => {
  res.status(404).sendFile(path.resolve(__dirname, '../public/404.html'));
});

/* SERVER */
app.listen(port, () => {
console.log(`Web Online port ${port}`)
});
