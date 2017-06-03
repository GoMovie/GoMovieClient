export function getTimeStr (timeStamp) {
  let newDate = new Date()
  newDate.setTime(timeStamp)
  return newDate.toLocaleTimeString()
}

export function getDateStr (timeStamp) {
  let newDate = new Date()
  newDate.setTime(timeStamp)
  return newDate.toLocaleDateString().replace(/\//g, '-')
}

export function limitStrLen (str, len) {
  if (str.length > len) {
    return str.substr(str, len) + '...'
  } else {
    return str
  }
}
