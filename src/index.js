import React from 'react';
import ReactDOM from 'react-dom';

function formatName(user) {
    return user.firstName + ' ' + user.lastName;
}

const user = {
    firstName: 'Harper',
    lastName: 'Perez'
};

function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}</h1>
    }
    return <h1>Hello, Stranger</h1>;
}

const element = <h1>Hello, {getGreeting(null)}</h1>;

// const element = <div tabIndex="0"></div>
// const element = <img src={user.avatarUrl}></img>

const element1 = (
    <div>
        <h1>Hello</h1>
        <h2>Good to see you here.</h2>
    </div>    
);

const title = 'sss';
const element2 = (
    <div>
        <h1>Hello</h1>
        <h2>{title}</h2>
    </div>    
); 

ReactDOM.render(
    element2,
    document.getElementById('root')
);