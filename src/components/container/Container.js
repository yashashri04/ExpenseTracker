import { useState } from 'react';
import classes from './Container.module.css';
import Overview from './Overview';
import ExpenseList from './ExpenseList';


if(!localStorage.getItem("totalBalance")){
    localStorage.setItem("totalExpense",0);
    localStorage.setItem("totalIncome",0);
    localStorage.setItem("totalBalance",0);
    localStorage.setItem('expenseList',JSON.stringify([]));
}

const Container=()=>{

    const [toggleAddBtn , setToggleAddBtn]=useState(false);
    const [displayForm,setDisplayForm]=useState(false); 
    const [expenseList,setExpenseList]=useState(JSON.parse(localStorage.getItem("expenseList")));
    

    const onUpdatedExpenseList=(newList)=>{     
        setExpenseList(newList);       
    }

    const Button=(props)=>{
        return <button onClick={props.btnText==='Add'?props.onAdd:props.onCancle} className={classes.btn}>{props.btnText}</button>
    }

    const displayFormHandler=()=>{
        setToggleAddBtn(true)
        setDisplayForm(true);
    }

    const HideFormHandler=()=>{
        setToggleAddBtn(false)
        setDisplayForm(false);
    }

    
    
    const resetHandler=()=>{
        localStorage.removeItem("totalBalance")
        localStorage.removeItem("totalExpense")
        localStorage.removeItem("totalIncome")
        localStorage.removeItem("expenseList")  
        window.location.reload();
        
    }

    const receivedDataHandler=(receivedData)=>{
        localStorage.setItem("totalExpense",receivedData.expenseAmount);
        localStorage.setItem("totalIncome",receivedData.incomeAmount);
        localStorage.setItem("totalBalance",receivedData.currentBalance)
       
    }
    
    
    return <div className={classes.mainContainer}>
        <div className={classes.balanceBox}>
            <div className={classes.balance}>Balance : &#8377; {localStorage.getItem("totalBalance")}</div>
            <Button onAdd={displayFormHandler} onCancle={HideFormHandler}btnText={toggleAddBtn?"Cancle":"Add"}></Button>
        </div>
        <Overview  data={receivedDataHandler} formState={displayForm} updatedExpenseList={onUpdatedExpenseList}  />
        <ExpenseList  expenseData={expenseList} reset={resetHandler}></ExpenseList>
    </div>
}

export default Container;