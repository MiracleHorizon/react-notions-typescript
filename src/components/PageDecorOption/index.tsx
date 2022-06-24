import React from 'react'

interface IPageDecorOptionsProps {
  iconImg: string
  optionsTitle: string
}

const PageDecorOption: React.FC<IPageDecorOptionsProps> = props => {
  const { iconImg, optionsTitle } = props

  return (
    <div>
      <img src={iconImg} alt={`Add ${optionsTitle}`} />
      <span>Add {optionsTitle}</span>
    </div>
  )
}

export default PageDecorOption
