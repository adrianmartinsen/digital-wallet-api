const mongoose = require('mongoose')
mongoose.set('debug', true)
mongoose.connect('mongodb://digiwall_api_db:27017/wallet-api')

mongoose.Promise = Promise

module.exports.Wallet = require("./wallet_model")