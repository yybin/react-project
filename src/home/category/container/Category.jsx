import React, { Component } from 'react'
import { connect } from 'react-redux'
import {actionCreator as ac } from '@/home/category'
import CategoryUi from '../ui/CategoryUi'

@connect(
  (state) => ({
    cateType: state.category.routerInfo.cateType
  }),
  (dispatch) => ({
     changeCateType(cateType) {
        dispatch(ac.changeCateType(cateType))
     },
     changeCateAside(cateAside) {
      dispatch(ac.changeCateAside(cateAside))
    }
  })
)
class Category extends Component {
  
  handleClick = (cateType) => {
    return () => {
      this.props.changeCateType(cateType)
      this.props.changeCateAside(cateType === 'category' ? '热门' : '肉类' )
    }
  }

  render() {
    return (
      <CategoryUi 
        // tabIndex={this.state.tabIndex}
        type={this.props.cateType}
        onCategoryUiClick={this.handleClick}></CategoryUi>
    )
  }

}

export default Category