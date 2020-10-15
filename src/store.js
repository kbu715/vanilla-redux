import {createStore} from 'redux';
import {createAction, createReducer} from '@reduxjs/toolkit';


// 1. 기본 방법

// const ADD = "add";
// const DELETE = "delete";

// const addToDo = text => {
//     return {
//         type: ADD,
//         text
//     }
// }

// const deleteToDo = id => {
//     return {
//         type: DELETE,
//         id : parseInt(id)
//     }
// }



// 2. Toolkit 사용 방법

const addToDo = createAction("ADD");
const deleteToDo = createAction("DELETE");


let initialToDoList = JSON.parse(localStorage.getItem("toDoData"))
// 1. 기본 방법

/* const reducer = (state=initialToDoList, action) => {
    switch(action.type){
        case addToDo.type :
            return [{text:action.payload, id:Date.now()}, ...state];
            case deleteToDo.type :
                return state.filter(toDo => toDo.id !== action.payload);
                default :
                return state;
            }
        } */


// 2. createReducer 방법

const reducer = createReducer(initialToDoList, { // createReducer : 2가지 옵션이 있다. 새로운 state를 return해도 되고 state를 mutate 할 수 있다.
    //Redux툴킷과 immer가 대신  return [{text:action.payload, id:Date.now()}, ...state]; 이 작업을 해준다.
    [addToDo] : (state, action) => {
        state.push({text:action.payload, id:Date.now()});
    },
    [deleteToDo] : (state, action) => state.filter(toDo => toDo.id !== action.payload)
})

const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;

