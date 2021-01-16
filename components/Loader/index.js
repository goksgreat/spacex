import React from 'react';
import constants from '../../helpers/constants';

const Loader = props => {
  return (
    <div className="space-x-loader">
      <span className="title">{constants.loaderTitle}</span>
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
