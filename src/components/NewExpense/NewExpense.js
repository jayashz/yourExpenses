import Form from './ExpenseForm';
import React,{useState} from 'react';
import './NewExpense.css';
const NewExpense=(props)=>{
    const saveExpenseDataHandler=(enteredExpenseData)=>{
        const expenseData={
            ...enteredExpenseData,
            id: 'e'+Math.floor(Math.random()*100).toString()
        };
        props.onApp(expenseData);
    };
    const [show,setShow]=useState(false);
    const displayForm=()=>{
        setShow(true);
    };
    const dontdisplayForm=()=>{
        setShow(false);
    };

    
    return(
        <div className='new-expense'>
        {!show && <button onClick={displayForm}>Add new Expense</button>}
        {show && <Form onForm={saveExpenseDataHandler} onCancel={dontdisplayForm}></Form>}
        </div>
    );
}
export default NewExpense;