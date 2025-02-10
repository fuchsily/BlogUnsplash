import express from 'express';
import { createApi } from 'unsplash-js';
import fetch from 'node-fetch';
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const port = 3000;
const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

const unsplash = createApi({
  accessKey: unsplashAccessKey, 
  fetch: fetch,
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Importiere und konfiguriere Handlebars als Template-Engine
import { engine } from 'express-handlebars';
app.engine('handlebars', engine({
    defaultLayout: 'index',
    layoutsDir: './views'
}));
app.set('view engine', 'handlebars');
app.set('views', './views');

app.get('/', (req, res) => {

  unsplash.search.getPhotos({
    query: 'nature', 
    page: 1, 
    perPage: 21,
  }).then(result => {
    if (result.errors) {
      
      res.send(`Error occurred: ${result.errors[0]}`);
    } else {
     
      const photos = result.response.results;
      res.render('index', { photos });
    }
  }).catch(error => {
    res.send(`Error fetching data: ${error}`);
  });
});


app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
