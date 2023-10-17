import React, { FC, useEffect, useState } from "react";
import Tree from "./components/Tree/Tree";
import { TTreeNode } from "./types/types";
import Viewer from "./components/View/Viewer";
import { dataHandler } from "./utils/service/dataProvider";
import { sortData } from "./utils/utils";

export const App: FC = () => {  
  	const [data, setData] = useState<TTreeNode[]>([]);

	useEffect(() => {
		dataHandler.get<TTreeNode[]>('tree').then(data => setData(sortData(data)))
	}, [])

	return (
		<>
			<div className="header">
				<h1>File Browser</h1>
			</div>
			<div className="app-wrapper">
				<aside className="sidebar">
					{data && <Tree data={data}/>}
				</aside>
				<main className="inner-wrapper">
					<Viewer/>
				</main>
			</div>
		</>
	);
};

export default App;
