export default function breakLines(str, cb) {
  return str.split('\n').map(cb)
}
