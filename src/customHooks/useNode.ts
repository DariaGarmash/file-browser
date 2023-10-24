import { MouseEvent } from 'react';
import { TTreeNode } from '../types/types';
import { selectNode, selectedNode } from '../store/slices/nodeSlice';
import { useAppDispatch, useAppSelector } from '../store/hooks';

export const useNode = (node: TTreeNode) => {
    const dispatch = useAppDispatch();
    const currentSelectedNode = useAppSelector(selectedNode);

    const selected = currentSelectedNode.id === node.id

    const isFolder = node.type === 'folder';
    const hasChildren = isFolder && node.children != null && node.children.length > 0;
    
    const onSelect = (e: MouseEvent) => {
        e.preventDefault();
        dispatch(selectNode(node));
    };

    return {
        isFolder,
        hasChildren,
        selected,
        onSelect
    }
}