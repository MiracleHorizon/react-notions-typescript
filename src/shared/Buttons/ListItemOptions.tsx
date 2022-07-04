import React, { useRef } from 'react'
import { useDispatch } from 'react-redux'
import { useHover } from 'usehooks-ts'
import styled from 'styled-components'

import Tooltip from '../Tooltip'
import OptionsDotsSVG from 'shared/SVG/OptionsDots'
import {
  openPageOptionsModal,
  setPageOptions,
  setPageOptionsId,
  setPageOptionsModalCoords,
} from 'redux/modalsSlice/slice'
import pageOptionsHandler from 'utils/helpers/pageOptionsHandler'

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

interface Props {
  id: number
  title: string
}

const ListItemOptionsButton: React.FC<Props> = ({ id, title }) => {
  const optionsButtonRef = useRef<HTMLImageElement>(null)
  const isHovering = useHover(optionsButtonRef)
  const options = pageOptionsHandler(title)

  const dispatch = useDispatch()
  const onOpenPageOptionsModal = (e: React.MouseEvent): void => {
    e.stopPropagation()

    const pointerCoords = {
      top: e.clientY - 2 + 'px',
      left: e.clientX - 2 + 'px',
    }

    dispatch(setPageOptionsModalCoords(pointerCoords))
    dispatch(openPageOptionsModal())
    dispatch(setPageOptions(options))
    dispatch(setPageOptionsId(id))
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
