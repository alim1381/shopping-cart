import React, { createContext, useReducer } from 'react'

const initialState = {
    selectedItem : [],
    itemCounter : 0,
    total : 0,
    checkout: false,
}

const sumItems = items => {
    const itemCounter = items.reduce((total , product) => total + product.quantity , 0);
    const total = items.reduce((total , product) => total + product.price * product.quantity , 0).toFixed(2);
    return {itemCounter , total}
}

const cartReducer = (state , action) => {

    switch (action.type) {
        case "ADD_ITEM" :
            if (!state.selectedItem.find(item => item.id === action.payload.id)) {
                state.selectedItem.push({
                    ...action.payload,
                    quantity : 1
                })
            }
            return {
                ...state,
                selectedItem : [...state.selectedItem],
                ...sumItems(state.selectedItem),
                checkout: false,
            }
        case "REMOVE_ITEM" :
            const newSelectedItem = state.selectedItem.filter(item => item.id !== action.payload.id )
            // return {
            //     ...state,
            //     selectedItem : [...newSelectedItem],
            //     ...sumItems(state.selectedItem)
            // }
            return {
                ...state ,
                selectedItem : [...newSelectedItem],
                itemCounter : state.itemCounter -1
            }
        case "INCRASE" : 
            const indexItem = state.selectedItem.findIndex(item => item.id === action.payload.id);
            console.log(indexItem);
            state.selectedItem[indexItem].quantity ++;
            return {
                ...state,
                ...sumItems(state.selectedItem)
            }
        case "DECRASE" : 
            const indexI = state.selectedItem.findIndex(item => item.id === action.payload.id);
            state.selectedItem[indexI].quantity --;
            return {
                ...state,
                ...sumItems(state.selectedItem)
            }
        case "CHECKOUT" : 
            return {
                selectedItem : [],
                itemCounter : 0,
                total : 0,
                checkout: true,
            }
        case "CLEAR" : 
            return {
                selectedItem : [],
                itemCounter : 0,
                total : 0,
                checkout: false,
            }
        default :
            return {
                ...state,
            }
    }
}

export const CartContext = createContext();

export default function ReducerContextProvider({children}) {
    const [state , dispatch] = useReducer(cartReducer , initialState)
  return (
    <CartContext.Provider value={{state , dispatch}}>
        {children}
    </CartContext.Provider>
  )
}
