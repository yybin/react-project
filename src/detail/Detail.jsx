import React, { Component } from 'react'
import { NavBar, Icon } from 'antd-mobile'
import { withRouter } from 'react-router-dom'

import {DetailWrap } from './StyledDetail'
import animate from '../hoc/animate'

@withRouter
@animate
class Detail extends Component {
    handleClickLeft = () => {
        let from =  this.props.location.state.from
        this.props.history.push(from, {from: '/detail'})
    }

    render() {
        const title = this.props.location.state && this.props.location.state.title
        return (
            <div>
                <NavBar
                    mode='dark' 
                    icon={<Icon type="left"/>}
                    onLeftClick={this.handleClickLeft}
                    style = {{backgroundColor: '#ee742f'}}
                >
                    {title}
                </NavBar>
                <DetailWrap>
                    <div>
                        <img src="http://s1.cdn.jiaonizuocai.com/videoImg/201510/1311/561c79f4d4e14.jpg/OTAweDYwMA" alt="" />
                    </div>
                    <div className='details'>
                        <h1>{title}</h1>
                        <h3>33333 浏览    33333收藏</h3>
                        <button>收藏</button>
                    </div>
                </DetailWrap>
            </div>
        )
    }
}


export default Detail