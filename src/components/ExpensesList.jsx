import React from "react";
import ExpenseItem from "./ExpenseItem";
import Founds from "./Founds";
import PropTypes from "prop-types";

const ExpensesList = ({ expenses, founds, remaining }) => {
  return (
    <div className="col-12 col-md-8">
      {expenses.map((expense) => (
        <ExpenseItem key={expense.id} expense={expense} />
      ))}
      <Founds founds={founds} remaining={remaining} />
    </div>
  );
};

ExpensesList.propTypes = {
  expenses: PropTypes.array.isRequired,
  founds: PropTypes.number.isRequired,
  remaining: PropTypes.number.isRequired,
};

export default ExpensesList;
