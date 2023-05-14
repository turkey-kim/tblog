// ducks pattern =  액션타입, 액션생성함수, 리듀서 한 파일에 저장하는 패턴 사용

const LOGIN = "isLoggedIn/LOGIN" as const; //액션 타입 선언
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
