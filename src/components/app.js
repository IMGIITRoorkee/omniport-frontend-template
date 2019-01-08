import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Scrollbars } from 'react-custom-scrollbars'
import { Segment, Container } from 'semantic-ui-react'

import { AppHeader, AppFooter, AppMain, getTheme } from 'formula_one'

import main from 'formula_one/src/css/app.css'
import blocks from '../css/app.css'

class App extends Component {
  render () {
    const creators = [
      {
        name: 'Dhruv Bhanushali',
        role: 'Mentor',
        link: 'https://dhruvkb.github.io/'
      },
      {
        name: 'Praduman Goyal',
        role: 'Frontend Developer',
        link: 'https://pradumangoyal.github.io'
      }
    ]

    return (
      <div styleName='main.app'>
        <AppHeader appName='[[app_name]]' mode='site' />
        <AppMain>
          <div styleName='main.app-main'>
            <Scrollbars autoHide>
              <Container styleName='blocks.content-div'>
                <center>
                  <Segment compact color={getTheme()}>
                    <h1>Congratulations!</h1>
                    <p styleName='blocks.logo'>
                      <img src='/branding/site/logo.svg' />
                    </p>
                    <p>
                      You have successfully initiated <em>[[app_name]]</em> and
                      taken the first step to building your
                      <strong> Omniport</strong> app.
                    </p>
                    <p>
                      Edit <code>./src/components/app.js</code> and make this
                      app do magical things. We can't wait to see what you make.
                    </p>
                    <p>
                      Greetings,
                      <br />
                      Team Omniport
                    </p>
                  </Segment>
                </center>
              </Container>
            </Scrollbars>
          </div>
        </AppMain>
        <AppFooter creators={creators} />
      </div>
    )
  }
}

export default connect(
  null,
  null
)(App)
