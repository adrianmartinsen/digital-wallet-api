const express = require('express'),
      app = express(),
      port = process.env.PORT || 3025,
      bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))

// Require routes
const walletRoutes = require('./routes/wallets_routes')

app.use('/api/wallets', walletRoutes)

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
