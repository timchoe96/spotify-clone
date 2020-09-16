import React from "react";
import "./Body.css";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import Header from "../Header/Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "../SongRow/SongRow";

function Body({ spotify }) {
  const [{ playlist }] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotify={spotify} />
      <div className="body__info">
        <img src={playlist?.images[0].url} alt=""></img>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>{playlist?.name}</h2>
          <p>{playlist?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* list of icons */}
        {playlist?.tracks.items.map((item, i) => (
          <SongRow key={i} track={item.track} />
        ))}
      </div>
      <div className="body__placeholder"></div>
    </div>
  );
}

export default Body;
