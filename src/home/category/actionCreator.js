
const changeSelectedTab = (selectedTab) => {
    return {
        type: 'changeSelectedTab',
        selectedTab
    }
}

const changeCateType = (cateType) => {
    return {
        type: 'changeCateType',
        cateType
    }
}

const changeCateAside = (cateAside) => {
    return {
        type: 'changeCateAside',
        cateAside
    }
}

export default {
    changeSelectedTab,
    changeCateAside,
    changeCateType
}