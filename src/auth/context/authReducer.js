export const authReducer = (state = {}, action) => {
  switch (action.type) {
    case "[AUTH] Login":
      return {
        ...state,
        logged: true,
        user: action.payload,
      };
    case "[AUTH] Logout":
      return {
        logged: false,
      };
    default:
      return state;
  }
};
