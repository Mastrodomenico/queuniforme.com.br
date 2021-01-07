// server.js
const { createServer } = require('http')
const { parse } = require('url')
const next = require('next')
const express = require('express');


const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

const port = process.env.PORT || 3000;

app.prepare().then(() => {
  const server = express()

  server.use((req, res, next) => {
    // if (req.get('X-Forwarded-Proto') !== 'https' && !dev) {
    //   res.redirect('https://' + req.get('Host') + req.url);
    // } else{
      next()
    // }
  })

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(port, err => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
})