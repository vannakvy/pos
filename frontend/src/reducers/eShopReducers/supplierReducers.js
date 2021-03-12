import {
    SUPPLY_CREATE_FAIL,
    SUPPLY_CREATE_REQUEST,
    SUPPLY_CREATE_SUCCESS,

    SUPPLY_DELETE_FAIL,
    SUPPLY_DELETE_REQUEST,
    SUPPLY_DELETE_SUCCESS,

    SUPPLY_LIST_FAIL,
    SUPPLY_LIST_REQUEST,
    SUPPLY_LIST_SUCCESS,

    SUPPLY_UPDATE_FAIL,
    SUPPLY_UPDATE_REQUEST,
    SUPPLY_UPDATE_SUCCESS
} from '../../constants/eShopConstants/supplierConstants'


const supplierListReducer = (state = { suppliers: [] }, action) => {
    switch (action.type) {
        case SUPPLY_LIST_REQUEST:
            return { loading: true, suppliers: [] }
        case SUPPLY_LIST_SUCCESS:
            return {
                loading: false,
                suppliers: action.payload,
            }
        case SUPPLY_LIST_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}



const supplierDeleteReducer = (state = {}, action) => {
    switch (action.type) {
        case SUPPLY_DELETE_REQUEST:
            return { loading: true }
        case SUPPLY_DELETE_SUCCESS:
            return { loading: false, success: true }
        case SUPPLY_DELETE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

const supplierCreateReducer = (state = {}, action) => {
    switch (action.type) {
        case SUPPLY_CREATE_REQUEST:
            return { loading: true }
        case SUPPLY_CREATE_SUCCESS:
            return { loading: false, success: true, product: action.payload }
        case SUPPLY_CREATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

const supplierUpdateReducer = (state = { supplier: {} }, action) => {
    switch (action.type) {
        case SUPPLY_UPDATE_REQUEST:
            return { loading: true }
        case SUPPLY_UPDATE_SUCCESS:
            return { loading: false, success: true, supplier: action.payload }
        case SUPPLY_UPDATE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}


export { supplierCreateReducer, supplierDeleteReducer, supplierUpdateReducer, supplierListReducer };