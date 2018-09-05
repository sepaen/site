export default function isDesktop() {
  return window.matchMedia('screen and (min-width: 40em)').matches
}
