import React from "react";
import { waitFor, screen } from "@testing-library/react";
import { mockedGetTree } from "./mocked/data";
import { dataHandler } from '../service/dataHandler';
import { TTreeNode } from "../types/types";
import App from "../components/App";
import { renderWithStore } from "./wrapper";

// Mock the dataHandler service
jest.mock('../service/dataHandler');

beforeEach(() => {
	jest.clearAllMocks();
})

const loadingText = /loading.../i

describe("App Component", () => {

	const jestInstance: jest.Mock<Promise<TTreeNode[]>> = dataHandler.get as jest.Mock<Promise<TTreeNode[]>>;

	it("renders App component correctly", async () => {
		jestInstance.mockResolvedValueOnce(mockedGetTree);

		renderWithStore(<App/>);
		expect(screen.getByText(loadingText)).not.toBeNull();
	
		await waitFor(() => {
			expect(jestInstance.mock.calls).toHaveLength(1);
			expect(dataHandler.get).toHaveBeenCalledWith("tree");
			expect(screen.getByText(/file browser/i)).not.toBeNull();
			expect(screen.getByText(/folder 1/i)).not.toBeNull();
		});
		
	});

	it("renders error message when API call fails", async () => {
		const error = "API Error"
		jestInstance.mockRejectedValueOnce(new Error(error));

		renderWithStore(<App/>);
		expect(screen.getByText(loadingText)).not.toBeNull();

		await waitFor(() => {
			expect(dataHandler.get).toHaveBeenCalledTimes(1);
			expect(dataHandler.get).toHaveBeenCalledWith("tree");
			expect(screen.getByText(error)).not.toBeNull();
		});
	});
});