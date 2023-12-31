import React, { FC, useEffect, useState } from "react";
import Tree from "./Tree/Tree";
import { TTreeNode } from "../types/types";
import Viewer from "./View/Viewer";
import { dataHandler } from "../service/dataHandler";
import { sortData } from "../utils/utils";

export const App: FC = () => {  
  	const [data, setData] = useState<TTreeNode[] | null>(null);
  	const [error, setError] = useState("");

	useEffect(() => {
		if(data == null){
			dataHandler.get<TTreeNode[]>('tree')
				.then(data => setData(sortData(data)))
				.catch(e => {
					setError(e.message)
				})
		}
	}, [data])

	const errorNode = <section className="error"><p>{error}</p></section>
	const browserNode = <>
		<aside className="sidebar">
			<nav>
				{data != null ? <Tree data={data}/> : <p>Loading...</p>}
			</nav>
		</aside>
		<main className="inner-wrapper">
			<Viewer/>
		</main>
	</>

	return (
		<>
			<header className="header">
				<h1>File Browser</h1>
			</header>
			<section className="app-wrapper">
				{error !== '' ? errorNode : browserNode}
			</section>
		</>
	);
};

export default App;
