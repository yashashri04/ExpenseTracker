import classes from './ExpenseList.module.css';
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpenseFilter";
import { useState } from 'react/cjs/react.development';
import { useEffect } from 'react';


const ExpenseList=(props)=>{

    const [filteredMonth,setFilteredMonth]=useState(0);

    const filterChangeHandler=(selected)=>{
        setFilteredMonth(parseInt(selected));
    }
     
    
    const filteredExpense= props.expenseData.filter((expense)=>{
        return expense.month===filteredMonth;
    })

    

    return <>
    <div className={classes.filter_Reset}>
    <ExpenseFilter selected={filteredMonth} onChangeFilter={filterChangeHandler}/>
    <button onClick={props.reset}>Reset</button>
    </div>
    {filteredExpense.length >0 ?
       <div className={classes.expenseList}>
       <ul>
       { filteredExpense.map((item)=>(
           <ExpenseItem  key={Math.random().toString()} expenseData={item} />
       ))}
      </ul></div> :
      <div className={classes.noExpense}>No Expenses !</div>

       }
    
   </>
}
export default ExpenseList;