import React , {useState,useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const AddTransaction = () => {
    const [text, setText] = useState('')
    const [amount,setAmount] = useState(0)

    const {dispatch} = useContext(GlobalContext)

    const handleSubmit = (e)=>{
        e.preventDefault()
       
        const newTransaction = {
            id: Math.floor(Math.random()* 1000000000),
            text,
            amount: Number(amount)
        }

        dispatch({
            type: 'ADD_TRANSACTION',
            payload: newTransaction
        })
    }

    return (
        <>
        <h3>Add new transaction</h3>
        <form id="form" onSubmit={handleSubmit}>
            <div className="form-control">
            <label htmlFor="text">Text</label>
            <input type="text" id="text" 
                placeholder="Enter text..." 
                value={text}
                onChange={(e)=>setText(e.target.value)}
            />
            </div>
            <div className="form-control">
            <label htmlFor="amount">Amount <br />
                (negative - expense, positive - income)</label>
            <input type="number" id="amount" placeholder="Enter amount..." value={amount}
                onChange={(e)=>setAmount(e.target.value)}
            />
            </div>
            <button className="btn">Add transaction</button>
        </form>       
        </>
    )
}
