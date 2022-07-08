import React from 'react'

import { FileUploaderWrapper, Uploader } from './FileUploader.styles'

const FileUploader: React.FC = () => {
  return (
    <FileUploaderWrapper>
      <Uploader type='file' />
    </FileUploaderWrapper>
  )
}

export default FileUploader
