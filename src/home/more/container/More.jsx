import React, { Component } from 'react'
import { Switch, NavBar } from 'antd-mobile'
import { MoreWrap } from './StyledMore'
import { actionCreator }  from '@/home'
import { connect } from 'react-redux'

@connect(
  (state) => ({
    checked: state.home.checked
  }),
  (dispatch) => ({
    handleChange(checked) {
      dispatch(actionCreator.changeSwitch(checked))
      // 本地存储
      localStorage.setItem('checked', checked)
    }
  })
)
class More extends Component {
  state = {
      checked: true
  }

  render() {
    return (
        <>
         <NavBar 
            mode="dark" 
            style={{backgroundColor: '#ee742f'}}
          >更多</NavBar>
        <MoreWrap>
            <div>
                <span>显示地图：</span>
                <Switch checked={this.props.checked} onChange={this.props.handleChange}></Switch>
            </div>
        </MoreWrap>
      </>
    )
  }
}

export default More