


const UnixToDate = unixInfo => {
    
    const date = new Date(unixInfo * 1000)

    const day = date.getDay()<10? "0" + date.getDay(): date.getDay()
    const month = date.getMonth()<10? "0" + date.getMonth(): date.getMonth()
    const year = date.getFullYear()
    const second = date.getSeconds()<10? "0" + date.getSeconds(): date.getSeconds()
    const minute = date.getMinutes()<10? "0" + date.getMinutes(): date.getMinutes()
    const hour = date.getHours()<10? "0" + date.getHours(): date.getHours()

    const dateObj = {
        day: day,
        month: month,
        year: year,
        second: second,
        minute: minute,
        hour: hour,
        fullDate: day + ":" +  month + ":" + year,
        fullTime: hour + ":" + minute + ":" + second
    }

    return dateObj;
}



export {UnixToDate}