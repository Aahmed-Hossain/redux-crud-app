import { configureStore } from '@reduxjs/toolkit'
import  booksSlice  from '../components/BooksSlice';

const store = configureStore({
    reducer:{
        booksReducer: booksSlice
    }
});
export default store;