import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
import { useState } from 'react';


function Expenses(props) {
  
  const [filteredYear,setFilteredYear] = useState('2023');

  //This sets the state to be filtered as
  const filterActivate=(filterYear)=>{
    setFilteredYear(filterYear);
  };

  //This filters the Expense list based on the selected year
  const filteredExpense = props.items.filter(expense=>{
    return expense.date.getFullYear().toString()===filteredYear;
  });
  return (
    <Card className="expenses">
      <ExpenseFilter  seleted={filteredYear}
       onChangeFilter={filterActivate} />
       {filteredExpense.length===0 ? (<p>No expenses found.</p>): filteredExpense.map((expense)=>(
        <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}/>
    )) }

      
    </Card>
  );
}

export default Expenses;