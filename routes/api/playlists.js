const express = require('express');
const router = express.Router();
const playlistsCtrl = require('../../controllers/playlists');

router.post('/', playlistsCtrl.create)
router.delete('/:id', playlistsCtrl.removePlaylist)
router.get('/', playlistsCtrl.index)
// router.post('/', playlistsCtrl.update)

module.exports = router;