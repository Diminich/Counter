export const SET_MAX_COUNT = 'SET_MAX_COUNT';
export const SET_START_COUNT = 'SET_START_COUNT';
export const IS_DISABLE_SET = 'IS_DISABLE_SET';
export const SET_COUNT = 'SET_COUNT';
export const COUNT_RESET = 'COUNT_RESET';


let initialState = {
    maxCount: 5,
    startCount: 0,
    count: 0,
    isDataSet: false,
    isErrorSet: false,
    isDisabledSet: false,
    isDisabledInc: false,
    isDisabledReset: false
};

const counterSetting = (state = initialState, action) => {
    switch (action.type) {
        case SET_START_COUNT:
            return {
                ...state,
                startCount: action.startCount,
                isDisabledSet: false,
                isDisabledInc: false,
                isDisabledReset: false
            };

            case SET_COUNT:
                if (state.count === state.maxCount) {
                    return {...state,
                            count: state.maxCount,
                            isDisabledInc: !state.isDisabledInc
                    }
                } else {
                    return  {...state,
                             count: state.count + 1
                    }
                }

            case COUNT_RESET:
            return {
                ...state,
                count: state.startCount,
            };

        case SET_MAX_COUNT:
            return {
                ...state,
                maxCount: action.maxCount,
                isDisabledSet: false,
                isDisabledInc: false,
                isDisabledReset: false,
            };

        case IS_DISABLE_SET:
            return {
                ...state,
                isDisabledSet: !state.isDisabledSet,
                isDataSet: true,
                count: state.startCount
            };

    }
    return state
};

export const setStartCountAC = (startCount) => ({type: SET_START_COUNT, startCount});
export const setMaxCountAC = (maxCount) => ({type: SET_MAX_COUNT, maxCount});
export const setDisabledSetAC = () => ({type: IS_DISABLE_SET});
export const setAddClickAC = () => ({type: SET_COUNT});
export const setCountResetAC = () => ({type: COUNT_RESET});

export default counterSetting;