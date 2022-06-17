import React from "react";
import "./Expenseitem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "../Ul/Card";

function Expenseitem(props) {
  // const [title, setTitle]=useState(props.title);
  // const addEvent=()=>{
  // setTitle("hai")
  // };
  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.amount}</div>
      </div>
      {/* <button onClick={addEvent}>clicked</button> */}
    </Card>
    </li>
  );
}

export default Expenseitem;
