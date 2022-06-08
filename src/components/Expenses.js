import React from 'react'
import Expenseitem from './Expenseitem'

function Expenses(props) {
  return (
    <div>
      <Expenseitem title={props.data[0].title}
       amount={props.data[0].amount} 
       date={props.data[0].date}/>
       

      <Expenseitem title={props.data[1].title}
       amount={props.data[1].amount} 
       date={props.data[1].date}/>
     

      <Expenseitem title={props.data[2].title}
       amount={props.data[2].amount} 
       date={props.data[2].date}/>
     


      <Expenseitem title={props.data[3].title}
       amount={props.data[3].amount} 
       date={props.data[3].date}/>
     
    </div>
  )
}

export default Expenses