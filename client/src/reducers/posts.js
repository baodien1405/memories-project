import {
  FETCH_ALL,
  CREATE,
  DELETE,
  LIKE,
  UPDATE,
} from "../constants/actionTypes";

const postsReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;

    case CREATE:
      return [...state, action.payload];

    case UPDATE:
    case LIKE: {
      const newPost = action.payload;
      const newPosts = [...state];
      const postIndex = newPosts.findIndex((post) => post._id === newPost._id);

      if (postIndex >= 0) {
        newPosts[postIndex] = newPost;
      }

      return newPosts;
    }

    case DELETE: {
      const postId = action.payload;
      const newPosts = state.filter((post) => post._id !== postId);

      return newPosts;
    }

    default:
      return state;
  }
};

export default postsReducer;
