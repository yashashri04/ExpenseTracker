import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import classes from './ExpenseForm.module.css';

const Radio=(props)=>{
   const [checkedValue,setCheckedValue]=useState('EXPENSE');
   
   const checkedValueHandler=(event)=>{
       setCheckedValue(event.target.value);
   }

   useEffect(()=>{
      props.radioBtnValue(checkedValue)
   },[checkedValue])
   
    return <div className={classes.radioBtn}>
       <input type="radio" id="expense" name="amountType" value="EXPENSE" onClick={checkedValueHandler} />
       <label htmlFor="expense">Expense</label>
       <input type="radio" id="income" name="amountType" value="INCOME" onClick={checkedValueHandler} />
       <label htmlFor="income">Income</label>
    </div>
}


const ExpenseForm=(props)=>{
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDesc,setEnteredDesc]=useState('');
    const [checkedValue,setCheckedValue]=useState('');
    const [isValidInput,setIsValidInput]=useState(true);

    const addExpenseHandler=(event)=>{
        event.preventDefault();
        if(enteredDesc.trim().length===0){
            setIsValidInput(false);
            return;
        }
        else if(enteredAmount.trim().length==0 ||  parseInt(enteredAmount)<0){
          setIsValidInput(false);
          return;
        }

       
        props.onAddNewExpense(enteredDesc,parseInt(enteredAmount),checkedValue,new Date().getMonth());
        setEnteredAmount('');
        setEnteredDesc('');
        setIsValidInput(true);
    }

    const amountHandler=(event)=>{
        setEnteredAmount(event.target.value);
    }

    const descHandler=(event)=>{
        setEnteredDesc(event.target.value);
    }

    const radioBtnHandler=(checkedValue)=>{
        if(checkedValue==='INCOME'){
            setCheckedValue('INCOME')
        }
        if(checkedValue==='EXPENSE'){
            setCheckedValue('EXPENSE')
        }
        
       
    } 

    const error=<div className={classes.error}>Enter Valid Details</div>

    return <form className={classes.form} onSubmit={addExpenseHandler}>
        <input type="number" placeholder="Amount" value={enteredAmount} onChange={amountHandler}/>
        <input type="text" placeholder="Description" value={enteredDesc} onChange={descHandler}/>
        {!isValidInput && error}
        <Radio radioBtnValue={radioBtnHandler}/>
        <button>Add Expense</button>
    </form>
}

export default ExpenseForm;









