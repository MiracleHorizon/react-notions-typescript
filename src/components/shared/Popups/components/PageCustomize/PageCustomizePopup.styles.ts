import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  right: 5px;
  top: 50px;
  width: 400px;
  max-width: 400px;
  min-width: 200px;
  min-height: 15vh;
  border-radius: 4px;
  box-shadow: rgb(15 15 15 / 5%) 0 0 0 1px, rgb(15 15 15 / 10%) 0 3px 6px,
    rgb(15 15 15 / 20%) 0 9px 24px;
  background: white;
`

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 12px 15px;
`

export const TitleContainer = styled.p`
  display: inline-flex;
  align-items: center;
  font-size: 14px;
  font-weight: 400;
`

export const Icon = styled.img`
  width: 15px;
  height: 15px;
  margin-left: 5px;
  margin-right: 5px;
  object-fit: cover;
`

export const Title = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 500;
`

export const SectionsContainer = styled.div`
  flex: 1;
  padding: 5px 10px;
  box-shadow: rgb(55 53 47 / 9%) 0px -1px 0px;
`

export const SectionsTitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  height: 20px;
  margin-bottom: 5px;
  padding-left: 5px;
`

export const SectionsTitle = styled.span`
  font-size: 11px;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  color: rgba(55, 53, 47, 0.65);
`
