const initState = {
    loading: false
};

type loadingACType = {
    type: "LOADING-CHANGE"
    payload: {loading:boolean}
}

export const loadingReducer = (state = initState, action: loadingACType) => {
    switch (action.type) {
        case "LOADING-CHANGE": {
            return {...state,...action.payload};
        }
        default: return state;
    }
};

export const loadingAC = (loading: boolean): loadingACType => {
    return {
        type: "LOADING-CHANGE",
        payload: {loading}
    }
};