import styles from '../../components/PageTemplates/Board/Board.module.scss'

interface Params {
  isSmallText: boolean
  isFullWidth: boolean
}

const boardClassNameHandler = (params: Params): string => {
  const { isSmallText, isFullWidth } = params
  const boardClassName: string = styles.board
  const textSize: string = ''
  const width: string = isFullWidth ? styles.fullWidth : styles.shortWidth
  let fontFamily: string = ''

  // if (isSmallText) {}
  // switch (fontFamily) {}

  return `${boardClassName} ${width} ${textSize} ${fontFamily}`
}

export default boardClassNameHandler
