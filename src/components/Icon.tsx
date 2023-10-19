import classNames from "classnames";
import React, { FC } from "react";
import { FaFileImage, FaFilePdf, FaFolder, FaFolderOpen } from "react-icons/fa";

type NodeIconProps = {
    type: string;
    compact?: boolean;
}

const NodeIcon: FC<NodeIconProps> = ({type, compact = false}) => {
    
    const typeDocMap: Record<string, React.ReactNode> = {
        folder: <FaFolder />,
        folderOpen: <FaFolderOpen />,
        doc: <FaFilePdf />,
        image: <FaFileImage />
    };

    return (
        <span className={classNames(`node-icon ${type}`, {compact})}>{typeDocMap[type]}</span>   
    );
}

export default NodeIcon;