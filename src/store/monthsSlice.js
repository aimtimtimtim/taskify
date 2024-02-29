import {createSlice} from "@reduxjs/toolkit";
import getDaysInMonth from "../utils/daysInMonth.js";

const initialState = {
	months: [
		{
			name: "January",
			days: 31,
			date: []
		},
		{
			name: "February",
			days: getDaysInMonth(1, 2024),
			date: []// 29 в високосном году
		},
		{
			name: "March",
			days: 31,
			date: []
		},
		{
			name: "Aprel",
			days: 30,
			date: []
		},
		{
			name: "May",
			days: 31,
			date: []
		},
		{
			name: "June",
			days: 30,
			date: []
		},
		{
			name: "July",
			days: 31,
			date: []
		},
		{
			name: "August",
			days: 31,
			date: []
		},
		{
			name: "September",
			days: 30,
			date: []
		},
		{
			name: "October",
			days: 31,
			date: []
		},
		{
			name: "November",
			days: 30,
			date: []
		},
		{
			name: "December",
			days: 31,
			date: []
		},
	]
}

const monthsSlice = createSlice({
	name: 'month',
	initialState,
})

export default monthsSlice.reducer