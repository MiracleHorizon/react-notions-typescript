import styled from 'styled-components'

export const HeaderWrapper = styled.header`
  position: relative;
  top: 45px;
  width: 100%;
  min-height: 45px;
  height: 45px;
  margin-bottom: 10px;
  border-bottom: 1px solid rgba(55, 53, 47, 0.09);
`

export const Header = styled.div`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  padding: 0 5px;
`

export const Title = styled.h4`
  padding-left: 10px;
  font-size: 14px;
  font-weight: 500;
  color: rgb(55, 53, 47);
`
