import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const fetchProducts = createAsyncThunk(
    'products/fetchProducts',
    async () => {
        const response = await fetch('https://fakestoreapi.com/products')
        const data = await response.json()
        return data
    }
)

export const productsSlice = createSlice({
    name: 'products',
    initialState: {list: []},
    reducers: {
        priceAction(state, {payload}){
            const {min, max} = payload;

            state.list.forEach(el => {
                el.show.price = (el.price >= min && el.price <= max);
           })
        },

        filterAction(state, {payload}){
        state.list.forEach(el => {
            el.show.search = el.title.toLowerCase().includes(payload.toLowerCase())
        })
        },

        sortAction(state, {payload}){
            if(payload === 'price'){
                state.list.sort((a,b) => a.price - b.price)
            }else  if(payload === 'rate'){
                state.list.sort((a,b) => a.rating.rate - b.rating.rate)
            }else  if(payload === 'title'){
                state.list.sort((a,b) => a.title.localeCompare(b.title))
            }
            // 2 variant
            // ({
            //     price: () => state.list.sort((a,b) => a.price - b.price),
            //     rate: () => state.list.sort((a,b) => a.rating.rate - b.rating.rate),
            //     title: () => state.list.sort((a,b) => a.title.localeCompare(b.title))
            // })[payload]()
        }, 

        rateAction(state, {payload}){
            state.list.forEach(el => {
                el.show.rate = payload ? (el.rating.rate >= 4) : true
             })
        },
       
    },

    extraReducers: (builder) => {
        builder
            .addCase(fetchProducts.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchProducts.fulfilled, (state, {payload}) => {
                state.status = 'ready';
                state.list = payload.map(el => 
                    ({...el, show: {search: true, price: true, rate: true}}))
            })
            .addCase(fetchProducts.rejected, (state) => {
                state.status = 'rejected'
            })
        }
})


export const { 
    priceAction, 
    filterAction, 
    sortAction, 
    rateAction 
} = productsSlice.actions;
export default productsSlice.reducer;
