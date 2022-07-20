import React, { FC, memo, useState } from 'react'

import Dropdown from '../Dropdown'
import DropdownTitle from '../DropdownTitle'

import Props from './DropdownContainer.types'

const DropdownContainer: FC<Props> = memo(
  ({ activeFilter, onSelectActiveFilter }) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)

    const onOpenDropdown = (): void => setIsOpen(true)

    const onCloseDropdown = (): void => setIsOpen(false)

    return (
      <>
        <DropdownTitle activeFilter={activeFilter} onClick={onOpenDropdown} />
        {isOpen && (
          <Dropdown
            activeFilter={activeFilter}
            onSelectActiveFilter={onSelectActiveFilter}
            handleClickOutside={onCloseDropdown}
          />
        )}
      </>
    )
  }
)

export default DropdownContainer
