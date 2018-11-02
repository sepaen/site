export default function winHeight() {
  return typeof window !== 'undefined' ? window.innerHeight : 0
}
