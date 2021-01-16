import React from 'react';

const Loader = props => {
  return (
    <div className="space-x-loader">
      <span className="title">SPACEX</span>
      <div className="lds-ellipsis">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
