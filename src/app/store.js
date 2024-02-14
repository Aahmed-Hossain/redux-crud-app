// import { configureStore } from '@reduxjs/toolkit'
// import  booksSlice  from '../components/BooksSlice';


// const store = configureStore({
//     reducer:{
//         booksReducer: booksSlice
//     }
// });
// export default store;

import { configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import booksSlice from '../components/BooksSlice';

const persistConfig = {
  key: 'root', // the key to use for storing the data in storage
  storage, // storage engine
};

const persistedReducer = persistReducer(persistConfig, booksSlice);

const store = configureStore({
  reducer: {
    booksReducer: persistedReducer,
  },
});

const persistor = persistStore(store);

export { store, persistor };
