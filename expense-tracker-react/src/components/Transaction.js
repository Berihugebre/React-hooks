import React, {useContext} from 'react'
import {GlobalContext} from '../context/GlobalState'

export const Transaction = ({transaction}) => {
    const {dispatch} = useContext(GlobalContext)
    const handleClick =(id)=>{
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        })
    }

    const sign = transaction.amount < 0 ? '-': '+';
    return (
        <li className={transaction.amount < 0? 'minus' : 'plus'}>
            {transaction.text} <span>{sign}${Math.abs(transaction.amount)}</span>
            <button 
                onClick={() => handleClick(transaction.id)}
                className="delete-btn">x</button>
        </li> 
    )
}
