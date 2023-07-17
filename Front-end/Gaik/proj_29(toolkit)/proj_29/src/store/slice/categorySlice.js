import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchCategory = createAsyncThunk(
    'categories/fetchCategory',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products/categories')
        const data = await response.json()
        return data
    }
)



export const categorySlice = createSlice({
    name: 'products',
    initialState: {list: []},
    reducers: {},

    extraReducers: (builder) => {
        builder
            .addCase(fetchCategory.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchCategory.fulfilled, (state, {payload}) => {
                state.status = 'ready';
                state.list = payload
            })
            .addCase(fetchCategory.rejected, (state) => {
                state.status = 'rejected'
            })
        }
})

export default categorySlice.reducer;