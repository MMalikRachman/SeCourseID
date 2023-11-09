import { createAsyncThunk } from "@reduxjs/toolkit";
import { httpService } from "../../utils/service";

export const getAll = createAsyncThunk('feat/getAllProducts', async () => {
    try {
        const response = await httpService.get('/productname');
        return response.data;
    } catch (error) {
        throw error;
    }
})

export const getDetail = createAsyncThunk('feat/getDetailProduct', async (productId) => {
    try {
        const response = await httpService.get(`/productname/${productId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
})