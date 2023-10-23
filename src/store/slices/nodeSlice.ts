import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { TTreeNode } from "../../types/types";
import { RootState } from "../store";

export type TStoreNodeSlice = {
    selected: TTreeNode,
}

// default value node slices
const initialState: TStoreNodeSlice = {
    selected: {
        id: '',
        name: '',
        type: "doc", 
    }
};

const nodeSlice = createSlice({
    initialState,
    name: 'node',
    reducers: {
        selectNode: (state, action: PayloadAction<TTreeNode>) => {
            if(state.selected.id !== action.payload.id){
                state.selected = action.payload
            }
        }
    }
})

export const {selectNode} = nodeSlice.actions;
export const selectedNode = (state: RootState) => state.node.selected

export default nodeSlice.reducer;