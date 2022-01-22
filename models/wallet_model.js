
const mongoose = require('mongoose')

const walletSchema = new mongoose.Schema({
    name: {
        type: String,
        required: 'Wallet must have a name.'
    },
    amount: {
        type: Number,
        default: 0
    },
})

const Wallet = mongoose.model('Wallet', walletSchema)

module.exports = Wallet