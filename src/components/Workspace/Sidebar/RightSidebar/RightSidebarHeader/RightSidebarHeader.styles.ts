import styled from 'styled-components'

const Wrapper = styled.header`
  position: relative;
  top: 45px;
  width: 100%;
  height: 45px;
  border-bottom: 1px solid rgba(55, 53, 47, 0.09);
`

const Header = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 5px;
`

const Title = styled.h4`
  padding-left: 10px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(55, 53, 47);
`

export { Wrapper, Header, Title }
