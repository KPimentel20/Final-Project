const express = require('express');
const router = express.Router();
const playlistsCtrl = require('../../controllers/playlists');

router.post('/songs/:id/playlists', playlistsCtrl.create)
router.delete('/playlists/:id', playlistsCtrl.deletePlaylist)

module.exports = router;