const Playlist = require('../models/playlist');

module.exports = {
    create,
    index,
    removePlaylist
}

async function create(req, res){
    console.log(req.file, req.body, 'this is create method', req.user)
    try {
        let playlist = await Playlist.create({
            username: req.user.username,
            userId: req.user._id,
            artist: req.body.artist,
            album: req.body.album
        })
        res.status(201).json({playlist: playlist})
    } catch(err){
        console.log(err)
        res.json(400).json({err})
    }
}

async function index(req, res){
    try {
        const playlists = await Playlist.find({}).exec();
        res.status(200).json({playlists: playlists});
    } catch(err){
        res.status(400).json(err)
    }
}

async function removePlaylist(req, res) {
    try {
      console.log(req.params.id, "<--- Playlist to be deleted")
      const deleted = await Playlist.deleteOne({"_id": req.params.id})
        res.status(200).json(deleted);
    }catch(err){
        res.status(400).json({err})
    }
}