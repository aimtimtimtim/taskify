import './App.scss'
import React from "react";
import {Provider} from "react-redux";
import {Outlet} from "react-router-dom";

import Sidebar from "./components/Sidebar/Sidebar.jsx";
import store from './store/store.js'

function App() {
	return (
		<Provider store={store}>
			<div className='home'>
				<Sidebar/>
				<Outlet/>
			</div>
		</Provider>);
}

export default App
