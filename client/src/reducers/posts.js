//reducer is a function that returns a new state
export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH ALL":
      return posts;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};