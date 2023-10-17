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

export default store;