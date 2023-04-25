/**
 * This is a JavaScript function that exports an initial state and a reducer function that handles
 * adding items to a basket and calculates the total price of the basket.
 * @param state - The current state of the application, which includes the basket array.
 * @param action - The action parameter in the reducer function is an object that describes the type of
 * action being performed and any additional data that is needed to perform the action. It is
 * dispatched by the application when a user interacts with the UI or when an asynchronous operation
 * completes. The reducer function then uses the action object to update
 * @returns The code exports an initial state object with an empty basket array, a selector function
 * named `getBasketTotal` that takes a basket array as an argument and returns the total price of all
 * items in the basket, and a reducer function that takes a state and an action as arguments and
 * returns a new state based on the action type.
 */
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