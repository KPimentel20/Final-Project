import React from "react";
import { Card, Icon } from "semantic-ui-react";
   
function SongCard({addSong, removeSong, playlist, song, user})   {
    const songIndex = playlist.songs.findIndex(
        (song) => song.username === user.username
      ); 

    const clickHandler =
    songIndex > -1
      ? () => removeSong(playlist.songs[songIndex]._id)
      : () => addSong(playlist._id);

        
      //playlist are posts
      //songs are likes
        return (
        <Card key={playlist._id} raised>
          <Card.Content>
            <Card.Description>
                {song.artist}
                {song.album}
                {song.song}
            </Card.Description>
          </Card.Content>
          <Card.Content extra textAlign={"right"}>
              <Icon
              name={"CD"}
              size="medium"
              onclick={clickHandler}
              />
              {playlist.songs.length} Songs
          </Card.Content>
          </Card>
        );
      }
    
      
export default SongCard;