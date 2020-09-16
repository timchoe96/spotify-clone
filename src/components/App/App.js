import React, { useEffect } from "react";
import "./app.css";
import Login from "../Login/Login";
import { getTokenFromUrl } from "../../spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "../Player/Player";
import { useDataLayerValue } from "../DataLayer/DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token, index }, dispatch] = useDataLayerValue();

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
    }
  }, [dispatch, index]);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
