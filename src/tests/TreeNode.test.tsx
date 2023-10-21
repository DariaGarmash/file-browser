import React from "react";
import { render, waitFor, screen, cleanup, fireEvent } from "@testing-library/react";
import { mockedGetTree } from "./mocked/data";
import { Provider } from "react-redux";
import store from "../store/store";
import TreeNode from "../components/Tree/TreeNode";

const treeNode = mockedGetTree[0];
const treeNodeComponent = <Provider store={store}><TreeNode node={treeNode}/></Provider>

const getChildren =(node: Element) => node.getElementsByClassName('list-item-name')
const getFolderElement = () => screen.getByText(treeNode.name)

afterAll(cleanup)

describe("TreeNode Component", () => {

	it("renders TreeNode in the initial state", async () => {
		const {container} = render(treeNodeComponent);
	
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
		const {container} = render(treeNodeComponent)

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
			expect(screen.getByText('Image 1')).not.toBeNull();
			expect(screen.getByText('Doc 1')).not.toBeNull();
			expect(screen.getByText('Folder 1-1')).not.toBeNull();
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