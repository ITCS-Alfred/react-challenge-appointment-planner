import React from "react";
import { ContactsPage } from "../../containers/contactsPage/ContactsPage";
import { Tile } from "../tile/Tile";

export const TileList = ({tiles}) => {
  return (
    <div>
       {tiles.map((tile, index) => (
        <Tile key={index} tile={tile} />
      ))}
    </div>
  );
};
