import { ADD_USER } from "./Constant";

export const addUser = (data) => {
    return { type: ADD_USER, payload: data };
};
