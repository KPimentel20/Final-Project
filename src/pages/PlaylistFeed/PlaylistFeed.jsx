import React, { useState, useEffect } from "react";

import PageHeader from "../../components/Header/Header";
import AddPlaylistForm from "../../components/AddPlaylistForm/AddPlaylistForm";
// import SongLibrary from "../../components/SongLibrary/SongLibrary"
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loading from "../../components/Loader/Loader"
import * as playlistAPI from "../../utils/playlistApi";
import * as songAPI from '../../utils/songApi';

import { Grid } from "semantic-ui-react";


export default function Playlist({user}) {
const [playlists, setPlaylists] = useState([]);
const [loading, setLoading] = useState(true);
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

  // useEffect runs once
  // the component is first rendered (whenever you first view the component)
  // Component Lifecycle in react
  useEffect(() => {
    getPlaylists();
  }, []);

  if (error) {
    return (
      <>
        <PageHeader />
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
        </div>
    )
})
  return (
    <Grid centered>
        <Grid.Row>
            <Grid.Column>
                <PageHeader />
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