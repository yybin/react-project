import { combineReducers } from 'redux'
import { reducer as cookbook } from '../home/cookbook'
import { reducer as home } from '../home'
import { reducer as category } from '../home/category'

const rootReducer = combineReducers({
    cookbook,
    home,
    category
})

export default rootReducer