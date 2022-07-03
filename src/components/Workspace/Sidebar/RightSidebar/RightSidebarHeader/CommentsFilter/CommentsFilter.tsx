import React, { Fragment, useRef, useState } from 'react'
import { useOnClickOutside } from 'usehooks-ts'
import { useSelectItem } from 'hooks/useSelectItem'

import FilterDropdownItem from './FilterDropdownItem/FilterDropdownItem'
import Modal from 'shared/ModalWindows/Modal'
import ChevronDownSVG from 'shared/SVG/LightThene/ChevronDown'
import { options } from 'utils/options/dropdownOptions'
import {
  StyledContainer,
  TitleContainer,
  FilterTitle,
  FilterDropdown,
} from './CommentsFilter.styles'

const CommentsFilter: React.FC = () => {
  const [title, setTitle] = useState<string>('Open')
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { activeItem, onSelectItem } = useSelectItem('Open comments')
  const modalRef = useRef<HTMLDivElement>(null)

  const onOpenDropdown = (): void => setIsOpen(true)
  const onCloseDropdown = (title: string): void => {
    setIsOpen(false)
    setTitle(title)
  }
  const handleClickOutside = (): void => setIsOpen(false)

  useOnClickOutside(modalRef, handleClickOutside)

  return (
    <Fragment>
      <StyledContainer>
        <TitleContainer tabIndex={0} onClick={onOpenDropdown}>
          <FilterTitle>{title}</FilterTitle>
          <ChevronDownSVG />
        </TitleContainer>
      </StyledContainer>
      {isOpen && (
        <Modal>
          <FilterDropdown ref={modalRef}>
            {options.map(({ title, description }) => (
              <FilterDropdownItem
                key={description}
                {...{ title, description, activeItem }}
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
