import React, { useState } from 'react'

import QuickSearchForm from './SearchForm'
import RecentList from './RecentLists'
import HotkeysBar from './HotkeysBar'
import classNameHandler from '../../utils/helpers/quickSearchClassNameHandler'
import styles from './QuickSearch.module.scss'
import { useSelector } from 'react-redux'
import {
  recentPagesSelector,
  recentSearchesSelector,
} from '../../redux/recentSearchSlice/selectors'

const QuickSearch: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>('')
  const recentPages = useSelector(recentPagesSelector)
  const recentSearches = useSelector(recentSearchesSelector)

  return (
    <div className={classNameHandler(inputValue)}>
      <div className={styles.container}>
        <div className={styles.contentBlock}>
          <div className={styles.content}>
            <QuickSearchForm
              inputValue={inputValue}
              setInputValue={setInputValue}
            />
            {inputValue === '' ? (
              <React.Fragment>
                <main className={styles.recent}>
                  <RecentList listTitle='pages' list={recentPages} />
                  <RecentList listTitle='searches' list={recentSearches} />
                </main>
                {!recentPages && !recentSearches && <HotkeysBar />}
              </React.Fragment>
            ) : (
              <div>
                <span>Searching...</span>
              </div>
            )}
          </div>
          {inputValue !== '' && <aside></aside>}
        </div>
      </div>
    </div>
  )
}

export default QuickSearch
// <footer style={{ flexShrink: 0 }}></footer>
