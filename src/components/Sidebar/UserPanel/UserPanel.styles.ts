import styled from 'styled-components'

const Panel = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 45px;
  padding-left: 15px;
  padding-right: 40px;

  :hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const Avatar = styled.img`
  width: 18px;
  height: 18px;
  border-radius: 3px;
`

const Title = styled.h2`
  margin-left: 10px;
  font-size: 14px;
  font-weight: 500;
  line-height: 21px;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: rgb(55, 53, 47);
`

export { Panel, Avatar, Title }
