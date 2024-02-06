import { DEC_COUNT, INC_COUNT, INC_COUNT_BY_VAL } from "./Constant";

export const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case INC_COUNT:

            return { count: state?.count + 1 };
        case DEC_COUNT:

            return { count: state?.count - 1 };
        case INC_COUNT_BY_VAL:

            return { count: state?.count + action.payload };


        default:
            return state;
    }
};