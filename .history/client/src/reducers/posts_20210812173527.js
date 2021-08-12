const initialState = [];

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;

    case "CREATE":
      return [...state, action.payload];

    case "UPDATE": {
      // const newPost = action.payload;
      // console.log("newPost: ", newPost);
      // const newPosts = [...state];
      // const postIndex = newPosts.findIndex((post) => post._id === newPost._id);

      // if (postIndex >= 0) {
      //   newPosts[postIndex] = newPost;
      //   console.log("newPosts: ", newPosts);
      // }

      // return newPosts;
      return state.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    }

    default:
      return state;
  }
};

export default postsReducer;
