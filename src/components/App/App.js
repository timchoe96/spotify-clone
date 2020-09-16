import React, { useEffect } from "react";
import "./app.css";
import Login from "../Login/Login";
import { getTokenFromUrl } from "../../spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "../Player/Player";
import { useDataLayerValue } from "../DataLayer/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: "SET_TOKEN",
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({ type: "SET_PLAYLISTS", playlists: playlists });
        spotify
          .getPlaylist(
            playlists?.items[0].tracks.href.split("playlists/")[1].split("/")[0]
          )
          .then((response) => {
            dispatch({
              type: "SET_PLAYLIST",
              playlist: response,
            });
          });
      });
    }
  }, [dispatch]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
