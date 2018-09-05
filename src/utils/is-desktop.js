export default function isDesktop() {
  return typeof window !== 'undefined'
    ? window.matchMedia('screen and (min-width: 40em)').matches
    : true
}
