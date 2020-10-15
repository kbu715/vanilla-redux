import {createStore} from 'redux';
import {createAction} from '@reduxjs/toolkit';


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
const reducer = (state=initialToDoList, action) => {
    switch(action.type){
        case addToDo.type :
            return [{text:action.payload, id:Date.now()}, ...state];
        case deleteToDo.type :
            return state.filter(toDo => toDo.id !== action.payload);
        default :
            return state;
    }
}
const store = createStore(reducer);

export const actionCreators = {
    addToDo,
    deleteToDo
}

export default store;
