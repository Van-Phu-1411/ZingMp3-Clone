import actionType from "../actions/actionType";
const initState = {
  homeData: [],
  test: "hello world",
};
const appReducers = (state = initState, action) => {
  switch (action.type) {
    case actionType.GET_HOME:
      return state;

    default:
      return state;
  }
};
export default appReducers;
