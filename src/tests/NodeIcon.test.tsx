import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store/store";
import NodeIcon, { NodeIconProps } from "../components/NodeIcon";

const getNodeIconElement = (args: NodeIconProps): Element => {
	const {container, debug} = render(<Provider store={store}><NodeIcon {...args}/></Provider>)
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