import * as actionType from './../action';

const initialState = {
    counter :0
}

const stackReducer = (state=initialState,action) =>{
    console.log("in stackReducer");
    switch(action.type){
        case actionType.INCREMENT:
            return{
                counter : state.counter+1
            }
        case actionType.DECREMENT:
            return{
                counter : state.counter-1
            }
    }
    return state;
}


export default stackReducer;