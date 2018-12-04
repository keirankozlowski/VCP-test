import React from "react";
import Navigation from '../components/Navigation';

export default props => {
  return (
    <div>
      <Navigation />
      <div className="container">
        { props.children }
      </div>
    </div>
  );
};
