import React, { useState } from 'react'

import EmptyPageList from './EmptyPageList'
import {
  EMPTY_PAGE_DECORATION_OPTIONS,
  EMPTY_PAGE_TEMPLATES_OPTIONS,
} from 'redux/optionsSlice/optionsStorage'
import styles from './EmptyPage.module.scss'

const EmptyPage: React.FC = () => {
  const [activeItem, setActiveItem] = useState<string>('Empty')

  const onSelectItem = (title: string): void => setActiveItem(title)

  return (
    <div className={styles.empty}>
      <div>
        <EmptyPageList
          list={EMPTY_PAGE_DECORATION_OPTIONS}
          activeItem={activeItem}
          onHover={onSelectItem}
        />
      </div>
      <div>
        <div className={styles.templatesTitle}>
          <span>Templates</span>
        </div>
        <EmptyPageList
          list={EMPTY_PAGE_TEMPLATES_OPTIONS}
          activeItem={activeItem}
          onHover={onSelectItem}
        />
      </div>
    </div>
  )
}

export default EmptyPage
