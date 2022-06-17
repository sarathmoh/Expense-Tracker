import React from 'react'
import './ExpenseFilter.css'
import Expenseitem from '../Expenses/Expenseitem'


const ExpensesList =(props)=> {
 
   if(props.item.length===0){

   return <h2 className='expenses-list__fallback'>Found No Expenses.</h2>

   } 
  
    return (

    <ul className='expenses-list'>
     {props.item.map((expense)=>(
        <Expenseitem
         key={expense.id}
         title={expense.title} 
         amount={expense.amount}
         date={expense.date}
          /> ))}
   </ul>

    );

    
     
    
}

export default ExpensesList
