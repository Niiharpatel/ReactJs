import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


const initialState = {
    product: [],
    err: ""
};



export const fetchData = createAsyncThunk("product/fetchData", () => {

    return axios.get('http://localhost:9999/product/getAll').then((resData) => {

        return resData?.data;

    });

});

export const addProduct = createAsyncThunk("product/addProduct", (data) => {
    return axios.post('http://localhost:9999/product/create', data, {
        headers: {
            "Content-Type": "application/json",
            authorization: `Barer ${JSON.parse(localStorage.getItem("token"))}`,
        }
    }).then((resData) => {
        console.log("addProduct  resData: ", resData);

        return resData?.data;

    }).catch((err) => {
        console.log("returnaxios.post  err: ", err.message);

    });
});


export const deleteProduct = createAsyncThunk("product/deleteProduct", ({ id, index }) => {

    return axios.delete(`http://localhost:9999/product/delete/${id}`).then((resData) => {

        console.log("returnaxios.delete  resData: ", resData);
        return index;

    }).catch((err) => {
        console.log(" err:-------->", err.message);
    });
});


export const editProduct = createAsyncThunk("product/editProduct", ({ data, index }) => {
    console.log("editProduct  data: ", data);


    return axios.put(`http://localhost:9999/product/update/${data?._id}`, data).then((resData) => {

        console.log("returnaxios.put  resData: ", resData);

        return { ...resData?.data, index };

    });

});


const productSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        add: (state, { payload }) => { },
        update: (state) => { }
    }, extraReducers: (builder) => {
        builder.addCase(fetchData.fulfilled, (state, { payload }) => {
            state.product = payload?.data;
        }).addCase(fetchData.rejected, (state) => {
            state.err = 'Data not found';

        }).addCase(addProduct.fulfilled, (state, { payload }) => {
            // console.log("builder.addCase  payload: ", payload);
            state.product.unshift(payload?.data);
        }).addCase(addProduct.rejected, (state) => {
            state.err = 'You Enter Wrong Data';

        }).addCase(deleteProduct.fulfilled, (state, { payload }) => {
            console.log("builder.addCase  payload: ", payload);
            state.product = state?.product?.filter((e, i) => i !== payload);
        }).addCase(editProduct.fulfilled, (state, { payload }) => {
            console.log("builder.addCase  payload: ", payload);
            state.product.splice(payload?.index, 1, payload?.data);
        });

    }
});

export default productSlice.reducer;
export const { add, update } = productSlice.actions;