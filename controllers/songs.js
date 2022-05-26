const Song = require('../models/song');

module.exports = {
    create,
    removeSong
}

async function create(req, res) {
    try { 
        let song = await Song.create({
            user: req.user,
            title: req.body.title,
            song: req.body.song,
            artist: req.body.artist
    })
        song = await song.populate('user')
        res.status(201).json({song: song})
    } catch (err){
        console.log(err, "Error (create ctrl")
        res.status(400).json({err})
}

async function removeSong(req, res) {
    try {
      console.log(req.params.songId, "<--- Song to be deleted")
      const deleted = await Song.deleteOne({_id: req.params.songId})
        res.status(200).json(deleted);
    }catch(err){
        res.status(400).json({err})
    }
} 