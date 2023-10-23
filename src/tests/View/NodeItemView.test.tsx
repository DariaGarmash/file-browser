import React from 'react';
import { mockedGetTree } from '../mocked/data';
import NodeItemViewer from '../../components/View/NodeItemViewer';
import { screen } from '@testing-library/react';
import { renderWithStore } from '../wrapper';

const preSelected =  mockedGetTree[1]

describe("NodeItemViewer Component", () => {

	it("renders NodeItemViewer for selected node taken from store", async () => {
		renderWithStore(<NodeItemViewer node={preSelected}/>, {
			preloadedState: {
				node: {selected: preSelected}
			}
		});
	
		expect(screen.getByText(/image 2/i)).not.toBeNull();
	});
});