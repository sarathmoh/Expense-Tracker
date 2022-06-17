import React from 'react'
import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
import matchers from '@testing-library/jest-dom/matchers'

const NewExpense=(props)=> {
  const storeItems=(collectedItems)=>{
  const collectedData={
     ...collectedItems,
     id:Math.random().toString()
  }  
 
  props.addExpense(collectedData)

  }
  return (
    <div className='new-expense'>
    <ExpenseForm saveCollectedData={storeItems} /> 
    </div>
  )
}

export default NewExpense