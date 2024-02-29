import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	tasks: [
	
	]
}

const tasksSlice = createSlice({
	name: 'tasks',
	initialState,
	reducers: {
		addNewNote(state, action){
			const {month, day, id, title, content, time} = action.payload
			const task = {
				month, day, id, title, content, time
			}
			state.tasks.push(task)
		},
		deleteNote(state, action){
			const {id} = action.payload
			state.tasks = state.tasks.filter(task => task.id !== id);
		},
		editNote(state, action){
			console.log('Hi')
			const {id, newTitle, newContent, newTime}= action.payload
			console.log(id, newTitle, newContent, newTime)
			const editedNoteIndex = state.tasks.findIndex(task=>task.id === id)
			if(editedNoteIndex !== -1){
				state.tasks[editedNoteIndex] = {
					...state.tasks[editedNoteIndex],
					title: newTitle,
					content: newContent,
					time: newTime
				}
			}
		}
	}
})

export const {addNewNote, deleteNote, editNote} = tasksSlice.actions
export default tasksSlice.reducer