import { configureStore } from '@reduxjs/toolkit';

import countReducer from './component/button/counterSlice'

const store = configureStore({
    reducer:{
counter: countReducer,
    },
})

export default store;