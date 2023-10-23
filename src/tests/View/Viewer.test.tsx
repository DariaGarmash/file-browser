import React from 'react'
import { mockedGetTree } from '../mocked/data';
import Viewer from '../../components/View/Viewer';
import { fireEvent, screen, waitFor } from '@testing-library/react';
import { renderWithStore } from '../wrapper';
import { useAppDispatch, useAppSelector } from '../../store/hooks';

jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useDispatch: jest.fn(),
	useSelector: jest.fn(),
}));

const mockDispatch = useAppDispatch as jest.Mock;
const mockUseSelector = useAppSelector as jest.Mock;

const preSelected =  mockedGetTree[2]

describe("NodeViewer Component", () => {

	beforeEach(() => {
		jest.clearAllMocks()
	  })

	it("renders only children for selected folder node", async () => {
		mockUseSelector.mockReturnValue(preSelected); 

		renderWithStore(<Viewer />);
	
		await waitFor(() => {
			expect(screen.getByText(/doc 2-1/i)).not.toBeNull();
			expect(screen.getByText(/image 2-1/i)).not.toBeNull();
			expect(screen.getByText(/folder nested/i)).not.toBeNull();
			
			// folder is not rendered
			expect(screen.queryByText(/folder 2/i)).toBeNull();
		});
	});

	it("calling dispatch action for selected node", async () => {
		const mockedDispatch = jest.fn()
		mockDispatch.mockReturnValue(mockedDispatch); 

		renderWithStore(<Viewer />);
	
		await waitFor(() => {
			const node = screen.getByText(/folder nested/i)
			expect(node).not.toBeNull();
			fireEvent.click(node)
			
			expect(mockedDispatch).toHaveBeenCalled();
		});
	});
});