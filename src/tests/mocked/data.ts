import { TTreeNode } from "../../types/types";

export const mockedGetTree: TTreeNode[] = [
    { 
        id: "1", 
        name: "Folder 1", 
        type: "folder", 
        children: [
            { 
                id: "3", 
                name: "Image 1-1", 
                type: "image"
            },
            { 
                id: "4", 
                name: "Image 1-2", 
                type: "doc"
            },
            { 
                id: "5", 
                name: "Folder 1-1", 
                type: "folder"
            }
        ]
    },
    { 
        id: "6", 
        name: "Image 1", 
        type: "image"
    }
]