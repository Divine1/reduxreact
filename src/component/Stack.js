import React from 'react';
import {connect} from 'react-redux';
import * as action from './../store/action';

class Stack extends React.Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div>
                <div>Stack</div>
                <div>{this.props.counter}</div>
                <button onClick={() =>this.props.incrementCounter()}>increment</button>
                <button onClick={() =>this.props.decrementCounter()}>decrement</button>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    return{
        counter : state.sr.counter
    }
}
const mapDispatchToProps = (dispatch)=>{
    return{
        incrementCounter : ()=>dispatch({type :action.INCREMENT}),
        decrementCounter : ()=>dispatch({type :action.DECREMENT})
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(Stack);