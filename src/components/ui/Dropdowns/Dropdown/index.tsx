import React, { FC, memo, useRef } from 'react'
import { useOnClickOutside } from 'usehooks-ts'

import DropdownTitle from '../DropdownTitle'

import Props from './Dropdown.types'
import { StyledDropdown } from './Dropdown.styles'
import { DropdownItem } from '../../index'

const Dropdown: FC<Props> = memo(
  ({ handleClickOutside, activeFilter, onSelectActiveFilter }) => {
    const dropdownRef = useRef<HTMLDivElement>(null)

    useOnClickOutside(dropdownRef, handleClickOutside)

    return (
      // <StyledDropdown ref={dropdownRef}>
      //   <DropdownItem
      //     title=''
      //     description={''}
      //     activeFilter={}
      //     onClick={onSelectActiveFilter}
      //     activeItem={}
      //     onSelect={}
      //   />
      // </StyledDropdown>
      <></>
    )
  }
)

export default Dropdown
