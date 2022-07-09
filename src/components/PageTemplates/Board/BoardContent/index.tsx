import React from 'react'
import { useSelector } from 'react-redux'

import { currentPageSelector } from 'redux/workSpaceSlice/selectors'
import { Content, PageTitle } from './BoardContent.styles'

const BoardContent: React.FC = () => {
  const {
    title,
    pageSettings: { isSmallText, selectedFont },
  } = useSelector(currentPageSelector)

  return (
    <Content isSmallText={isSmallText} fontFamily={selectedFont}>
      <PageTitle style={{ marginBottom: '10px', fontSize: '40px' }}>
        {title}
      </PageTitle>
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
    </Content>
  )
}

export default BoardContent
