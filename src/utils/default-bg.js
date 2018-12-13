export const colorList = [
  'white',
  'darkgray',
  'lightgray',
  'lightbrown',
  'brown'
]

export default function defaultBG(index) {
  return colorList[index % colorList.length]
}
