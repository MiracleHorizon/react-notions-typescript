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

// tabIndex={0}

const CommentsFilter: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const { activeItem, onSelectItem } = useSelectItem('Open comments')
  const activeFilter = useSelector(activeCommentsFilterSelector)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onOpenDropdown = (): void => setIsDropdownOpen(true)
  const onSelectFilter = (filter: CommentsFilters): void => {
    dispatch(setCommentsFilter(filter))
    setIsDropdownOpen(false)
  }
  const handleClickOutside = (): void => setIsDropdownOpen(false)

  useOnClickOutside(dropdownRef, handleClickOutside)

  return (
    <Fragment>
      <StyledContainer>
        <TitleContainer onClick={onOpenDropdown}>
          <FilterTitle>{activeFilter}</FilterTitle>
          <ChevronDownSVG />
        </TitleContainer>
      </StyledContainer>
      {isDropdownOpen && (
        <Modal>
          <FilterDropdown ref={dropdownRef}>
            {options.map(({ title, description }) => (
              <DropdownItem
                key={description}
                {...{ title, description, activeFilter, activeItem }}
                onSelect={onSelectItem}
                onClick={onSelectFilter}
              />
            ))}
          </FilterDropdown>
        </Modal>
      )}
    </Fragment>
  )
}

export default CommentsFilter
