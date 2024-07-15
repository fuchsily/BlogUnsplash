// Importiere benötigte Module
import express from 'express'; // Express-Framework für den Webserver
import { createApi } from 'unsplash-js'; // Unsplash-JavaScript-Bibliothek für den Zugriff auf die Unsplash-API
import fetch from 'node-fetch'; // Fetch-Bibliothek für HTTP-Anfragen

// Erstelle eine Express-Anwendung
const app = express();
const port = 3000; // Port, auf dem der Server laufen wird

// Erstelle eine Instanz der Unsplash-API mit deinem Access Key
const unsplash = createApi({
  accessKey: 'RpmxPKrxlLmg1DdU5Ltj4yT7RKN6UVpZXuf0dLiJKDA', // Ersetze 'YOUR_ACCESS_KEY' mit deinem tatsächlichen Unsplash Access Key
  fetch: fetch, // Verwende node-fetch für HTTP-Anfragen
});

// Serve static files from the "public" directory
app.use(express.static('public'));

// Importiere und konfiguriere Handlebars als Template-Engine
import { engine } from 'express-handlebars';
app.engine('handlebars', engine({
    defaultLayout: 'index', // Standard-Layout-Datei (index.handlebars)
    layoutsDir: './views' // Verzeichnis, in dem sich die Layout-Dateien befinden
}));
app.set('view engine', 'handlebars'); // Setze Handlebars als View-Engine
app.set('views', './views'); // Verzeichnis, in dem sich die View-Dateien befinden

// Definiere eine Route für die Startseite
app.get('/', (req, res) => {
  // Mache eine Anfrage an die Unsplash-API, um Fotos mit dem Stichwort "nature" zu suchen
  unsplash.search.getPhotos({
    query: 'nature', // Suchbegriff
    page: 1, // Seite der Suchergebnisse
    perPage: 21, // Anzahl der Ergebnisse pro Seite
  }).then(result => {
    if (result.errors) {
      // Wenn ein Fehler auftritt, sende den Fehler als Antwort zurück
      res.send(`Error occurred: ${result.errors[0]}`);
    } else {
      // Extrahiere die Fotos aus dem API-Ergebnis
      const photos = result.response.results;
      // console.log(result.response.results);
      // Rendere die index.handlebars-Vorlage und übergebe die Fotos als Daten
      res.render('index', { photos });
    }
  }).catch(error => {
    // Wenn ein Fehler bei der API-Anfrage auftritt, sende eine Fehlermeldung als Antwort zurück
    res.send(`Error fetching data: ${error}`);
  });
});

// Starte den Server und lasse ihn auf dem angegebenen Port lauschen
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});
