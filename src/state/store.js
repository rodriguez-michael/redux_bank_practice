import { createStore } from "redux";
import reducers from "./reducers/index";

export const store = createStore(
  reducers,
  // default state
  {}
)

//store returns key value pairs from combined reducers (reducers index.js)
//combnined reducers takes in all individual reducers