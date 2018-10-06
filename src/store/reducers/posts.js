const ADD_POST = "ADD_POST";

const initialState = [
  { id: 1, title: "First post" },
  { id: 2, title: "Second post" },
];

const posts = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return;
    default:
      return state;
  }
};

export default posts;
