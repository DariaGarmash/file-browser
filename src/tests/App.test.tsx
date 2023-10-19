import React from "react";
import { render, waitFor, screen, act } from "@testing-library/react";
import App from "../App";
import { Provider } from "react-redux";
import store from "../store/store";
import { mockedGetTree } from "./mocked/data";
import { dataHandler } from '../service/dataHandler';
import { TTreeNode } from "../types/types";

// Mock the dataHandler service
jest.mock('../service/dataHandler');

describe("App Component", () => {

	const jestInstance = (dataHandler.get as jest.Mock<Promise<TTreeNode[]>>)

	beforeAll(() => {
		jestInstance.mockClear();
	})
  
	it("renders App component correctly", async () => {
		jestInstance.mockResolvedValueOnce(mockedGetTree);

		const {getByText} = render(
			<Provider store={store}>
				<App />
			</Provider>
		);
		expect(screen.getByText("Loading...")).not.toBeNull();
	
		await waitFor(() => {
			expect(dataHandler.get).toHaveBeenCalledWith("tree");
			expect(getByText("File Browser")).not.toBeNull();
			expect(getByText("Folder 1")).not.toBeNull();
		});
	});

	it("renders error message when API call fails", async () => {
		const error = "API Error"
		jestInstance.mockRejectedValueOnce(new Error(error));

		const { getByText } = render(<Provider store={store}><App/> </Provider>);
		//expect(getByText("Loading...")).not.toBeNull();

		await waitFor(() => {
			expect(dataHandler.get).toHaveBeenCalledWith("tree");
			expect(getByText(error)).not.toBeNull();
		});
	});
});