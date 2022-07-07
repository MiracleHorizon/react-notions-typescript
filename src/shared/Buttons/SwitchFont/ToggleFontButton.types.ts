import { PageFontFamilies } from 'redux/workSpaceSlice/types'

export default interface ToggleFontProps {
  title: string
  tooltipTitle: string
  activeFont: string
  fontFamily: PageFontFamilies
}
