import React, { useState } from 'react';
import { Button, Segment, Form } from 'semantic-ui-react'


export default function AddSongForm({songs, playlist, addSong, removeSong, numPhotosCol, user }){
  const [selectedFile, setSelectedFile] = useState('')
  const [state, setState] = useState({
    title: ''
  })

  function handleFileInput(e){
    setSelectedFile(e.target.files[0])
  }

  function handleChange(e){
    setState({
      ...state,
      [e.target.name]: e.target.value
    })
  }

  function handleSubmit(e){
    e.preventDefault()
             
    const formData = new FormData()
    formData.append('song', selectedFile)
    formData.append('album', state.title) 
    playlist.handleAddSong(formData);
  }
      
return (
    <Segment>
        <Form  autoComplete="off" onSubmit={handleSubmit}>
            <Form.Input
                song={songs}
                addSong={addSong}
                removeSong={removeSong}
                user={user}
                onChange={handleChange}
                required
              />   
            <Form.Input
              playlist={playlist}
              addSong={addSong}
              removeSong={removeSong}
              user={user}
              onChange={handleFileInput}
              required
            />  
            <Button
                type="submit"
                className="btn"
            >
                SONGS
            </Button>
            </Form>
          </Segment>
          );

        }






