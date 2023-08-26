import Form from './ExpenseForm';
import './NewExpense.css';
const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: 'e'+Math.floor(Math.random()*100).toString()
        };
        props.onApp(expenseData);
    };
    return(
        <div className='new-expense'>
        <Form onForm={saveExpenseDataHandler}></Form>
        </div>
    );
}
export default NewExpense;