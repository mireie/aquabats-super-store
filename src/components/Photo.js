import React from "react";
import { mockComponent } from "react-dom/test-utils";
import mc from './mc.jpg'

function Photo(){
  const photoStyles = {
    maxSize: '100%'
  }
  return (
    <React.Fragment>
      <img src={mc} alt="Commander Bat" style={photoStyles} />
    </React.Fragment>
  );
}

export default Photo;