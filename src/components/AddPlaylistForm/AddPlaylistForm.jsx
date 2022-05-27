import React, { useState } from 'react';
import { Button,  Grid, Segment, Form } from 'semantic-ui-react'
import * as playlistAPI from "../../utils/playlistApi"
import { useNavigate } from "react-router-dom";

export default function AddPlaylistForm({ user }){
  const [state, setState] = useState({
    artist: '',
    album: ''
  })

  const navigate = useNavigate()


  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    console.log(state)
    await playlistAPI.create(state);
    navigate("/playlist");
  }

    return (
            <Grid centered>
            <Grid.Row>
            <Segment>
            <Form  autoComplete="off" onSubmit={handleSubmit}>  
            <label>Album</label> 
              <Form.Input
              name="album"
              onChange={handleChange} value={state.album}
              placeholder= "Enter the album name here"
              required
            /> <label>Artist</label> 
            <Form.Input
              name="artist"
              onChange={handleChange} value={state.artist}
              placeholder= "Enter the artist name here"
              required
            />  <label>Song</label>
            <Form.Input
              name="song"
              onChange={handleChange} value={state.song}
              placeholder= "Enter the name of the song here"
              required
            /> 
              <Button 
                class="button-85"
                type="submit"
                className="btn"
              >
                CREATE PLAYLIST
              </Button>
            </Form>
          </Segment>
          </Grid.Row>
          </Grid>
          );
}






