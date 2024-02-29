const calendarForRender = (daysInMonth, firstDay) => {
	const emptyDays = Array.from({length: firstDay - 1}, (_, i)=> {
		return null
	})
	const days = Array.from({length: daysInMonth}, (_, i)=> i + 1)
	return [...emptyDays, ...days]
	
}
export default calendarForRender