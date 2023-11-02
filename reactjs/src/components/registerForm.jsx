import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserService from '../services/userService';

class RegisterForm extends Component{
    constructor(props){
      super(props)

      this.state = {
        vezetek_nev: '',
        kereszt_nev: '',
        nem: '',
        szul_hely: '',
        szul_ido: '',
        iranyitoszam: '',
        lakhely_varos: '',
        email: '',
        email_megegyszer: '',
        jelszo: '',
        jelszo_megegyszer: ''
      }

      this.changeVezetekNevHandler = this.changeVezetekNevHandler.bind(this);
      this.changeKeresztNevHandler = this.changeKeresztNevHandler.bind(this);
      this.changeNemHandler = this.changeNemHandler.bind(this);
      this.changeSzulHelyHandler = this.changeSzulHelyHandler.bind(this);
      this.changeSzulidoHandler = this.changeSzulidoHandler.bind(this);
      this.changeIranyitoszamHandler = this.changeIranyitoszamHandler.bind(this);
      this.changeLakhelyVarosHandler = this.changeLakhelyVarosHandler.bind(this);
      this.changeEmailHandler = this.changeEmailHandler.bind(this);
      this.changeEmailMegegyszerHandler = this.changeEmailMegegyszerHandler.bind(this);
      this.changeJelszoHandler = this.changeJelszoHandler.bind(this);
      this.changeJelszoMegegyszerHandler = this.changeJelszoMegegyszerHandler.bind(this);
      this.saveUser = this.saveUser.bind(this);
    }

    changeVezetekNevHandler= (event) => {
      this.setState({vezetek_nev: event.target.value});
    }

    changeKeresztNevHandler= (event) => {
      this.setState({kereszt_nev: event.target.value});
    }

    changeNemHandler= (event) => {
      this.setState({nem: event.target.value});
    }

    changeSzulHelyHandler= (event) => {
      this.setState({szul_hely: event.target.value});
    }

    changeSzulidoHandler= (event) => {
      this.setState({szul_ido: event.target.value});
    }

    changeIranyitoszamHandler= (event) => {
      this.setState({iranyitoszam: event.target.value});
    }

    changeLakhelyVarosHandler= (event) => {
      this.setState({lakhely_varos: event.target.value});
    }

    changeEmailHandler= (event) => {
      this.setState({email: event.target.value});
    }

    changeEmailMegegyszerHandler= (event) => {
      this.setState({email_megegyszer: event.target.value});
    }

    changeJelszoHandler= (event) => {
      this.setState({jelszo: event.target.value});
    }

    changeJelszoMegegyszerHandler= (event) => {
      this.setState({jelszo_megegyszer: event.target.value});
    }

    saveUser= (e) => {
      e.preventDefault();
      if(this.state.email != this.state.email_megegyszer)
      {
        alert('A két e-mail nem egyezik!');
      }
      else if(this.state.jelszo != this.state.jelszo_megegyszer)
      {
        alert('A két jelszó nem egyezik!');
      }
      else if(!this.state.email.includes('@') ||  !this.state.email.includes('.'))
      {
        alert('Hibás email formátum')
      }
      else if(this.state.jelszo.length < 6)
      {
        alert('A jelszónak minimum 6 karakterből kell állnia!');
      }
      else
      {
        UserService.getUserdataByEmail(this.state.email).then((res => {
          if(res.data)
          {
            alert('Ezzel az e-mail címmel már beregisztráltak!')
          }
          else
          {
            let user = {vezetekNev: this.state.vezetek_nev, keresztNev: this.state.kereszt_nev, nem: this.state.nem, szulHely: this.state.szul_hely, szulIdo: this.state.szul_ido, iranyitoSzam: this.state.iranyitoszam, lakhelyVaros: this.state.lakhely_varos, eMail: this.state.email, jelszo: this.state.jelszo}
            UserService.saveUser(user);
            alert('Sikeres regisztrációxd');
            this.props.history.push('/loginPage');
          }
        }))
      }
    }

    render(){
      return (
        <form>
          <div className='div_join_register'>
            <div className='div_row'>
              <div className='div_form_data'>
                <div className='div_form_data_titles2'>
                  VEZETÉKNÉV*
                </div>
                <div className='div_form_data_inputs2'>
                  <input name='vezetek_nev' className='inputs01' value={this.state.vezetek_nev} onChange={this.changeVezetekNevHandler}/>
                </div>
                <div className='div_form_data_titles2'>
                  KERESZTNÉV*
                </div>
                <div className='div_form_data_inputs2'>
                  <input name='kereszt_nev' className='inputs01' value={this.state.kereszt_nev} onChange={this.changeKeresztNevHandler}/>
                </div>
                <div className='div_form_data_titles2'>
                  NEM*
                </div>
                <div className='div_form_data_inputs2'>
                  <input name='nem' className='inputs01' value={this.state.nem} onChange={this.changeNemHandler}/>
                </div>
                <div className='div_form_data_titles2'>
                  SZÜLETÉSI HELY
                </div>
                <div className='div_form_data_inputs2'>
                  <input name='szul_hely' className='inputs01' value={this.state.szul_hely} onChange={this.changeSzulHelyHandler}/>
                </div>
                <div className='div_form_data_titles2'>
                  SZÜLETÉSI IDŐ
                </div>
                <div className='div_form_data_inputs2'>
                  <input name='szul_ido' className='inputs01' value={this.state.szul_ido} onChange={this.changeSzulidoHandler}/>
                </div>
                <div className='div_form_data_titles2'>
                  IRÁNYÍTÓSZÁM
                </div>
                <div className='div_form_data_inputs2'>
                  <input name='iranyitoszam' className='inputs01' value={this.state.iranyitoszam} onChange={this.changeIranyitoszamHandler}/>
                </div>
              </div>
              <div className='div_form_data'>
                <div className='div_form_data_titles2'>
                  VÁROS
                </div>
                <div className='div_form_data_inputs2'>
                  <input name='lakhely_varos' className='inputs01' value={this.state.lakhely_varos} onChange={this.changeLakhelyVarosHandler}/>
                </div>
                <div className='div_form_data_titles2'>
                  E-MAIL*
                </div>
                <div className='div_form_data_inputs2'>
                  <input name='email' className='inputs01' value={this.state.email} onChange={this.changeEmailHandler}/>
                </div>
                <div className='div_form_data_titles2'>
                  E-MAIL MÉGEGYSZER*
                </div>
                <div className='div_form_data_inputs2'>
                  <input name='email2' className='inputs01' value={this.state.email_megegyszer} onChange={this.changeEmailMegegyszerHandler}/>
                </div>
                <div className='div_form_data_titles2'>
                  JELSZÓ*
                </div>
                <div className='div_form_data_inputs2'>
                  <input type='password' name='jelszo' className='inputs01' value={this.state.jelszo} onChange={this.changeJelszoHandler}/>
                </div>
                <div className='div_form_data_titles2'>
                  JELSZÓ MÉGEGYSZER*
                </div>
                <div className='div_form_data_inputs2'>
                <input type='password' name='jelszo2' className='inputs01' value={this.state.jelszo_megegyszer} onChange={this.changeJelszoMegegyszerHandler}/>
                </div>
              </div>
            </div>
            <div className='div_row div_reg_button_parent'>
              <div className='div_not_registered_yet'>
                <div>
                  Már van fiókod?
                </div>
                <div>
                  <Link to='/loginPage'>Jelentkezz be!</Link>
                </div>
              </div>
              <div className='div_submit'>
                <input type='submit' value='Regisztráció' className='submit_button' onClick={this.saveUser}/>
              </div>
            </div>
          </div>
        </form>
      )
    }
} 

export default withRouter(RegisterForm);