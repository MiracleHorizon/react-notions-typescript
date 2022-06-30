import styled from 'styled-components'

const TitleBlock = styled.div`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: max-content;
  height: 17px;
  margin-left: 10px;
  padding: 1px 5px;
  border-radius: 3px;

  :hover {
    background: rgba(55, 53, 47, 0.08);
    transition: background 0.1s ease-in-out;
  }
  :active {
    background: rgba(55, 53, 47, 0.16);
    transition: background 0.1s ease-in-out;
  }
`

const Title = styled.span`
  font-size: 11.5px;
  font-weight: 600;
  text-transform: uppercase;
  line-height: 1;
  letter-spacing: 0.3px;
  color: rgba(55, 53, 47, 0.5);

  :hover {
    color: rgba(55, 53, 47, 0.8);
  }
`

export { TitleBlock, Title }
