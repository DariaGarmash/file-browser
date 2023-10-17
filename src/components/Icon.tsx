import React, { FC } from "react";
import { FaFileAlt, FaFileImage, FaFolder, FaFolderOpen } from "react-icons/fa";

type NodeIconProps = {
    type: string;
}

const NodeIcon: FC<NodeIconProps> = ({type}) => {
    
    const typeDocMap: Record<string, React.ReactNode> = {
        folder: <FaFolder />,
        folderOpen: <FaFolderOpen />,
        doc: <FaFileAlt />,
        image: <FaFileImage />
    };

    return (
        <span className={`node-icon ${type}`}> {typeDocMap[type]}</span>   
    );
}

export default NodeIcon;