import styles from '../../components/QuickSearch/QuickSearch.module.scss'

const quickSearchClassNameHandler = (inputValue: string): string => {
  return inputValue === '' ? styles.root : styles.root + ' ' + styles.fullWidth
}

export default quickSearchClassNameHandler
