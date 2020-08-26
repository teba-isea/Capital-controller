// @ts-nocheck
import React, { useState, useEffect, Fragment } from "react";
import Questioner from "./components/Questioner";
import Manager from "./components/Manager";
import ExpensesList from "./components/ExpensesList";
function App() {
  const [founds, setFounds] = useState(0);
  const [remaining, setRemaining] = useState(0);
  const [expenses, setExpenses] = useState([]);
  const [expense, setExpense] = useState({});
  const [isAssigned, setIsAssigned] = useState(false);
  const [newExpense, setNewExpense] = useState(false);

  useEffect(() => {
    if (newExpense) {
      setExpenses([...expenses, expense]);

      const newRemanining = remaining - expense.expenseValue;
      console.log(newRemanining);
      setRemaining(newRemanining);

      setNewExpense(false);
    }
  }, [expense, expenses, newExpense, remaining]);

  return (
    <div className="container text-center">
      <h1 className="font-weight-bold m-5">Founds Manager</h1>
      <div className="row justify-content-center">
        <div className="col">
          <div className="jumbotron bg-light p-0">
            <div className="row justify-content-center py-5 px-1">
              {isAssigned ? (
                <Fragment>
                  <Manager
                    founds={founds}
                    remaining={remaining}
                    expenses={expenses}
                    setExpense={setExpense}
                    setNewExpense={setNewExpense}
                  />
                  {expenses.length > 0 ? (
                    <ExpensesList
                      expenses={expenses}
                      founds={founds}
                      remaining={remaining}
                    />
                  ) : null}
                </Fragment>
              ) : (
                <Questioner
                  setFounds={setFounds}
                  setRemaining={setRemaining}
                  setIsAssigned={setIsAssigned}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
