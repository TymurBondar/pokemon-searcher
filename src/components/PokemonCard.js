import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({card: {sprites: {front, back}, name, hp}}) {
  const [imageSrc, setImageSrc] = useState(true);
  const source = imageSrc ? front : back;
  function flipCard(){
    setImageSrc(!imageSrc);
  }
  return (
    <Card onClick={flipCard}>
      <div>
        <div className="image">
          <img src={source} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
