import React from "react";

export default props => {
  return (
    <div>
      <header>{/* <Navigation /> */}</header>
      { props.children }
    </div>
  );
};
