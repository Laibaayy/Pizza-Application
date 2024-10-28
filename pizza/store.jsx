import { configureStore } from '@reduxjs/toolkit'
import userReducer from "./src/Components/user/UserSlice"
import cartReducer from "./src/Components/cart/cartSlice"


const store = configureStore({
    reducer: {
        Userdata: userReducer,
        cartData: cartReducer,
    }
})



export default store