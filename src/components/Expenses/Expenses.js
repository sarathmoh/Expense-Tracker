import React, {useState} from "react";
import Card from "../Ul/Card";

import "./Expenses.css"
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import ExpensesList from "../ExpenseFilter/ExpensesList";




function Expenses(props) {


const [year,setYear]=useState('2019')  
const clickedYearEvent=(year)=>{
setYear(year);
}


const fetchYear=props.data.filter(expense=>{
return expense.date.getFullYear().toString()===year;
})



  return (
    <div>
    <Card className="expenses">
    <ExpenseFilter  selected={year} getClickedYearEvent={clickedYearEvent} />
    <ExpensesList item={fetchYear}/>
    
    </Card>
    </div>
  );
}

export default Expenses;
