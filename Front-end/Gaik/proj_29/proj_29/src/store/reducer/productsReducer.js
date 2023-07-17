const  initialState = {
    list: [],
    status: 'Loading'
};

const FETCH_ALL = '[PRODUCTS] FETCH_ALL'
const FETCH_ALL_ERROR = '[PRODUCTS] FETCH_ALL_ERROR'
const FILTER = '[PRODUCTS] FILTER'
const SORT = '[PRODUCTS] SORT'
const PRICE = '[PRODUCTS] PRICE'
const RATE = '[PRODUCTS] RATE'

export const fetchALLproductsAction = (payload) => ({type: FETCH_ALL, payload});
export const fetchALLErrorproductsAction = (payload) => ({type: FETCH_ALL_ERROR, payload});
export const productsFilterAction = (payload) => ({type: FILTER, payload});
export const sortProductsAction = (payload) => ({type: SORT, payload});
export const priceProductsAction = (payload) => ({type: PRICE, payload});
export const rateProductsAction = (payload) => ({type: RATE, payload});




export const productsReducer = (state = initialState, action) => {
    if (action.type === FETCH_ALL){
        return {
            list: action.payload.map(el => 
                ({...el, show: {search: true, price: true, rate: true}})),
            status: 'ready'  
        } 
    } else if (action.type === FETCH_ALL_ERROR){
        return {
            status: 'error'
        }
    }else if (action.type === FILTER){
        return {
            ...state,
            list: state.list.map(el => ({...el, show: {
                ...el.show,
                search: el.title.toUpperCase(action.payload).includes(action.payload) 
                     || el.title.toLowerCase(action.payload).includes(action.payload)
                     
            }
        })),
            } 
        }else if (action.type === PRICE){

            const {min, max} = action.payload;

            return {
                ...state,
                list: state.list.map(el => ({...el, show: {
                    ...el.show,
                    price: el.price >= min && el.price <= max
                }
            })),
                } 

        }else if (action.type === RATE){

            // const newList = state.list.map(el. => ({
            //     ...el,
            //     show: {
            //         ...el.show,
            //         rate: action.payload ? (el.rating.rate >= 4) : true
            //     }
            // }))

            state.list = state.list.map(el => {
               el.show.rate = action.payload ? (el.rating.rate >= 4) : true
               return el
            })

            return {...state}
                 
            


        }else if (action.type === SORT){
          if(action.payload === 'price'){
            return {
                ...state,
                list: [...state.list.sort((a,b) => a.price - b.price)]
            }
          }else  if(action.payload === 'rate'){
            return {
                ...state,
                list: [...state.list.sort((a,b) => a.rating.rate - b.rating.rate)]
            }
            
          }else  if(action.payload === 'title'){
            return {
                ...state,
                list: [...state.list.sort((a,b) => a.title.localeCompare(b.title))]
            }
            
          }   
        } 
        return state
    }