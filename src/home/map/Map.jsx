import React, { Component } from 'react'
import {  NavBar } from 'antd-mobile'

export default class Map extends Component {
  render() {
    return (
      <div style={{width: '100%', height: '100%'}}>
          <NavBar 
            mode="dark" 
            style={{backgroundColor: '#ee742f'}}
          >美食地图</NavBar>
          <iframe
            style={{width: '100%', height: '100%'}}
            src='/map.html'
            title="ifrm"
            frameBorder={0}
          ></iframe>
      </div>
    )
  }
}
