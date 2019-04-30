// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from '@emotion/styled'
import colors from '../constants/colors'

const Navigation = styled.div({
  display: 'flex',
  padding: '0 30px',
  justifyContent: 'space-between',
})

const myNavLinkStyle = {
  color: '#333',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',

  ':hover': {
    color: colors.red,
  },
}

const MyNavLink = styled(NavLink)(myNavLinkStyle)

const Icon = styled.span({
  fontSize: '30px',
  marginRight: '10px',
})

const IconText = styled.span({
  display: 'none',

  '@media(min-width: 700px)': {
    display: 'inline',
  },
})

const activeLinkStyle = { color: colors.red }

const Nav = () => (
  <Navigation>
    <MyNavLink activeStyle={activeLinkStyle} exact={true} to="/">
      <Icon className="fa fa-clock-o" /> <IconText>Таймер</IconText>
    </MyNavLink>
    <MyNavLink activeStyle={activeLinkStyle} to="/todo">
      <Icon className="fa fa-th-list" /> <IconText>Задачи</IconText>
    </MyNavLink>
    <MyNavLink activeStyle={activeLinkStyle} to="/settings">
      <Icon className="fa fa-cog" /> <IconText>Настройки</IconText>
    </MyNavLink>
    <MyNavLink activeStyle={activeLinkStyle} to="/faq">
      <Icon className="fa fa-question-circle-o" /> <IconText>Что это?</IconText>
    </MyNavLink>
  </Navigation>
)

export default Nav
