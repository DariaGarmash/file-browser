import { MouseEvent } from 'react';
import { TTreeNode } from '../types/types';
import { selectNode } from '../store/slices/nodeSlice';
import { useDispatch, useSelector } from 'react-redux';
import { TStore } from '../store/store';

export const useNode = (node: TTreeNode) => {
    const dispatch = useDispatch();
    const selectedNode = useSelector<TStore, TTreeNode>((state: TStore) => state.node.selected);

    const selected = selectedNode.id === node.id

    const isFolder = node.type === 'folder';
    const hasChildren = isFolder && node.children != null && node.children.length > 0;
    
    const onSelect = (e: MouseEvent) => {
        e.stopPropagation();
        dispatch(selectNode(node));
    };

    return {
        isFolder,
        hasChildren,
        selected,
        onSelect
    }
}