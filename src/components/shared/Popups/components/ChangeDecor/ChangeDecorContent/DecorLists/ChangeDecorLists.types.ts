import { ImgCover } from 'redux/reducers/pageDecorationSlice/types'

interface ITitle {
  title: string
}

interface IEmojiDecorations extends ITitle {
  content: string[]
}

interface ICoverDecorations extends ITitle {
  content: ImgCover[]
}

interface ChangeEmojiListsProps {
  decorations: IEmojiDecorations[]
}

interface ChangeCoverGalleryProps {
  decorations: ICoverDecorations[]
}

export default interface ChangeDecorListsProps {
  listTitle: 'Emoji' | 'Covers'
}
export type { ChangeEmojiListsProps, ChangeCoverGalleryProps }
