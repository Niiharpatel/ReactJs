import { DEC_COUNT, INC_COUNT, INC_COUNT_BY_VAL } from "./Constant";

export const incCount = () => {
    return { type: INC_COUNT };
};

export const decCount = () => {
    return { type: DEC_COUNT };
};

export const incCountByVal = (no) => {
    return { type: INC_COUNT_BY_VAL, payload: no };
};
