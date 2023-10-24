import React from "react";
import NodeIcon, { NodeIconProps } from "../components/NodeIcon";
import { renderWithStore } from "./wrapper";

const getNodeIconElement = (args: NodeIconProps): Element => {
	const {container} = renderWithStore(<NodeIcon {...args}/>)
	return container.getElementsByClassName('node-icon')[0]
}

describe("NodeIcon Component", () => {

	it("renders NodeIcon folder, not compact by default", () => {
		const type = 'folder'
		const element = getNodeIconElement({type});
		expect(element.classList).toContain(type);
		expect(element.classList).not.toContain('compact');
	});

	it("renders NodeIcon image, compact icon view", () => {
		const type = 'image'
		const element = getNodeIconElement({type, compact: true});
		expect(element.classList).toContain('image'); 
		expect(element.classList).toContain('compact'); 
	});

});