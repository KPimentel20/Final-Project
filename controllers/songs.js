const Song = require('../models/playlist');

module.exports = {
    create
}
//     removeSong


async function create(req, res) {
    try { 
        let song = await Song.create({
            user: req.user._id,
            title: req.body.title,
            songUrl: req.body.song
    })
        song = await song.populate('user')
            res.status(201).json({song: song});
    } catch (err) {
        console.log(err, "Error (create ctrl")
            res.status(400).json({err})
}
}