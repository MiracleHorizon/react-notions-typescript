import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHover } from 'usehooks-ts'
import styled from 'styled-components'

import Tooltip from '../Tooltip/Tooltip'
import OptionsDotsSVG from 'shared/SVG/OptionsDots'
import {
  openPageOptionsModal,
  setCommonItemCoords,
} from 'redux/modalsSlice/slice'
import setCoordsByDOMRect from 'utils/helpers/setCoordsByDOMRect'
import { ElementPositions } from '../../@types/types'

const OptionsButton = styled.div`
  position: absolute;
  right: 35px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 1px;
  border-radius: 3px;

  :hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.15s ease-in-out;
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.15s ease-in-out;
  }
`

const ListItemOptionsButton: React.FC<{ title: string }> = ({ title }) => {
  const optionsButtonRef = useRef<HTMLImageElement>(null)
  const isHovering = useHover(optionsButtonRef)
  const dispatch = useDispatch()

  const optionButtonCoords = setCoordsByDOMRect({
    requiredProperties: [ElementPositions.TOP, ElementPositions.LEFT],
    element: optionsButtonRef.current,
  })

  const onOpenPageOptionsModal = (e: React.MouseEvent): void => {
    e.stopPropagation()
    dispatch(setCommonItemCoords(optionButtonCoords))
    dispatch(openPageOptionsModal())
  }

  return (
    <OptionsButton ref={optionsButtonRef} onClick={onOpenPageOptionsModal}>
      <OptionsDotsSVG sizes={{ width: 14, height: 14 }} />
      {isHovering && (
        <Tooltip
          title={`${title}, and more...`}
          coords={{ left: '-70px', bottom: '-32px' }}
        />
      )}
    </OptionsButton>
  )
}

export default ListItemOptionsButton
