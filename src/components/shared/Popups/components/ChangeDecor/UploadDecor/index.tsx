import React, { FC, memo, useCallback, useId } from 'react'
import { useDispatch } from 'react-redux'

import { FilledButton } from 'components/ui'

import Props from './UploadDecor.types'
import { refreshCoverCategory } from 'redux/actions'
import {
  Wrapper,
  FileUploaderContainer,
  FileUploader,
} from './UploadDecor.styles'

const UploadDecor: FC<Props> = memo(({ recommendation }) => {
  const fileUploaderId = useId()
  const dispatch = useDispatch()

  const onUploadDecor = useCallback((): void => {
    dispatch(refreshCoverCategory())
  }, [dispatch])

  return (
    <Wrapper>
      <FileUploaderContainer htmlFor={fileUploaderId}>
        <FileUploader id={fileUploaderId} type='file' />
        <FilledButton title='Choose an image' onClickAction={onUploadDecor} />
      </FileUploaderContainer>
      <p>{recommendation}</p>
      <p>The maximum size per file is 1 MB.</p>
    </Wrapper>
  )
})

export default UploadDecor
