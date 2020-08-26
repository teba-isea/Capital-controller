import React, { Fragment } from "react";
import { changeRemainingColor } from "../helpers";
import PropTypes from "prop-types"
const Founds = ({ founds, remaining }) => {
  return (
    <Fragment>
      <div className="alert p-0 m-0 alert-info" role="alert">
        <p>
          Founds: <span className="text-left">${founds}</span>
        </p>
      </div>

      <div className={changeRemainingColor(founds, remaining)} role="alert">
        <p>
          Remaining: <span className="text-left">${remaining}</span>
        </p>
      </div>
    </Fragment>
  );
};

Founds.propTypes= {
  founds: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired 
}

export default Founds;
