let initialState = {
  totalVotes: 0,
};

// here will add the reducer
// a reducer will take the old state and return the new state
// also a reducer will an action as a second paramter.

// we pass as default state value the initialState, this will be used
// the first time we run the app, since the state will be undefined.
export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "INCREMENT":
      return payload.disabled
        ? state
        : { ...state, totalVotes: state.totalVotes + 1 };
    case "RESET":
      return initialState;
    default:
      return state;
  }
};
