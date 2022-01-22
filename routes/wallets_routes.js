const express = require('express'),
      router = express.Router(),
      db = require("../models")

// Get all
router.get('/', (req, res) => {
    db.Wallet.find()
    .then((wallets) => {
        res.json(wallets)
    }).catch((err) => {
        res.send(err)
    })
})

// Create new 
router.post('/', (req, res) => {
    db.Wallet.create(req.body)
    .then((newWallet) => {
        res.json(newWallet)
    }).catch((err) => {
        res.send(err)
    })
})

// Get one
router.get('/:walletId', (req, res) => {
    db.Wallet.findById(req.params.walletId)
    .then((foundWallet) => {
        res.json(foundWallet)
        console.log(foundWallet)
    }).catch((err) => {
        res.send(err)
    })
})

// Update 
router.put('/:walletId', (req, res) => {
    db.Wallet.findOneAndUpdate({_id: req.params.walletId}, req.body, {new: true})
    .then((updateWallet) => {
        res.json(updateWallet)
    }).catch((err) => {
        res.send(err)
    })
})

// Delete
router.delete('/:walletId', (req, res) => {
    db.Wallet.deleteOne({_id: req.params.walletId})
    .then(() => {
        res.json({message: "Document was deleted"})
    }).catch((err) => {
        res.send(err)
    })
})

module.exports = router