import React, { FC } from "react";
import { TTreeNode } from "../../types/types";
import NodeItemViewer from "./NodeItemViewer";
import { useSelector } from "react-redux";
import { TStore } from "../../store/store";


const NodeViewer: FC = () => {
    const selectedNode = useSelector<TStore, TTreeNode>((state: TStore) => state.node.selected);
    const hasChildren = selectedNode.children != null && selectedNode.children.length > 0;

    return (
        <section>
            {!hasChildren && <NodeItemViewer node={selectedNode} />}
            {hasChildren && selectedNode?.children?.map((node: TTreeNode) => (
                <NodeItemViewer node={node} key={node.id} />
            ))}
        </section>   
    );
}

export default NodeViewer;