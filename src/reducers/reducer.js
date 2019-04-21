const initialState = {
  user: {},
  repos: []
}

export default function(state = initialState, action) {
	switch (action.type) {
    case "GET_USER_INFO":
      return { ...state, user: action.item }
    case "GET_REPO":
      return { ...state, repos: action.repo }
    default:
      return state
  }
}