import React, { FC } from 'react'
import { RedOutlineButton } from 'components/ui'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Page = styled.div`
  width: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  margin: 0 auto;

  div {
    width: 200px;
  }
`

const HomePage: FC = () => {
  return (
    <Page>
      <Link to='/login'>
        <RedOutlineButton title='На страницу логина' action={() => {}} />
      </Link>
      <Link to='/register'>
        <RedOutlineButton title='На страницу регистрации' action={() => {}} />
      </Link>
    </Page>
  )
}

export default HomePage
