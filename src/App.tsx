import React, { FC, useEffect, useState } from "react";
import Tree from "./components/Tree/Tree";
import { TTreeNode } from "./types/types";
import Viewer from "./components/View/Viewer";
import { dataHandler } from "./service/dataHandler";
import { sortData } from "./utils/utils";

export const App: FC = () => {  
  	const [data, setData] = useState<TTreeNode[] | null>(null);
  	const [error, setError] = useState("");

	useEffect(() => {
		
		dataHandler.get<TTreeNode[]>('tree')
			.then(data => setData(sortData(data)))
			.catch(e => {
				setError(e.message)
			})
	}, [])

	return (
		<>
			<header className="header">
				<h1>File Browser</h1>
			</header>
			<section className="app-wrapper">
				<aside className="sidebar">
					{error !== '' ? 
						<p>{error}</p> :
						<nav>
							{data != null ? <Tree data={data}/> : <p>Loading...</p>}
						</nav>
					}
				</aside>
				<main className="inner-wrapper">
					<Viewer/>
				</main>
			</section>
		</>
	);
};

export default App;
