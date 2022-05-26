import React, { useState, useEffect } from "react";

import AddPlaylistForm from "../../components/AddPlaylistForm/AddPlaylistForm";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import * as playlistAPI from "../../utils/playlistApi";
import * as songAPI from '../../utils/songApi';

import { Grid } from "semantic-ui-react";

export default function Playlist({user}) {
console.log(playlistAPI, "<-- playlistsAPI")
const [playlists, setPlaylists] = useState({});
const [error, setError] = useState("");

 async function addSong(playlistId){
  try {
    const data = await songAPI.create(playlistId)
    console.log(data, ' <- the response from the server when we make a song');
    getPlaylists(); // <- to go get the updated playlists with the song
  } catch(err){
    console.log(err)
    setError(err.message)
  }
}

 async function removeSong(playlistId){
  try {
    const data = await songAPI.removeSong(playlistId);
    console.log(data, '<-  this is the response from the server when we remove a song')
    getPlaylists()
  } catch(err){
    console.log(err);
    setError(err.message);
  }
}

 async function handleAddPlaylist(playlist) {
  try {
    const data = await playlistAPI.create(playlist);
    console.log(data, " this is response from the server, in handleAddSong");
    setPlaylists([data.playlist, ...playlist]);
  } catch (err) {
    console.log(err);
    setError(err.message);
  }
}

 async function getPlaylists() {
  try {
    const data = await playlistAPI.getAll();
    console.log(data, " this is data ");
    setPlaylists([...data.playlists]);
  } catch (err) {
    console.log(err.message, "this is the error");
    setError(err.message);
  }
}

  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  useEffect(() => {
    getPlaylists();
  }, []);

  if (error) {
    return (
      <>
        <ErrorMessage error={error} />;
      </>
    );
  }

  return (
    <Grid centered>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <AddPlaylistForm handleAddPlaylist={handleAddPlaylist} />
        </Grid.Column>
      </Grid.Row>
      <Grid.Row>
        <Grid.Column style={{ maxWidth: 450 }}>
          <Playlist
            songs={playlists}
            addSong={addSong}
            removeSong={removeSong}
            user={user}
          />
        </Grid.Column>
      </Grid.Row>
    </Grid>
  );
}