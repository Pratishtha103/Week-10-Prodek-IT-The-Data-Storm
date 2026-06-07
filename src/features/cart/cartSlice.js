import {createSlice} from '@reduxjs/toolkit';

const savedCart = localStorage.getItem("cart");
const initialState={
    cartItems:savedCart
    ? JSON.parse(savedCart)
    : [],
};

const cartSlice = createSlice({
    name: "cart",

    initialState,

    reducers: {

        
        addToCart: (state, action)=>{
            //check if item exists
            const existingItem = state.cartItems.find(
                item =>item.id  === action.payload.id
            )
            //increase quantity if exists
            if (existingItem){
                existingItem.quantity += 1
            }else{//add item if doesn't exist
                state.cartItems.push({
                    ...action.payload,
                    quantity : 1
                });
            }
            localStorage.setItem(
                "cart",
                JSON.stringify(state.cartItems)
            );
        },
        removeFromCart: (state, action)=>{
            state.cartItems = state.cartItems.filter(
                item => item.id !== action.payload
            );
            localStorage.setItem(
                "cart",
                JSON.stringify(state.cartItems)
            );
        },
    },
});

export const {
    addToCart, 
    removeFromCart, 
} = cartSlice.actions;

export default cartSlice.reducer;