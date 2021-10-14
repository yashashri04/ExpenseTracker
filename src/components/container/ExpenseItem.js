import classes from './ExpenseItem.module.css';

const ExpenseItem=(props)=>{
    const type=props.expenseData.type;

    return <div className={`${classes.expenseItem} ${type==='EXPENSE'? classes['expense'] : classes['income']}`} key={props.expenseData.id}>
        <span>{props.expenseData.desc}</span>
        <span>&#8377; {props.expenseData.amount}</span>
    </div>
}
export default ExpenseItem;