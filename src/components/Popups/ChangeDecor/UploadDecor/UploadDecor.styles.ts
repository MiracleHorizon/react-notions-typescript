import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 10px;

  p {
    margin-bottom: 15px;
    font-size: 12px;
    text-align: center;
    color: rgba(55, 53, 47, 0.65);
    user-select: none;
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
