import React, { FC, useState } from "react";
import { TTreeNode } from "../../types/types";
import Tree from "./Tree";
import {useDispatch, useSelector} from 'react-redux';
import { TStore } from "../../store/store";
import { selected } from "../../store/slices/nodeSlice";
import NodeIcon from "../Icon";

type TreeNodeProps = {
    node: TTreeNode;
}

const TreeNode: FC<TreeNodeProps> = ({node}) => {
    const selectedNode = useSelector<TStore, TTreeNode>((state: TStore) => state.node.selected);
    const dispatch = useDispatch();

    const [showChildren, setShowChildren] = useState(false)
   
    const {id, type, name, children} = node;
    const hasChildren = children && children.length > 0

    const isSelected = selectedNode.id === id
    const iconType = type === 'folder' ?  `folder${isSelected ? 'Open' : ""}` : type

    const handleClick = () => {
        setShowChildren(!showChildren);
        dispatch(selected(node)) 
    };

    return (
        <li className={`list-item ${isSelected ? "selected" : ''}`}>
            <span onClick={handleClick} className="list-item-name">
                <NodeIcon type={iconType} />
                <span>{name}</span>
            </span>
            {hasChildren && showChildren &&  
                <ul className="list">
                    {<Tree data={children} />}
                </ul>}
        </li>
    );
}

export default TreeNode;