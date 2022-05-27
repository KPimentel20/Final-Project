import React, { useState } from 'react';
import { Button, Segment, Form, Grid} from 'semantic-ui-react';
import { useNavigate } from "react-router-dom";
import * as songAPI from "../../utils/songApi"

export default function AddSongForm({ user }){
  const [state, setState] = useState({
    title: '',
    songUrl: ''
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
    await songAPI.create(state);
    navigate("/song");
  }
      
  return (
      <Grid>
      <Grid.Row>
      <Segment>
      <Form  autoComplete="off" onSubmit={handleSubmit}>  
      <label>Title</label> 
      <Form.Input
        name="Title"
        onChange={handleChange} value={state.title}
        placeholder= "Enter the album name here"
        required
        /> 
      <label>Song URL</label> 
      <Form.Input
        name="songUrl"
        onChange={handleChange} value={state.songUrl}
        placeholder= "Enter the artist name here"
        required
        /> 
      <Button
        type="submit"
        className="btn"
      >
        ADD SONG
      </Button>
      </Form>
      </Segment>
    </Grid.Row>
    </Grid>
  );
}





