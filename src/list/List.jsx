import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { NavBar, Icon } from 'antd-mobile'
import {ListWrap, SubTitle, ListContainer} from './StyledList'
import animate from '@/hoc/animate'
import { actionCreator } from '../home/cookbook'


@withRouter
@connect(
  (state) => ({
    list: state.cookbook.list
  }),
  (dispatch) => ({
    loadData(){
      dispatch(actionCreator.loadDataAsync())
    }
  })
)
@animate
class List extends Component {

  componentDidMount() {
    // 解决刷新页面，redux数据丢失问题
    if(this.props.list.length === 0) {
      this.props.loadData()
    }

  }

  handleClickLeft = () => {
    const {history} = this.props
    // let from =  this.props.location.state.from
    this.props.history.push('/home', {from: '/list'})
  }

  handleGotoDetail = (title) => {
    return () => {
      this.props.history.push('/detail', { title, from: '/list'})
    }
  }

  render() {
    let state = this.props.location.state
    return (
      <ListContainer>
         <NavBar
            mode='dark' 
            icon={<Icon type="left"/>}
            onLeftClick={this.handleClickLeft}
            style = {{backgroundColor: '#ee742f'}}
          >
           {  state && state.title}
         </NavBar>
         <ul>
            {this.props.list.map((li, index) => {
              return <ListWrap width="0 0 1px 0" key={li.id + index} onClick={this.handleGotoDetail(li.name)}>
                        <div>
                            <img src={li.img} width={115} height={75} alt="" />
                        </div>
                        <div>
                            <h1>{li.name}</h1>
                            <SubTitle>{li.burdens}</SubTitle>
                            <h3>{li.all_click} 浏览 {li.favorites} 收藏</h3>
                        </div>
                    </ListWrap>
              })}
            
          </ul>
      </ListContainer>
    )
  }
}


export default List