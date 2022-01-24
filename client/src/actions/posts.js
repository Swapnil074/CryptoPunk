import * as api from "../api";

//Action creators are functions that return action objects
export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts(); //gets the data from the api and storing it in data
    dispatch({ type: "FETCH_ALL", payload: data }); //dispatch the action with data as payload, payload is the data that we want to send to the reducer
  } catch (error) {
    console.log(error.message);
  }
};

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post); //sending the new post to the api and storing it in data
    dispatch({ type: "CREATE", payload: data }); //dispatch the action with data as payload
  } catch (error) {
    console.log(error);
  }
};
