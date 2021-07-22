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

class Form extends React.Component {
     handleSubmit(e) {
        e.preventDefault();
        console.log('You clicked submit.');
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <button type="submit">submit</button>
             </form>
        );
    } 
}


class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {isToggleOn: true};

        // 为了在回调中使用 `this`, 这个绑定是必不可少的
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON': 'OFF'}
            </button>
        );
    }
}

class LoggingButton extends React.Component {
    handleClick = () =>  {
        console.log('this is:', this);
    }
    render() {
        return (
            <button onClick={this.handleClick}>
                Click me
            </button>
        );
    }
}

function UserGreeting(props) {
    return <h1>Welcome back!</h1>
}

function GuestGreeting(props) {
    return <h1>Please sign up.</h1>
    
}

function Greeting(props) {
    const isLoggedIn = props.isLoggedIn;
    if (isLoggedIn) {
        return <UserGreeting />;
    }
    return <GuestGreeting />;
}

function LoginButton(props) {
    return (
        <button onClick={props.onClick}>
            Login
        </button>
    );
}

function LogoutButton(props) {
    return (
        <button onClick={props.onClick}>
            Logout
        </button>
    );
}

class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = {isLoggedIn: false};
    }

    handleLoginClick() {
        this.setState({isLoggedIn: true});
    }

    handleLogoutClick() {
        this.setState({isLoggedIn: false});
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;
        let button;
        if (isLoggedIn) {
            button = <LogoutButton onClick={this.handleLogoutClick}></LogoutButton>
        } else {
            button = <LoginButton onClick={this.handleLoginClick}></LoginButton>
        }
        return (
            <div>
                <Greeting isLoggedIn={isLoggedIn}></Greeting>
                {button}
            </div>
        );
    }
}

function Mailbox(props) {
    const unreadMessages = props.unreadMessages;
    const count = 0;
    return (
        <div>
            {count && <h1>Messages: {count}</h1>}
            {/* <h1>Hello!</h1>
            {unreadMessages.length > 0 && 
            <h2>
                You have {unreadMessages.length} unread messages.
            </h2>
            } */}
        </div>
    );
}

const messages = ['React', 'Re: React', 'Re:Re: React'];


function WarningBanner(props) {
    if (!props.warn) {
        return null;
    }

    return (
        <div className="warning">   
            Warning!
        </div>
    );
}

class Page extends React.Component {
    constructor(props) {
        super(props);
        this.state = {showWarning: true};
        this.handleToggleClick = this.handleToggleClick.bind(this);
    }

    handleToggleClick() {
        this.setState(state => ({
            showWarning: !state.showWarning
        }));
    }
    render() {
        return (
            <div>
                <WarningBanner warn={this.state.showWarning}/>
                <button onClick={this.handleToggleClick}>
                    {this.state.showWarning ? 'Hide' : 'Show'}
                </button>
            </div>
        );
    }
}

ReactDOM.render(
    // <Clock increment={12}></Clock>,
    // <Form />,
    // <Greeting  isLoggedIn={true}/>,
    // <LoginControl />,
    // <Mailbox unreadMessages={messages}/>,
    <Page></Page>,
    document.getElementById('root')
);