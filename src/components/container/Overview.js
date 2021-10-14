import { useState,useEffect } from "react";
import ExpenseForm from "./ExpenseForm";
import classes from "./Overview.module.css";

const Overview=(props)=>{
   
    const [expenseAmountTotal,setExpenseAmountTotal]=useState(parseInt(localStorage.getItem("totalExpense")));
    const [incomeAmountTotal,setIncomeAmountTotal]=useState(parseInt(localStorage.getItem("totalIncome")));
    const [expenseList,setExpenseList]=useState(JSON.parse( localStorage.getItem("expenseList"))

    
    );
    
    const newExpenseHandler=(ndesc,namount,checked,month,type)=>{

        setExpenseList((prevList)=>{

            if(checked==='EXPENSE'){
                
                
                setExpenseAmountTotal((prevAmount)=>{
                    return prevAmount+namount;
                })
                
                
            }
            else if(checked==='INCOME'){
               
               
                setIncomeAmountTotal((prevAmount)=>{
                    return prevAmount+namount;
                })

            }
            
            const Id=Math.random().toString()
            const newList=JSON.parse(localStorage.getItem("expenseList"));
            newList.push({id:Id,desc:ndesc,amount:namount,month:month,type:checked});
            localStorage.setItem("expenseList",JSON.stringify(newList))
            return [...prevList,{id:Id,desc:ndesc,amount:namount,month:month,type:checked}];
        })
       
    }

   const currBalance=incomeAmountTotal-expenseAmountTotal;
    props.data({expenseAmount:expenseAmountTotal,incomeAmount:incomeAmountTotal,currentBalance:currBalance})
    
    useEffect(()=>{
        props.updatedExpenseList(expenseList);
              
    },[expenseList,props])
    

    return <>
    {props.formState && <ExpenseForm  onAddNewExpense={newExpenseHandler}/>}
    <div className={classes.moneyStatus}>
        <div className={classes.expenseBox}><span className={classes.expenseLable}>Expense</span>
        <span className={classes.expenseAmount}>&#8377; {expenseAmountTotal}</span>
        </div>
        <div className={classes.incomeBox}><span className={classes.incomeLable}>Income</span>
        <span className={classes.incomeAmount}>&#8377; {incomeAmountTotal}</span></div>
    </div>
    </>
}
export default Overview;


// {
    //     id:"m1",
    //     desc:"food",
    //     amount:200
    // },
    // {
    //     id:"m2",
    //     desc:"food",
    //     amount:300
    // }
       