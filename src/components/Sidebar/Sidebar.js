import React, { useEffect } from "react";
import "./Sidebar.css";
import SidebarOption from "../SidebarOption/SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../DataLayer/DataLayer";

function Sidebar({ spotify }) {
  const [{ playlists, index }, dispatch] = useDataLayerValue();

  useEffect(() => {
    spotify.getUserPlaylists().then((playlists) => {
      dispatch({ type: "SET_PLAYLISTS", playlists: playlists });
      spotify
        .getPlaylist(
          playlists?.items[index].tracks.href
            .split("playlists/")[1]
            .split("/")[0]
        )
        .then((response) => {
          dispatch({
            type: "SET_PLAYLIST",
            playlist: response,
          });
        });
    });
  }, [index, dispatch, spotify]);

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
      />
      <SidebarOption Icon={HomeIcon} title="Home" />
      <SidebarOption Icon={SearchIcon} title="Search" />
      <SidebarOption Icon={LibraryMusicIcon} title="Your Library" />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      <div className="sidebar__playlists">
        {playlists?.items?.map((playlist, i) => (
          <SidebarOption title={playlist.name} key={i} index={i} />
        ))}
      </div>
      <div className="sidebar__placeholder"></div>
    </div>
  );
}

export default Sidebar;
