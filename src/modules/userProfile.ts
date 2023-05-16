// ducks pattern =  액션타입, 액션생성함수, 리듀서 한 파일에 저장하는 패턴 사용

const SET_USER_PROFILE = "userProfile/SET_USER_PROFILE" as const;
const CLEAR_USER_PROFILE = "userProfile/SET_USER_PROFILE" as const;

export const setUserProfile = (userProfile: {
  id: string;
  nickname: string;
}) => ({
  type: SET_USER_PROFILE,
  payload: userProfile,
}); //action 생성 함수

export const clearUserProfile = (userProfile: null) => ({
  type: CLEAR_USER_PROFILE,
  payload: userProfile,
}); //action 생성 함수

type userProfileAction =
  | ReturnType<typeof setUserProfile>
  | ReturnType<typeof clearUserProfile>;

interface UserProfile {
  id: string;
  nickname: string;
}

const initialState: UserProfile | null = null;

function userProfile(state = initialState, action: userProfileAction) {
  switch (action.type) {
    case SET_USER_PROFILE:
      return action.payload;
    case CLEAR_USER_PROFILE:
      return action.payload;
    default:
      return state;
  }
}

export default userProfile;
