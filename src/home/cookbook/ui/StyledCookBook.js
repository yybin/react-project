import styled from 'styled-components'
import border from '@c/styled/border'
import ellipsis from '@c/styled/ellipsis'

const Container = styled.div `
 header {
     height: .44rem;
     line-height: .44rem;
     text-align: center;
     font-size: 0.16rem;
     color: #fff;
     background: #ee742f;
 }
`

const SwiperWrap = styled.div `
    height: 0;
    font-size: 0;
    padding-bottom: 66.6666667%;
    position: relative;
    .slider.am-carousel {
        position: static !important;
    }
`

const H1Container = border(
    styled.h1 `
        height: .5rem;
        padding-left: .1rem;
        color: #666;
        line-height: .5rem;
        font-weight: normal;
        background: #fff;
    `
)
const HotCateWrap = styled.div `
    > div {
        padding-top: 0.2rem;
        background: #fff;
        .grid-item {
            padding-bottom: .1rem;
            img {
                width: .6rem;
                height: .6rem;
                margin-bottom: .04rem;
                &[src='blank'] {
                    display: none
                }
            }
        }
        .am-grid-item-content {
            padding: 0 !important;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
        }
    }
`

const SutTile = ellipsis(
    styled.p ` `
)

const Top10Wrap = styled.div `
    h1 {
        height: .5rem;
        padding-left: .1rem;
        color: #666;
        line-height: .5rem;
        border-bottom: solid 1px #ccc;
    }
    ul {
        margin-top: 0.1rem;
        display: flex;
        flex-wrap: wrap;
        padding-left: .1rem;
        li {
            padding-right: .1rem;
            width: 50%;
            img {
                width: 100%
            }
            > div:last-child{
                display: flex;
                flex-direction: column;
                height: .6rem;
                background: #fff;
                margin-bottom: .1rem;
                justify-content: center;
                align-items: center;
                > p:first-child {
                    font-size: .18rem;
                }
                > p:last-child {
                    color: #666;
                }
            }
        }
    }
`

export {
    Container,
    HotCateWrap,
    SwiperWrap,
    Top10Wrap,
    SutTile,
    H1Container
}