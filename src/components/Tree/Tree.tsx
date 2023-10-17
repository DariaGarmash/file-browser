import React, { FC } from "react";
import { TTreeNode } from "../../types/types";
import TreeNode from "./TreeNode";

type TreeProps = {
    data: TTreeNode[]
}

const Tree: FC<TreeProps> = ({data}) => {
    return (
        <ul className="list">
            {data.map((node: TTreeNode) => (
                <TreeNode node={node} key={node.id} />
            ))}
        </ul>
    );
}

export default Tree;