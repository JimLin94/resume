import React from 'react';
import express from 'express';
import path from 'path';
import fs from 'fs';
import open from 'open';
import ReactDOMServer from 'react-dom/server';
import App from './containers/App';

const app = express();
const port = 3000;

app.get('/', (req, res) => {
  const app = ReactDOMServer.renderToString(<App />);
  const indexFile = path.resolve(path.join(__dirname, '../dist/index.html'));

  fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
      console.error('Something went wrong:', err);
      return res.status(500).send('Oops, better luck next time!');
    }

    return res.send(
      data.replace('<div id="app"></div>', `<div id="app">${app}</div>`)
    );
  });
});

app.use(express.static(path.join(__dirname, '../dist')));

app.listen(port, () => {
  console.log(`The server is listening at http://localhost:${port}`);
  open(`http://localhost:${port}`);
});
