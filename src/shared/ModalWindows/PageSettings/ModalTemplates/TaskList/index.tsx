import React from 'react'
import OptionsList from '../../../../../components/Options/OptionsList'
import MoveToOptionItem from '../../../../../components/Options/OptionsList/OptionItem/MoveToOptionItem'
import PageChanges from '../../../../../components/Options/PageChanges'
import { TASK_LIST_PAGE_OPTIONS } from '../../../../../redux/optionsSlice/optionsStorage'
import styles from '../../PageSettings.module.scss'

const TaskListPageModal: React.FC = () => (
  <div className={styles.pageSettings}>
    <OptionsList options={TASK_LIST_PAGE_OPTIONS.pageShareOptions} />
    <OptionsList options={TASK_LIST_PAGE_OPTIONS.pageChangesOptions} />
    <MoveToOptionItem />
    <PageChanges />
  </div>
)

export default TaskListPageModal
