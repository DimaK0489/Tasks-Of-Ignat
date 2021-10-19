import {InitialStateType} from "../HW8";

type SortNameUpTape = {
    type: "sort"
    payload: "up"
}
type SortNameDownTape = {
    type: "sort"
    payload: "down"
}
type SortNameAgeTape = {
    type: "check"
    payload: number
}

type ActionType = SortNameUpTape | SortNameDownTape | SortNameAgeTape

export const homeWorkReducer = (state: InitialStateType, action: ActionType): InitialStateType => {
    switch (action.type) {
        case "sort": {
            const newState = [...state].sort((a,b)=>{
                if(a.name > b.name){
                    return 1
                }
                if(a.name < b.name) {
                    return -1
                }
                return 0
            })

            return action.payload === "up" ? newState : newState.reverse()
        }
        case "check": {

            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
};
