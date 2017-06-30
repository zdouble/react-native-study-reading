const dateFormat = (date) => {
    let time = (Date.now() - new Date(date)) / 1000
    if (time / 60 < 1) {
        time = `${time}秒前`
    } else if (time / (60 * 60) < 1) {
        time = `${time / 60}分前`
    } else if (time / (60 * 60 * 24) < 1) {
        time = `${time / (60 * 60)}小时前`
    } else if (time / (60 * 60 * 24 * 30) < 1) {
        time = `${time / (60 * 60 * 24)}天前`
    } else if (time / (60 * 60 * 24 * 30 * 365) < 1) {
        time = `${time / (60 * 60 * 24 * 30)}月前`
    } else {
        time = `${time / (60 * 60 * 24 * 30 * 365)}年前`
    }
    return parseInt(time)
}

export {
    dateFormat
}
