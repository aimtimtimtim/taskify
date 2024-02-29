import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import TaskCard from "src/components/Days/TaskCard/TaskCard.jsx";
import styles from './style.module.scss'

const TasksList = ({handleOpenNewNote}) => {
	const {day, month} = useParams()
	const tasks = useSelector(state => state.tasks.tasks)
	const [currentTasks, setCurrentTasks] = useState([])
	
	useEffect(() => {
		const filtered = tasks.filter(task => task.day === parseInt(day) && task.month === month)
		setCurrentTasks(prevState => filtered)
	}, [tasks])
	
	if (currentTasks.length === 0) {
		return (
			<div className={styles.empty}>
				<h2>You don't have any note</h2>
				<span onClick={() => {handleOpenNewNote()}}>Create one</span>
			</div>)
	}
	return (
		
		<div className={styles.taskList}>
			{currentTasks.map((task) => (
				<TaskCard
					key={task.id}
					id={task.id}
					title={task.title}
					content={task.content}
					time={task.time}/>
			))}
		</div>)
	
	
}
export default TasksList