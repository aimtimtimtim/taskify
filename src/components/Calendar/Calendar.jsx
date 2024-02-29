import React, {useEffect, useState} from 'react';
import {ChevronRight, ChevronLeft} from 'lucide-react';
import {useSelector} from "react-redux";
import {Outlet, useNavigate, useParams} from "react-router-dom";
import DaysOfWeek from "src/components/DaysOfWeek/DaysOfWeek.jsx";
import calendarForRender from "src/utils/daysForRender.js";


import styles from './styles.module.scss'


const Calendar = () => {
	const navigate = useNavigate()
	const {month} = useParams()
	const months = useSelector(state => (state.months.months))
	const currentMonth = new Date().getMonth()
	const [monthToChange, setMonthToChange] = useState(currentMonth)
	const firstDayOfMonth = new Date(2024, monthToChange, 1).getDay()
	const calendarDays = calendarForRender(months[monthToChange].days, firstDayOfMonth)
	const currentDayOfWeek = new Date().getDay();
	
	
	useEffect(() => {
		const mnths = months.map(month => month.name.toLowerCase());
		if (month !== months[monthToChange].name.toLowerCase()) {
			const newMonthIndex = mnths.indexOf(month);
			setMonthToChange(newMonthIndex);
		}
	}, [month, months, monthToChange]);
	


	
	


	
	const handleNextMonth = () => {
		if (monthToChange < 11) {
			navigate(`/calendar/${months[monthToChange + 1].name.toLowerCase()}`)
			setMonthToChange(prevMonth => prevMonth + 1)
		}
	}
	const handlePrevMonth = () => {
		if (monthToChange > 0) {
			navigate(`/calendar/${months[monthToChange - 1].name.toLowerCase()}`)
			setMonthToChange(prevMonth => prevMonth - 1)
		}
	}
	

	
	
	return (
		<div className={styles.calendar}>
			<div className={styles.header}>
				<button
					className={`${styles.button} ${monthToChange === 0 ? styles.disabled : ''}`}
					onClick={() => {
						handlePrevMonth()
					}}><ChevronLeft/>
				</button>
				
				<span className={styles.month}>{months[monthToChange].name}, 2024</span>
				
				<button
					className={`${styles.button} ${monthToChange === 11 ? styles.disabled : ''}`}
					onClick={() => {
						handleNextMonth()
					}}><ChevronRight/>
				</button>
			</div>
			<Outlet context={[calendarDays, monthToChange]}/>
			<DaysOfWeek currentDayOfWeek={currentDayOfWeek}/>
		</div>);
};

export default Calendar;
