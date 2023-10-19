import React, { FC, MouseEventHandler, MouseEvent } from "react";
import { TTreeNode } from "../../types/types";
import NodeIcon from "../Icon";
import { selectNode } from "../../store/slices/nodeSlice";
import { useDispatch } from "react-redux";

type NodeItemViewerProps = {
    node: TTreeNode,
};

const NodeItemViewer: FC<NodeItemViewerProps> = ({node}) => {
    const dispatch = useDispatch();

    const handleClick: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
        dispatch(selectNode(node))
    };

    return (
        <article className={`node-viewer ${node.type}`} onClick={handleClick}>
            <NodeIcon type={node.type} /> <span>{node.name}</span>
        </article>   
    );
}

export default NodeItemViewer;