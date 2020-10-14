import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';

ReactDom.render( <App />, document.getElementById('root') )

// -------------Pure Redux : COUNTER------------------------

// import { createStore } from "redux"
// const add = document.getElementById("add")
// const minus = document.getElementById("minus")
// const number = document.querySelector("span")


// number.innerText = 0;

// const ADD = "ADD";
// const MINUS = "MINUS";

// const countModifier = (count = 0, action ) => { //reducer는 data를 modify하는 function

//   switch(action.type){
//     case ADD:
//       return count + 1;
//     case MINUS:
//       return count - 1;
//     default:
//       return count;
//   }
  
// }

// const countStore = createStore(countModifier)

// const onChange = () => {
//   number.innerText = countStore.getState()
// }

// countStore.subscribe(onChange)

// add.addEventListener("click", () => {
//   countStore.dispatch({ type: ADD})
// })

// minus.addEventListener("click", () => {
//   countStore.dispatch({ type: MINUS})
// })




//---------------------Pure Redux : TO DO LIST----------------



// import { createStore } from "redux"

// const form = document.querySelector("form");
// const input = document.querySelector("input");
// const ul = document.querySelector("ul");

// const ADD_TODO = "ADD_TODO";
// const DELETE_TODO = "DELETE_TODO";



// //-------------------actionCreators----------------------------


// const addToDo = text => { //return 값이 reducer의 action에 보내진다!!!!!
//   return {
//     type: ADD_TODO,
//     text
//   }
// }

// const deleteToDo = id => {
//   return {
//     type: DELETE_TODO,
//     id
//   }
// }

//-----------------------------------------------------------------

// const reducer = (state = [], action) => {
//   console.log(action)
//   switch (action.type) {
//   case ADD_TODO: //새로운 state를 create하고 그 새로운 state를 return 하는걸 잊지마
//     const newToDoObj = {text: action.text, id: Date.now()};
//     return [ newToDoObj, ...state, ]; //return state.push(action.text) => mutate 변형되다    이걸하지마라
//   case DELETE_TODO:
//     const cleaned = state.filter(toDo => toDo.id !== action.id); //filter함수는 mutate를 하지않고 새배열을 만든다.
//     return cleaned;
//   default:
//     return state;
//   }
// }

// const store = createStore(reducer);


// store.subscribe(() => console.log(store.getState()))


// //오로지 action을 dispatch하기 위한 용도
// const dispatchAddToDo = text => {
//   store.dispatch(addToDo(text))
// }

// const dispatchDeleteToDo = e => {
//   const id = parseInt(e.target.parentNode.id);
//   store.dispatch(deleteToDo(id))
// }

// const paintToDos = () => {
//   const toDos = store.getState();
//   ul.innerHTML = ""; //list 전체를 비우는 과정
//   toDos.forEach(toDo => {
//     const li = document.createElement("li");
//     const btn = document.createElement("button");
//     btn.innerText = "DEL";
//     btn.addEventListener("click", dispatchDeleteToDo)
//     li.id = toDo.id;
//     li.innerText = toDo.text;
//     li.appendChild(btn);
//     ul.appendChild(li);
    
//   });
// }

// store.subscribe(paintToDos) //state 변할때마다 repaint



// const onSubmit = e => {
//   e.preventDefault();
//   const toDo = input.value;
//   input.value = "";
//   dispatchAddToDo(toDo);
// }


// form.addEventListener("submit", onSubmit);





