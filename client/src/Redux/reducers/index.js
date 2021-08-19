import { GET_ONE_RESTAURANT, GET_ALL_RESTAURANTS, GET_RESTAURANT_QUERY, GET_FILTER_TYPE, GET_ORDER_PARAM } from '../constants';


const initialState = {
    activitiesList: [],
    restaurantsList: [],
    queryRestaurantsList: [],
    singleRestaurant: {},
    filterSelection: 'All',
    orderSelection: 'ASC'
}


function rootReducer(state = initialState, action) {
    const { payload, type } = action;

    switch (type) {
        case GET_ONE_RESTAURANT:
            return {
                ...state,
                singleRestaurant: payload
            };
        case GET_ALL_RESTAURANTS:
            return {
                ...state,
                restaurantsList: payload
            };
        case GET_RESTAURANT_QUERY:
            return {
                ...state,
                queryRestaurantsList: payload
            };
            
        case GET_FILTER_TYPE:
            return {
                ...state, 
                filterSelection: payload
            }
        case GET_ORDER_PARAM:
            return {
                ...state, 
                orderSelection: payload
            }
        default:
            return state;
    }
}

export default rootReducer;