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

/*
function tick() {
    const element = (
        <div>
            <h1>Hello, world</h1>
            <h2>It is {new Date().toLocaleString()}</h2>
        </div>
    );
    ReactDOM.render(element, document.getElementById('root'));
}
setInterval(tick, 1000);
*/


// ReactDOM.render(
//     element2,
//     document.getElementById('root')
// );

/*
function Clock(props) {
    return (
        <div>
            <h1>Hello, world!</h1>
            <h2>It is {props.date.toLocaleTimeString()}</h2>
        </div>
    );
}

function tick() {
    ReactDOM.render(
        <Clock date={new Date()}></Clock>,
        document.getElementById('root')
    );
}

setInterval(tick, 1000);
*/

function FormatetedDate(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
}

class Clock extends React.Component {
    constructor(props) {
        super(props);
        this.state = {date: new Date(), couter1: 90};

    }

    componentDidMount() {
        console.log('componentDidMount');
        this.timerId = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerId);
    }

    tick() {
        this.setState((state, props) => ({
            date: new Date(),
            comment: 'Hello',
            couter: state.couter1 +  props.increment 
        }));

    }



    render() {
        return (
            <div>
                <FormatetedDate date={this.state.date} />
                <h1>Hello, world!91</h1>
                <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
                <h3>{this.state.couter}</h3>
            </div>
        );
    };
}




ReactDOM.render(
    <Clock increment={12}></Clock>,
    document.getElementById('root')
);