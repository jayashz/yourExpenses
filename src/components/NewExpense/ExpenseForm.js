import './ExpenseForm.css'
import React,{useState} from 'react';
const ExpenseForm=(props)=>{
    const [enteredTitle,setEnteredTitle]=useState('');
    const [enteredAmount,setEnteredAmount]=useState('');
    const [enteredDate,setEnteredDate]=useState('');
    
    // const [userInput,setUserInput]=useState({
    //     enteredTitle: '',
    //     enteredDate: '',
    //     eneteredAmount: ''
    // }
    // );
    const titleChangeHandler=(event)=>{
        setEnteredTitle(event.target.value);
        // setUserInput((prevState)=>{
            //     return({
                //         ...prevState,
                //         enteredTitle:event.target.value
                
                //     });
                // });
            };
            
        const amountChangeHandler=(event)=>{
                setEnteredAmount(event.target.value);
                // setUserInput({
                    // });
                    // setUserInput((prevState)=>{
                        //     return({
                            //     ...userInput,
                            //     eneteredAmount:event.target.value
                            // });
                            
                            // });
                        };
        const dateChangeHandler=(event)=>{
                    setEnteredDate(event.target.value);
                            // setUserInput({
                                // });
                                // setUserInput((prevState)=>{
            //     return({
            //     ...userInput,
            //     eneteredDate:event.target.value
            // });
        
        };

    const submitHandler=(event)=>{
        event.preventDefault();
        const expenseData ={
            title:enteredTitle,
            amount:enteredAmount,
            date: new Date (enteredDate)
        };
        props.onForm(expenseData);
        setEnteredAmount('');
        setEnteredDate('');
        setEnteredTitle('');
    }
    
    
    return(
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min='0.1' step='0.01' onChange={amountChangeHandler}></input>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type="date" min='0.1' value={enteredDate} step='0.01' onChange={dateChangeHandler}></input>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'>Add expense</button>
            </div>
        </form>
    );
}
export default ExpenseForm;