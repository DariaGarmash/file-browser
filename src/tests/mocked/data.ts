import { TTreeNode } from "../../types/types";

export const mockedGetTree: TTreeNode[] = [
    { 
        id: "1", 
        name: "Folder 1", 
        type: "folder", 
        children: [
            { 
                id: "3", 
                name: "Image 1", 
                type: "image"
            },
            { 
                id: "4", 
                name: "Doc 1", 
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
        name: "Image 2", 
        type: "image"
    },
    { 
        id: "7", 
        name: "Folder 2", 
        type: "folder", 
        children: [
            { 
                id: "8", 
                name: "Image 2-1", 
                type: "image"
            },
            { 
                id: "9", 
                name: "Doc 2-1", 
                type: "doc"
            },
            { 
                id: "10", 
                name: "Folder nested", 
                type: "folder"
            }
        ]
    },
]