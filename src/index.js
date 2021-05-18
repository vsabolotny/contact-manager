import React from 'react';
import ReactDOM from 'react-dom';
import PeopleList from './components/PeopleList';
import AddPersonForm from './components/AddPersonForm';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import './style.css';

const initialState = {
  contacts: ["James Smith", "Thomas Anderson", "Bruce Wayne"] 
};

// Reducer function
function reducer(state = initialState, action) {
  switch(action.type) {
    case 'ADD_PERSON':
      return {...state, contacts: [...state.contacts, action.data]}
    case 'REMOVE_PERSON':
      let contactList = state.contacts.filter(function(elem){ 
        return elem !== action.data; 
      }) 
      return {...state, contacts: [...contactList]}
    default:
      return state;
  }
}

const store = createStore(reducer);
ReactDOM.render(
  <Provider store={store}>
    <AddPersonForm />
    <PeopleList />
  </Provider>,
  document.getElementById('root')
);

/**
let name = "Bruce Wayne";
let contactlist = ["James Smith", "Thomas Anderson", "Bruce Wayne"];
contactlist = contactlist.filter(function(elem){ 
  console.log(elem);
  return elem !== name; 
}) 
console.log(contactlist);
*/

/** Contact Manager v1

import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './style.css';

function AddPersonForm(props) {
  const [ person, setPerson ] = useState('');
    
  function handleChange(e) {
    setPerson(e.target.value);
  }
    
  function handleSubmit(e) {
    if(person !== '') {
      props.handleSubmit(person);
      setPerson('');
    }
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" 
        placeholder="Add new contact" 
        onChange={handleChange} 
        value={person} />
      <button type="submit">Add</button>
    </form>
  );
}

function PeopleList(props) {

  function handleOnClick(val) {
    console.log(val);
    props.handleOnClick(val);
  }

  const arr = props.data;
  const listItems = arr.map((val, index) =>
    <li key={index} onClick={() => handleOnClick(val)}>{val}</li>
  );
  return <ul>{listItems}</ul>;
}

function ContactManager(props) {
  const [contacts, setContacts] = useState(props.data);

  function addPerson(name) {
    setContacts([...contacts, name]);
  }

  function removePerson(name) {
    console.log(name);
    setContacts(
      contacts.filter(function(elem){ 
        return elem !== name; 
      })
    );
    // setContacts([]);
  }

  return (
    <div>
      <AddPersonForm handleSubmit={addPerson} />
      <PeopleList data={contacts} handleOnClick={removePerson} />
    </div>
  );
}

const contacts = ["James Smith", "Thomas Anderson", "Bruce Wayne", "Bruce Willias"];

ReactDOM.render(
  <ContactManager data={contacts} />, 
  document.getElementById('root')
);

-- 

function AddForm() {
  const [sum, setSum] = useState(0);
  const [num, setNum] = useState(0);

  function handleChange(e) {
    setNum(e.target.value);
  }

  function handleSubmit(e) {
    setSum(sum + Number(num));
    e.preventDefault();
  }

  return <form onSubmit={handleSubmit}>
  <input type="number" value={num} onChange={handleChange} />
  <input type="submit" value="Add" />
  <p> Sum is {sum} </p>
  </form>;
}

const el = <AddForm />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);

--

function Converter() {
  const [km, setKm] = useState(0);

  function handleChange(e) {
    setKm(e.target.value);
  }
  function convert(km) {
    return (km/1.609).toFixed(2);
  }

  return <div>
  <input type="text" value={km} onChange={handleChange} />
  <p> {km} km is {convert(km)} miles </p>
  </div>;
}

const el = <Converter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);

--
 
class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({counter: this.state.counter + 1});
  }
  componentDidMount() {
    this.setState({counter: 0});
  }
  componentDidUpdate() {
    alert("Number of clicks: " + this.state.counter);
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const el = <Counter />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);

--

function Hello() {
  const [name, setName] = useState("David");

  function increment(name) {
    setName(name);
  }

  return <dev>
    <h1>Hello {name}.</h1>
  </dev>;
}

const el = <Hello />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);

--

class Counter extends React.Component {
  state = {
    counter: 0
  }
  increment = () => {
    this.setState({
      counter: this.state.counter + 1
    });
  }
  render() {
    return <div>
    <p>{this.state.counter}</p>
    <button onClick={this.increment}>Increment</button>
    </div>;
  }
}

const el = <Counter />;
ReactDOM.render(
  el, 
  document.getElementById('root')
);

--

class Item extends React.Component {
  render() {
    return <div className="item">
    <b>Name:</b> {this.props.name} <br />
    <b>Price:</b> ${this.props.price}
    </div>;
  }
}

function App() {
  return <div>
    <Item name="Cheese" price="4.99" />
    <Item name="Bread" price="1.5" />
    <Item name="Ice cream" price="24" />
  </div>;
}

const el = <App />; 
ReactDOM.render(
  el, 
  document.getElementById('root')
);

--

const name = "Vlad";
const user = {id:123, username:"Vlad"};

ReactDOM.render(
  <h1 id={user.id}> Hello, {user.username}!</h1>,
  document.getElementById('root')
);

ReactDOM.render(
  <h1>Hello, REACT!</h1>,
  document.getElementById('test')
);

let counter = 0;

function show() {
  counter++;
  const el = <p>{counter}</p>;
  ReactDOM.render(
    el, document.getElementById('counter')
  );
}

setInterval(show, 1000);

function Hello(user) {
  return <h1>Welcome {user.username}. {user.id}</h1>;
}
class App extends React.Component {
  render() {
    return <div>
      <Hello username="David" id="1" />
      <Hello username="Marti" id="2" />
      <h2>Bla - {this.props.name}</h2>
    </div>
    ;
  }
}
const el = <App name="wuhi" />; 
ReactDOM.render(
  el, 
  document.getElementById('123')
);
*/