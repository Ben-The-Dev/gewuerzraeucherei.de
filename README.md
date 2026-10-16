# Heikos Räucher Manufaktur – Website

## Aufbau

```
website/
├── index.html, raeucherei.html, roesterei.html, trockensortiment.html
├── impressum.html, datenschutz.html, agb.html
├── partials/
│   ├── header.html      Logo und Navigation
│   └── footer.html      Adresse, Erreichbarkeit, Kontakt, Rechtslinks
└── assets/
    ├── css/style.css
    ├── img/logo.png
    └── js/include.js    setzt Header und Footer in jede Seite ein
```

Header und Footer werden nur in `partials/` gepflegt. Jede Änderung dort gilt sofort für alle Seiten.

## Neue Seite anlegen

Eine bestehende Seite kopieren, Titel und Inhalt in `<main>` anpassen und den Link in `partials/header.html` ergänzen.

## Lokal ansehen

Per Doppelklick geöffnet (`file://`) lädt der Browser Header und Footer nicht, weil er das Nachladen von Dateien dort blockiert. Zum Testen einen kleinen Webserver im Ordner `website` starten:

```
python3 -m http.server 8000
```

Dann im Browser `http://localhost:8000` öffnen. Auf dem normalen Webspace funktioniert alles ohne weitere Einstellungen.
