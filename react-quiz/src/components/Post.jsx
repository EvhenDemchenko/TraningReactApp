import React from 'react';
import '../index.css'

const Post = (props) => {
    return (
        <div className={'list'}>
            <h1>{props.props.id}</h1>
            <h2>{props.props.title}</h2>
            <div>{props.props.text}</div>
        </div>
    );
};

export default Post;
