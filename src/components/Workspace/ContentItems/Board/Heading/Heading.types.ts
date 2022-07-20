import ContentItemProps from '../ContentItem.types'
import { ItemStyles } from '../Text/TextItem.types'

export type THeadingLevel = '1' | '2' | '3'

export default interface HeadingProps extends ContentItemProps {
  headingLevel: THeadingLevel
}

export interface HeadingParams {
  parentHeight: string
  height: string
  marginTop: string
  fontSize: string
}

export interface HeadingContainerProps extends ItemStyles {
  params: HeadingParams
}
