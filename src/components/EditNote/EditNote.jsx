import {nanoid} from "@reduxjs/toolkit";
import {XCircle, AlertCircle} from "lucide-react";
import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {useParams} from "react-router-dom";
import styles from "./styles.module.scss";
import {addNewNote} from 'src/store/tasksSlice.js'

const EditNote = ({handleOpenNewNote}) => {
	const dispatch = useDispatch()
	const params = useParams()
	const [title, setTitle] = useState('')
	const [titleError, setTitleError] = useState({message: '', error: false})
	const [content, setContent] = useState('')
	const [contentError, setContentError] = useState({message: '', error: false})
	
	const handleTitle = (e) => {
		setTitleError({message: '', error: false})
		setTitle(e.target.value)
	}
	const handleCloseModal = () => {
		handleOpenNewNote();
	};
	
	const handleFormClick = (event) => {
		event.stopPropagation(); // Остановить всплытие события
	};
	
	const createNewNote = (month, day, title, content) => {
		const getTime = () => {
			const hours = new Date().getHours();
			const minutes = new Date().getMinutes();
			let time = `${hours}:${minutes}`;
			if (minutes < 10) {
				time = `${hours}:0${minutes}`;
			}
			return time;
		}
		
		const time = getTime()
		const id = nanoid()
		if (title.trim().length === 0) {
			setTitleError({message: 'Field must be  filled', error: true})
			console.log(titleError)
		} else if (content.trim().length === 0) {
			setContentError({message: 'Field must be  filled', error: true})
		} else {
			dispatch(addNewNote({month, day, id, title, content, time}))
			handleOpenNewNote()
		}
	}
	
	
	return (
		<div className={styles.blur} onClick={() => {
			handleOpenNewNote()
		}}>
			<form className={styles.newNote} onClick={handleFormClick}>
				<div className={styles.top}>
					<h3 className={styles.title}>New note</h3>
					<XCircle className={styles.close} onClick={() => {
						handleCloseModal()
					}}/>
				</div>
				<label className={styles.label}>Title</label>
				<input
					className={styles.input}
					placeholder={'Start here'}
					onChange={handleTitle}/>
				
				{titleError.error && (
					<span className={styles.errMessage}>
						<AlertCircle size={16} strokeWidth={1.5}/>
						{titleError.message}
					</span>
				)}
				
				<label className={styles.label}>Body</label>
				<textarea
					className={styles.textArea}
					placeholder={'Your story'}
					onChange={(e) => setContent(e.target.value)}/>
				
				{contentError.error && (
					<span className={styles.errMessage}>
						<AlertCircle size={16} strokeWidth={1.5}/>
						{contentError.message}
					</span>
				)}
				
				<button type={'button'} className={styles.addButton} onClick={() => {
					createNewNote(params.month, parseInt(params.day), title, content,)
				}}>Add
				</button>
			</form>
		</div>
	);
};

export default EditNote;
