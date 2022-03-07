export const deposit = (amount) => {
  //need this to dispatch the action
  return (dispatch) => {
    dispatch({
      //action
      type: "deposit",
      payload: amount
    })
  }
}

export const withdraw = (amount) => {
  //need this to dispatch the action
  return (dispatch) => {
    dispatch({
      //action
      type: "withdraw",
      payload: amount
    })
  }
}