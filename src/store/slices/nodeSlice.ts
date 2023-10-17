import { createSlice } from "@reduxjs/toolkit";
import { TTreeNode } from "../../types/types";
import { sortData } from "../../utils/utils";

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

type TTreeAddedAction ={
    payload: TTreeNode[]
}

export const nodeSlice = createSlice({
    initialState,
    name: 'node',
    reducers: {
        selected: (state: TStoreNodeSlice, action: TNodeSelectedAction) => {
            if(state.selected.id !== action.payload.id){
                state.selected = action.payload
            }
        },
        addTree: (state: TStoreNodeSlice, action: TTreeAddedAction) => {
            if(state.tree.length === 0){
                state.tree = sortData(action.payload) 
            }
        },
    }
})

export const {selected, addTree} = nodeSlice.actions;

export default nodeSlice.reducer;