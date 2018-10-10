const ADD_POST = "ADD_POST";

const initialState = [
  { id: 1, title: "Redux test post 1" },
  { id: 2, title: "Redux test post 2" },
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
