# Vanilla-Redux

Learning Vanilla-Redux and React-Redux


store

reducer

action : redux에서 function을 부를 때 쓰는 두번째 parameter


그래서 어떻게 reducer에게 action을 보낼 수 있지?

store.dispatch({ type : "HELLO" }) 이런식으로 보낸다.

const reducer = (state, action) => {
    if(action.type === "HELLO"){
        ...
    }
}