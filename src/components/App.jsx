// @flow
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import glamorous from 'glamorous'
import { Helmet } from 'react-helmet'

import Nav from './Nav'
import ProgressBar from '../containers/ProgressBarContainer'
import Timer from '../containers/TimerContainer'
import Settings from '../containers/SettingsContainer'
import Todo from '../pages/Todo'
import Faq from '../pages/Faq'
import History from '../pages/History'

import 'normalize.css/normalize.css'
import '../styles/base.css'

const Title = glamorous.h1({
  fontSize: '20px',
  fontWeight: '400',
  textAlign: 'center',
  margin: '0',
})

const App = glamorous.div({
  backgroundColor: 'white',
  borderRadius: '5px',
  padding: '30px 0',

  '@media(min-width: 700px)': {
    width: '700px',
  },
  '@media(min-height: 600px)': {
    height: '600px',
  },
})

const AppWithRouter = ({ timer }: { timer: number }) =>
  <Router>
    <App>
      <Helmet>
        <title>
          {timer}
        </title>
      </Helmet>

      <Title>Помидор</Title>

      <ProgressBar />

      <Route exact path="/" component={Timer} />
      <Route path="/todo" component={Todo} />
      <Route path="/settings" component={Settings} />
      <Route path="/history" component={History} />
      <Route path="/faq" component={Faq} />

      <Nav />
    </App>
  </Router>

export default AppWithRouter
