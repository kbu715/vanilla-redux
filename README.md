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


=>



if대신 switch 쓰자

switch(action.type) {
    case "ADD" :
        return count + 1;
    case "MINUS" :
        return count - 1;
    default :
        return count;
}



action은 무조건 type이 있어야한다!!


subscribe는 우리에게 store안에 있는 변화들을 알 수 있게 해줘

const onChange = () => {
    console.log("there was a change!!!")
}

store.subscribe(onChange);






state를 mutate(변형) 해서는 안돼 (array.push(action.text)와 같은 것은 변형이다.)

return [...state, {text: action.text}] : 새 state를 return 시켜줘야 한다.!!!!! 중요!!!