import React from 'react';
import {useState} from 'react';
import Posts from "./Posts";

const Counter = (props) => {
    const [counter, setCounter] = useState(0);
    return (
        <div>
            <div>
                <div>
                    {counter}
                </div>
                <button onClick={() => setCounter(counter + 1)}>
                    add
                </button>
                <button onClick={() => setCounter(counter - 1)}>
                    remove
                </button>
            </div>
            <Posts props={props.props}/>

        </div>
    );
};

export default Counter;
