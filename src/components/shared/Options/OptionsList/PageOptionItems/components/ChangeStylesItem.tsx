import React, { FC, memo, useCallback } from 'react'
import { useDispatch } from 'react-redux'

import PageOptionItem from '../PageOptionItem'
import { Separator } from 'components/ui'
import { ColorBlockSvg, TriangleSvg } from 'components/ui/SVG'

import { ActiveListItem } from 'types'
import { openContentStylesPopup } from 'redux/actions'
import {
  ItemContainer,
  SvgContainer,
} from '../PageOptionItem/OptionItem.styles'

const ChangeStylesItem: FC<ActiveListItem> = memo(props => {
  const dispatch = useDispatch()

  const onOpenChangeStylesPopup = useCallback((): void => {
    dispatch(openContentStylesPopup())
  }, [dispatch])

  return (
    <>
      <ItemContainer>
        <PageOptionItem
          title='Color'
          IconSvg={ColorBlockSvg}
          action={onOpenChangeStylesPopup}
          {...props}
        />
        <SvgContainer>
          <TriangleSvg isOpen={false} />
        </SvgContainer>
      </ItemContainer>
      <Separator />
    </>
  )
})

export default ChangeStylesItem
