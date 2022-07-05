import React, { Fragment, useRef } from 'react'
import { useHover } from 'usehooks-ts'

import EmptyPageIconSVG from 'shared/SVG/EmptyPage'
import Tooltip from 'shared/Tooltip'
import Props from './ItemIcon.types'
import { IconBlock, PageIcon } from './ItemIcon.styles'
import { tooltipsCoords } from 'shared/Tooltip/coords'

const PagesListItemIcon: React.FC<Props> = ({ icon, isHasIcon }) => {
  const tooltipCoords = tooltipsCoords['pages-list-item-change-icon-btn']
  const emptyPageIconParams = {
    sizes: { width: 16, height: 16 },
    transparency: 0.85,
  } // * Переработать.

  const iconRef = useRef<HTMLDivElement>(null)
  const isHovering: boolean = useHover(iconRef)

  const onChangePageIcon = (e: React.MouseEvent): void => {
    e.stopPropagation()
    //...
  }

  return (
    <Fragment>
      <IconBlock ref={iconRef} onClick={onChangePageIcon}>
        {isHasIcon ? (
          <PageIcon src={icon} alt='Page icon' />
        ) : (
          <EmptyPageIconSVG {...emptyPageIconParams} />
        )}
      </IconBlock>
      {isHovering && <Tooltip title='Change icon' coords={tooltipCoords} />}
    </Fragment>
  )
}

export default PagesListItemIcon
