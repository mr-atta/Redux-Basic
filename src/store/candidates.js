let initialState = [
  { name: "Tareq", votes: 0 },
  { name: "Suhaib", votes: 0 },
  { name: "Ibrahim", votes: 0 },
];

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "INCREMENT":
      return state.map((candidate) => {
        if (candidate.name === payload.name) {
          return { name: candidate.name, votes: candidate.votes + 1 };
        }
        return candidate;
      });
    case "DISABLE":
      return state.map((candidate) =>
        candidate.name === payload.name
          ? { ...candidate, disabled: true }
          : candidate
      );
    case "RESET":
      return initialState;
    default:
      return state;
  }
};

// we will add the action here, but idealy we need to separate them into their own files
export const increment = (name) => {
  return {
    type: "INCREMENT",
    payload: name,
  };
};

export const disable = (name) => {
  return {
    type: "DISABLE",
    payload: name,
  };
};

export const reset = () => {
  return {
    type: "RESET",
  };
};
