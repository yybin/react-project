const defaultState = {
    routerInfo : {
        selectedTab: 'cookbook',
        cateType: 'category',
        cateAside: '热门'
    }
}

const reducer = (state = defaultState, action) => {
    switch(action.type) {
        case 'changeSelectedTab':
            return {
                routerInfo: {
                    ...state.routerInfo,
                    selectedTab: action.selectedTab
                }
            }
        case 'changeCateType': 
            return {
                routerInfo: {
                    ...state.routerInfo,
                    cateType: action.cateType
                }
            }
        case 'changeCateAside': 
            return {
                routerInfo: {
                    ...state.routerInfo,
                    cateAside: action.cateAside
                }
            }
        default: 
            return state
    }
}

export default reducer