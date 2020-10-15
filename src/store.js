import {createStore} from 'redux';

const ADD = "add";
const DELETE = "delete";

const addToDo = text => {
    return {
        type: ADD,
        text
    }
}

const deleteToDo = id => {
    return {
        type: DELETE,
        id : parseInt(id)
    }
}


const initialData = JSON.parse(localStorage.getItem("toDoData"))

const reducer = (state=initialData, action) => {
    switch(action.type){
        case ADD :
            return [{text:action.text, id:Date.now()}, ...state];
        case DELETE :
            return state.filter(toDo => toDo.id !== action.id);
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

