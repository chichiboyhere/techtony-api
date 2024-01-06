const express = require('express')
const router = express.Router()
const path = require('path')

router.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'))  // res.render() works when you're using a template engine. But res.sendFile() is useful for all file type.
})

module.exports = router;


