import React from 'react';
import Post from "./Post";

const Posts = (props) => {
    return (
        <div>
            {props.props.map((item, index) => <Post key={index} props={item}></Post>)}
        </div>
    );
};

export default Posts;
