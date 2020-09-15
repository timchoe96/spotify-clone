import React from "react";
import "./Body.css";
import { useDataLayerValue } from "../DataLayer/DataLayer";
import Header from "../Header/Header";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavoriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "../SongRow/SongRow";

function Body({ spotify }) {
  const [{ discover_weekly, track }, dispatch] = useDataLayerValue();

  return (
    <div className="body">
      <Header spotity={spotify} />
      <div className="body__info">
        <img
          src="https://i.scdn.co/image/6682aad217c11156e6d8985036996f1ea7ebb518"
          alt=""
        ></img>
        <div className="body__infoText">
          <strong>PLAYLIST</strong>
          <h2>Discover Weekly</h2>
          <p>{discover_weekly?.description}</p>
        </div>
      </div>

      <div className="body__songs">
        <div className="body__icons">
          <PlayCircleFilledIcon className="body__shuffle" />
          <FavoriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {/* list of icons */}
        {discover_weekly?.tracks.items.map((item, i) => (
          <SongRow key={i} track={item.track} />
        ))}
      </div>
      <div className="body__placeholder"></div>
    </div>
  );
}

export default Body;
