import { createSlice } from "@reduxjs/toolkit";
import { TTreeNode } from "../../types/types";

export type TStoreNodeSlice = {
    selected: TTreeNode,
    tree: TTreeNode[]
}

// default value node slices
const initialState: TStoreNodeSlice = {
    selected: {
        id: '',
        name: '',
        type: "doc", 
    },
    tree: []
};


type TNodeSelectedAction ={
    payload: TTreeNode
}

export const nodeSlice = createSlice({
    initialState,
    name: 'node',
    reducers: {
        selectNode: (state: TStoreNodeSlice, action: TNodeSelectedAction) => {
            if(state.selected.id !== action.payload.id){
                state.selected = action.payload
            }
        }
    }
})

export const {selectNode} = nodeSlice.actions;

export default nodeSlice.reducer;