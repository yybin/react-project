import React, { Component } from 'react'
import { Icon } from 'antd-mobile'
import { Container, InnerContainer } from './StyledSerch'

export default class Search extends Component {
  render() {
    return (
      <Container {...this.props}>
          <InnerContainer {...this.props}>
              <Icon className="icon" type="search" size="xs" color={this.props.color}/>
              <span>爱吃什么搜这里， 如川菜</span>
          </InnerContainer>
      </Container>
    )
  }
}
