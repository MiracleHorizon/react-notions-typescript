import styles from '../../components/OptionsList/OptionItem/OptionItem.module.scss'

const optionItemClassNameHandler = (
  className: string = 'workspace'
): string => {
  switch (className) {
    case 'userBar':
      return `${styles.item} ${styles.userBar}`
    case 'workspace':
      return `${styles.item} ${styles.workspace}`
    default:
      return `${styles.item}`
  }
}

export default optionItemClassNameHandler
