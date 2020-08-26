import React, { useState } from "react";
import Error from "./Error";
import shortid from "shortid";
import PropTypes from "prop-types";

const Manager = ({ setExpense, setNewExpense }) => {
  const [expenseName, setExpenseName] = useState("");
  const [expenseValue, setExpenseValue] = useState(0);
  const [error, setError] = useState(false);
  console.log(expenseValue);
  const saveExpense = (e) => {
    e.preventDefault();
    if (expenseName.trim() === "" || expenseValue < 0 || isNaN(expenseValue)) {
      return setError(true);
    }
    setError(false);

    setExpense({
      expenseName,
      expenseValue,
      id: shortid.generate(),
    });
    setNewExpense(true);
    setExpenseName("");
    setExpenseValue(0);
  };
  return (
    <div className="col-12 col-md-4">
      <form className="form-group" onSubmit={(e) => saveExpense(e)}>
        <h3>Add your expenses</h3>
        {error ? <Error message={"invalid input"} /> : null}
        <label> Name of expense</label>
        <input
          type="text"
          className="form-control"
          placeholder="exanple: transport"
          value={expenseName}
          onChange={(e) => setExpenseName(e.target.value)}
        />

        <label> value of expense</label>
        <input
          type="number"
          className="form-control"
          placeholder="exanple: 50"
          value={expenseValue}
          onChange={(e) => setExpenseValue(parseInt(e.target.value))}
        />

        <input
          type="submit"
          className=" form-control btn btn-block btn-success mt-2"
          value="Add"
        />
      </form>
    </div>
  );
};

Manager.propTypes = {
  setExpense: PropTypes.func.isRequired,
  setNewExpense: PropTypes.func.isRequired,
};

export default Manager;
