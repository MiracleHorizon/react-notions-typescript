import React, { useId } from 'react'

import FilledButton from 'shared/Buttons/Filled'
import Props from './UploadDecor.types'
import {
  Wrapper,
  FileUploaderContainer,
  FileUploader,
} from './UploadDecor.styles'

const UploadDecor: React.FC<Props> = ({ recommendation }) => {
  const fileUploaderId = useId()

  const onUploadDecor = (): void => {}

  return (
    <Wrapper>
      <FileUploaderContainer htmlFor={fileUploaderId}>
        <FileUploader id={fileUploaderId} type='file' />
        <FilledButton title='Choose an image' onClickAction={onUploadDecor} />
      </FileUploaderContainer>
      <p>{recommendation}</p>
      <p>The maximum size per file is 2 MB.</p>
    </Wrapper>
  )
}

export default UploadDecor
