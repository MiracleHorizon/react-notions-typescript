import styled from 'styled-components'

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  flex: 1;
  min-height: 50px;
  max-height: 40vh;
  padding: 3px 50px;
`

const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  align-self: flex-start;
  width: 22px;
  min-width: 22px;
  height: 22px;
  min-height: 22px;
  margin: 2px 5px 0px -3px;
  user-select: none;
`

const Avatar = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
  pointer-events: none;
`

const StyledForm = styled.form<{ isInputFocused: boolean }>`
  position: relative;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: row;
  width: calc(100% - 10px);
  min-height: 32px;
  border-radius: 4px;
  margin-bottom: 13px;
  transition: background 0.3s ease 0s;
`

const BottomShadow = styled.div`
  width: 100%;
  height: 1px;
  margin-bottom: 7px;
  background: rgba(55, 53, 47, 0.09);
`

export { Wrapper, AvatarContainer, Avatar, StyledForm, BottomShadow }
