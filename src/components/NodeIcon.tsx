import classNames from "classnames";
import React, { FC } from "react";
import { FaFileImage, FaFilePdf, FaFolder, FaFolderOpen } from "react-icons/fa";
import { TTreeNodeType } from "../types/types";


export type TNodeIconKey = TTreeNodeType | 'folderOpen';

type TTypeDocMap = {
    [key in TNodeIconKey]: React.ReactNode;
}

const typeDocMap: TTypeDocMap = {
    folder: <FaFolder />,
    folderOpen: <FaFolderOpen />,
    doc: <FaFilePdf />,
    image: <FaFileImage />
}

export type NodeIconProps = {
    type: TNodeIconKey;
    compact?: boolean;
}

const NodeIcon: FC<NodeIconProps> = ({type, compact = false}) => {
    
    const iconType = typeDocMap[type]

    return (
        <span className={classNames(`node-icon ${type}`, {compact})}>
            {iconType}
        </span>   
    );
}

export default NodeIcon;