import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Food } from "../../pages/Home";

type CartState = {
    items: Food["cardapio"]
    isOpen: boolean
}

const initialState: CartState = {
    items: [],
    isOpen: false
}

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<Food["cardapio"][number]>) => {
            const food = state.items.find((item) => item.id === action.payload.id )

            if(!food){
                state.items.push(action.payload)
            } else {
                alert('O prato já está no carrinho')
            }
        },
        remove: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter((item) => item.id !== action.payload)
        },
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
})

export const { add, open, close, remove } = cartSlice.actions
export default cartSlice.reducer