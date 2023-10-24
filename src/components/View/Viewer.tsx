import React, { FC } from "react";
import { TTreeNode } from "../../types/types";
import NodeItemViewer from "./NodeItemViewer";
import { useNode } from "../../customHooks/useNode";
import { TStore } from "../../store/store";
import { useAppSelector } from "../../store/hooks";
import { selectedNode } from "../../store/slices/nodeSlice";


const Viewer: FC = () => {
    const currentSelectedNode = useAppSelector(selectedNode);
    const {isFolder, hasChildren} = useNode(currentSelectedNode)

    return (
        currentSelectedNode.id === '' ? 
        <></> :
        <>
            {!isFolder && <NodeItemViewer node={currentSelectedNode}/>}
            {hasChildren && currentSelectedNode?.children?.map((node: TTreeNode) => (
                <NodeItemViewer node={node} key={node.id}/>
            ))}
        </>   
    );
}

export default Viewer;