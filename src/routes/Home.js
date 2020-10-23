import React, { useState } from "react";
import { connect } from "react-redux";
import ToDo from "../components/ToDo";
import { actionCreators } from "../store";


// store로부터 state를 가져오도록 해야해



function Home({toDos, addToDo}){
    const [text, setText] = useState("");
    function onChange(e){
        setText(e.target.value);
    }
    function onSubmit(e){
        e.preventDefault();
        addToDo(text);
        setText("");
    }
    return (
        <>
            <h1>To Do</h1>
            <form onSubmit={onSubmit}>
                <input type="text" value={text} onChange={onChange} />
                <button>Add</button>
            </form>
            <ul>
                {toDos && toDos.map(toDo => (<ToDo {...toDo} key={toDo.id} />))}
            </ul>
        </>
    ) 
}
//mapStateToProps : Redux state로부터 home(component)에 prop으로써 전달한다는거지
function mapStateToProps(state, ownProps){
    console.log("State",state)
    let arr = state
    localStorage.setItem("toDoData",JSON.stringify(arr))
    return { toDos : state }
}
function mapDispatchToProps(dispatch){
    return {
        addToDo : (text) => dispatch(actionCreators.addToDo(text)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home); //connect: 컴포넌트를 store에 연결, state와 함께!!!

