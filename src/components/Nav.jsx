// @flow
import React from 'react'
import { NavLink } from 'react-router-dom'
import glamorous from 'glamorous'
import { css } from 'glamor'

const Navigation = glamorous.div({
  display: 'flex',
  padding: '0 30px',
  justifyContent: 'space-between',
})

const MyNavLink = glamorous(NavLink)({
  color: '#333',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',

  ':hover': {
    color: '#ed5e42',
  },
})

const MyNavLinkActiveClass = css({
  'a&': {
    color: '#ed5e42',
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

const Nav = () =>
  <Navigation>
    <MyNavLink activeClassName={MyNavLinkActiveClass} exact={true} to="/">
      <Icon className="fa fa-clock-o" /> <IconText>Таймер</IconText>
    </MyNavLink>
    <MyNavLink activeClassName={MyNavLinkActiveClass} to="/todo">
      <Icon className="fa fa-th-list" /> <IconText>ToDo</IconText>
    </MyNavLink>
    <MyNavLink activeClassName={MyNavLinkActiveClass} to="/settings">
      <Icon className="fa fa-cog" /> <IconText>Настройки</IconText>
    </MyNavLink>
    <MyNavLink activeClassName={MyNavLinkActiveClass} to="/faq">
      <Icon className="fa fa-question-circle-o" /> <IconText>F.A.Q</IconText>
    </MyNavLink>
    <MyNavLink activeClassName={MyNavLinkActiveClass} to="/history">
      <Icon className="fa fa-history" /> <IconText>История</IconText>
    </MyNavLink>
  </Navigation>

export default Nav
