import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  user-select: none;
  padding-left: 5px;
`

const UserNameContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  margin-left: 3px;
`

const UserName = styled.span`
  font-size: 14px;
  line-height: 16px;
  font-weight: 600;
  color: rgb(55, 53, 47);
`

const DateInfoContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 5px;
`

const CreateDateInfo = styled.span`
  font-size: 12px;
  color: rgba(55, 53, 47, 0.5);
  padding: 2px;
`

export {
  Wrapper,
  UserNameContainer,
  UserName,
  DateInfoContainer,
  CreateDateInfo,
}
