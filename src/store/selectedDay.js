import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	selectedDay: {
		day: '',
		mnth: ''
	}
	
	
}

const selectedDay = createSlice({
	name: 'selectedDay', initialState,
	reducers: {
		setSelectedDay(state, action){
			const {day, month} = action.payload
			state.selectedDay.day = day
			state.selectedDay.month = month
		}
	}
})

export const {setSelectedDay} = selectedDay.actions
export default selectedDay.reducer