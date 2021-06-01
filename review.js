
<Povider store={store}><App/></Povider>


const reducer = comebineReducer({
    createProductReducer: productCreateReducer
})
const middleware = [thunk]
const intialState={

}
store={
    intialState,
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
}


// context API 
// import StateProvider from StateProvider components 
import {StateProvider} from './Modals/StateProvider'
// import reducer and initialState from reducer component 
import reducer ,{initialState} from '.Modal/reducer'

<StateProvider initialState={initialStatge} reducer={reducer}>
    <App/>
</StateProvider>

// StateProvider components 

import React, {createContext, useContext, useReducer} from "react"
    export const StateContext = createContext();
    export const StateProvider = ({reducer,initialState,children})=>(
        <StateContext.Provider value={useReducer(reducer,initialState)}>
            {children}
        </StateContext.Provider>
    )
        export const useStateValue = ()=> useContext(StateContext);

// Reducer Component 


export const initalState ={
    user:null
}

// action types or constants 
export const actionTypes ={
    SET_USER: "SET_USER"
}

// reducer like in redux
const reducer = (state,action)=>{
    switch(action.action.type){
        case actionTypes.SET_USER:
            return {
                ...state,
                user: action.user
            }
        default:
            return state
    }
}

//using context api 

// import {useStateValue} from StateProvider 

const [{user},dispatch] = useStateValue();
{!user? <Login/>:<h3>`user is : ${user}` </h3>}

