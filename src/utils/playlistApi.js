import tokenService from './tokenService';

const BASE_URL = '/api/playlists/';

export function create(playlist) {
    return fetch(BASE_URL, {
      method: 'POST',
      body: JSON.stringify(playlist),
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken(),
         "Content-Type": "application/json",

      }
    
    }).then(res => {
      if(res.ok) return res.json();
      throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
  }

  export function deletePlaylist(playlistId) {
    return fetch(`${BASE_URL}${playlistId}`, {
      method: 'DELETE',
      headers: {
        'Authorization': 'Bearer ' + tokenService.getToken()

      }
    
    }).then(res => {
      if(res.ok) return res.json();
      throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
  }


  export function getAll(id) {
    return fetch(BASE_URL, {
        method: 'GET'
    //   headers: {
    //     'Authorization': 'Bearer ' + tokenService.getToken()
    //   }
    })
    .then(res => {
      if(res.ok) return res.json();
      throw new Error('Bad Credentials! CHECK THE SERVER TERMINAL!')
    })
  }

