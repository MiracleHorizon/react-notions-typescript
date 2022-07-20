import styled from 'styled-components'

export const Container = styled.div<{ isEmpty: boolean }>`
  cursor: pointer;
  display: flex;
  ${props =>
    props.isEmpty
      ? `align-items: center;
         justify-content: flex-start;
         flex-direction: row;
         height: 50px;
         background: rgb(242, 241, 238);
         padding: 10px 14px 10px 14px;
         `
      : `align-items: flex-start;
         justify-content: center;
         flex-direction: column;
         height: 70px;
         border: 1px solid rgba(55, 53, 47, 0.16);`};
  width: 100%;
  border-radius: 3px;
  overflow: hidden;
  user-select: none;
  transition: background 20ms ease-in 0s;

  :hover {
    background: rgba(55, 53, 47, 0.08);
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
  }

  span,
  p {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`

export const Title = styled.span`
  font-size: 14px;
  color: rgba(55, 53, 47, 0.65);
`

export const IconContainer = styled.div`
  min-width: 25px;
  min-height: 25px;
  width: 25px;
  height: 25px;
  margin-right: 10px;
`

export const DomainTitle = styled.span`
  font-size: 13px;
  justify-self: flex-start;
  margin-bottom: 10px;
`

export const Url = styled.a`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  width: 100%;
  padding: 10px 14px 10px 14px;
`

export const UrlTitle = styled.p`
  font-size: 12px;
`
