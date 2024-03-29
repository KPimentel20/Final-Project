import React, { useState, useEffect } from "react";
import "./PlaylistFeed.css";
import PageHeader from "../../components/Header/Header";
import AddPlaylistForm from "../../components/AddPlaylistForm/AddPlaylistForm";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader"
import * as playlistAPI from "../../utils/playlistApi";

import { Grid } from "semantic-ui-react";

export default function Playlist({user, handleLogout}) {
const [playlists, setPlaylists] = useState([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState("");
//songs and useffect

 async function handleAddPlaylist(playlist) {
  try {
    setLoading(true);
    const data = await playlistAPI.create(playlist);
    console.log(data, " this is response from the server, in handleAddSong");
    setPlaylists([data.playlist, ...playlist]);
    setLoading(false);
  } catch (err) {
    console.log(err);
    setError(err.message);
  }
}

async function handleDeletePlaylist(e) {
  try {
const playlistId = e.target.id
console.log(playlistId)
    setLoading(true);
    const data = await playlistAPI.deletePlaylist(playlistId);
    const playlistArray = await playlists.filter(playlist => playlist._id !== playlistId);
            setPlaylists(playlistArray);
    setLoading(false);
  } catch (err) {
    console.log(err);
    setError(err.message);
  }
}

 async function getPlaylists() {
  try {
    const data = await playlistAPI.getAll(user._id);
    console.log(data, " this is data ");
    setPlaylists([...data.playlists]);
    setLoading(false);
  } catch (err) {
    console.log(err);
    setError(err.message);
  }
}

  useEffect(() => {
    getPlaylists();
  }, []);

  if (error) {
    return (
      <>
        <PageHeader onClick={handleLogout} user={user} />
        <ErrorMessage error={error} />;
      </>
    );
  }
  if (loading) {
    return (
      <>
      <PageHeader />
      <Loading />
      </>
    );
  }
  const list = playlists.map((playlist, index) => {
    console.log(playlist)
    return (
        <div key={index}>
        {playlist.artist} {playlist.album} {playlist.song}
        <input type="submit" id={playlist._id} value="DELETE PLAYLIST" onClick={handleDeletePlaylist}  /> 
        </div>
    )
})

  return (
    <Grid centered>
        <Grid.Row>
            <Grid.Column>
                <PageHeader style={{backgroundColor:'black',}} handleLogout={handleLogout} user={user}/>
            </Grid.Column>
        </Grid.Row>
        <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <AddPlaylistForm handleAddPlaylist={handleAddPlaylist} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
        {list}
        </Grid.Column>
    
      </Grid.Row>
    </Grid>
  );
}