import React from 'react'

interface IPageDecorOptionsProps {
  iconImg: string
  optionsTitle: string
  onClickAction?: () => void
}

const PageDecorOption: React.FC<IPageDecorOptionsProps> = props => {
  const { iconImg, optionsTitle, onClickAction } = props

  return (
    <div role='button' onClick={onClickAction}>
      <img src={iconImg} alt={`Add ${optionsTitle}`} />
      <span>Add {optionsTitle}</span>
    </div>
  )
}

export default PageDecorOption
