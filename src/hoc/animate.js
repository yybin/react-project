import React, {Component} from 'react'
import { CSSTransition } from 'react-transition-group'

const animate = (WrappedComp) => {
    return class extends Component {
        render() {
            const SIR = 'animate__slideInRight';
            const SIL = 'animate__slideInLeft';
            const SOL = 'animate__slideOutLeft';
            const SOR = 'animate__slideOutRight';
            let state = this.props.location.state
            let { match } = this.props
            let pathname = this.props.location.pathname
            let from = state &&  state.from
            let enterActive = ''
            let exitActive = ''

            switch(true) {
                case from === '/home':
                case from === '/list' && pathname === '/detail':
                    enterActive = SIR;
                    exitActive = SOL;
                    break;
                case from === '/list' && pathname === '/home':
                case from === '/detail' && pathname === '/home':
                case from  === '/detail' && pathname === '/list':
                    enterActive = SIL;
                    exitActive = SOR;
                    break;
                default:
                    break;

            }
            return  <CSSTransition 
                        in={!!match}
                        timeout={1000}
                        classNames={{
                            enter: "animate__animated",
                            enterActive,
                            exit: "animate__animated", 
                            exitActive,
                        }}
                        mountOnEnter={true}
                        unmountOnExit = {true}
                    >
                <WrappedComp {...this.props}/>
            </CSSTransition>
        }
    }
}


export default animate