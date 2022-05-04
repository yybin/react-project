import React, { Component } from 'react'
import {TabBar } from 'antd-mobile'
import { connect } from 'react-redux'
import {actionCreator as ac } from '@/home/category'
import cookbook from  '@a/images/cookbook.png'
import cookbookActive from  '@a/images/cookbook-active.png'
import menu from  '@a/images/menu.png'
import menuActive from  '@a/images/menu-active.png'
import location from '@a/images/location.png'
import locationActive from '@a/images/location-active.png'
import more from '@a/images/more.png'
import moreActive from '@a/images/more-active.png'

import { CookBook } from './cookbook'
import { Category  } from './category'
import { More  } from './more'
import Map from './map/Map'
import animate from '@/hoc/animate'

@connect(
  (state) => ({
    checked: state.home.checked,
    selectedTab: state.category.routerInfo.selectedTab
  }),
  (dispatch) => ({
    changeSelectedTab(selectedTab) {
      dispatch(ac.changeSelectedTab(selectedTab))
    }
  })
)
@animate
class Home extends Component {
  state = {
    selectedTab: this.props.selectedTab,
    hidden: false,
    fullScreen: true,
  };
  componentDidMount() {
    if(!this.props.selectedTab) {
      this.props.changeSelectedTab('cookbook')
    }
  }


  render() {
    const tablItems = [
        <TabBar.Item
            title="美食大全"
            key="cookbook"
            icon={<div style={{
              width: '26px',
              height: '26px',
              background: `url(${cookbook}) center center /  26px 26px no-repeat` }}
            />
            }
            selectedIcon={<div style={{
              width: '26px',
              height: '26px',
              background: `url(${cookbookActive}) center center /  26px 26px no-repeat` }}
            />
            }
            selected={this.state.selectedTab === 'cookbook'}
            onPress={() => {
              this.setState({
                selectedTab: 'cookbook',
              });
             
            }}
          >
           <CookBook />
          </TabBar.Item>,
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menu}) center center /  21px 21px no-repeat` }}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${menuActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="分类"
            key="category"
            selected={this.state.selectedTab === 'category'}
            onPress={() => {
              this.setState({
                selectedTab: 'category',
              });
              this.props.changeSelectedTab('category')
            }}
          >
            <Category />
          </TabBar.Item>,
          <TabBar.Item
            icon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${location}) center center /  21px 21px no-repeat`}}
              />
            }
            selectedIcon={
              <div style={{
                width: '22px',
                height: '22px',
                background: `url(${locationActive}) center center /  21px 21px no-repeat` }}
              />
            }
            title="美食地图"
            key="map"
            selected={this.state.selectedTab === 'map'}
            onPress={() => {
              this.setState({
                selectedTab: 'map',
              });
            }}
          >
            <Map />
          </TabBar.Item>,
          <TabBar.Item
            icon={{uri: more}}
            selectedIcon={{uri: moreActive}}
            title="更多"
            key="more"
            selected={this.state.selectedTab === 'more'}
            onPress={() => {
              this.setState({
                selectedTab: 'more',
              });
            }}
          >
            <More></More>
          </TabBar.Item>
    ]
    return (
      <div style={this.state.fullScreen ? {position: 'fixed', zIndex: 2, height: '100%', width: '100%', top: 0 }: {height: 400}}>
         <TabBar
          unselectedTintColor="#949494"
          tintColor="#000"
          barTintColor="white"
          hidden={this.state.hidden}
          prerenderingSiblingsNumber={Infinity}
        >
          {this.props.checked ? tablItems.map(v => v): tablItems.filter((v, i) => i !== 2)}
        </TabBar>
          <nav>
              <ul>
                  <li>112</li>
              </ul>
          </nav>
      </div>
    )
  }
}

export default Home
