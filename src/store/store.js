import {configureStore} from "@reduxjs/toolkit";
import monthsReducer from './monthsSlice.js'
import daysOfWeekReducer from './daysOfWeek.js'
import selectedDayReducer from './selectedDay.js'
import currentDateReducer from './currentDate.js'
import currentMonthReducer from  './currentMonth.js'
import currentDayOfWeekReducer from  './currentDayOfWeek.js'
import tasksSliceReducer from  './tasksSlice.js'
import isOpenNewNoteSliceReducer from  './isOpenNewNote.js'

const store = configureStore({
	reducer: {
		months: monthsReducer,
		daysOfWeek: daysOfWeekReducer,
		selectedDay: selectedDayReducer,
		currentDate: currentDateReducer,
		currentDayOfWeek: currentDayOfWeekReducer,
		currentMonth: currentMonthReducer,
		tasks: tasksSliceReducer,
		isOpenNewNote: isOpenNewNoteSliceReducer
		
	}
})

export default store