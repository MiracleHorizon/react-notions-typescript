import styled from 'styled-components'

export const PanelWrapper = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 45px;
  min-height: 45px;
  padding-left: 15px;
  padding-right: 40px;
  transition: background 20ms ease-in 0s;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }
`

export const Avatar = styled.img`
  width: 18px;
  height: 18px;
  min-width: 18px;
  min-height: 18px;
  border-radius: 3px;
`

export const Title = styled.h4`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  color: rgb(55, 53, 47);
`
