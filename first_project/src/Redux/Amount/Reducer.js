import { INC, DEC } from "./Constant";

export const amountReducer = (state = { amount: 0 }, action) => {
    if (action.type === INC) {
        return { amount: state.amount + 1 };
    } else if (action.type === DEC) {
        return { amount: state.amount - 1 };
    }
    return state;
};