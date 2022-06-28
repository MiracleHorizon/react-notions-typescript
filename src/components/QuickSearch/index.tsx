import React, { useEffect, useRef, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import QuickSearchForm from './SearchForm'
import RecentLists from './RecentLists'
import classNameHandler from '../../utils/helpers/quickSearchClassNameHandler'
import { closeQuickSearchModal } from '../../redux/modalsSlice/slice'
import styles from './QuickSearch.module.scss'

const QuickSearch: React.FC = () => {
  const [rootClassName, setRootClassName] = useState<string>('') //!
  const [inputValue, setInputValue] = useState<string>('')
  const [isFilterOpen, setIsFilterOpen] = useState<boolean>(false)
  const modalRef = useRef<HTMLDivElement>(null)

  const dispatch = useDispatch()
  const handlerClickOutside = (): void => {
    dispatch(closeQuickSearchModal())
  }

  useOnClickOutside(modalRef, handlerClickOutside)

  useEffect(() => {
    setRootClassName(classNameHandler(inputValue))
  }, [isFilterOpen]) //! useReducer

  return (
    <div className={rootClassName} ref={modalRef}>
      <div className={styles.container}>
        <div className={styles.contentBlock}>
          <div className={styles.content}>
            <QuickSearchForm
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
            {inputValue === '' ? <RecentLists /> : <div></div>}
          </div>
          {isFilterOpen && <aside></aside>}
        </div>
      </div>
    </div>
  )
}

export default QuickSearch
// <footer style={{ flexShrink: 0 }}></footer>
// <span>Searching...</span>
// <button onClick={onOpenFilter}>Open filter</button>
// const onOpenFilter = (): void => setIsFilterOpen(true)
