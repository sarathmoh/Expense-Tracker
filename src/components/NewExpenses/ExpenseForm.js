import React, { useState } from 'react'
import './ExpenseForm.css';

const ExpenseForm=(props) =>{

const [enterTitle,setenterTitle] =useState('');
const [enterAmount,setenterAmount] =useState('');
const [enterDate,setenterDate] =useState('');

// alternative way to combine more states

// const [userInput,setuserInput]= useState({
 
//     enterTitle:'',
//     enterAmount:'',
//     enterDate:''

// });

const titleEventHandler=(event)=>{
setenterTitle(event.target.value)}
// setuserInput({
  
//     ...userInput,
//     enterTitle:event.target.value
// })



const amountEventHandler=(event)=>{
setenterAmount(event.target.value)
}
// // 
// setuserInput({
  
//     ...userInput,
//     enterAmount:event.target.value
// })




const dateEventHandler=(event)=>{
setenterDate(event.target.value)}
// setenterDate('event.target.value')

// setuserInput({
  
//     ...userInput,
//     enterDate:event.target.value
// })


const submitHandler=(event)=>{
event.preventDefault();

const collectedData={
title: enterTitle,
amount: enterAmount,
date: new Date(enterDate)    
}



props.saveCollectedData(collectedData);
setenterTitle('');
setenterAmount('');
setenterDate('');


}


return (
<form onSubmit={submitHandler}>
<div className='new-expense__controls'>
<div className='new-expense__control'>
 <label>Title</label>   
 <input type="text" value={enterTitle} onChange={titleEventHandler} />
</div>
<div className='new-expense__control'>
 <label>Amount</label>   
 <input type="number" min="0.01" step="0.01" value={enterAmount} onChange={amountEventHandler} />
</div>
<div className='new-expense__control'>
<label>Date</label>   
<input type="date" min="2019-01-01" value={enterDate} max="2022-12-31" onChange={dateEventHandler} />
</div>
</div>   
<div className='.new-expense__actions '>
<button type='submit'>Add Expense</button>   
</div>
</form>
  )
}

export default ExpenseForm