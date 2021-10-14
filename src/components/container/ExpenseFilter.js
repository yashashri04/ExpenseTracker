import classes from './ExpenseFilter.module.css';


const ExpenseFilter=(props)=>{

    const dropdownChangeHandler = (event) => {
        props.onChangeFilter(event.target.value);
      };
   return <>
       <div className={classes.expenses_filter}>
           <div className={classes.expenses_filter__control}>
           <label>Filter by month</label>
           <select value={props.selected} onChange={dropdownChangeHandler}>
               <option value={0}>Jan</option>
               <option value={1}>Feb</option>
               <option value={2}>March</option>
               <option value={3}>April</option>
               <option value={4}>May</option>
               <option value={5}>June</option>
               <option value={6}>July</option>
               <option value={7}>Aug</option>
               <option value={8}>Sept</option>
               <option value={9}>oct</option>
               <option value={10}>Nov</option>
               <option value={11}>Dec</option>
           </select>
           </div>
       </div>
   </>
}
export default ExpenseFilter;




