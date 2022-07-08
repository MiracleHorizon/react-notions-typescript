import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    margin-bottom: 15px;
    text-align: center;
    font-size: 12px;
    user-select: none;
    color: rgba(55, 53, 47, 0.65);
  }
`

const FileUploaderContainer = styled.label`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 30px;
  margin-top: 10px;
  margin-bottom: 20px;
`

const FileUploader = styled.input`
  position: absolute;
  width: 100%;
  opacity: 0;
  z-index: -10;
`

export { Wrapper, FileUploaderContainer, FileUploader }
