// @ts-nocheck
import React, { useState } from "react";
import Error from "./Error";
import PropTypes from "prop-types";

const Questioner = ({ setFounds, setRemaining, setIsAssigned }) => {
  const [initialFounds, setInitialFounds] = useState(0);
  const [error, setError] = useState(false);

  const handleCapital = (e) => {
    setInitialFounds(parseInt(e.target.value));
  };

  const passFounds = (form) => {
    form.preventDefault();

    if (initialFounds < 1 || isNaN(initialFounds) || initialFounds === "") {
      return setError(true);
    }
    setError(false);
    setFounds(initialFounds);
    setRemaining(initialFounds);
    setIsAssigned(true);
  };

  return (
    <div className="col-md-4">
      <h2>Input your funds</h2>
      {error ? <Error message={"Invalid Input"} /> : null}
      <form onSubmit={passFounds}>
        <input
          type="number"
          onChange={(e) => handleCapital(e)}
          className="form-control d-block mb-3"
        />
        <input
          type="submit"
          className="btn btn-primary btn-block"
          value="Capitalize!"
        />
      </form>
    </div>
  );
};

Questioner.propTypes = {
  setFounds: PropTypes.func.isRequired,
  setRemaining: PropTypes.func.isRequired,
  setIsAssigned: PropTypes.func.isRequired,
};

export default Questioner;
