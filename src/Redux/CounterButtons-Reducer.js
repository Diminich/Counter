export const SET_MAX_COUNTS = 'SET_MAX_COUNTS';
export const SET_START_COUNTS = 'SET_START_COUNTS';
export const SET_COUNTS = 'SET_COUNTS';
export const IS_DATA_SET = 'SET_COUNTS';
export const IS_ERROR_SET = 'SET_COUNTS';


let initialState = {
    // maxCount: 5,
    // startCount: 0,
    // count: 0,
    // isDataSet: false,
    // isErrorSet: false
};

const counterButtons = (state = initialState, action) => {
    switch (action.type) {
        case SET_MAX_COUNTS:
            return {
                ...state,
                maxCount: action.maxCount,
            };

            case SET_START_COUNTS:
            return {
                ...state,
                startCount: action.startCount,
            };

            case SET_COUNTS:
            return {
                ...state,
                count: action.count,
            };

            case IS_DATA_SET:
            return {
                ...state,
                count: action.isDataSet,
            };

            case IS_ERROR_SET:
            return {
                ...state,
                count: action.isErrorSet,
            }
    }
    return state
};

export default counterButtons;