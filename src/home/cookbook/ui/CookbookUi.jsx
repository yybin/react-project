import React from 'react';
import PropTypes from 'prop-types'
import memoizeOne from 'memoize-one';
import { Container } from './StyledCookBook'
import Search from '@c/search/Search'

import HotCate from './HotCate'
import Swiper from './Swiper'
import Top10 from './Top10'

const CookBookUi = (props) => {
    const swiper = memoizeOne(list => list.slice(0, 5))
    const top10 = memoizeOne(list => list.slice(0, 10))
   
    return (
        <Container>
            <header>美食大全</header>
            <Swiper  list={swiper(props.list)} onGotoDetail={props.onGotoDetail} />
            <Search
                outerBg="#f5f5f9"
                innerBg = "#fff"
                hasborder={true} 
                radius={0.06}
                color="#ee742f"
            />
            <HotCate />
            <Top10 list={top10(props.list)} {...props}/>
        </Container>
    )
}

// 函数式组件绑定类型检查
CookBookUi.propTypes = {
    list: PropTypes.array
}
export default CookBookUi