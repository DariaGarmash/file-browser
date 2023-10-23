import { configureStore } from '@reduxjs/toolkit'
import nodeReducer, { TStoreNodeSlice } from './slices/nodeSlice';

export type TStore = {
    node: TStoreNodeSlice,
}

const store = configureStore({
    reducer: {
      node: nodeReducer
    }
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>

export type AppDispatch = typeof store.dispatch

export default store;
