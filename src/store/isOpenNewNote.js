import {createSlice} from "@reduxjs/toolkit";

const initialState = {
	isOpenNewNote: false
}

const isOpenNewNoteSlice = createSlice({
	name: 'isOpenNewNote',
	initialState,
	reducers: {
		openNewNote(state){
			state.isOpenNewNote = !state.isOpenNewNote;
		}
	}
})

export const {openNewNote} = isOpenNewNoteSlice.actions
export default isOpenNewNoteSlice.reducer