import { PageFonts, TPageFont } from 'redux/types'

export default interface ToggleFontProps {
  title: string
  tooltipTitle: string
  selectedFont: TPageFont
  fontFamily: TPageFont
}
