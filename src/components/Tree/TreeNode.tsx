import React, { FC, useState } from "react";
import { TTreeNode } from "../../types/types";
import Tree from "./Tree";
import {useDispatch, useSelector} from 'react-redux';
import { TStore } from "../../store/store";
import { selectNode } from "../../store/slices/nodeSlice";
import NodeIcon from "../Icon";
import classNames from "classnames";

type TreeNodeProps = {
    node: TTreeNode;
}

const TreeNode: FC<TreeNodeProps> = ({node}) => {
    const selectedNode = useSelector<TStore, TTreeNode>((state: TStore) => state.node.selected);
    const dispatch = useDispatch();

    const [showChildren, setShowChildren] = useState(false)
   
    const {id, type, name, children} = node;
    const hasChildren = children && children.length > 0

    const selected = selectedNode.id === id
    const iconType = type === 'folder' ?  `folder${selected ? 'Open' : ""}` : type

    const handleClick = () => {
        setShowChildren(!showChildren);
        dispatch(selectNode(node)) 
    };

    return (
        <li className={classNames(`list-item`, {selected})}>
            <span onClick={handleClick} className="list-item-name">
                <NodeIcon type={iconType} compact/>
                <span>{name}</span>
            </span>
            {hasChildren && showChildren && <Tree data={children} /> }      
        </li>
    );
}

export default TreeNode;