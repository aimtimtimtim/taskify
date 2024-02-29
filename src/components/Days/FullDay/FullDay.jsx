import {ChevronLeft, CircleFadingPlus} from "lucide-react";
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import TasksList from "src/components/Days/TasksList/TasksList.jsx";
import NewNote from "src/components/NewNote/NewNote.jsx";
import {openNewNote} from "src/store/isOpenNewNote.js";
import {setSelectedDay} from "src/store/selectedDay.js";
import styles from './style.module.scss'

const FullDay = () => {
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const {month, day} = useParams()
	const isOpenNewNote = useSelector(state => state.isOpenNewNote.isOpenNewNote)

	useEffect(() => {
		dispatch(setSelectedDay({day, month}))
	}, [day])
	
	const handleOpenNewNote = () => {
		dispatch(openNewNote())
	}
	
	const handleBack = () => {
		navigate(`/calendar/${month}`)
	}
	
	return (
		<div className={styles.fullDay}>
			<div className={styles.header}>
				<button
					className={styles.backBtn}
					onClick={() => {
						handleBack()
					}}>
					<ChevronLeft
						size={16}
						color="#ffffff"
						strokeWidth={1.5}/>
					<span>Back</span>
				</button>
				<span className={styles.date}>{day} {`${month.charAt(0).toUpperCase()}${month.slice(1)}`}</span>
				<button
					className={styles.addNewButton}
					onClick={() => {
						handleOpenNewNote()
					}}>
					<CircleFadingPlus color="#ffffff" strokeWidth={1.5}/>
					Note
				</button>
			</div>
			
			<TasksList handleOpenNewNote={handleOpenNewNote}/>
			{isOpenNewNote && (<NewNote handleOpenNewNote={handleOpenNewNote}/>)}
		</div>
	)
}
export default FullDay