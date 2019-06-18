const formatDate = (date) => {
    let newDate = ''
    let d = new Date()
    let y = d.getFullYear()
    newDate = newDate + y + '-'
    let m = (d.getMonth() + 1)
    m = (m < 10) ? m = '0' + m : m
    newDate = newDate + m + '-'
    let day = d.getDate()
    day = (day < 10) ? '0' + day : day
    newDate += day + ' '
    let h = d.getHours()
    h = (h < 10) ? '0' + h : h
    newDate += h + ':'
    let min = d.getMinutes()
    min = (min < 10) ? '0' + min : min
    newDate += min + ':'
    let sec = d.getSeconds()
    sec = (sec < 10) ? '0' + sec : sec
    newDate += sec
    return newDate
}

const aaa = () => {
    return 222
}

export default {
    formatDate,
    aaa
}