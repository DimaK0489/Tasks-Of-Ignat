const initState = {
    loading: false
};

type loadingACType = {
    type: "LOADING-CHANGE"
    payload: {loading:boolean}
}
type RootState = typeof initState

export const loadingReducer = (state = initState, action: loadingACType): RootState => {
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