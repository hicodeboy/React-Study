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

const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map((number) => number * 2);
console.log(doubled);

function ListItem(props) {
    return <li>{props.value}</li>
}

const listItems = numbers.map((number) => 
    <li>{number}</li>
);


// function NumberList(props) {
//     const numbers = props.numbers;
//     const listItems = numbers.map((number) => 
//         <li key={number.toString()}>{number}</li>
//     );
//     return (
//         <ul>{listItems}</ul>
//     );
// }

function Blog(props) {
    const sidebar = (
        <ul>
            {props.posts.map((post) => 
            <li key={post.id}>
                {post.title}
            </li>
            )}
        </ul>
    );
    const content = props.posts.map((post) => 
                <div key={post.id}>
                    <h3>{post.id}</h3>
                    <p>{post.content}</p>
                </div>
    );
    return (
        <div>
            {sidebar}
            <hr />
            {content}
        </div>
    );
}

// const posts = [
//     {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
//     {id: 2, title: 'Installation', content: 'You can install React from npm.'}
//   ];

function NumberList(props) {
      const numbers = props.numbers;
   return (
     <ul>
        {numbers.map((number) =>
          <ListItem key={number.toString()}
                    value={number} />
        )}
      </ul>
    );
}

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: ''};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('提交的名字' + this.state.value);
        event.preventDefault();
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    名字：
                    <input type='text' value={this.state.value} onChange={this.handleChange}>
                    </input>
                </label>
                <input type='submit' value="提交"></input>
            </form>
        );
    }
}


class EssayForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: '请撰写一篇关于你喜欢的 DOM 元素的文章.'
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('提交的文章 '  + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    文章：
                    <textarea value={this.state.value} onChange={this.handleChange}></textarea>
                </label>
                <input type="submit" value="提交"></input>
            </form>
        );
    }
}

class FlavorForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {value: 'coconut'};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('你喜欢的风味是：' + this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    选择你喜欢的风味：
                    <select value={this.state.value} onChange={this.handleChange}>
                        <option value="葡萄柚">葡萄柚</option>
                        <option value="lime">酸橙</option>
                        <option value="coconut">椰子</option>
                        <option value="mango">芒果</option>
                    </select>
                </label>
                <input type="submit" value="提交"></input>
            </form>
        );
    }
}

class Reservation extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            inGoing: true,
            numberOfGuests: 2
        };
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type == 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        return (
            <form>
                <label>
                    参与：
                    <input name="isGoing" type="checkbox" checked={this.state.isGoing}
                    onChange={this.handleInputChange}>
                    </input>
                </label>
                <br></br>
                <label>
                    来宾人数：
                    <input name="numberOfGuests" 
                    type="number" 
                    value={this.state.numberOfGuests} 
                    onChange={this.handleInputChange}>
                    </input>
                </label>
            </form>
        );
    }
}

function BoilingVerdict(props) {
    if (props.celsius >= 100) {
        return <p>The water would boil.</p>
    }
    return <p>The water would not boil.</p>
}



const scaleNames = {
    c: 'Celsius',
    f: 'Fahrenheit'
};

class TemperatureInput extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        // this.setState({temperature: e.target.value});
        this.props.onTemperatureChange(e.target.value);
    }

    render() {
        // const temperature = this.state.temperature;
        const temperature = this.props.temperature;
        const scale = this.props.scale;
        return (
            <fieldset>
                <legend>Enter temperature in {scaleNames[scale]};</legend>
                 <input value={temperature} 
                 onChange={this.handleChange}>
                </input>
            </fieldset>
        );
    }
}

class Calculator extends React.Component {
    constructor(props) {
        super(props);
        // this.handleChange = this.handleChange.bind(this);
        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
        this.state = {temperature: '', scale: 'c'};
    }

    handleCelsiusChange(temperature) {
        this.setState({scale: 'c', temperature});
    }

    handleFahrenheitChange(temperature) {
        this.setState({scale: 'f', temperature});
    }

    // handleChange(e) {
    //     this.setState({temperature: e.target.value});
    // }

    render() {
        const scale = this.state.scale;
        const temperature = this.state.temperature;
        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

        return (
            <div>
                <TemperatureInput scale="c"
                temperature={celsius}
                onTemperatureChange={this.handleCelsiusChange}>
                </TemperatureInput>
                <TemperatureInput 
                scale="f" 
                temperature={fahrenheit}
                onTemperatureChange={this.handleFahrenheitChange}>
                </TemperatureInput>
                <BoilingVerdict celsius={parseFloat(celsius)}></BoilingVerdict>
            </div>
        );
        // return (
        //     // <fieldset>
        //     //     <legend>Enter temperature in Celsius;</legend>
        //     //     <input value={temperature} onChange={this.handleChange}></input>
        //     //     <BoilingVerdict celsius={parseFloat(temperature)}></BoilingVerdict>
        //     // </fieldset>
        //     <div>
        //         <TemperatureInput scale='c'></TemperatureInput>
        //         <TemperatureInput scale='f'></TemperatureInput>
        //     </div>
        // );
    }
}

function toCelsius(fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
    const input = parseFloat(temperature);
    if (Number.isNaN(input)) {
        return '';
    }
    const output = convert(input);
    const rounded = Math.round(output * 1000) / 1000;
    return rounded.toString();
}

function FancyBorder(props) {
    return (
        <div className={'FancyBorder FancyBorder-' + props.color}>
            {props.children}
        </div>
    );
}
function Dialog(props) {
    return (
        <FancyBorder color="blue">
            <h1 className="Dialog-title">
                {props.title}
            </h1>
            <p className="Dialog-message">
                {props.message}
            </p>
            {props.children}
        </FancyBorder>
    );
}

// function WelcomeDialog() {
//     return (
//         <FancyBorder color="blue">
//             <h1 className="Dialog-title">
//                 Welcome
//             </h1>
//             <p className="Dialog-message">
//                 Thank you for visiting our spacecraft!
//             </p>
//         </FancyBorder>
//     );
// }


  function WelcomeDialog() {
    return (
      <Dialog
        title="Welcome"
        message="Thank you for visiting our spacecraft!" />
    );
  }

  class SignUpDialog extends React.Component {
      constructor(props) {
          super(props);
          this.handleChange = this.handleChange.bind(this);
          this.handleSignUp = this.handleSignUp.bind(this);
          this.state = {login: ''}
      }

      render() {
          return (
              <Dialog title="Mars Exploration Program"
                        message="How should we refer to you?">
                    <input value={this.state.login}
                            onChange={this.handleChange}>
                    </input>
                    <button onClick={this.handleSignUp}>
                        Sign Me Up!
                    </button>
              </Dialog>
          );
      }

      handleChange(e) {
          this.setState({login: e.target.value});
      }

      handleSignUp(e) {
          alert(`Welcome aboard, ${this.state.login}!`);
      }
  }

ReactDOM.render(
    // <Clock increment={12}></Clock>,
    // <Form />,
    // <Greeting  isLoggedIn={true}/>,
    // <LoginControl />,
    // <Mailbox unreadMessages={messages}/>,
    // <Page></Page>,
    // <ul>{listItems}</ul>,
    // <NumberList numbers={numbers} />,
    // <Blog posts={posts}></Blog> ,
    // <NameForm></NameForm>,
    // <EssayForm></EssayForm>,
    // <FlavorForm></FlavorForm>,
    // <Reservation></Reservation>,
    // <Calculator></Calculator>,
    // <WelcomeDialog></WelcomeDialog>,
    <SignUpDialog></SignUpDialog>,
    document.getElementById('root')
);

// ReactDOM.render(<input value="hi"></input>, document.getElementById('root'));
// setTimeout(() => {
//     ReactDOM.render(<input value={null}></input>, document.getElementById('root'));
// }, 1000);