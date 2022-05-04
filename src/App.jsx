import React, { Component } from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import { Home }  from './home/'
import List from './list/List'
import Detail from './detail/Detail'

export default class App extends Component {
  render() {
    return (
        <>
            <Route path="/home" children={(props) => <Home {...props} />} />
            <Route path="/list" children={(props) => <List {...props} />} />
            <Route path="/detail" children={(props) => <Detail {...props} />} />
            <Redirect from="/" to="/home" />
        </>
    )
  }
}


