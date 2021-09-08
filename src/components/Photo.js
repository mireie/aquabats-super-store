import React from "react";
import mc from './mc.jpg'

function Photo() {
  const photoStyles = {
    maxWidth: '100%'
  }
  return (
    <React.Fragment>
      <img src={mc} alt="Commander Bat" style={photoStyles} />
    </React.Fragment>
  );
}

export default Photo;