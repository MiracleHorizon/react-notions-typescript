import React, { useState } from 'react'

import AddNewPageToolkit from '../../Tooltips/AddNewPage'
import addPageSvg from '../../../assets/img/plus-addPage.svg'
import styles from './AddNewPageButton.module.scss'

const AddNewPageButton: React.FC = () => {
  const [isTooltipOpen, setIsTooltipOpen] = useState<boolean>(false)

  const onToggleTooltip = () => setIsTooltipOpen(!isTooltipOpen)

  return (
    <button
      className={styles.addPageBtn}
      onMouseEnter={onToggleTooltip}
      onMouseLeave={onToggleTooltip}
    >
      <img src={addPageSvg} alt='Add page' />
      {isTooltipOpen && <AddNewPageToolkit />}
    </button>
  )
}

export default AddNewPageButton
