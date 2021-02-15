import {

    PURCHASE_LIST_REQUEST,
    PURCHASE_LIST_SUCCESS,
    PURCHASE_LIST_FAIL,

    PURCHASE_CREATE_REQUEST,
    PURCHASE_CREATE_SUCCESS,
    PURCHASE_CREATE_FAIL,

    PURCHASE_UPDATE_REQUEST,
    PURCHASE_UPDATE_SUCCESS,
    PURCHASE_UPDATE_FAIL,

    PURCHASE_DELETE_REQUEST,
    PURCHASE_DELETE_SUCCESS,
    PURCHASE_DELETE_FAIL
} from '../../constants/eShopConstants/puchaseConstants'



const purchaseListReducer = (state = { purchases: [] }, action) => {
    switch (action.type) {
        case PURCHASE_LIST_REQUEST:
            return { loading: true, purchases: [] }
        case PURCHASE_LIST_SUCCESS:
            return {
                loading: false,
                purchases: action.payload.products,
                pages: action.payload.pages,
                page: action.payload.page,
            }
        case PURCHASE_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

const purchaseDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case PURCHASE_DELETE_REQUEST:
            return { loading: true }
        case PURCHASE_DELETE_SUCCESS:
            return { loading: false, success: true }
        case PURCHASE_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

const purchaseCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case PURCHASE_CREATE_REQUEST:
            return { loading: true }
        case PURCHASE_CREATE_SUCCESS:
            return { loading: false, success: true, purchase: action.payload }
        case PURCHASE_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

const purchaseUpdateReducer = (state = { purchase: {} }, action) => {
    switch (action.type) {
        case PURCHASE_UPDATE_REQUEST:
            return { loading: true }
        case PURCHASE_UPDATE_SUCCESS:
            return { loading: false, success: true, purchase: action.payload }
        case PURCHASE_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export { purchaseCreateReducer, purchaseDeleteReducer, purchaseUpdateReducer, purchaseListReducer };