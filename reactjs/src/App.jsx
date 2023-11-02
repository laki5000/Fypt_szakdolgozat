import './App.css';
import React, { Component } from 'react';
import NavBar from './components/navBar';
import HomePage from './pages/homePage';
import TrainersPage from './pages/trainersPage';
import CalCalcPage from './pages/calCalcPage';
import JoinPage from './pages/joinPage';
import AboutPage from './pages/aboutPage';
import LoginPage from './pages/loginPage';
import RegisterPage from './pages/registerPage';
import ProfilePage from './pages/profilePage';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import UserService from './services/userService';
import AdminService from './services/adminService';
import AdminPage from './pages/adminPage';
import TrainerApplications from './components/trainerApplications';

export default class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      isAuthenticated: false,
      keresztNev: '',
      id: '',
      admin: false
    }
  }

  handleLogin = (id, keresztnev) => {
    this.setState({ isAuthenticated: true });
    this.setState({ id: id});
    this.setState({ keresztNev: keresztnev});
    this.checkIsAdmin(id);
  }

  handleLogout = () => {
    this.setState({ isAuthenticated: false });
    this.setState({ id: ''});
    this.setState({ keresztNev: ''});
    this.setState({ admin: false});
  }

  checkIsAdmin = (id) => {
    AdminService.getAdmindata(id).then(res => {
      if(res.data) {
        this.setState({ admin: true });
      }
    })
  }

  componentDidMount() {
    const token = localStorage.getItem('token') 
    if(token){
      if(UserService.authUser(token)){
        this.setState({ isAuthenticated: true });
        this.setState({ id: localStorage.getItem('id')});
        this.setState({ keresztNev: localStorage.getItem('keresztnev')});
        this.checkIsAdmin(localStorage.getItem('id'));
      }
    }
  }

  render(){
    return (
      <Router>
        <div>
          <NavBar isAuthenticated={this.state.isAuthenticated} keresztNev={this.state.keresztNev} admin={this.state.admin} onLogout={this.handleLogout}/>
        </div>
        <div>
          <Switch>
            <Route exact path='/'>
              <Redirect to='/homePage'/>
            </Route>
            <Route path='/homePage'>
              <HomePage />
            </Route>
            <Route path='/trainersPage'>
              <TrainersPage />
            </Route>
            <Route path='/calCalcPage'>
              <CalCalcPage />
            </Route>
            <Route path='/joinPage'>
              <JoinPage />
            </Route>
            <Route path='/aboutPage'>
              <AboutPage />
            </Route>
            <Route path='/loginPage'>
              <LoginPage onLogin={this.handleLogin} />
            </Route>
            <Route path='/registerPage'>
              <RegisterPage />
            </Route>
            <Route path='/profilePage'>
              <ProfilePage id={this.state.id}/>
            </Route>
            <Route path='/adminPage'>
              <AdminPage/>
            </Route>
            <Route path='/trainerApplications'>
              <TrainerApplications/>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}
