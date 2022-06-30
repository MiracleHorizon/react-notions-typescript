import React from 'react'
import { useSelector } from 'react-redux'

import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import CreateNewPageModal from '../../../CreateNewPage'
import styles from './BoardContent.module.scss'

const BoardContent: React.FC = () => {
  const { content } = useSelector(currentPageSelector)

  return (
    <div className={styles.content}>
      {/*<CreateNewPageModal />*/}
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad
        aliquam aliquid, amet at cupiditate, eius enim esse in iure mollitia
        natus nesciunt nisi numquam quam quasi qui quo? Eum expedita, hic iure
        laborum magnam pariatur quos reiciendis repudiandae sequi suscipitate,
        eius enim esse in iure mollitia natus nesciunt nisi numquam quam quasi
        qui quo? Eum expedita, hic iure laborum
      </h1>
      <h1>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium ad
        aliquam aliquid, amet at cupiditate, eius enim esse in iure mollitia
        natus nesciunt nisi numquam quam quasi qui quo? Eum expedita, hic iure
        laborum magnam pariatur quos reiciendis repudiandae sequi suscipitate,
        eius enim esse in iure mollitia natus nesciunt nisi numquam quam quasi
        qui quo? Eum expedita, hic iure laborum Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Accusantium ad aliquam aliquid, amet at
        cupiditate, eius enim esse in iure mollitia natus nesciunt nisi numquam
        quam quasi qui quo? Eum expedita, hic iure laborum magnam pariatur quos
        reiciendis repudiandae sequi suscipitate, eius enim esse in iure
        mollitia natus nesciunt nisi numquam quam quasi qui quo? Eum expedita,
        hic iure laborum Lorem ipsum dolor sit amet, consectetur adipisicing
        elit. Accusantium ad aliquam aliquid, amet at cupiditate, eius enim esse
        in iure mollitia natus nesciunt nisi numquam quam quasi qui quo? Eum
        expedita, hic iure laborum magnam pariatur quos reiciendis repudiandae
        sequi suscipitate, eius enim esse in iure mollitia natus nesciunt nisi
        numquam quam quasi qui quo? Eum expedita, hic iure laborum
      </h1>
    </div>
  )
}

export default BoardContent
