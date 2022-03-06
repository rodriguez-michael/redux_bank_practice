// A reducer is a function that receives the current state and an action object, decides how to update the state if necessary, and returns the new state: (state, action) => newState. You can think of a reducer as an event listener which handles events based on the received action (event) type.

const accountReducer = (state = 0, action) => {
  //read action and return appropriate state
  switch (action.type){
    case "deposit":
      return state + action.payload;
    case "withdraw":
      return state - action.payload;
    default:
      return state
  }

}

export default accountReducer;