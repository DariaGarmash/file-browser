import { render, waitFor, screen } from "@testing-library/react";
import { mockedGetTree } from "./mocked/data";
import { dataHandler } from '../service/dataHandler';
import { TTreeNode } from "../types/types";
import { renderApp } from "./helper";

// Mock the dataHandler service
jest.mock('../service/dataHandler');

describe("App Component", () => {

	const jestInstance = (dataHandler.get as jest.Mock<Promise<TTreeNode[]>>)

	beforeAll(() => {
		jestInstance.mockClear();
	})
  
	it("renders App component correctly", async () => {
		jestInstance.mockResolvedValueOnce(mockedGetTree);

		render(renderApp());
		expect(screen.getByText("Loading...")).not.toBeNull();
	
		await waitFor(() => {
			expect(dataHandler.get).toHaveBeenCalledTimes(1);
			expect(dataHandler.get).toHaveBeenCalledWith("tree");
			expect(screen.getByText("File Browser")).not.toBeNull();
			expect(screen.getByText("Folder 1")).not.toBeNull();
		});
	});

	it("renders error message when API call fails", async () => {
		const error = "API Error"
		jestInstance.mockRejectedValueOnce(new Error(error));

		render(renderApp());
		expect(screen.getByText("Loading...")).not.toBeNull();

		await waitFor(() => {
			expect(dataHandler.get).toHaveBeenCalledTimes(1);
			expect(dataHandler.get).toHaveBeenCalledWith("tree");
			expect(screen.getByText(error)).not.toBeNull();
		});
	});
});