
const ADD_NEW_PRODUCT_LIST = 'ADD_NEW_PRODUCT_LIST'
const FILTER_BY_CHAR = 'FILTER_BY_CHAR'
const SORT_PRODUCT_LIST = 'SORT_PRODUCT_LIST'

export const productListReducer = (state = [], action) => {
    switch(action.type){
        case ADD_NEW_PRODUCT_LIST:
            return action.payload.map(el => ({...el, show: true}))
        case FILTER_BY_CHAR:
            state = state.map(el => ({...el, show: true}))
            return state.map(el => {
                let title = el.title.toLowerCase()
                let input_value = action.payload.toLowerCase()
                if(!title.includes(input_value)){
                    el.show = false
                }
                return el
            })
        case SORT_PRODUCT_LIST:
            if(action.payload === '1'){
            return state.slice().sort((a,b) => a.price - b.price)
            } else if(action.payload === '2'){
            return state.slice().sort((a,b) => b.price - a.price)
            }else  if(action.payload === '0'){
            return state.slice().sort((a,b) => b.id - a.id)
            }
        default:
            return state

    }
}

export const SortProductListAction = (payload) => ({type: SORT_PRODUCT_LIST, payload})
export const FilterByCharAction = (payload) => ({type: FILTER_BY_CHAR, payload})
export const addNewProductListAction = (payload) => ({type: ADD_NEW_PRODUCT_LIST, payload})