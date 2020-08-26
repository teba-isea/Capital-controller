import React from "react";
import PropTypes from "prop-types";

const ExpenseItem = ({ expense }) => (
  <div className="alert alert-info p-0" role="alert">
    <p>
      {expense.expenseName} .
      <span className="badge badge-pill badge-light text-left">
        ${expense.expenseValue}
      </span>
    </p>
  </div>
);

ExpenseItem.propTypes = {
  expense: PropTypes.object.isRequired,
};

export default ExpenseItem;
