// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'
import glamorous from 'glamorous'
import { css } from 'glamor'
import colors from '../constants/colors'

const Navigation = glamorous.div({
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

const MyNavLink = glamorous(NavLink)(myNavLinkStyle)
const MyLink = glamorous.a(myNavLinkStyle)

const MyNavLinkActiveClass = css({
  'a&': {
    color: colors.red,
  },
}).toString()

const Icon = glamorous.span({
  fontSize: '30px',
  marginRight: '10px',
})

const IconText = glamorous.span({
  display: 'none',

  '@media(min-width: 700px)': {
    display: 'inline',
  },
})

const Nav = () => (
  <Navigation>
    <MyNavLink activeClassName={MyNavLinkActiveClass} exact={true} to="/">
      <Icon className="fa fa-clock-o" /> <IconText>Таймер</IconText>
    </MyNavLink>
    <MyNavLink activeClassName={MyNavLinkActiveClass} to="/todo">
      <Icon className="fa fa-th-list" /> <IconText>Задачи</IconText>
    </MyNavLink>
    <MyNavLink activeClassName={MyNavLinkActiveClass} to="/settings">
      <Icon className="fa fa-cog" /> <IconText>Настройки</IconText>
    </MyNavLink>
    <MyNavLink activeClassName={MyNavLinkActiveClass} to="/faq">
      <Icon className="fa fa-question-circle-o" /> <IconText>Что это?</IconText>
    </MyNavLink>
  </Navigation>
)

export default Nav
