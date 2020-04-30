import React from 'react'
import { Route } from 'react-router-dom'
import nprogress from 'nprogress'
import 'nprogress/nprogress.css'
import './FancyRoute.css'

class FancyRoute extends React.Component {
  componentWillMount () {
    nprogress.start()
  }

  render () {
    return (
      <Route {...this.props} />
    )
  }
}

export default FancyRoute