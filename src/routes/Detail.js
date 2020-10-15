import React from "react";
import { connect } from "react-redux";
import { actionCreators } from "../store";
// import { useParams } from 'react-router-dom';

function Detail(props) {
  // // useParams returns an object of key/value pairs of URL parameters
  // const id = useParams();
  // console.log(id);
    const { toDo, onBtnClick } = props;
    console.log("props",props)
  return (
    <>
      <h1>{toDo?.text}</h1>
      <h5>Created At {toDo?.id}</h5>
      <button onClick={onBtnClick}>DEL</button>
    </>
  );
}

function mapStateToProps(state, ownProps) {
  const {
    match: {
      params: { id },
    },
  } = ownProps;
  console.log(id);
  return { toDo: state.find((toDo) => toDo.id === parseInt(id)) }; //Array.find() : 조건에 만족하는 첫번째 요소를 찾아준다.
}

function mapDispatchToProps(dispatch, ownProps){
    const { match:{ params: { id } } } = ownProps;
    return {
        onBtnClick : () => {
            dispatch(actionCreators.deleteToDo(parseInt(id)))
            window.history.back();
        }
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(Detail);
