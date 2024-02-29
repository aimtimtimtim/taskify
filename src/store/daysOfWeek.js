import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	daysOfWeek: [
		{ day: 1, name: "Monday" },
		{ day: 2, name: "Tuesday" },
		{ day: 3, name: "Wednesday" },
		{ day: 4, name: "Thursday" },
		{ day: 5, name: "Friday" },
		{ day: 6, name: "Saturday" },
		{ day: 0, name: "Sunday" }
	]
	
	
}

const daysOfWeek = createSlice({
	name: 'daysOfWeek',
	initialState,
	reducers:{}
})

export default daysOfWeek.reducer