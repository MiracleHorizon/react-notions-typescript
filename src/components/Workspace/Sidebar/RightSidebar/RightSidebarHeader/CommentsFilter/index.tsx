import React, { Fragment, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'
import { useSelectItem } from 'hooks/useSelectItem'

import DropdownItem from 'shared/Dropdowns/DropdownItem/DropdownItem'
import Modal from 'shared/ModalWindows/ModalWrapper'
import ChevronDownSVG from 'shared/SVG/ChevronDown'
import { CommentsFilters } from 'redux/sidebarsSlice/types'
import { activeCommentsFilterSelector } from 'redux/sidebarsSlice/selectors'
import { setCommentsFilter } from 'redux/sidebarsSlice/slice'
import { options } from 'utils/options/commentsFilterOptions'
import {
  StyledContainer,
  TitleContainer,
  FilterTitle,
  FilterDropdown,
} from './CommentsFilter.styles'

const CommentsFilter: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)
  const { activeItem, onSelectItem } = useSelectItem('Open comments')
  const activeFilter = useSelector(activeCommentsFilterSelector)
  const modalRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onOpenDropdown = (): void => setIsModalOpen(true)
  const onCloseDropdown = (filter: CommentsFilters): void => {
    dispatch(setCommentsFilter(filter))
    setIsModalOpen(false)
  }

  const handleClickOutside = (): void => setIsModalOpen(false)
  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <Fragment>
      <StyledContainer>
        <TitleContainer tabIndex={0} onClick={onOpenDropdown}>
          <FilterTitle>{activeFilter}</FilterTitle>
          <ChevronDownSVG />
        </TitleContainer>
      </StyledContainer>
      {isModalOpen && (
        <Modal>
          <FilterDropdown ref={modalRef}>
            {options.map(({ title, description }) => (
              <DropdownItem
                key={description}
                {...{ title, description, activeFilter, activeItem }}
                onSelect={onSelectItem}
                onClick={onCloseDropdown}
              />
            ))}
          </FilterDropdown>
        </Modal>
      )}
    </Fragment>
  )
}

export default CommentsFilter
