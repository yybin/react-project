import {LOADDATA} from './actionTypes'
import { get } from '@/utils/http'

const loadDataSync = list => {
    return {
        type: LOADDATA,
        list
    }
}

const loadDataAsync = () => {
    return async (dispatch) => {
       let result = await get({
           url: '/api/list'
       })
       dispatch(loadDataSync(result.data.data))
    }
}

export default {
    loadDataSync,
    loadDataAsync
}