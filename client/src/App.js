import React, { Component } from 'react';
import axios from 'axios'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// styles
import './assets/css/App.css';

// templates
import Menu from './components/menu'
import Footer from './templates/footer'

// components
import Home from './components/home'
import Login from './components/login'
import Register from './components/register'
import NotFound from './components/notfound'


class App extends Component {
  constructor() {
    super()
    this.state = {
      loggedIn: false,
      username: null
    }

    this.getUser = this.getUser.bind(this)
    this.componentDidMount = this.componentDidMount.bind(this)
    this.updateUser = this.updateUser.bind(this)
  }

  componentDidMount() {
    this.getUser()
  }

  updateUser (userObject) {
    this.setState(userObject)
  }

  getUser() {
    axios.get('/user/').then(response => {
      console.log('Get user response: ')
      console.log(response.data)
      if (response.data.user) {
        console.log('Get User: There is a user saved in the server session: ')

        this.setState({
          loggedIn: true,
          username: response.data.user.username
        })
      } else {
        console.log('Get user: no user');
        this.setState({
          loggedIn: false,
          username: null
        })
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-wrapper">
          <Router>
            <div className="Menu-wrapper">
              <Menu updateUser={this.updateUser} loggedIn={this.state.loggedIn} />
            </div>          
            <div className="LoggedInSection">
              {this.state.loggedIn &&
                <p>Welcome, {this.state.username}!</p>
              }
            </div>

            <Switch>
              <Route exact path="/" component={Home} />
              <Route  path="/login" 
                      render={ () => 
                          <Login updateUser={this.updateUser} />
                        } 
              />
              <Route path="/register" component={Register} />
              <Route component={NotFound} />
             </Switch>
          </Router>
        </header>

        <Footer title={Footer}/>

      </div>
    );
  }
}

export default App;
