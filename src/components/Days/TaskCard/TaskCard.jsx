import {MoreVertical, Trash2, X, Pencil} from "lucide-react";
import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteNote, editNote} from "src/store/tasksSlice.js";
import styles from './style.module.scss'
import TextareaAutosize from 'react-textarea-autosize';

const TaskCard = ({title, content, time, id}) => {
	const dispatch = useDispatch()
	const [isOpen, setIsOpen] = useState(false)
	const tasks = useSelector(state => state.tasks.tasks)
	const [isEdit, setIsEdit] = useState(false);
	const [currentTitle, setCurrentTitle] = useState(title);
	const [currentContent, setCurrentContent] = useState(content);
	useEffect(()=>{
		console.log(tasks)
	}, [tasks])
	const handleEdit = () => {
		setIsEdit(prevState => !prevState)
	}
	const handleTitle = (e) => {
		setCurrentTitle(e.target.value)
	}
	const handleContent = (e) => {
		setCurrentContent(e.target.value)
	}
	const handleOpen = () => {
		setIsOpen(prevState => !prevState)
	}
	
	const handleDeleteNote = (id) => {
		console.log(id)
		dispatch(deleteNote({id}))
	}
	
	const saveChanges = (noteId, title, content) => {
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
		dispatch(editNote({ id: noteId, newTitle: title, newContent: content, newTime: time }));
		handleEdit()
	}
	return (
		
		<div className={styles.taskCard}>
			
			<div className={styles.top}>
				
				{isEdit ?
					<TextareaAutosize
						value={currentTitle}
						className={styles.editTitle}
						onChange={handleTitle}
					/> :
					<h4 className={styles.taskTitle}>{title}</h4>
				}
				<MoreVertical className={styles.more} onClick={handleOpen}/>
			</div>
			<span className={styles.taskTime}>{time}</span>
			
			
			{isEdit ?
				<TextareaAutosize
					value={currentContent}
					className={styles.editContent}
					onChange={handleContent}
				/> :
				<p className={styles.taskContent}>{content}</p>
			}
			
			{
				isOpen && (
					<div className={styles.modal} onMouseLeave={handleOpen}>
						<div className={styles.options}>
							<span>Options</span>
							<X className={styles.icn} size={16} strokeWidth={1.5} onClick={handleOpen}/>
						</div>
						
						<div className={styles.list}>
							
							<div className={styles.edit} onClick={() => {
								handleEdit(id)
							}}>
								<Pencil size={18} strokeWidth={1.5}/>
								<span>Edit</span>
							</div>
							
							<div className={styles.delete} onClick={() => {
								handleDeleteNote(id)
							}}>
								<Trash2 size={18} strokeWidth={1.5}/>
								<span>Delete</span>
							</div>
						</div>
					</div>
				)
			}
			{isEdit && (
				<div className={styles.editButtons}>
					<span className={styles.cancelButton}>Cancel</span>
					<button type={"button"} className={styles.saveButton} onClick={()=>{saveChanges(id, currentTitle, currentContent)}}>Save</button>
				</div>
			)}
		
		</div>
	
	)
}
export default TaskCard