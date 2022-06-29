import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import QuickSearchModal from '../../../shared/ModalWindows/QuickSearch'
import classNameHandler from '../../../utils/helpers/optionItemClassNameHandler'
import { openQuickSearchModal } from '../../../redux/modalsSlice/slice'
import { quickSearchModalSelector } from '../../../redux/modalsSlice/selectors'
import searchSvg from '../../../assets/img/inputs/search.svg'
import updatesSvg from '../../../assets/img/optionsImgs/updates.svg'
import settingsSvg from '../../../assets/img/optionsImgs/settings.svg'
import styles from './UserBar.module.scss'

const UserBar: React.FC = () => {
  const dispatch = useDispatch()
  const isQuickSearchModalOpen = useSelector(quickSearchModalSelector)

  const onOpenQuickSearch = (): void => {
    dispatch(openQuickSearchModal())
  }

  return (
    <div className={styles.userBar}>
      <ul>
        <div
          className={classNameHandler('userBar')}
          onClick={onOpenQuickSearch}
        >
          <img src={searchSvg} alt='Option' />
          <span>Quick search</span>
        </div>
        <div className={classNameHandler('userBar')}>
          <img src={updatesSvg} alt='Option' />
          <span>All updates</span>
        </div>
        <div className={classNameHandler('userBar')}>
          <img src={settingsSvg} alt='Option' />
          <span>Settings & Members</span>
        </div>
      </ul>
      {isQuickSearchModalOpen && <QuickSearchModal />}
    </div>
  )
}

export default UserBar
