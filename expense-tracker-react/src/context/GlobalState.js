import React, {createContext, useReducer} from 'react'
import AppReducer from '../roducer/AppReducer'

// intal state
const initialState ={
    transactions: [],
}
// create context
export const GlobalContext = createContext(initialState)
// provider component
export const GlobalContextProvider =({children})=> {
    const [state, dispatch] = useReducer(AppReducer, initialState)

    // Actions
       


       

   return (
    <GlobalContext.Provider value={{transactions:state.transactions, dispatch}}>
        {children}
    </GlobalContext.Provider>
   )
}
