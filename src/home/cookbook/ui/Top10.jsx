import React from 'react'
import PropTypes from 'prop-types';
import { Top10Wrap, SutTile }  from './StyledCookBook'

const Top10 = (props) => {
    return (
      <Top10Wrap>
          <h1>精品好菜</h1>
          <ul>
             {props.list.length > 0 && props.list.map((item, index) => (<li key={item.id + index} onClick={props.onGotoDetail(item.name)}>
                  <div>
                      <img src={item.img} alt="" />
                  </div>
                  <div>
                    <p>{item.name}</p>
                     <SutTile><span>{item.all_click}</span> 浏览 <span>{item.favorites}</span> 收藏</SutTile>                      
                  </div>
              </li>))}
          </ul>
      </Top10Wrap>
    )
}

Top10.propTypes = {
  list: PropTypes.array
}

export default Top10