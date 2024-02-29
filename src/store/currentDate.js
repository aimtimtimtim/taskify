import {createSlice} from "@reduxjs/toolkit";


const initialState = {
	currentDate: new Date().getDate()
}

const currentDateSlice = createSlice({
	name: 'currentDate',
	initialState,
})

export default currentDateSlice.reducer