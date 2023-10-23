import React from "react";
import { waitFor, screen, fireEvent } from "@testing-library/react";
import { mockedGetTree } from "../mocked/data";
import TreeNode from "../../components/Tree/TreeNode";
import { renderWithStore } from "../wrapper";

const treeNode = mockedGetTree[0];

const getChildren = (node: Element) => node.getElementsByClassName('list-item-name')
const getFolderElement = () => screen.getByText(treeNode.name)

describe("TreeNode Component", () => {

	it("renders TreeNode in the initial state", async () => {
		const {container} = renderWithStore(<TreeNode node={treeNode}/>);
	
		await waitFor(() => {
			const items = getChildren(container);
			expect(items).toBeTruthy();
			expect(items.length).toBe(1);
			const currentNode = items[0];
			expect(currentNode.textContent).toBe(treeNode.name);
			expect(currentNode.className).not.toContain('selected');
		});
	});

	it("renders TreeNode type folder with children collapsed/expanded by click", async () => {	
		const {container} = renderWithStore(<TreeNode node={treeNode}/>);

		await waitFor(async () => {
			const folder = getChildren(container);
			expect(folder).toBeTruthy();
			expect(folder.length).toBe(1);
			const currentNode = folder[0];
			expect(currentNode.textContent).toBe(treeNode.name);
		});

		// expand
		const folder = getFolderElement();
		fireEvent.click(folder);
		await waitFor(() => {
			expect(folder.closest('.list-item-name')?.className).toContain('selected');
			const children = getChildren(container);
			expect(children).toBeTruthy();
			expect(children.length).toBe(4);
			expect(screen.getByText(treeNode.name)).not.toBeNull();
			expect(screen.getByText(/image 1/i)).not.toBeNull();
			expect(screen.getByText(/doc 1/i)).not.toBeNull();
			expect(screen.getByText(/folder 1-1/i)).not.toBeNull();
		})

		// collapse
		fireEvent.click(folder);
		await waitFor(() => {
			const children1 = getChildren(container);
			expect(children1).toBeTruthy();
			expect(children1.length).toBe(1);
			expect(screen.getByText(treeNode.name)).not.toBeNull();
		})
	});
});