export default function breakLines(str, cb) {
  return str ? str.split('\n').map(cb) : []
}
