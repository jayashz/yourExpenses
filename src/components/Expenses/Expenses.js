import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpenseFilter from './ExpenseFilter';
function Expenses(props) {
  const filterActivate=(filterYear)=>{
      console.log(filterYear);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter onChangeFilter={filterActivate} />
      {props.items.map((expense)=>(
        <ExpenseItem
        title={expense.title}
        amount={expense.amount}
        date={expense.date}/>
    ))};
      
    </Card>
  );
}

export default Expenses;