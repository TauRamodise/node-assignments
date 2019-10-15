// import database 
const {
    addNewArtist,
    editArtist,
    viewArtists,
    deleteArtistById
  } = require('../config/database')

const router = require('express').Router()

// default api response
module.exports = router.get('/', (err,res) => {
    res.json({
        status: "API route is active",
        message: "connected to server"
    });
});

// View all artists
router.get('/', (req, res) => {
    // viewArtists
    console.log(viewArtists);
})

// Get one subscriber
// router.get('/:id', (req, res) => {
// })

// Add one an artist
router.post('/', (req, res) => {
})

// Update an artist
router.patch('/:id', (req, res) => {
})

// Delete an artist
router.delete('/:id', (req, res) => {
})