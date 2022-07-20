import React, { FC } from 'react'

import { FileUploaderWrapper, Uploader } from './FileUploader.styles'

const FileUploader: FC = children => (
  <FileUploaderWrapper>
    <Uploader type='file' />
  </FileUploaderWrapper>
)

export default FileUploader
