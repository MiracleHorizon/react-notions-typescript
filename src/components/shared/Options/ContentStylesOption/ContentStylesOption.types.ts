export interface OptionStyles {
  textColor?: string
  background?: string
}

export default interface ContentStylesOptionProps extends OptionStyles {
  title: string
  destination: 'color' | 'background'
  itemIndex: number
}
