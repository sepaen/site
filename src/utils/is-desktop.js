export default function isDesktop() {
  return window
    ? window.matchMedia('screen and (min-width: 40em)').matches
    : true
}
