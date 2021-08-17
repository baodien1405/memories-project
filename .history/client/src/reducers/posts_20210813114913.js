const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...state, action.payload];

    case "UPDATE": {
      const newPost = action.payload;
      console.log("newPost: ", newPost);
      const newPosts = [...state];
      const postIndex = newPosts.findIndex((post) => post._id === newPost._id);

      if (postIndex >= 0) {
        newPosts[postIndex] = newPost;
        console.log("newPosts: ", newPosts);
      }

      return newPosts;
    }

    case "DELETE": {
      const postId = action.payload;
      const newPosts = state.filter((post) => post._id !== postId);

      return newPosts;
    }

    default:
      return state;
  }
};

export default postsReducer;
