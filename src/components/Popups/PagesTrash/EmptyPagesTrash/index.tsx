import React from 'react'
import { EmptyListContainer, EmptyListTitle } from './EmptyPagesTrash.styles'

const EmptyPagesTrash: React.FC = () => (
  <EmptyListContainer>
    <EmptyListTitle>No matches found.</EmptyListTitle>
  </EmptyListContainer>
)

export default EmptyPagesTrash
