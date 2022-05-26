const mongoose = require('mongoose');

const songSchema = mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref:'User' },
    songUrl: String,
    title: String,
})

const playlistSchema = new mongoose.Schema({
    username: String,
    userId: { type: mongoose.Schema.Types.ObjectId },
    songId: { type: mongoose.Schema.Types.ObjectId },
    artist: String,
    album: String,
    song: [songSchema] //embedded Schema
})

module.exports = mongoose.model('Playlist', playlistSchema);