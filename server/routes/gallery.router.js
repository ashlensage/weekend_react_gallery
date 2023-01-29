const { default: Axios } = require('axios');
const express = require('express');
const router = express.Router();
const galleryItems = require('../modules/gallery.data');

// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put('/like/:id', (req, res) => {  
    console.log('req.params', req.params);
    const { id: galleryId } = req.params;

    console.log('galleryId', galleryId);

    const galleryIdParsed = parseInt(galleryId, 10);

    const galleryItem = galleryItems.find(({id}) => id === galleryIdParsed);
    galleryItem.likes += 1;

    console.log('galleryItem', galleryItem);

    res.sendStatus(200);
}); // END PUT Route

// GET Route
router.get('/', (req, res) => {
    res.send(galleryItems);
}); // END GET Route

module.exports = router;
