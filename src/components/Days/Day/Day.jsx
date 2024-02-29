import React, {useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import styles from './style.module.scss'
import {Plus} from 'lucide-react';
import {setSelectedDay} from 'src/store/selectedDay.js'


const Day = React.memo(({dayInCalendar, monthToChange}) => {

	const navigate = useNavigate()
	const dispatch = useDispatch()
	
	const currentDate = useSelector(state => (state.currentDate.currentDate))
	const currentMonth = useSelector(state => (state.currentMonth.currentMonth))
	const months = useSelector(state => (state.months.months))
	
	
	const tasks = useSelector(state => state.tasks.tasks)
	const [currentTasks, setCurrentTasks] = useState([])
	
	useEffect(() => {
		const filtered = tasks.filter(task => task.day === dayInCalendar && task.month === months[monthToChange].name.toLowerCase())
		setCurrentTasks(filtered)
	}, [tasks, dayInCalendar, monthToChange])

	const [hovered, setHovered] = useState(false)
	
	const isToday = currentDate === dayInCalendar && monthToChange === currentMonth
	const handleHover = () => {
		setHovered(!hovered)
	}
	
	const selectDay = useCallback(
		(day, month) => {
			dispatch(setSelectedDay({day, month}))
			const monthPath = month.toLowerCase()
			navigate(`/calendar/${monthPath}/${day}`)
		}, [dispatch, navigate]);
	
	
	return (
		<div
			className={`${styles.day} ${isToday && styles.today}`}
			onClick={() => {
				selectDay(dayInCalendar, months[monthToChange].name)
			}}
			onMouseEnter={handleHover}
			onMouseLeave={handleHover}>
			
			<div className={styles.dayTop}>
                <span
					className={`${styles.date} ${isToday && styles.currentDate}`}>
                    {dayInCalendar}
                </span>
				
				{isToday && <span className={styles.todayBadge}>Today</span>}
			
			
			</div>
			
			<div className={`${styles.add} ${hovered ? styles.visible : ''}`}>
				<Plus size={40} strokeWidth={1} color="#BDBDBD"/>
			</div>
			<div className={styles.notes}>
				{currentTasks.map((i) => (
					<span key={i} className={styles.note}></span>
				))}
			
			</div>
		</div>);
});

export default Day;
