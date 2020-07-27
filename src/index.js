import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")

const countModifier = (count = 0, action ) => { //reducer는 data를 modify하는 function
  // console.log(action)
  console.log(count, action)
  if(action.type === "ADD") {
    return count + 1;
  } else if(action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
  
}

const countStore = createStore(countModifier)

// console.log(countStore.getState())

countStore.dispatch({ type : "ADD" }) //message를 reducer에게 전송해준다.
countStore.dispatch({ type : "ADD" })
countStore.dispatch({ type : "ADD" })
countStore.dispatch({ type : "ADD" })
countStore.dispatch({ type : "MINUS" })

console.log(countStore.getState());
