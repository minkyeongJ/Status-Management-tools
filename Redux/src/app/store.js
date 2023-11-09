//상태정의
const initialState = {
  darkModeState: false,
};

//액션 타입 정의
const SET_IS_DARK = "SET_IS_DARK";

//액션 생성 함수 정의
export function setIsDark() {
  return {
    type: SET_IS_DARK,
  };
}

//리듀서
export default function reducer(state = initialState, action) {
  switch (action.type) {
    case SET_IS_DARK:
      return {
        ...state,
        darkModeState: !state.darkModeState,
      };
    default:
      return state;
  }
}

// //스토어
// const store = createStore(reducer);

// // 스토어안에 들어있는 상태가 바뀔 때 마다 호출되는 listener 함수
// const listener = () => {
//   const state = store.getState();
//   console.log(state);
// };

// // 구독을 해제하고 싶을 때는 unsubscribe() 를 호출하면 됩니다.
// const unsubscribe = store.subscribe(listener);
