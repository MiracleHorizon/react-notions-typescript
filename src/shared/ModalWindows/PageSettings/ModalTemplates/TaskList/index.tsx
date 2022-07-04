import React from 'react'
import { useSelectItem } from 'hooks/useSelectItem'

import MoveToOptionItem from 'components/Options/OptionsList/OptionItem/MoveToOptionItem'
import PageChangesBar from 'shared/PageChangesBar/PageChangesBar'

import OptionsList from 'components/Options/OptionsList'

const TaskListPageModal: React.FC = () => {
  const { activeItem, onSelectItem } = useSelectItem('')

  return (
    <div>
      {/*<OptionsList options={TASK_LIST_PAGE_OPTIONS.pageShareOptions} />*/}
      {/*<OptionsList options={TASK_LIST_PAGE_OPTIONS.pageChangesOptions} />*/}
      <MoveToOptionItem activeItem={activeItem} onSelect={onSelectItem} />
      <PageChangesBar />
    </div>
  )
}

export default TaskListPageModal
