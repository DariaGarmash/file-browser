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
			<header className="header">
				<h1>File Browser</h1>
			</header>
			<section className="app-wrapper">
				<aside className="sidebar">
					<nav>
						{data && <Tree data={data}/>}
					</nav>
				</aside>
				<main className="inner-wrapper">
					<Viewer/>
				</main>
			</section>
		</>
	);
};

export default App;
