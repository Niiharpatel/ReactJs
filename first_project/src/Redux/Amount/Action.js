import { INC, DEC } from "./Constant";

export const inc = () => {
    return { type: INC };
};

export const dec = () => {
    return { type: DEC };
};