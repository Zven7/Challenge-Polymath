import { GET_ONE_RESTAURANT, GET_ALL_RESTAURANTS, GET_RESTAURANT_QUERY, GET_ORDER_PARAM, GET_FILTER_TYPE, EDIT_ONE_RESTAURANT, DELETE_ONE_RESTAURANT } from '../constants';
import axios from 'axios';


export const getAllRestaurants = () => {
    return (dispatch) => {
        axios.get(`/restaurants`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_ALL_RESTAURANTS, payload: data })
            })
    }
}


export const getOneRestaurant = (id) => {
    return (dispatch) => {
        axios.get(`/restaurants/${id}`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_ONE_RESTAURANT, payload: data })
            })
    }
}

export const getRestaurantQuery = (name) => {
    return (dispatch) => {
        axios.get(`/restaurants?name=${name}`)
            .then(r => r.data)
            .then(data => {
                dispatch({ type: GET_RESTAURANT_QUERY, payload: data })
            })
    }
}

export const addRestaurant = (payload) => {
    return (dispatch) => {
        axios.post("/restaurants", payload)
    };
}

export const editRestaurant = (payload) => {
    return (dispatch) => {
        axios.put(`/restaurants/${payload.resId}`, payload)
    };
}

export const deleteRestaurant = (resId) => {
    return (dispatch) => {
        axios.delete(`/restaurants/${resId}`)
    };
}

export const addReservation = (payload) => {
    return (dispatch) => {
        axios.post(`/reservations?restaurantId=${payload.resId}`, payload)
    };
}

export const getFilterType = (filterType) => {
    return (dispatch) => {
            dispatch({ type: GET_FILTER_TYPE, payload: filterType })
    }  
}

export const getOrderParam = (orderParam) => {
    return (dispatch) => {
        axios.get(`/countries?order=${orderParam}`)
        .then(r => r.data)
        .then(data => {
            dispatch({ type: GET_ALL_RESTAURANTS, payload: data })
        })
        dispatch({ type: GET_ORDER_PARAM, payload: orderParam })
    }  
}