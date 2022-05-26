import React, { useState } from 'react';
import { Button, Card, Segment, Form, Image } from 'semantic-ui-react'


export default function AddPlaylistForm({songs, playlist, addPlaylist, removePlaylist, numPhotosCol, addSong, removeSong, user }){
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
    formData.append('playlist', selectedFile)
    formData.append('album', state.title) 
    songs.handleAddPlaylist(formData);
  }

    return (
        <Card.Group itemsPerRow={numPhotosCol} stackable>
          <Segment>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
      
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
              addPlaylist={addPlaylist}
              removePlaylist={removePlaylist}
              user={user}
              onChange={handleFileInput}
              required
            />  
              <Button
                type="submit"
                className="btn"
              >
                CREATE PLAYLIST
              </Button>
            </Form>
          </Segment>
          );
        )
      </Card.Group>
  
    )
}






