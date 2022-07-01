import React from 'react'
import QuickSearch from '../../../components/Popups/QuickSearch/QuickSearch'
import styles from './QuickFindModal.module.scss'

const QuickSearchModal: React.FC = () => (
  <div className={styles.modal}>
    <QuickSearch />
    <div className={styles.modal2} />
  </div>
)
export default QuickSearchModal
