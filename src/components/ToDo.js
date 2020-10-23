import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function ToDo({text, id}){
    return (
        <li>
            <Link to={`/${id}`}>
                {text} 
            </Link>
        </li>
    )
}



export default connect(null,null)(ToDo);