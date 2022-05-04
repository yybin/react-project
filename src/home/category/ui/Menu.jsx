import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {get} from '@/utils/http'
import { withRouter } from 'react-router-dom'
import {actionCreator as ac } from '@/home/category'
import MenuList from '@/components/menu/MenuList'
import { connect } from 'react-redux'

@withRouter
@connect(
  (state) => ({
    cateAside: state.category.routerInfo.cateAside,
    cateType: state.category.routerInfo.cateType,
  }),
  (dispatch) => ({
    changeCateAside(cateAside) {
      dispatch(ac.changeCateAside(cateAside))
    }
  })
)
class Menu extends Component {
  static propTypes = {
    type: PropTypes.string
  }

  state = {
      cate: null,
  }

  async componentDidMount() {
      let result = await get({
          url: '/api/category'
      })
      this.setState({
          cate: result.data.data
      })
      if(this.props.cateAside === '') {
        this.props.changeCateAside(this.props.cateType === 'category' ? '热门' : '肉类' )
      }
  }

  handleAsideClick = (curCate) => {
     return () => {
        this.props.changeCateAside(curCate)
     }
  }


  handleGotoList = (title) => {
    return () => {
      this.props.history.push("/list", { title })
    }
  }

  render() {
    return (
        <MenuList 
          onAsideClick={this.handleAsideClick}
          curCate={this.props.cateAside}
          onGotoList={this.handleGotoList}
          cate={this.state.cate && this.state.cate[this.props.cateType]}
          />
    )
  }
}

export default Menu