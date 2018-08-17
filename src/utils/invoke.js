export default function invoke(obj, method, ...args) {
  if (typeof obj[method] === 'function') {
    return obj[method](...args)
  }
}
