import React from "react";
import About from "./About";
import Photo from "./Photo"

function Sidebar() {
  return (
    <React.Fragment>
      <Photo />
      <About />
    </React.Fragment>
  )
}

export default Sidebar;