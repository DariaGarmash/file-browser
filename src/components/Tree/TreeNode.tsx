import React, { FC, useState, MouseEvent, useEffect } from "react";
import { TTreeNode } from "../../types/types";
import Tree from "./Tree";
import NodeIcon, { TNodeIconKey } from "../NodeIcon";
import classNames from "classnames";
import { useNode } from "../../customHooks/useNode";

type TreeNodeProps = {
    node: TTreeNode;
}

const TreeNode: FC<TreeNodeProps> = ({node}) => {
    const {hasChildren, selected, onSelect} = useNode(node);
    const iconType: TNodeIconKey = node.type === 'folder' ?  `folder${selected ? 'Open' : ""}` : node.type

    const [showChildren, setShowChildren] = useState(selected);

    const clickHandler = (e: MouseEvent) => {
        e.stopPropagation();
        setShowChildren(!showChildren)
        onSelect(e)
    }

    useEffect(() => {
        if(selected){
            setShowChildren(true)
        }
    }, [selected])

    return (
        <li className="list-item">
            <span onClick={clickHandler}  className={classNames(`list-item-name`, {selected})}>
                <NodeIcon type={iconType} compact/>
                <span>{node.name}</span>
            </span>
            {hasChildren && showChildren && node.children && <Tree data={node.children} /> }      
        </li>
    );
}

export default TreeNode;