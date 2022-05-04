import styled from 'styled-components'
import border from '@c/styled/border'

const NavUl = border(styled.ul ``)

const CategoryWrap = styled.div `
    display: flex;
    flex-direction: column;
    height: 100%;
    nav {
        display: flex;
        align-items: center;
        justify-content: center;
        height: .44rem;
        background-color: #ee742f;
        color: #fff;
        font-size: .18rem;
        ul {
            position: relative;
            display: flex;
            width: 1.4rem;
            height: .3rem;
            li {
                width: .7rem;
                line-height: .3rem;
                text-align: center;
                transition: all 300ms ease-in;
                &.active {
                    z-index: 3;
                    color: #ee742f;
                }
                &.slide {
                    position: absolute;
                    left: 0;
                    top: 0;
                    width: .7rem;
                    height: .3rem;
                    z-index: 2;
                    background: #fff;
                    border-radius: .15rem;

                }
                &.slide.right {
                    left: .7rem;
                }
            }
        }
    }
`

const MenuWrap = styled.div `
    overflow: hidden;
    flex: 1;
    display: flex;
    border-top: solid 1px #ccc;
    aside {
        overflow-y: scroll;
        width: .9rem;
        ul {
            li {
                height: .5rem;
                text-align: center;
                line-height: .5rem;
                &.active {
                    background-color: #fff;
                    color: #ee742f;
                    span {
                        display: inline-block;
                        height: 100%;
                        border-bottom: solid 1px #ee742f;
                    }
                }
            }
        }
    }
    section {
        overflow-y: scroll;
        flex: 1;
        padding: .25rem;
        background-color: #fff;
        ul {
            display: flex;
            flex-wrap: wrap;
            li {
                width: 33.33333%;
                height: .45rem;
                text-align: center;
            }
        }
    }

`

export {
    CategoryWrap,
    MenuWrap,
    NavUl
}