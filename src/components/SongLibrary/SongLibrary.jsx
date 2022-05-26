import React from "react";
import SongCard from "../SongCard/SongCard";

export default function PlaylistFeed({ playlist, song, removeSong, addSong, user }) {

  return (
   <SongCard
   song={song}
   playlist={playlist}
   addSong={addSong}
   removeSong={removeSong}
   user={user}
    />
  );
}
