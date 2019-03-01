import readableColor from 'polished/lib/color/readableColor'
import { colors } from '../system/theme'

export default function color(bg) {
  return readableColor(colors[bg] || bg)
}
