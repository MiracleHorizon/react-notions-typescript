import { IOptionItem } from '../../../redux/optionsSlice/types'
import customizePage from '../../../assets/img/optionsImgs/customizePage.svg'
import lockPageSvg from '../../../assets/img/optionsImgs/lockPage.svg'
import unlockPageSvg from '../../../assets/img/optionsImgs/unlockPage.svg'
import pageHistorySvg from '../../../assets/img/optionsImgs/pageHistory.svg'
import addFavorite from '../../../assets/img/optionsImgs/star-favorite.svg'
import copyLinkSvg from '../../../assets/img/optionsImgs/copyLink.svg'
import DeleteTrashSVG from '../../SVG/DeleteTrash'

let isPageLock

const PAGE_CUSTOMIZE_OPTIONS: IOptionItem[] = [
  {
    title: 'Customize page',
    imgUrl: `${customizePage}`,
  },
  { title: 'Lock page', imgUrl: `${isPageLock ? lockPageSvg : unlockPageSvg}` },
]
const PAGE_CHANGES_OPTIONS: IOptionItem[] = [
  { title: 'Page history', imgUrl: `${pageHistorySvg}` },
  { title: 'Delete' },
]
const PAGE_SHARE_OPTIONS: IOptionItem[] = [
  { title: 'Add to Favorites', imgUrl: `${addFavorite}` },
  { title: 'Copy link', imgUrl: `${copyLinkSvg}` },
]

export {}
