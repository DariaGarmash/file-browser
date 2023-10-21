import React, { FC } from "react";
import { TTreeNode } from "../../types/types";
import NodeIcon from "../NodeIcon";
import { useNode } from "../../customHooks/useNode";

type NodeItemViewerProps = {
    node: TTreeNode
};

const NodeItemViewer: FC<NodeItemViewerProps> = ({node}) => {

    const {onSelect} = useNode(node)

    return (
        <article className={`node-viewer ${node.type}`} onClick={onSelect}>
            <NodeIcon type={node.type} /> <span>{node.name}</span>
        </article>   
    );
}

export default NodeItemViewer;