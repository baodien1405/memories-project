const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...state, action.payload];

    case "UPDATE": {
      const newPost = action.payload;
      const postIndex = state.findIndex((post) => post._id === newPost.id);

      const newPosts = [...state];
      if (postIndex >= 0) {
        newPosts[postIndex] = newPost;
      }

      return newPosts;
    }

    default:
      return state;
  }
};

export default postsReducer;
