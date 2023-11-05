import { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import UserService from '../services/userService';

class RegisterForm extends Component{
    constructor(props){
      super(props)

      this.state = {
        vezetek_nev: '',
        kereszt_nev: '',
        nem: 'Férfi',
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
      if(event.target.value === 'ferfi')
      {
        this.setState({nem: 'Férfi'});
      }
      else if(event.target.value === 'no')
      {
        this.setState({nem: 'Nő'});
      }
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
      if(this.state.vezetek_nev === '' || this.state.kereszt_nev === '' || this.state.email === '' || this.state.email_megegyszer === '' || this.state.jelszo === '' || this.state.jelszo_megegyszer === '')
      {
        alert('A csillaggal jelölt mezők kitöltése kötelező!');
      }
      else if(this.state.email != this.state.email_megegyszer)
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
          <div className='divcol pddnglr1 pddngt1 tac bgisr mrgnlr1 pddngbt1 divjnregstr'>
            <div className='divrow'>
              <div className='mrgna wdth3 divfrmdta'>
                <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                  Vezetéknév*
                </div>
                <div className='mrgna fntsz1 wdth2 hvr2'>
                  <input name='vezetek_nev' className='pddng1 wdth1 fntsz1 brdrrds' value={this.state.vezetek_nev} onChange={this.changeVezetekNevHandler}/>
                </div>
                <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                  Keresztnév*
                </div>
                <div className='mrgna fntsz1 wdth2 hvr2'>
                  <input name='kereszt_nev' className='pddng1 wdth1 fntsz1 brdrrds' value={this.state.kereszt_nev} onChange={this.changeKeresztNevHandler}/>
                </div>
                <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                  Nem
                </div>
                <div className='mrgna fntsz1 wdth2 hvr2'>
                  <select className='pddng1 wdth1 fntsz1 brdrrds' name="nem" onChange={this.changeNemHandler}>
                    <option value="ferfi">Férfi</option>
                    <option value="no">Nő</option>
                  </select>
                </div>
                <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                  Születési hely
                </div>
                <div className='mrgna fntsz1 wdth2 hvr2'>
                  <input name='szul_hely' className='pddng1 wdth1 fntsz1 brdrrds' value={this.state.szul_hely} onChange={this.changeSzulHelyHandler}/>
                </div>
                <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                  Születési idő
                </div>
                <div className='mrgna fntsz1 wdth2 hvr2'>
                  <input type='date' name='szul_ido' className='pddng1 wdth1 fntsz1 brdrrds' value={this.state.szul_ido} onChange={this.changeSzulidoHandler}/>
                </div>
                <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                  Irányítószám
                </div>
                <div className='mrgna fntsz1 wdth2 hvr2'>
                  <input type='number' name='iranyitoszam' className='pddng1 wdth1 fntsz1 brdrrds' value={this.state.iranyitoszam} onChange={this.changeIranyitoszamHandler}/>
                </div>
              </div>
              <div className='mrgna wdth3 divfrmdta'>
                <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                  Város
                </div>
                <div className='mrgna fntsz1 wdth2 hvr2'>
                  <input name='lakhely_varos' className='pddng1 wdth1 fntsz1 brdrrds' value={this.state.lakhely_varos} onChange={this.changeLakhelyVarosHandler}/>
                </div>
                <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                  E-mail*
                </div>
                <div className='mrgna fntsz1 wdth2 hvr2'>
                  <input name='email' className='pddng1 wdth1 fntsz1 brdrrds' value={this.state.email} onChange={this.changeEmailHandler}/>
                </div>
                <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                  E-mail mégegyszer*
                </div>
                <div className='mrgna fntsz1 wdth2 hvr2'>
                  <input name='email2' className='pddng1 wdth1 fntsz1 brdrrds' value={this.state.email_megegyszer} onChange={this.changeEmailMegegyszerHandler}/>
                </div>
                <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                  Jelszó*
                </div>
                <div className='mrgna fntsz1 wdth2 hvr2'>
                  <input type='password' name='jelszo' className='pddng1 wdth1 fntsz1 brdrrds' value={this.state.jelszo} onChange={this.changeJelszoHandler}/>
                </div>
                <div className='mrgna fntsz1 wdth2 divfrmdta_titles'>
                  Jelszó mégegyszer*
                </div>
                <div className='mrgna fntsz1 wdth2 hvr2'>
                <input type='password' name='jelszo2' className='pddng1 wdth1 fntsz1 brdrrds' value={this.state.jelszo_megegyszer} onChange={this.changeJelszoMegegyszerHandler}/>
                </div>
              </div>
            </div>
            <div className='divrow divregbtnprnt'>
              <div className='divcol pddngt1 mrgna wdth2 divnotregisteredyet'>
                <div>
                  Már van fiókod?
                </div>
                <div>
                  <Link to='/loginPage'>Jelentkezz be!</Link>
                </div>
              </div>
              <div className='mrgna wdth2 hvr2 divsubmit'>
                <input type='submit' value='Regisztráció' className='bgclr1 crsrp fntsz1 brdrrds sbmtbtn' onClick={this.saveUser}/>
              </div>
            </div>
          </div>
        </form>
      )
    }
} 

export default withRouter(RegisterForm);