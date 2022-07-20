import React, { FC } from 'react'
import { EmptyListContainer, EmptyListTitle } from './EmptyPagesTrash.styles'

const EmptyPagesTrash: FC = () => (
  <EmptyListContainer>
    <EmptyListTitle>No matches found.</EmptyListTitle>
  </EmptyListContainer>
)

export default EmptyPagesTrash
