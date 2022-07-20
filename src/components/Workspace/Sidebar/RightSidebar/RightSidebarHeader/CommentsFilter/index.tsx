import React, { FC, memo, useCallback, useRef, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useOnClickOutside } from 'usehooks-ts'

import { useSelectItem } from 'hooks/mouse/useSelectItem'
import Popup from 'components/shared/Popups'
import { DropdownItem } from 'components/ui'
import { ChevronDownSvg } from 'components/ui/SVG'
import { CommentsFilters } from 'redux/reducers/sidebarsSlice/types'
import { activeCommentsFilterSelector } from 'redux/selectors'
import { setCommentsFilter } from 'redux/actions'
import { options } from 'utils/options/commentsFilterOptions'
import {
  StyledContainer,
  TitleContainer,
  FilterTitle,
  FilterDropdown,
} from './CommentsFilter.styles'

// tabIndex={0}

const CommentsFilter: FC = memo(() => {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const { activeItem, onSelectItem } = useSelectItem('Open')
  const activeFilter = useSelector(activeCommentsFilterSelector)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const dispatch = useDispatch()

  const onOpenDropdown = useCallback((): void => {
    setIsDropdownOpen(true)
  }, [])

  const onSelectFilter = useCallback(
    (filter: CommentsFilters): void => {
      dispatch(setCommentsFilter(filter))
      setIsDropdownOpen(false)
    },
    [dispatch]
  )

  const handleClickOutside = useCallback((): void => {
    setIsDropdownOpen(false)
  }, [])

  useOnClickOutside(dropdownRef, handleClickOutside)

  return (
    <>
      <StyledContainer>
        <TitleContainer onClick={onOpenDropdown}>
          <FilterTitle>{activeFilter}</FilterTitle>
          <ChevronDownSvg />
        </TitleContainer>
      </StyledContainer>
      {isDropdownOpen && (
        <Popup>
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
        </Popup>
      )}
    </>
  )
})

export default CommentsFilter
