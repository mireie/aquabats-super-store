import React from "react";
import About from "./About";
import Photo from "./Photo"

function Sidebar() {
    return (
    <React.Fragment>
      <Photo />
      <h1 className="display-1">The Aquabats Super Store</h1>
      <About />
    </React.Fragment>
  )
}

export default Sidebar;