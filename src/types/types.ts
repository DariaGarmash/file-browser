type TTreeNodeType = "folder" | "doc" | "image";

export type TTreeNode = {
    id: string;
    name: string;
    type: TTreeNodeType;
    children?: TTreeNode[];
}

