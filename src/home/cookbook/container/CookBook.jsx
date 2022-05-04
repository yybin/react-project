import React, { Component } from 'react'
import { connect } from 'react-redux'
import actionCreator from '../actionCreator'
import { withRouter } from 'react-router-dom'

import CookBookUi from '../ui/CookbookUi'

@withRouter
@connect(
  (state) => {
    return {
      list: state.cookbook.list
    }
  },
  (dispatch) => ({
    loadData(){
      dispatch(actionCreator.loadDataAsync())
    }
  })
)
class CookBook extends Component {
  componentDidMount() {
    this.props.loadData()
  }
  
  componentDidUpdate() {
  }

  handleGotoDetail = (title) => {
    return () => {
      this.props.history.push('/detail', {title})
    }
  }


  render() {
    return (
        <CookBookUi 
           list = {this.props.list}
           onGotoDetail = {this.handleGotoDetail}
        />
    )
  }
}

export default CookBook