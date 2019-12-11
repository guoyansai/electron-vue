export default {
    //设置用户信息
    setUserInfo(state, newVal) {
        if (!newVal) {
            state.userInfo = {};
        }
        for (var objName in newVal) {
            state.userInfo[objName] = newVal[objName];
        }
    },
    //点击事件
    setClick(state, newVal) {
        if (newVal) {
            state.click = newVal;
        }
    }
}