import { createStore } from "redux"

const add = document.getElementById("add")
const minus = document.getElementById("minus")
const number = document.querySelector("span")


number.innerText = 0;

const countModifier = (count = 0, action ) => { //reducer는 data를 modify하는 function

  if(action.type === "ADD") {
    return count + 1;
  } else if(action.type === "MINUS") {
    return count - 1;
  } else {
    return count;
  }
  
}

const countStore = createStore(countModifier)

const onChange = () => {
  number.innerText = countStore.getState()
}

countStore.subscribe(onChange)

add.addEventListener("click", () => {
  countStore.dispatch({ type: "ADD"})
})

minus.addEventListener("click", () => {
  countStore.dispatch({ type: "MINUS"})
})