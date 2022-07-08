import { CoverColors } from 'redux/workSpaceSlice/types'

interface ITitle {
  title: string
}

interface IEmojiDecorations extends ITitle {
  content: string[]
}

interface ICoverDecorations extends ITitle {
  content: string[] | CoverColors[]
}

export default interface Props {
  decorations: IEmojiDecorations[] | ICoverDecorations[]
}
