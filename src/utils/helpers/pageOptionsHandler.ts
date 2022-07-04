import { PageOptionsEnum } from 'redux/modalsSlice/types'

const pageOptionsHandler = (title: string) => {
  return title === 'Remove, rename'
    ? PageOptionsEnum.FAVORITES
    : PageOptionsEnum.COMMON
}

export default pageOptionsHandler
