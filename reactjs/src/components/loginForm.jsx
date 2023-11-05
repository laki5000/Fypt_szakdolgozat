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
          <div className='divcol tac bgisr mrgnlr1 pddngbt1 divlgn'>
            <div className='mrgna wdth3 divfrmdta'>
              <div>
                <img className='wdth3' src="dumbell_icon.jpg" alt="logo"></img>
              </div> 
              <div className='mrgna fntsz2 wdth2 divfrmdta_titles'>
                E-MAIL
              </div>
              <div className='mrgna fntsz2 wdth2 hvr2'>
                <input name='email' className='pddng1 wdth1 fntsz1 brdrrds' value={this.state.email} onChange={this.changeEmailHandler}/>
              </div>
              <div className='mrgna fntsz2 wdth2 divfrmdta_titles'>
                JELSZÓ
              </div>
              <div className='mrgna fntsz2 wdth2 hvr2'>
                <input type='password' className='pddng1 wdth1 fntsz1 brdrrds' name='jelszo' value={this.state.jelszo} onChange={this.changeJelszoHandler}/>
              </div>
              <div className='divcol pddngt1 mrgna wdth2 divnotregisteredyet'>
                <div>
                  Még nem regisztráltál?
                </div>
                <div>
                  <Link to='/registerPage'>Kattints ide!</Link>
                </div>
              </div>
              <div className='mrgna wdth2 hvr2 divsubmit'>
                <input type='submit' value='Bejelentkezés' className='bgclr1 crsrp fntsz1 brdrrds sbmtbtn' onClick={this.loginUser}/>
              </div>
            </div>  
          </div>
        </form>
      )
    }
}

export default withRouter(LoginForm);