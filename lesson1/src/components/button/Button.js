import React from 'react';
import classes from './Button.module.css';


const Button = ({ name, color }) => {
    console.log(`Меня зовут ${name}, мне ${color} лет`);

    return (
        <button
            className={`${classes.button} ${classes[color]}`}
        >
            {name}
        </button>
    );
};

export default Button;

const person = {
    name: 'Bakyt',
    age: 18
}

// console.log(person['name']);
// console.log(person.age);
//
// console.log('меня зовут', {name}, 'vyt');

