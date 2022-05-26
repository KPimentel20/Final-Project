import React from "react";
import { Card, Dimmer, Segment, Image  } from 'semantic-ui-react'
import SongCard from "../SongCard/SongCard";
import Loader from '../Loader/Loader';

export default function SongFeed({playlists, loading, numPhotosCol, song, removeSong, addSong, user }) {

  return (
      <Card.Group itemsPerRow={numPhotosCol} stackable>
        {loading ? (
          <Segment>
            <Dimmer active inverted>
              <Loader size="small">Loading</Loader>
            </Dimmer>
            <Image src="https://react.semantic-ui.com/images/wireframe/short-paragraph.png" />
          </Segment>
        ) : null}
        {playlists.map((playlist) => {
          return (
            <SongCard
              song={song}
              playlist={playlist}
              addSong={addSong}
              removeSong={removeSong}
              user={user}
            />
          );
        })}
      </Card.Group>
    )
  }
