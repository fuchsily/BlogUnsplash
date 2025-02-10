<body>
    <h1>BlogUnsplash</h1>
    <p>
        Ein einfacher Node.js-basierter Webserver, der die Unsplash-API verwendet, um Fotos anzuzeigen. 
        Das Projekt nutzt <strong>Express</strong> für den Server, <strong>Handlebars</strong> als Template-Engine 
        und <strong>dotenv</strong> für die sichere Speicherung von API-Schlüsseln.
    </p>
     <img src="https://github.com/user-attachments/assets/9241699d-9dcc-4eb5-b8a2-840240fed155" alt="Demo">
    <h2>Voraussetzungen</h2>
    <ul>
        <li><a href="https://nodejs.org/">Node.js</a> (Version 14 oder höher)</li>
        <li>Ein Unsplash Developer-Account und ein Access Key für die API</li>
    </ul>
    <h2>Installation</h2>
    <ol>
        <li>
            <strong>Repository klonen:</strong>
            <pre><code>git clone https://github.com/fuchsily/BlogUnsplash.git
cd BlogUnsplash</code></pre>
        </li>
        <li>
            <strong>Abhängigkeiten installieren:</strong>
            <pre><code>npm install</code></pre>
        </li>
        <li>
            <strong>API-Schlüssel konfigurieren:</strong>
            <p>Erstelle eine <code>.env</code>-Datei im Root-Verzeichnis des Projekts:</p>
            <pre><code>UNSPLASH_ACCESS_KEY=dein_unsplash_access_key</code></pre>
        </li>
    </ol>
    <h2>Starten des Servers</h2>
    <p>Führe den folgenden Befehl aus, um den Server zu starten:</p>
    <pre><code>npm start</code></pre>
    <p>Der Server wird unter <a href="http://localhost:3000" target="_blank">http://localhost:3000</a> laufen.</p>
    <h2>Verzeichnisstruktur</h2>
    <pre><code>BlogUnsplash/
├── node_modules/        # Abhängigkeiten
├── public/              # Statische Dateien (CSS, JS, Bilder)
├── views/               # Handlebars-Templates
│   └── index.handlebars
├── .env                 # Umgebungsvariablen (API-Schlüssel)
├── package.json         # Projektkonfiguration
├── package-lock.json    # Abhängigkeitsdetails
├── script.js            # Hauptserverdatei</code></pre>
  
  <h2>Hauptfunktionen</h2>
    <ul>
        <li><strong>Unsplash-API:</strong> Fetch von Fotos aus der Unsplash-API basierend auf einer Suchanfrage (<code>nature</code>).</li>
        <li><strong>Template-Rendering:</strong> Dynamisches Rendering von Fotos auf der Homepage mithilfe von Handlebars.</li>
        <li><strong>Statische Dateien:</strong> Unterstützung für statische Dateien im <code>public</code>-Verzeichnis.</li>
    </ul>
    <h2>Technologien</h2>
    <ul>
        <li><strong>Node.js:</strong> Backend-Server</li>
        <li><strong>Express:</strong> Web-Framework</li>
        <li><strong>Handlebars:</strong> Template-Engine</li>
        <li><strong>dotenv:</strong> Umgebungsvariablen-Management</li>
        <li><strong>Unsplash-JS:</strong> Zugriff auf die Unsplash-API</li>
    </ul>
</body>
