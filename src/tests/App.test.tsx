import React from "react";
import { render, waitFor, screen, cleanup } from "@testing-library/react";
import { mockedGetTree } from "./mocked/data";
import { dataHandler } from '../service/dataHandler';
import { TTreeNode } from "../types/types";
import { Provider } from "react-redux";
import store from "../store/store";
import App from "../components/App";

const renderApp = () => {
    return <Provider store={store}><App/></Provider>;
}

// Mock the dataHandler service
jest.mock('../service/dataHandler');

beforeAll(() => {
	jest.clearAllMocks();
})
afterAll(cleanup)

describe("App Component", () => {

	const jestInstance: jest.Mock<Promise<TTreeNode[]>> = (dataHandler.get as unknown as jest.Mock<Promise<TTreeNode[]>>);

	it("renders App component correctly", async () => {
		jestInstance.mockResolvedValueOnce(mockedGetTree);

		render(renderApp());
		expect(screen.getByText("Loading...")).not.toBeNull();
	
		await waitFor(() => {
			expect(jestInstance.mock.calls).toHaveLength(1);
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