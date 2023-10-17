import React, { FC, MouseEventHandler, MouseEvent } from "react";
import { TTreeNode } from "../../types/types";
import NodeIcon from "../Icon";
import { selected } from "../../store/slices/nodeSlice";
import { useDispatch } from "react-redux";

type NodeItemViewerProps = React.ComponentProps<'div'> & {
    node: TTreeNode,
};

const NodeItemViewer: FC<NodeItemViewerProps> = ({node}) => {
    const dispatch = useDispatch();

    const handleClick: MouseEventHandler<HTMLDivElement> = (e: MouseEvent) => {
        //e.stopPropagation();
        dispatch(selected(node))
    };

    return (
        <div className={`node-viewer ${node.type}`} onClick={handleClick}>
            <NodeIcon type={node.type} /> <span>{node.name}</span>
        </div>   
    );
}

export default NodeItemViewer;