import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	currentMonth: new Date().getMonth()
}

const currentMonthSlice = createSlice({
	name: 'currentMonth',
	initialState,
})

export default currentMonthSlice.reducer