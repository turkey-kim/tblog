const LOGIN = "isLoggedIn/LOGIN" as const;
const LOGOUT = "isLoggedIn/LOGOUT" as const;

export const login = () => ({
  type: LOGIN,
}); //action 생성 함수

export const logout = () => ({
  type: LOGOUT,
}); //action 생성  함수

type IsLoggedInAction = ReturnType<typeof login> | ReturnType<typeof logout>;

type IsLoggedInState = {
  isLoggedIn: boolean;
};

const initialState: IsLoggedInState = {
  isLoggedIn: false,
};

function isLoggedIn(
  state: IsLoggedInState = initialState,
  action: IsLoggedInAction
) {
  switch (action.type) {
    case LOGIN:
      return { ...state, isLoggedIn: true };
    case LOGOUT:
      return { ...state, isLoggedIn: false };
    default:
      return state;
  }
}

export default isLoggedIn;
