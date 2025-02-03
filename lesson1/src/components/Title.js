import React from 'react';


const Title = ({title, age, name}) => {
    // console.log(props,'props');
    // const {title, age, name}= props
    console.log(title,'title');

    return (
        <div style={{color:'red'}}>
            {title}
        </div>
    );
};

export default Title;

const sum = (a,b) => {
    return (a+b);
}

console.log(sum(5,6));