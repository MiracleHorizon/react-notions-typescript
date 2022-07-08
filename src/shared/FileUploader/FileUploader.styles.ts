import styled from 'styled-components'

const FileUploaderWrapper = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
`

const Uploader = styled.input`
  position: absolute;
  width: 100%;
  opacity: 0;
  z-index: -10;
`

export { FileUploaderWrapper, Uploader }
