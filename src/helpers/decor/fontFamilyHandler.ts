import { PageFonts, TPageFont } from 'redux/types'

const fontFamilyHandler = (selectedFont: TPageFont | string): string => {
  switch (selectedFont) {
    case 'Default':
      return PageFonts.DEFAULT
    case 'Serif':
      return PageFonts.SERIF
    case 'Mono':
      return PageFonts.MONO
    default:
      return PageFonts.DEFAULT
  }
}

export default fontFamilyHandler
