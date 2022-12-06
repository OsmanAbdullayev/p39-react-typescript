import React, { useReducer } from "react";

type CounterState = {
  count: number;
}

type UpdateAction = {
  type: "increment" | "decrement"
  payload: number
}

type ResetAction = {
  type: "reset"
}

type CounterAction =  UpdateAction | ResetAction;

const initialState = { count: 0 };

const myReducer = (state: CounterState, action: CounterAction) => {
	switch (action.type) {
		case "increment":
      return {count: state.count + action.payload}
		case "decrement":
      return {count: state.count - action.payload}
    case "reset":
      return {count: 0}
      

		default:
      return {count: state.count}
	}
};

const Home = () => {
  const [state, dispatch] = useReducer(myReducer, initialState)
	return (
		<div className="container d-flex justify-content-center align-items-center flex-column">
			<h1 className="text-center my-2">
				Practising <span className="fst-italic">"useReducer"</span>
			</h1>
			<div className="counter mt-3">
				<button className="btn btn-dark px-3"
        onClick={()=>{
          dispatch({type:"decrement", payload: 2})
        }}>
					-
				</button>
				<span className="p-3">{state.count}</span>
				<button className="btn btn-dark"
        onClick={()=>{
          dispatch({type:"increment", payload: 2})
        }}>+</button>
        <button className="btn btn-danger ms-2" onClick={
          ()=> {
            dispatch({type:"reset"})
          }
        }>Reset</button>
			</div>
		</div>
	);
};

export default Home;
