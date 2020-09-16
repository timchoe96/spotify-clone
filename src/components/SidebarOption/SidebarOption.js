import React from "react";
import "./SidebarOption.css";
import { useDataLayerValue } from "../DataLayer/DataLayer";

function SidebarOption({ title, Icon, index }) {
  const [{}, dispatch] = useDataLayerValue();
  return (
    <div
      className="sidebarOption"
      onClick={() => dispatch({ type: "SET_INDEX", index: index })}
    >
      {Icon && <Icon className="sidebarOption__icon" />}
      {Icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
