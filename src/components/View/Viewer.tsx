import React, { FC } from "react";
import { TTreeNode } from "../../types/types";
import NodeItemViewer from "./NodeItemViewer";
import { useNode } from "../../customHooks/useNode";
import { useSelector } from "react-redux";
import { TStore } from "../../store/store";


const NodeViewer: FC = () => {
    const selectedNode = useSelector<TStore, TTreeNode>((state: TStore) => state.node.selected);
    const {isFolder, hasChildren} = useNode(selectedNode)

    return (
        selectedNode.id === '' ? 
        <></> :
        <>
            {!isFolder && <NodeItemViewer node={selectedNode}/>}
            {hasChildren && selectedNode?.children?.map((node: TTreeNode) => (
                <NodeItemViewer node={node} key={node.id}/>
            ))}
        </>   
    );
}

export default NodeViewer;