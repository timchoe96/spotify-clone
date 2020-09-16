import React, { useEffect } from "react";
import "./Footer.css";
import PlayCircleOutlineIcon from "@material-ui/icons/PlayCircleOutline";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import ShuffleIcon from "@material-ui/icons/Shuffle";
import RepeatIcon from "@material-ui/icons/Repeat";
import { Grid, Slider } from "@material-ui/core";
import PlaylistPlayIcon from "@material-ui/icons/PlaylistPlay";
import VolumeDownIcon from "@material-ui/icons/VolumeDown";
import { useDataLayerValue } from "../DataLayer/DataLayer";

function Footer() {
  const [{ playlist, track }, dispatch] = useDataLayerValue();

  useEffect(() => {
    playlist &&
      dispatch({
        type: "SET_TRACK",
        track: {
          name: playlist?.tracks?.items[0].track.name,
          cover: playlist?.tracks?.items[0].track.album.images[0].url,
          artist: `${playlist?.tracks?.items[0].track.artists
            .map((artist) => artist.name)
            .join(", ")} - ${playlist?.tracks?.items[0].track.album.name}`,
        },
      });
  }, [dispatch, playlist]);

  return (
    <div className="footer">
      <div className="footer__left">
        <img className="footer__albumLogo" src={track?.cover} alt="" />
        <div className="footer__songInfo">
          <h4>{track?.name}</h4>
          <p>{track?.artist}</p>
        </div>
      </div>
      <div className="footer__center">
        <ShuffleIcon className="footer__green" />
        <SkipPreviousIcon className="footer__icon" />
        <PlayCircleOutlineIcon fontSize="large" className="footer__icon" />
        <SkipNextIcon className="footer__icon" />
        <RepeatIcon className="footer__green" />
      </div>
      <div className="footer__right">
        <Grid container spacing={2}>
          <Grid item>
            <PlaylistPlayIcon />
          </Grid>
          <Grid item>
            <VolumeDownIcon />
          </Grid>
          <Grid item xs>
            <Slider aria-labelledby="continuous-slider" />
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default Footer;
