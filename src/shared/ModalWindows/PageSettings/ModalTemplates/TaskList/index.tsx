import React from 'react'
import OptionsList from '../../../../../components/Options/OptionsList'
import MoveToOptionItem from '../../../../../components/Options/OptionsList/OptionItem/MoveToOptionItem'
import PageChanges from '../../../../../components/Options/PageChanges'
import { TASK_LIST_PAGE_OPTIONS } from '../../../../../redux/optionsSlice/optionsStorage'

const TaskListPageModal: React.FC = () => (
  <div>
    <OptionsList options={TASK_LIST_PAGE_OPTIONS.pageShareOptions} />
    <OptionsList options={TASK_LIST_PAGE_OPTIONS.pageChangesOptions} />
    <MoveToOptionItem />
    <PageChanges />
  </div>
)

export default TaskListPageModal
