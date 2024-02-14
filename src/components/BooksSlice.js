import { createSlice } from '@reduxjs/toolkit';

const initialBooks = {
    books: [
        {id: 1, title: 'Physics first paper', author: 'Tapan vai'},
        {id: 2, title: 'Physics second  paper', author: 'Amir Hossian vai'},
        {id: 3, title: 'Biology first paper', author: 'Abul Hasan vai'}
    ]
}
export const booksSlice = createSlice({
    name: 'books',
    initialState: initialBooks,
    reducers: {
        showBooks: (state)=>state,
        addBook: (state, action)=>{
            state.books.push(action.payload)
        }
    }
})
export const {showBooks, addBook}  = booksSlice.actions;
export default booksSlice.reducer;