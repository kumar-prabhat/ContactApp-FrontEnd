import React, { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Navbar from './components/Navbar';
import Landing from './components/Landing';
import Contacts from './components/Contacts';
import ContactDetails from './components/ContactDetails';
import Message from './components/Message';
import MessageHistory from './components/MessageHistory';

const App = () => {
  const contactList = [{
    id: 1,
    name: "Prabhat Kumar",
    mobile: "+918986790869"
},
{
    id: 2,
    name: "Kisan Network",
    mobile: "+919810153260"
},
{
    id: 3,
    name: "Shubham Kumar",
    mobile: "+919403903724"
},
{
    id: 4,
    name: "Sachin Kumar",
    mobile: "+919008810131"
},
{
    id: 5,
    name: "Roshan Kumar",
    mobile: "+918553901920"
},
{
  id: 6,
  name: "Rahul Kumar",
  mobile: "+918986790869"
},
{
  id: 7,
  name: "Samir Kumar",
  mobile: "+919810153260"
},
{
  id: 8,
  name: "Kunal Kumar Puri",
  mobile: "+919403903724"
},
{
  id: 9,
  name: "Shiv Kumar",
  mobile: "+919008810131"
},
{
  id: 10,
  name: "Raj Pandey",
  mobile: "+918553901920"
}]
  localStorage.setItem('contactList', JSON.stringify(contactList))
  return (
      <Router>
        <Fragment>
          <Navbar />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/contacts' component={Contacts} />
            <Route exact path='/contacts/:id' component={ContactDetails} />
            <Route exact path='/message/:id' component={Message} />
            <Route exact path='/history' component={MessageHistory} />
          </Switch>
        </Fragment>
      </Router>
  );
};

export default App;
