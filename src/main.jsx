import React from 'react'
import ReactDOM from 'react-dom/client'
import FullDay from "src/components/Days/FullDay/FullDay.jsx";
import Month from "src/components/Month/Month.jsx";
import Calendar from "./components/Calendar/Calendar.jsx";
import App from './App.jsx'
import './index.scss'

import {createBrowserRouter, Link, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([{
		path: '/',
		element: <App/>,
		errorElement: <div>
			<p>404 page not found</p>
			<Link to={'/calendar'}>Back</Link>
		</div>,
		children: [
			{
				
				path: 'calendar',
				element: <Calendar/>,
				children: [{
					path: ':month',
					element: <Month/>
				}]
			},
			{
				path: 'calendar/:month/:day',
				element: <FullDay/>
			},
		]
	}
	],
)

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}/>
	</React.StrictMode>
);