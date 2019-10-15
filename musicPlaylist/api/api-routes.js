// import database 
const {
    addNewArtist,
    editArtist,
    viewArtists,
    deleteArtistById
  } = require('../config/database')

const router = require('express').Router()

// default api response
router.get('/1', (err,res) => {
    console.log(1)
    res.json({
        status: "API route is active",
        message: "connected to server"
    });
});

// View all artists
router.get('/2', (req, res) => {
    // viewArtists
    console.log(2);
})

// Get one subscriber
// router.get('/:id', (req, res) => {
// })

// Add one an artist
router.post('/3', (req, res) => {
    console.log(3)
})

// Update an artist
router.patch('/:id', (req, res) => {
})

// Delete an artist
router.delete('/:id', (req, res) => {
})

module.exports = router; 