// @flow
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import glamorous from 'glamorous'
import { Helmet } from 'react-helmet'

import Nav from './Nav'
import ProgressBar from '../containers/ProgressBarContainer'
import Timer from '../containers/TimerContainer'
import Settings from '../containers/SettingsContainer'
import Todo from '../containers/TodoContainer'
import Faq from '../pages/Faq'

import 'normalize.css/normalize.css'
import '../styles/base.css'

const Title = glamorous.h1({
  fontSize: '25px',
  fontWeight: '400',
  textAlign: 'center',
  margin: '0 0 20px',
})

const App = glamorous.div({
  backgroundColor: 'white',
  borderRadius: '5px',
  padding: '0',
  display: 'flex',
  flexDirection: 'column',
  margin: '0 auto',
  border: '1px solid #ccc',
  boxShadow: '0 0 10px rgba(0,0,0,0.5)',

  '@media(min-width: 500px)': {
    padding: '20px 0',
    width: '500px',
  },
  '@media(min-width: 700px)': {
    width: '700px',
  },

  '@media(min-height: 440px)': {
    minHeight: '400px',
  },
  '@media(min-height: 640px)': {
    minHeight: '600px',
  },
})

const Content = glamorous.div({
  flex: 1,
})

const AppWithRouter = ({ timer }: { timer: number }) => (
  <Router>
    <App>
      <Content>
        <Helmet>
          <title>{timer}</title>
        </Helmet>

        <Title>Помидорко-таймер</Title>

        <ProgressBar />

        <Route exact path="/" component={Timer} />
        <Route path="/todo" component={Todo} />
        <Route path="/settings" component={Settings} />
        <Route path="/faq" component={Faq} />
      </Content>

      <Nav />
    </App>
  </Router>
)

export default AppWithRouter
