import React from 'react'

const Banner = ({ appName }) => {
  return(
    <div className="banner">
      <div className="container">
        <h1 className="logo-font">
          {appName}
        </h1>
        <p>A place to share you knowledge.</p>
      </div>
    </div>
  );
};

export default Banner;
