
import { TTreeNode } from "../types/types";
import _ from 'lodash'

type Item = Pick<TTreeNode, 'name' | 'children'>

export const sortData = <T extends Item>(data: Array<T>): Array<T> => {
    const deepCopy = _.cloneDeep(data);
    deepCopy.sort((a: T, b: T) => a.name.localeCompare(b.name, undefined, { sensitivity: 'base' }));
    
    deepCopy.forEach((node: T) => {
        if (node.children && node.children.length > 0) {
            node.children = sortData(node.children);
        }
    })

    return deepCopy;
}
    
   