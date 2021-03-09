import React from 'react';

const Comment = (props) => {
    // console.log(props);
    const{email, body, name} = props.comment
    return (
        <div>
            <h6>Comments are:</h6>
            <p>{body}</p>
            <p>Name: {name}, Email={email}</p>
        </div>
    );
};

export default Comment;