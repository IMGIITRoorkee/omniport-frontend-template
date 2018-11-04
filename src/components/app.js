import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { connect } from 'react-redux'

import { AppHeader, AppFooter, AppMain } from 'formula_one'

import main from 'formula_one/src/css/app.css'
import blocks from '../css/app.css'

class App extends Component {
  render () {
    const creators = [
      {
        name: 'Dhruv Bhanushali',
        role: 'Mentor'
      },
      {
        name: 'Praduman Goyal',
        role: 'Frontend Developer'
      }
    ]
    const { match } = this.props

    return (
      <div styleName='main.app'>
        <AppHeader
          appName='[[app-display-name]]'
          appLink={`http://${window.location.host}${match.path}`}
        />
        <AppMain>
          <div styleName='main.app-main'>
            <div styleName='blocks.content-div'>
              <h1>Congratulations!</h1>
              <p>
                You have successfully initiated <em>[[app_name]]</em> and taken
                the first step to building your <strong>Omniport</strong> app.
              </p>
              <p>
                Edit <code>./src/components/app.js</code> and make this app do
                magical things. We can't wait to see what you make.
              </p>
              <p>
                Greetings,<br />
                Team Omniport
              </p>
            </div>
          </div>
        </AppMain>
        <AppFooter creators={creators} />
      </div>
    )
  }
}

export default connect(null, null)(App)
