export const initialState = {
    basket:[],
}
//selector

export const getBasketTotal = (basket) => {
    return basket?.reduce((amount,item) => item.price + amount,0)
}
const reducer = (state,action) => {
    console.log(action)
    switch(action.type) {
        case 'Add_To_BASKET':
            return {
                ...state,
                basket:[...state.basket,action.item],
            } 
        default:
            return state;
    }
}
export default reducer;