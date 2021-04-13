export type ThemeStateType = {
    theme: string,
    themes: Array<string>
}

export  const initState: ThemeStateType = {
    theme: 'some',
    themes: ['dark', 'red', 'some', "blue"]
};

export const themeReducer = (state:ThemeStateType =  initState, action: ChangeActionType): ThemeStateType => {
    switch (action.type) {
        case 'CHANGE_COLOR': {
            return {
                ...state,
                theme: action.theme
            };
        }
        default:
            return state;
    }
};

type ChangeActionType = {
    type: 'CHANGE_COLOR',
    theme: string
}
export const changeThemeC = (theme: string): ChangeActionType => ({type: 'CHANGE_COLOR', theme})