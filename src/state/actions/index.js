export const deposit = (amount) => {
  //need this to dispatch the action
  return {
      //action
      type: "deposit",
      payload: amount
  }
}

export const withdraw = (amount) => {
  //need this to dispatch the action
  return {
      //action
      type: "withdraw",
      payload: amount
  }
}