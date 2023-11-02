import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserService from '../services/userService';

class LoginForm extends Component{
  constructor(props){
    super(props)

    this.state = {
      email: '',
      jelszo: ''
    }

    this.loginUser = this.loginUser.bind(this);
    this.changeEmailHandler = this.changeEmailHandler.bind(this);
    this.changeJelszoHandler = this.changeJelszoHandler.bind(this);
  }

  loginUser= (e) => {
    e.preventDefault();
    let user = {
      eMail: this.state.email,
      jelszo: this.state.jelszo
    }
    UserService.loginUser(user).then((res) => {
      if(res.data[0])
      {
        localStorage.setItem('token', res.data[0]);
        localStorage.setItem('id', res.data[1]);
        localStorage.setItem('keresztnev', res.data[2]);
        this.props.onLogin(res.data[1], res.data[2]);
        this.props.history.push('/homePage');
        alert('Sikeres bejelentkezésxd');
      }
      else
      {
        alert('Hibás felhasználónév vagy jelszó!')
          this.setState({email: ''});
          this.setState({jelszo: ''});
      }
    })
  }
  
  changeEmailHandler= (event) => {
    this.setState({email: event.target.value});
  }

  changeJelszoHandler= (event) => {
    this.setState({jelszo: event.target.value});
  }

  componentDidMount(){
    const token = localStorage.getItem('token')
    if(token){
      UserService.authUser(token).then((res => {
        if(res.data){
          this.props.history.push('/homePage');
        }
      }))
    }
  }

    render(){
      return (
        <form>
          <div className='div_login'>
            <div className='div_form_data'>
              <div>
                <img id='logo' src="dumbell_icon.jpg" alt="logo"></img>
              </div> 
              <div className='div_form_data_titles'>
                E-MAIL
              </div>
              <div className='div_form_data_inputs'>
                <input name='email' className='inputs01' value={this.state.email} onChange={this.changeEmailHandler}/>
              </div>
              <div className='div_form_data_titles'>
                JELSZÓ
              </div>
              <div className='div_form_data_inputs'>
                <input type='password' className='inputs01' name='jelszo' value={this.state.jelszo} onChange={this.changeJelszoHandler}/>
              </div>
              <div className='div_not_registered_yet'>
                <div>
                  Még nem regisztráltál?
                </div>
                <div>
                  <Link to='/registerPage'>Kattints ide!</Link>
                </div>
              </div>
              <div className='div_submit'>
                <input type='submit' value='Bejelentkezés' className='submit_button' onClick={this.loginUser}/>
              </div>
            </div>  
          </div>
        </form>
      )
    }
}

export default withRouter(LoginForm);