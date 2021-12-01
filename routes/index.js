const express = require('express')
const router = express.Router()
const fs = require('fs')

//const libro = require('./../resources/files/libro')
//const json_books = fs.readFileSync('files/books.json', 'utf-8');
let books = []//JSON.parse(json_books);


router.get('/',(req,res)=>{
   res.render('index',{books})
   //res.send (books);
   
});
router.get('/insert',(req,res) =>{
   res.render('insert')
});
router.post('/insert',(req,res) => {
   const { isbn, titulo, genero, autor, anio, image} = req.body;

   var newBook = {
      isbn,
      titulo,
      genero,
      autor,
      anio,
      image
   };

   books.push(newBook);

   //const json_books = JSON.stringify(books);
   //fs.writeFileSync('files/books.json', json_books, 'utf-8');

   res.redirect('/');

});
router.get('/delete:titulo',(req,res) => {
   booksAux = books.filter(book => book.titulo !=req.params.titulo);
   books.push(booksAux);
   res.redirect('/');
});
 module.exports = router;