import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useSelectItem } from 'hooks/useSelectItem'

import EmptyPageList from './EmptyPageList'
import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import {
  EMPTY_PAGE_DECORATION_OPTIONS,
  EMPTY_PAGE_TEMPLATES_OPTIONS,
} from 'redux/optionsSlice/optionsStorage'
import styles from './EmptyPage.module.scss'

const EmptyPage: React.FC = () => {
  const { id } = useSelector(currentPageSelector)
  const { activeItem, setActiveItem, onSelectItem } = useSelectItem('')

  useEffect((): void => setActiveItem(''), [id, setActiveItem])

  return (
    <div className={styles.empty}>
      <div className={styles.description}>
        <p>
          Press Enter to continue with an empty page, or pick a template (↑↓ to
          select)
        </p>
      </div>
      <div>
        <EmptyPageList
          list={EMPTY_PAGE_DECORATION_OPTIONS}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
      </div>
      <div>
        <div className={styles.templatesTitle}>
          <span>Templates</span>
        </div>
        <EmptyPageList
          list={EMPTY_PAGE_TEMPLATES_OPTIONS}
          activeItem={activeItem}
          onSelect={onSelectItem}
        />
      </div>
    </div>
  )
}

export default EmptyPage
